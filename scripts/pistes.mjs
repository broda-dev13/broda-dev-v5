// Review captures of the three direction prototypes (step 2 of the brief):
// starts the production server (run `npm run build` first), then for each
// direction and language takes, with motion on and settled:
//   desktop 1440 x 900: the hero, and the service section in view
//   phone 390 x 844 @2x: the first screen, and the full page
// into .impeccable/review/pistes/.
//
//   node scripts/pistes.mjs [--only=nuit] [--langs=fr,ar]

import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const args = process.argv.slice(2);
const opt = (name, fallback) => args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1] ?? fallback;
const ONLY = opt("only", "");
const LANGS = opt("langs", "fr,ar").split(",");
const PORT = 3108;
const BASE = `http://localhost:${PORT}`;
const OUT = path.resolve(import.meta.dirname, "..", ".impeccable", "review", "pistes");
const PISTES = ["affiche", "nuit", "zellige"].filter((p) => !ONLY || p === ONLY);

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

const settle = (page, ms) => page.waitForTimeout(ms);

async function loadAll(page) {
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = "eager"));
    await document.fonts.ready;
    await Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => (i.onload = i.onerror = r)))));
  });
}

// Where the service section sits "in view" for each direction.
const SERVICE_SCROLL = {
  affiche: () => document.querySelector("#shopify").getBoundingClientRect().top + scrollY - 160,
  nuit: () => {
    const s = document.querySelector("[data-service]");
    return s.offsetTop + (s.offsetHeight - innerHeight) * 0.5;
  },
  zellige: () => document.querySelector("#shopify").getBoundingClientRect().top + scrollY - 76,
};

try {
  await waitForServer();
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome" });

  for (const piste of PISTES) {
    for (const lang of LANGS) {
      // Desktop
      const desk = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
      const d = await desk.newPage();
      await d.goto(`${BASE}/${lang}/pistes/${piste}`, { waitUntil: "networkidle" });
      await loadAll(d);
      await settle(d, 3600);
      await d.screenshot({ path: path.join(OUT, `${piste}-${lang}-desktop-hero.png`) });
      const y = await d.evaluate(`(${SERVICE_SCROLL[piste].toString()})()`);
      await d.evaluate((top) => window.scrollTo(0, top), y);
      await settle(d, 2600);
      await d.screenshot({ path: path.join(OUT, `${piste}-${lang}-desktop-service.png`) });
      await desk.close();

      // Phone
      const phone = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
      const m = await phone.newPage();
      await m.goto(`${BASE}/${lang}/pistes/${piste}`, { waitUntil: "networkidle" });
      await loadAll(m);
      await settle(m, 3400);
      await m.screenshot({ path: path.join(OUT, `${piste}-${lang}-mobile-hero.png`) });
      // Walk down once so scroll-driven states settle, then back to the top for the full page.
      await m.evaluate(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight / 2) {
          scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        scrollTo(0, 0);
      });
      await settle(m, 1400);
      await m.screenshot({ path: path.join(OUT, `${piste}-${lang}-mobile-full.png`), fullPage: true });
      await phone.close();
      console.log("captured", piste, lang);
    }
  }
  await browser.close();
} finally {
  server.kill();
}
