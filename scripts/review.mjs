// Section-by-section review captures of the home (the owner's step 3 loop):
// starts the production server (run `npm run build` first) and, with motion
// on and settled, photographs each named section on desktop 1440 x 900 and
// phone 390 x 844 @2x, in fr and ar, into .impeccable/review/home/.
//
//   node scripts/review.mjs [--sections=hero,services,logiciels] [--langs=fr,ar]
//
// A section is captured with its top just under the bar (and the service
// keys when they show). `logiciels` is also captured once per program tab.

import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const args = process.argv.slice(2);
const opt = (name, fallback) => args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1] ?? fallback;
const SECTIONS = opt("sections", "hero,services,logiciels,shopify,publicite,logos,pourquoi,processus,contact,footer").split(",");
const LANGS = opt("langs", "fr,ar").split(",");
const PORT = 3110;
const BASE = `http://localhost:${PORT}`;
const OUT = path.resolve(import.meta.dirname, "..", ".impeccable", "review", "home");

const server = spawn(process.execPath, [path.join("node_modules", "next", "dist", "bin", "next"), "start", "-p", String(PORT)], {
  stdio: ["ignore", "pipe", "pipe"],
});
server.stderr.on("data", (d) => process.stderr.write(d));

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(`${BASE}/fr`)).ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("server did not start");
}

async function prepare(page) {
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = "eager"));
    await document.fonts.ready;
    await Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => (i.onload = i.onerror = r)))));
  });
}

async function goTo(page, id) {
  await page.evaluate((id) => {
    if (id === "hero") return window.scrollTo(0, 0);
    if (id === "footer") return window.scrollTo(0, document.documentElement.scrollHeight);
    const el = document.getElementById(id);
    const bar = document.querySelector("[data-bar]")?.getBoundingClientRect().height ?? 0;
    const keys = document.querySelector("[data-keys]")?.getBoundingClientRect().height ?? 0;
    const services = ["logiciels", "caisses", "sites", "shopify", "publicite", "logos"];
    const offset = bar + (services.includes(id) ? keys : 0);
    window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - offset);
  }, id);
  await page.waitForTimeout(1600);
}

try {
  await waitForServer();
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome" });
  const viewports = [
    { name: "desktop", viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
    { name: "mobile", viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  ];
  for (const vp of viewports) {
    const { name, ...options } = vp;
    for (const lang of LANGS) {
      const context = await browser.newContext(options);
      const page = await context.newPage();
      await page.goto(`${BASE}/${lang}`, { waitUntil: "networkidle" });
      await prepare(page);
      await page.waitForTimeout(3400);
      for (const id of SECTIONS) {
        await goTo(page, id);
        if (id === "logiciels") {
          for (const tab of ["superpos", "gstock", "budget"]) {
            await page.click(`#tab-${tab}`);
            await page.waitForTimeout(900);
            await goTo(page, "logiciels");
            await page.screenshot({ path: path.join(OUT, `${id}-${tab}-${lang}-${name}.png`) });
          }
          await page.click("#tab-superpos");
        } else {
          await page.screenshot({ path: path.join(OUT, `${id}-${lang}-${name}.png`) });
        }
      }
      await context.close();
      console.log("captured", lang, name);
    }
  }
  await browser.close();
} finally {
  server.kill();
}
