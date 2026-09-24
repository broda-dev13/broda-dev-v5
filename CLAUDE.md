@AGENTS.md

# Broda Dev v5

This is the fifth version of the Broda Dev site (Omar Benassid, Kiffan, Tlemcen). It was started on 2026-09-24 after the owner asked for a "180°" redesign.

- **Stack:** Next.js 16 (App Router), Tailwind 4, GSAP and ScrollTrigger, Lenis, next-intl. Languages are `fr` (default) and `ar` (RTL). Every page is `noindex` while `PREVIEW` is on (`src/lib/site.ts`).
- **Direction "Affiche":** the owner chose it from three prototypes. Chrome yellow poster, expanded black type, stickers, and six service keys.
- **Older versions:** v3 (Astro, `Bureau\web site broda dev`) and v4 (Next.js Tlemcen edition, `Bureau\broda-dev-tlemcen`) are untouched, on backup branches.

Read these before changing copy or visuals:
- `PRODUCT.md`: product truth, audiences and confirmed claims.
- `.impeccable/surfaces/src-app-locale-page-tsx.md`: the home's surface brief and **direction contract**.
- `CREDITS.md`: the provenance of every raster.

## How the owner works

- The owner reviews the build **section by section**. After each section, capture it with `scripts/review.mjs`, review it critically, fix it, then send the screenshots.
- The owner iterates fast and rejects anything that looks like a placeholder.
- **Use the connected tools:** Canva for photos and graphics, and Playwright renders for interfaces. Report any tool that fails.

## Commands

| Task | Command |
|---|---|
| Dev server | `npm run dev -- -p 3005` (`.claude/launch.json`, name `v5`) |
| Build (also the type check) | `npm run build` |
| Interface renders of the coded mockups, into `assets/renders/` | `node scripts/render.mjs [--base=http://localhost:3005] [--only=carnet]`, with a dev or start server running |
| Web images, AVIF and WebP, into `public/images/<group>/` | `node scripts/images.mjs [--force]` |
| Review captures of home sections, into `.impeccable/review/home/` | `npm run build && node scripts/review.mjs [--sections=hero,logiciels] [--langs=fr,ar]` |
| Design detector (the hook also runs it on every edit) | `"<impeccable skill>/scripts/impeccable" detect --json src` |

## How it fits together

- **Copy:** `src/content/site.ts` holds the site copy (`SITE.fr`, `SITE.ar`; `ar` is typed against `fr`). `src/messages/*` only holds metadata for next-intl.
- **Home:** `src/app/[locale]/page.tsx` composes `SiteHeader`, `KeysNav`, the home sections in `src/components/home/`, `WhatsAppFloat` and `HomeMotion`.
  - Each service section carries `data-section={index}`. HomeMotion shows the keys while a service is on screen and lights the key of the section in view.
  - Section anchors are the service ids in `SITE.services`.
- **Devices:** `src/components/frames/Devices.tsx` draws Laptop, Phone, PosTerminal and Monitor in CSS around a `Pic`, sized in `cqw` of the device's outer box.
- **Images:**
  - `Pic` serves `/images/<group>/<name>-<width>.{avif,webp}`.
  - Sources live in `assets/` and are converted by `scripts/images.mjs`:
    - `assets/canva/` holds the Canva AI photos.
    - `assets/screens/` holds the real software screens.
    - `assets/renders/` holds the renders; it is gitignored and regenerable.
- **Coded mockups** are captured by `render.mjs` at 2× or 3×:
  - `/[locale]/maquettes/{superpos,carnet,tiktok}`: HD rebuilds of the real SuperPOS screens, and an example ad.
  - `/[locale]/demo/zniqa`: a live demo product page (ZNIQA is an invented brand). `?capture=form` pre-fills the form for renders. Without a capture parameter, the demo banner always shows.
- **Arabic:** `:lang(ar)` switches `--display` and `--body` to Noto Kufi Arabic. Numbers and prices use the `.ltr` class. Brand names stay in Latin script.

## Things that bite

- **Font packages:** `@fontsource-variable/big-shoulders-display` exports its CSS without the extension. Import `.../wght`, not `.../wght.css`.
- **CSS modules** require a local class in every selector. `[data-x]` alone fails the build.
- **Locales:** pages call `enterLocale(locale)` (`src/i18n/locale.ts`), which validates the segment and types it.
- **`cqw`:** an element that declares `container-type` cannot size itself in its own `cqw`. The outer device is the container; its parts use `cqw`.
- **Phone form markers:** `FORM_MARKERS` in `site.ts` are percentages measured on the `zniqa-mobile-form` render. If that render changes, re-measure them.
- **Renders need a running server.** `render.mjs` photographs whatever the base URL serves.

## Truth rules

- G-Stock screens are real (restaurant Lamssat Tlemcen, which agreed to be named); their figures are sample data.
- SuperPOS screens are real or faithful HD rebuilds. No client is claimed. Closing and report screens don't exist, so they are never shown.
- Budget Employé screens are demonstration screens.
- **Confirmed claims:**
  - SuperPOS is "en français et en arabe", never "Darija".
  - It works offline and is fast on old PCs.
  - Training is included.
  - It has a carnet de dettes.
- **Demo brands are invented and labelled "Exemple":** ZNIQA, and the others to come. Their photos are Canva AI, logged in CREDITS.md.
- **Never invent:** clients, testimonials, results, statistics or Broda Dev prices. Example figures are labelled.
- **The owner's photo** for "Pourquoi Broda Dev" will be supplied by him. Never generate his face.
