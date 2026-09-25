// Smoke test of the whole site: every page and demo, in French and Arabic,
// at desktop 1440 and phone 390. Reports failed requests (a missing image
// width), console errors, any horizontal overflow on the phone, internal
// links that do not answer 200, #anchors with no target, and a 404 that
// lost the site's bar. Exits with 1 when something is wrong.
//
//   node scripts/check.mjs [--base=http://localhost:3005]
//
// The base URL must serve this project (dev server or `npm start`).

import { chromium } from "playwright";

const args = process.argv.slice(2);
const BASE = args.find((a) => a.startsWith("--base="))?.split("=")[1] ?? "http://localhost:3005";
const PAGES = ["", "/services", "/logiciels", "/realisations", "/contact", "/demo/zniqa", "/demo/zniqa/offre", "/demo/nouara"];
const VIEWPORTS = [
  { name: "desktop", viewport: { width: 1440, height: 900 } },
  { name: "phone", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
];

const problems = [];
// Internal links seen on the pages: path → { from, hashes }.
const links = new Map();
const browser = await chromium.launch({ channel: "chrome" });
for (const { name, ...options } of VIEWPORTS) {
  const context = await browser.newContext(options);
  for (const lang of ["fr", "ar"]) {
    for (const p of PAGES) {
      const page = await context.newPage();
      const url = `${BASE}/${lang}${p}`;
      page.on("response", (r) => {
        if (r.status() >= 400 && r.url().startsWith(BASE)) problems.push(`${name} ${url} → ${r.status()} ${r.url().replace(BASE, "")}`);
      });
      page.on("console", (m) => {
        if (m.type() === "error") problems.push(`${name} ${url} → console: ${m.text().slice(0, 200)}`);
      });
      page.on("pageerror", (e) => problems.push(`${name} ${url} → error: ${e.message.slice(0, 200)}`));
      await page.goto(url, { waitUntil: "networkidle" });
      // Scroll through so lazy images load and every section is laid out.
      await page.evaluate(async () => {
        document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = "eager"));
        for (let y = 0; y < document.documentElement.scrollHeight; y += 600) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
      });
      await page.waitForLoadState("networkidle");
      // Let the entrance animations settle: a tilt in flight is not the layout.
      await page.waitForTimeout(1500);
      const broken = await page.evaluate(() =>
        [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src),
      );
      for (const src of broken) problems.push(`${name} ${url} → image not decoded: ${src}`);
      if (name === "desktop") {
        const found = await page.evaluate(() => {
          const hrefs = [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href"));
          const missing = hrefs.filter((h) => h.startsWith("#") && h.length > 1 && !document.getElementById(h.slice(1)));
          return { internal: hrefs.filter((h) => h.startsWith("/")), missing };
        });
        for (const h of found.missing) problems.push(`${url} → ${h} has no target on the page`);
        for (const h of found.internal) {
          const [target, hash] = h.split("#");
          const entry = links.get(target) ?? { from: url, hashes: new Set() };
          if (hash) entry.hashes.add(hash);
          links.set(target, entry);
        }
      }
      if (name === "phone") {
        const overflow = await page.evaluate(() => {
          const w = document.documentElement.clientWidth;
          const wide = [...document.querySelectorAll("body *")]
            .filter((el) => {
              const r = el.getBoundingClientRect();
              return r.width > 0 && (r.right > w + 1 || r.left < -1) && getComputedStyle(el).position !== "fixed";
            })
            .filter((el) => !el.closest("[data-keys], .sr-only") && !el.closest("[style*='overflow']"));
          return { scroll: document.documentElement.scrollWidth - w, sample: wide.slice(0, 3).map((el) => el.tagName + "." + (el.className || "").toString().slice(0, 40)) };
        });
        if (overflow.scroll > 0) problems.push(`${name} ${url} → page scrolls sideways by ${overflow.scroll}px (${overflow.sample.join(", ")})`);
      }
      await page.close();
    }
  }
  await context.close();
}

// An unknown address answers 404 with the site's own page, in its language.
for (const lang of ["fr", "ar"]) {
  const page = await browser.newPage();
  const res = await page.goto(`${BASE}/${lang}/page-inconnue`, { waitUntil: "networkidle" });
  const ok = await page.evaluate((lang) => document.documentElement.lang === lang && !!document.querySelector("[data-bar]") && !!document.querySelector("h1"), lang);
  if (res?.status() !== 404 || !ok) problems.push(`/${lang}/page-inconnue → ${res?.status()}, not the site's 404`);
  await page.close();
}
await browser.close();

// Every internal link answers 200 and its #anchor exists there. Réalisations
// reads its hash as a gallery filter, not as an element.
for (const [target, { from, hashes }] of links) {
  const res = await fetch(BASE + target);
  if (!res.ok) {
    problems.push(`${from} → link ${target} answers ${res.status}`);
    continue;
  }
  if (target.endsWith("/realisations")) continue;
  const html = await res.text();
  for (const hash of hashes) if (!html.includes(`id="${hash}"`)) problems.push(`${from} → link ${target}#${hash}: no such anchor`);
}

if (problems.length) {
  console.log([...new Set(problems)].join("\n"));
  console.log(`\n${new Set(problems).size} problem(s)`);
  process.exit(1);
}
console.log(
  `ok: ${PAGES.length * 2 * VIEWPORTS.length} page views, no failed request, no console error, no sideways scroll on the phone; ${links.size} internal links and their anchors answer; the 404 is the site's`,
);
