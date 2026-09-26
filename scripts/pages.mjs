// Full-page review captures: each path is opened at desktop 1440 and mobile
// 390 @2x, in French and Arabic, scrolled through once so the entrance
// animations and lazy images run, then photographed whole (or one element).
// Output: .impeccable/review/pages/<name>-<lang>-<viewport>.png
//
//   node scripts/pages.mjs --paths=services,contact [--langs=fr,ar] [--only=desktop]
//   node scripts/pages.mjs --paths=home --element=#logos --name=logos
//
// Paths are written without the leading slash (Git Bash rewrites "/..."
// arguments into Windows paths); "home" is the home page.
//
// The base URL must serve this project (dev server or `npm start`).

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const args = process.argv.slice(2);
const opt = (name, fallback) => args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1] ?? fallback;
const BASE = opt("base", "http://localhost:3005");
const PATHS = opt("paths", "home").split(",");
const LANGS = opt("langs", "fr,ar").split(",");
const ONLY = opt("only", "");
const ELEMENT = opt("element", "");
const NAME = opt("name", "");
const OUT = path.resolve(import.meta.dirname, "..", ".impeccable", "review", "pages");

const VIEWPORTS = [
  { name: "desktop", viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  { name: "mobile", viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ channel: "chrome" });
for (const { name: vp, ...options } of VIEWPORTS) {
  if (ONLY && vp !== ONLY) continue;
  for (const lang of LANGS) {
    const context = await browser.newContext(options);
    const page = await context.newPage();
    for (const p of PATHS) {
      const url = `${BASE}/${lang}${p === "home" ? "" : `/${p}`}`;
      const res = await page.goto(url, { waitUntil: "networkidle" });
      if (!res?.ok()) throw new Error(`${url} answered ${res?.status()}`);
      // Every section painted: off-screen ones are otherwise skipped (content-visibility: auto).
      await page.addStyleTag({ content: "nextjs-portal{display:none!important} main>section,body>footer{content-visibility:visible!important}" });
      await page.evaluate(async () => {
        document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = "eager"));
        await document.fonts.ready;
        for (let y = 0; y < document.documentElement.scrollHeight; y += 500) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        await Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => (i.onload = i.onerror = r)))));
      });
      await page.waitForTimeout(1500);
      const base = NAME || p.replace(/^\//, "").replace(/\//g, "-") || "accueil";
      const file = path.join(OUT, `${base}-${lang}-${vp}.png`);
      if (ELEMENT) {
        // Fixed chrome would be stitched into the middle of an element capture.
        await page.addStyleTag({ content: "[data-bar],[data-keys],[data-float]{visibility:hidden!important}" });
        await page.locator(ELEMENT).first().scrollIntoViewIfNeeded();
        await page.waitForTimeout(800);
        await page.locator(ELEMENT).first().screenshot({ path: file });
      } else {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(600);
        await page.screenshot({ path: file, fullPage: true });
      }
      console.log("captured", path.basename(file));
    }
    await context.close();
  }
}
await browser.close();
