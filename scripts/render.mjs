// Interface renders for the device frames: each coded mockup is opened in
// Chrome at a fixed viewport and pixel ratio and saved to assets/renders/.
// Then `node scripts/images.mjs` turns them into AVIF/WebP in public/images/renders/.
//
//   node scripts/render.mjs [--base=http://localhost:3005] [--only=zniqa]
//
// The base URL must serve this project (dev server or `npm start`).

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const args = process.argv.slice(2);
const opt = (name, fallback) => args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1] ?? fallback;
const BASE = opt("base", "http://localhost:3005");
const ONLY = opt("only", "");
const OUT = path.resolve(import.meta.dirname, "..", "assets", "renders");

const DESKTOP = { width: 1440, height: 900, dpr: 2 };
const PHONE = { width: 390, height: 844, dpr: 3 };
// The blank displays in the Canva counter photos, at their own aspect ratio
// (scripts/composite.mjs lays these renders on them).
const SCREEN_SUPERETTE = { width: 1472, height: 900, dpr: 1.5 };
const SCREEN_CAFE = { width: 1510, height: 900, dpr: 1.5 };
// The storefront photo, for the HANOUT 13 sign.
const FACADE = { width: 1600, height: 1200, dpr: 1 };

// [file name, path after the locale, viewport, scroll target (selector) and offset]
const SHOTS = [
  ["superpos-caisse", "maquettes/superpos", DESKTOP],
  ["superpos-carnet", "maquettes/carnet", DESKTOP],
  ["superpos-paiement", "maquettes/paiement", DESKTOP],
  ["superpos-cafe", "maquettes/superpos-cafe", DESKTOP],
  ["ecran-superette", "maquettes/superpos", SCREEN_SUPERETTE],
  ["ecran-cafe", "maquettes/superpos-cafe", SCREEN_CAFE],
  ["hanout-enseigne", "maquettes/enseigne", FACADE],
  ["zniqa-bureau", "demo/zniqa?capture=form", DESKTOP],
  ["zniqa-bureau-form", "demo/zniqa?capture=form", DESKTOP, "#commande", -150],
  ["zniqa-mobile", "demo/zniqa?capture=form", PHONE],
  ["zniqa-mobile-form", "demo/zniqa?capture=form", PHONE, "#commande", -78],
  ["tiktok-zniqa", "maquettes/tiktok", PHONE],
  ["facebook-zniqa", "maquettes/facebook", PHONE],
  ["instagram-zniqa", "maquettes/instagram", PHONE],
  ["pubs-tableau", "maquettes/pubs", DESKTOP],
  ["hanout-profil", "maquettes/hanout", PHONE],
  ["zniqa-offre-mobile", "demo/zniqa/offre?capture=form", PHONE],
  ["nouara-bureau", "demo/nouara?capture=form", DESKTOP],
  ["nouara-mobile", "demo/nouara?capture=form", PHONE],
  ["nouara-mobile-form", "demo/nouara?capture=form", PHONE, "#commande", -84],
  ["site-hanout", "maquettes/site-hanout", DESKTOP],
];

// Renders with no text in the page's language: captured once, in French.
const ONE_LANG = new Set(["hanout-enseigne"]);

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ channel: "chrome" });
for (const lang of ["fr", "ar"]) {
  for (const [name, route, vp, target, offset = 0] of SHOTS) {
    if (ONLY && !name.includes(ONLY)) continue;
    if (lang !== "fr" && ONE_LANG.has(name)) continue;
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: vp.dpr,
      isMobile: vp === PHONE,
      hasTouch: vp === PHONE,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const url = `${BASE}/${lang}/${route}`;
    const res = await page.goto(url, { waitUntil: "networkidle" });
    if (!res?.ok()) throw new Error(`${url} answered ${res?.status()}`);
    // The Next.js dev indicator must never appear in a render.
    await page.addStyleTag({ content: "nextjs-portal{display:none!important}" });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() =>
      Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => (i.onload = i.onerror = r))))),
    );
    if (target) {
      await page.evaluate(
        ([sel, off]) => {
          const el = document.querySelector(sel);
          if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + off);
        },
        [target, offset],
      );
    }
    await page.waitForTimeout(400);
    const file = path.join(OUT, `${name}-${lang}.png`);
    await page.screenshot({ path: file });
    console.log("render", path.basename(file), `${vp.width * vp.dpr}x${vp.height * vp.dpr}`);
    await context.close();
  }
}
await browser.close();
