@AGENTS.md

# Broda Dev v5

This is the fifth version of the Broda Dev site (Omar Benassid, Kiffan, Tlemcen). It was started on 2026-09-24 after the owner asked for a "180°" redesign.

- **Stack:** Next.js 16 (App Router), Tailwind 4, GSAP and ScrollTrigger, Lenis, next-intl. Languages are `fr` (default) and `ar` (RTL). Every page is `noindex` while `PREVIEW` is on (`src/lib/site.ts`).
- **Direction "Affiche":** the owner chose it from three prototypes. Chrome yellow poster, expanded black type, stickers, and the service keys (six: the seventh service, hosting, has no home section).
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
| Full-page review captures, into `.impeccable/review/pages/` | `node scripts/pages.mjs --paths=services,contact [--only=mobile] [--element=#logos --name=logos]` (`home` is the home page), with a dev or start server running |
| POS-MINI MARKET laid on the Canva counter photos, into `assets/renders/scene-*` (then `images.mjs`, then `render.mjs --only=og`: the share card shows the supérette scene) | `node scripts/render.mjs --only=ecran && node scripts/composite.mjs` |
| Whole-site check: every page and demo, fr/ar, desktop and phone (failed requests, console errors, sideways scroll, dead links and anchors, the 404) | `npm run check`, with a dev or start server running |
| Design detector (the hook also runs it on every edit) | `"<impeccable skill>/scripts/impeccable" detect --json src` |

## How it fits together

- **Copy:** `src/content/site.ts` holds the home and shared copy (`SITE.fr`, `SITE.ar`; `ar` is typed against `fr`). `src/content/pages.ts` holds the four pages and their metadata (`PAGES`). `src/messages/*` only holds the home's metadata for next-intl.
- **Home:** `src/app/[locale]/page.tsx` composes `SiteHeader`, `KeysNav`, the home sections in `src/components/home/` (… `Why`, `Trust`, `Process`, `Faq`, `Contact`), `WhatsAppFloat` and `HomeMotion`.
  - Each service section carries `data-section={index}`. HomeMotion shows the keys while a service is on screen and lights the key of the section under the line just below the bar and the keys (measured on scroll; a thin middle band lit the wrong key).
  - Section anchors are the service ids in `SITE.services`. The seventh service (`hebergement`) is `compact`: no home section and no key; its row and the footer link to its card on /services. `HostingLine` points to it from Sites web and Shopify.
  - Shopify switches between the ZNIQA and NOUARA demos (keys, cross-fading slots). Each phone carries its own `FORM_MARKERS`.
  - `Trust` ("Ils nous font confiance") lists real clients only, each with its consent: today Lamssat Tlemcen.
  - `Faq` reads `src/content/faq.ts`. An answer is published only once the owner has confirmed it (`confirmed: true`); development shows the drafts, marked "À CONFIRMER". It also closes /contact.
  - `TrialButton` (free trial of POS-MINI MARKET, 30 days) sits in Logiciels, Caisses and the Logiciels page; `Platforms.tsx` draws the Facebook, Instagram and TikTok marks, and Shopify's logo is the owner's image.
- **Pages:** Services, Logiciels, Réalisations and Contact live in `src/app/[locale]/<page>/` and compose `src/components/pages/` inside `PageShell` (header with the current page marked, footer, WhatsApp, `PageMotion`).
  - `PageMotion` reveals blocks marked `data-reveal` and lights the process steps; nothing is hidden without JavaScript or with reduced motion.
  - Services anchors are the service ids; Logiciels has `#pos-minimarket`, `#gstock`, `#budget`. On Réalisations a hash (`#publicite`, `#logos`, `#demos`…) opens the gallery on that filter.
- **SEO:** `pageMetadata` (`src/lib/site.ts`) sets canonical, hreflang and the share card `public/og/og-<lang>.png`. `src/app/robots.ts` blocks everything while `PREVIEW` is on; `src/app/sitemap.ts` lists the five pages in both languages.
- **404:** any unknown address under a language hits `src/app/[locale]/[...rest]/page.tsx`, which calls `notFound()`; `src/app/[locale]/not-found.tsx` shows the site's own page (bar, footer, language). It answers 404 with noindex. Next sends an error shell and the browser draws the page, which is normal for `notFound()` without a Suspense boundary.
- **Devices:** `src/components/frames/Devices.tsx` draws Laptop, Phone, PosTerminal, Monitor and Browser in CSS around a `Pic`, sized in `cqw` of the device's outer box. Children are laid over the screen (`ScreenSwitcher` cross-fades real screens that way).
- **Images:**
  - `Pic` serves `/images/<group>/<name>-<width>.{avif,webp}`.
  - Sources live in `assets/` and are converted by `scripts/images.mjs`:
    - `assets/canva/` holds the Canva AI photos.
    - `assets/owner/` holds what the owner supplied: the MINI MARKET storefront, his portrait (`team/omar.jpg`, cropped and lightly graded) and the Shopify logo.
    - `assets/screens/` holds the real software screens the site shows (G-Stock, Budget Employé).
  - `reference/superpos/` holds the real SuperPOS screens the POS-MINI MARKET rebuilds follow. It is not published.
    - `assets/renders/` holds the renders; it is gitignored and regenerable.
- **Coded mockups** are captured by `render.mjs` at 2× or 3×:
  - `/[locale]/maquettes/{superpos,carnet,tiktok}`: HD rebuilds of the real POS-MINI MARKET screens, and an example ad.
  - Also `paiement`, `superpos-cafe`, `facebook`, `instagram`, `pubs`, `minimarket` (MINI MARKET's social profile), `site-minimarket`, `shopify-admin` and `og` (the share card, copied to `public/og/`).
  - `/[locale]/demo/zniqa`, `/[locale]/demo/zniqa/offre` and `/[locale]/demo/nouara`: live demo stores (invented brands). `?capture=form` pre-fills the form for renders. Without a capture parameter, the demo banner always shows. They share `src/components/demo/CodOrderForm.tsx`, each with its own copy and CSS module.
- **Arabic:** `:lang(ar)` switches `--display` and `--body` to Noto Kufi Arabic. Numbers and prices use the `.ltr` class. Brand names stay in Latin script.
- **Fonts:** Archivo and Noto Kufi Arabic are declared in `globals.css` from `public/fonts/` (copies of the @fontsource files, so their URLs are stable and can be preloaded). Kufi's Arabic face is subset to the Arabic block with fontTools (121 KB → 52 KB, renders pixel-identical). Arabic pages preload their three faces (otherwise CLS 0.23–0.28); French pages preload none.
- **Tracking** (`src/lib/analytics.ts`, `src/components/site/Analytics.tsx`): GA4, Meta Pixel and TikTok Pixel, each only when its ID is set (`NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`). They load at the first interaction or 4 s after load. Conversions, with the service (nearest `data-service`, else the section id): WhatsApp, phone, trial, contact form. WhatsApp, trial and form count when the visitor confirms WhatsApp, not at the first click.
- **WhatsApp never opens on the first click** (the owner, 2026-09-26): `WhatsAppConfirm` (in the locale layout) catches every link to wa.me, says the visitor is leaving Broda Dev, shows the message already written, and on yes opens WhatsApp in a new tab (the site stays open). A script asks through `askWhatsApp` (`src/lib/contact.ts`), as the contact form does. A new WhatsApp link needs nothing more than `whatsapp(text)`.
- **No cookies** until the owner says the site is finished (2026-09-26): next-intl's locale cookie is off (`localeCookie: false`, so "/" follows the browser's language), the tracking IDs stay unset, and there is no consent banner.
- **Performance** (Lighthouse mobile, local: fr 75 → 86–87, ar 57 → 81–85, CLS 0):
  - Sections below the hero (`main#contenu > section`) and the footer use `content-visibility: auto`.
  - Phones and tablets wrap text plainly: `text-wrap: balance/pretty` cost most of the first layout with Arabic shaping.
  - The hero's entrance is pure CSS; GSAP and Lenis load at the first gesture (`src/lib/first-input.ts`).
  - No `filter` on the first screen (a drop-shadow held the first paint); the LCP image is not decoded synchronously.

## Things that bite

- **Font packages:** `@fontsource-variable/big-shoulders-display` exports its CSS without the extension. Import `.../wght`, not `.../wght.css`.
- **CSS modules** require a local class in every selector. `[data-x]` alone fails the build. A global class (`ltr`, `arrow`) inside a module must be written `:global(.ltr)`: a bare `.ltr` is renamed and silently matches nothing.
- **SVG ids** (`clipPath`, `filter`, gradients) in a component that can appear twice on a page need `useId()`.
- **No BOM in source files:** Windows PowerShell 5.1 `Set-Content -Encoding utf8` writes one, and a BOM at the top of a CSS module silently breaks its first rule (a whole palette of custom properties went missing that way). Edit with the Edit tool or Node.
- **Locales:** pages call `enterLocale(locale)` (`src/i18n/locale.ts`), which validates the segment and types it.
- **`cqw`:** an element that declares `container-type` cannot size itself in its own `cqw`. The outer device is the container; its parts use `cqw`.
- **Phone form markers:** `FORM_MARKERS` in `site.ts` are percentages measured on the `zniqa-mobile-form` and `nouara-mobile-form` renders. render.mjs scrolls NOUARA to −82 so its form lines up with ZNIQA's (its header is sticky). If a render changes, re-measure them.
- **`content-visibility`:** a section that has not been on screen is sized by its estimate (900 px). Full-page captures must turn it off (`pages.mjs` and `review.mjs` inject `content-visibility: visible`), and a height measured without scrolling through the page is wrong.
- **Fonts in `public/fonts/`** are copies from @fontsource-variable 5.3.0, whose packages are no longer installed: to update them, install the package, copy the files (and subset Kufi again), then remove it.
- **Renders need a running server.** `render.mjs` photographs whatever the base URL serves.
- **Git Bash rewrites `/…` arguments** into Windows paths. Pass page names to `pages.mjs` without the leading slash.
- **`images.mjs` skips** `comptoir-*`, `ecran-*` and `og-*`: composite inputs and share cards never go to `public/images/`. Language-free renders (`shopify-admin`) are captured in French only (`ONE_LANG` in `render.mjs`).
- **Composite coordinates:** the display rectangles in `composite.mjs` are measured on those exact photos. A new photo means measuring again.

## Truth rules

- G-Stock screens are real (restaurant Lamssat Tlemcen, which agreed to be named); their figures are sample data.
- POS-MINI MARKET screens are real or faithful HD rebuilds. No client is claimed. Closing and report screens don't exist, so they are never shown.
  - Called SuperPOS until 2026-09-25, when the owner renamed it POS-MINI MARKET everywhere on the site. The code keeps the old name (`SuperPos*` components, `superpos-*` renders, `reference/superpos/`).
  - The rebuilt screens keep the real layout, controls and wording, and wear the name and look of POS-MINI MARKET: the charcoal, cream and red of the MINI MARKET sign, in Figtree. Their captions say "recréé en HD d'après le logiciel réel", never "écran réel".
- Budget Employé screens are demonstration screens.
- **Confirmed claims:**
  - POS-MINI MARKET is "en français et en arabe", never "Darija".
  - It works offline and is fast on old PCs.
  - Training is included.
  - It has a carnet de dettes.
- **Demo brands are invented and labelled "Exemple":** ZNIQA, NOUARA, MINI MARKET and LEMMA. Their photos are Canva AI, except the MINI MARKET storefront, which the owner supplied; all are logged in CREDITS.md. The counter photos are illustrations and say so.
- **Never invent:** clients, testimonials, results, statistics or Broda Dev prices. Example figures are labelled.
- **Confirmed by the owner (2026-09-25):** the free trial of POS-MINI MARKET lasts 30 days; the hero sticker reads 35 000 DA; the only client named on the site is Lamssat Tlemcen; the platform logos (Shopify, Facebook, Instagram, TikTok) may be shown.
- **FAQ answers** are the owner's: none is published until he confirms it.
- **The owner's photo** is his own (`assets/owner/team/omar.jpg`): cropped and lightly graded, never retouched or generated.
