// Review captures: starts the production server (run `npm run build` first),
// photographs every language at desktop 1440 and phone 390 with the
// system Chrome, then stops the server.
//
//   node scripts/shots.mjs [outDir] [--pages=home,motifs] [--langs=fr,ar,en] [--motion]
//
// By default pages are captured with reduced motion: the settled, static
// layout, first viewport and full page. With --motion, motion is on and each
// page is captured mid-load ("-load"), settled ("-scroll-0"), and at points
// along the pinned hero scroll ("-scroll-25" … "-scroll-100").

import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const args = process.argv.slice(2);
const opt = (name, fallback) => args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1] ?? fallback;
const outDir = args.find((a) => !a.startsWith("--")) ?? ".impeccable/review";
// Page names, not paths: Git Bash rewrites arguments that start with "/".
const pages = opt("pages", "home")
  .split(",")
  .map((p) => (p === "home" ? "/" : "/" + p.replace(/^\//, "")));
const langs = opt("langs", "fr,ar,en").split(",");
const motion = args.includes("--motion");
const PORT = 3107;
const base = `http://localhost:${PORT}`;

const VIEWPORTS = [
  { name: "desktop", viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  { name: "mobile", viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
];

const server = spawn(process.execPath, [path.join("node_modules", "next", "dist", "bin", "next"), "start", "-p", String(PORT)], {
  stdio: ["ignore", "pipe", "pipe"],
});
server.stderr.on("data", (d) => process.stderr.write(d));

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`${base}/fr`);
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Server did not start on port " + PORT);
}

async function staticShots(page, file) {
  await page.screenshot({ path: file("") });
  // Scroll through once so lazy images load before the full-page capture.
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight / 2) {
      scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    scrollTo(0, 0);
    // Images in sideways scrollers (the phone arcade) stay lazy: don't wait on them forever.
    const loaded = Promise.all([...document.images].map((img) => (img.complete ? null : new Promise((r) => (img.onload = img.onerror = r)))));
    await Promise.race([loaded, new Promise((r) => setTimeout(r, 4000))]);
  });
  await page.waitForTimeout(200);
  await page.screenshot({ path: file("-full"), fullPage: true });
}

async function motionShots(page, file) {
  await page.waitForTimeout(3200); // the load sequence has settled
  await page.screenshot({ path: file("-scroll-0") });
  // The hero pin lasts 1.15 viewport heights (HeroStage).
  const distance = await page.evaluate(() => Math.round(innerHeight * 1.15));
  for (const pct of [25, 50, 75, 100]) {
    await page.evaluate((y) => scrollTo(0, y), Math.round((distance * pct) / 100));
    await page.waitForTimeout(1300); // scrub smoothing
    await page.screenshot({ path: file(`-scroll-${pct}`) });
  }
}

try {
  await waitForServer();
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome" });
  for (const vp of VIEWPORTS) {
    const { name, ...contextOptions } = vp;
    const context = await browser.newContext({ ...contextOptions, reducedMotion: motion ? "no-preference" : "reduce" });
    const page = await context.newPage();
    for (const lang of langs) {
      for (const p of pages) {
        const url = `${base}/${lang}${p === "/" ? "" : p}`;
        const slug = p === "/" ? "home" : p.replace(/\//g, "");
        const file = (suffix) => path.join(outDir, `${slug}-${lang}-${name}${suffix}.png`);
        const res = await page.goto(url, { waitUntil: motion ? "load" : "networkidle" });
        if (!res?.ok()) throw new Error(`${url} answered ${res?.status()}`);
        if (motion) {
          await page.waitForTimeout(650);
          await page.screenshot({ path: file("-load") });
          await motionShots(page, file);
        } else {
          await page.evaluate(() => document.fonts.ready);
          await page.waitForTimeout(300);
          await staticShots(page, file);
        }
        console.log("captured", url, name);
      }
    }
    await context.close();
  }
  await browser.close();
} finally {
  server.kill();
}
