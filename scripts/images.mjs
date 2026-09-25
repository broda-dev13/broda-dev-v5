// Web images from the source rasters: every PNG or JPG under assets/<set>/<group>/
// becomes public/images/<group>/<name>-<width>.{avif,webp} at each width below
// (never upscaled). Sources stay out of public/; CREDITS.md records where each
// one came from.
//
//   node scripts/images.mjs            converts what is missing or older than its source
//   node scripts/images.mjs --force    converts everything again

import { readdir, stat, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCES = path.join(ROOT, "assets");
const OUT = path.join(ROOT, "public", "images");
const WIDTHS = [560, 1136, 1600, 2880];
const force = process.argv.includes("--force");
// Inputs of scripts/composite.mjs, never shown as such: the blank counters
// and the screens laid on them.
const SKIP = /^(comptoir|ecran)-/;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) yield full;
  }
}

const newer = async (src, out) => {
  if (force) return true;
  try {
    return (await stat(src)).mtimeMs > (await stat(out)).mtimeMs;
  } catch {
    return true;
  }
};

let count = 0;
for await (const src of walk(SOURCES)) {
  const group = path.basename(path.dirname(src));
  const name = path.basename(src).replace(/\.(png|jpe?g)$/i, "");
  if (SKIP.test(name)) continue;
  const { width } = await sharp(src).metadata();
  await mkdir(path.join(OUT, group), { recursive: true });
  // Always include the source width itself, so the largest file is native.
  const widths = [...new Set([...WIDTHS.filter((w) => w < width), width])];
  for (const w of widths) {
    const base = path.join(OUT, group, `${name}-${w}`);
    if (!(await newer(src, `${base}.webp`))) continue;
    const img = sharp(src).resize({ width: w, withoutEnlargement: true });
    await img.clone().avif({ quality: 58, effort: 5 }).toFile(`${base}.avif`);
    await img.clone().webp({ quality: 82, effort: 5 }).toFile(`${base}.webp`);
    count++;
  }
}
console.log(`images: ${count} size(s) written`);
