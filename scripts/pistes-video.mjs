// Short motion recordings of the three directions (desktop, French): the
// page loads, then a visitor scrolls down to the service section with the
// mouse wheel, so Lenis and the scroll scenes run as they would for a person.
// Frames come from Chrome's screencast and are joined into an animated WebP
// with sharp (no ffmpeg needed). Needs a production build; writes
// .impeccable/review/pistes/<piste>-motion.webp.
//
//   node scripts/pistes-video.mjs [--only=nuit]

import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { chromium } from "playwright";

const ONLY = process.argv.find((a) => a.startsWith("--only="))?.split("=")[1];
const PORT = 3109;
const BASE = `http://localhost:${PORT}`;
const OUT = path.resolve(import.meta.dirname, "..", ".impeccable", "review", "pistes");
const W = 1280;
const H = 800;
const FRAME_W = 960;

const server = spawn(process.execPath, [path.join("node_modules", "next", "dist", "bin", "next"), "start", "-p", String(PORT)], {
  stdio: ["ignore", "pipe", "pipe"],
});

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(`${BASE}/fr`)).ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("server did not start");
}

try {
  await waitForServer();
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome" });
  for (const piste of ["affiche", "nuit", "zellige"].filter((p) => !ONLY || p === ONLY)) {
    const context = await browser.newContext({ viewport: { width: W, height: H } });
    // Warm the cache so the recording shows motion, not image loading.
    const warm = await context.newPage();
    await warm.goto(`${BASE}/fr/pistes/${piste}`, { waitUntil: "networkidle" });
    await warm.close();

    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);
    const frames = [];
    cdp.on("Page.screencastFrame", async ({ data, metadata, sessionId }) => {
      frames.push({ data: Buffer.from(data, "base64"), t: metadata.timestamp });
      await cdp.send("Page.screencastFrameAck", { sessionId }).catch(() => {});
    });
    await cdp.send("Page.startScreencast", { format: "jpeg", quality: 82, maxWidth: FRAME_W, maxHeight: Math.round((FRAME_W * H) / W) });

    await page.goto(`${BASE}/fr/pistes/${piste}`, { waitUntil: "load" });
    await page.mouse.move(W / 2, H / 2);
    await page.waitForTimeout(3600);
    const steps = piste === "nuit" ? 56 : 30;
    for (let i = 0; i < steps; i++) {
      await page.mouse.wheel(0, 90);
      await page.waitForTimeout(70);
    }
    await page.waitForTimeout(2000);
    await cdp.send("Page.stopScreencast");
    await context.close();

    // Resample to a steady 15 fps: for each tick, the latest frame at that time.
    const start = frames[0].t;
    const end = frames[frames.length - 1].t + 0.5;
    const ticks = [];
    for (let t = start, i = 0; t <= end; t += 1 / 15) {
      while (i + 1 < frames.length && frames[i + 1].t <= t) i++;
      ticks.push(frames[i].data);
    }
    const size = { width: FRAME_W, height: Math.round((FRAME_W * H) / W) };
    const raw = await Promise.all(ticks.map((b) => sharp(b).resize(size).png().toBuffer()));
    await sharp(raw, { join: { animated: true } })
      .webp({ quality: 62, effort: 4, loop: 0, delay: raw.map(() => Math.round(1000 / 15)) })
      .toFile(path.join(OUT, `${piste}-motion.webp`));
    console.log("motion", piste, frames.length, "frames ->", ticks.length);
  }
  await browser.close();
} finally {
  server.kill();
}
