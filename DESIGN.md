# Broda Dev v5 · Design system "Affiche"

This file records the design system as it ships in the code, as of 2026-09-25. The code is the source of truth: `src/app/globals.css` for the tokens, `src/components/` for the parts. The owner chose the direction on 2026-09-24. Its contract is in `.impeccable/surfaces/src-app-locale-page-tsx.md`.

**The idea.** The page works like an Algerian shop poster with promo stickers, turned into an agency voice. It makes one loud promise, "De la caisse à la pub TikTok", then proves it service by service with real screens and realistic demo work.

## Colour

| Token | Value | Role |
|---|---|---|
| `--y` | `#FFD60A` | Chrome yellow. It owns the page heads, the contact band, and one board per section (the ground the devices stand on). |
| `--ink` | `#0A0A0B` | All type, every primary action (the pill buttons), and the dark bands. |
| `--paper` | `#FFFFFF` | The ground between sections. |
| `--bone` | `#F6F5F1` | The alternate ground, so light bands don't merge. |
| `--hot` | `#FF4A1A` | Only for stickers, numbered markers, lit LEDs and the "Démo en ligne" tag. Never for text or a whole surface. |
| `--key` | `#FFFDF3` | The face of an unlit key. |
| `--ink-2`, `--ink-3` | ink at 78% and 60% | Secondary text and captions. Both pass WCAG AA on white and on yellow. |

**Dark bands.** A page has at most one or two ink bands, never side by side:
- Home: Caisses POS, Pourquoi.
- Services: Caisses POS.
- Logiciels: G-Stock.
- Contact: the "Kiffan, Tlemcen" band.

On ink, titles turn yellow, body text is white at 72–74%, and the primary pill turns yellow.

**Demo brands keep their own colours and faces on their own pages, and never in Broda Dev's interface:**
- ZNIQA: black, bone and signal orange, set in Big Shoulders and Figtree.
- NOUARA: cream, deep brown, burgundy and brass, set in narrow light Archivo and Figtree.
- MINI MARKET: charcoal, cream and red, taken from its lit sign; set in Figtree.
- LEMMA: espresso and terracotta.

## Type

- **Display:** Archivo Variable at `font-stretch: 125%`, weight 900, uppercase, tight leading (0.86–0.95) and negative tracking (−0.025 to −0.035em).
  - Page titles are sized `clamp(30px, 8.8vw, 150px)` so the longest one, "RÉALISATIONS.", fits a 390px phone.
  - Section titles use `clamp(34px, 3.9vw, 60px)`.
- **Reading:** Archivo at 100% width. Leads run 18–23px at weight 600–700; body text runs 15–17px.
- **Arabic:** `:root:lang(ar)` switches `--display` and `--body` to Noto Kufi Arabic. Display drops to weight 800, leading opens to 1.2–1.3, tracking goes to 0, and there is no uppercase.
- **Numbers and money** sit in `.ltr` (`direction: ltr; unicode-bidi: isolate`). The amount and its currency are split: `<span class="ltr">3 070,00</span> DA`.
- **Brand names stay in Latin script** in both languages: Broda Dev, POS-MINI MARKET, G-Stock, Budget Employé, Shopify, and the demo brands.

## Layout

- **Spacing:**
  - `--gutter`: `clamp(16px, 3.4vw, 48px)`.
  - `--section`: `clamp(72px, 9vw, 140px)`.
  - The bar is sticky, 72px tall (60px under 1024px).
- **Sections:** text next to work, as a 5/7 or 7/5 split that alternates sides from one band to the next. The layout stacks to one column under 1024px.
- **Boards:** yellow, with a 32px radius (22–24px on phones) and 5–6% padding. Devices stand on them.
- **Gallery (Réalisations):** 12 columns with `grid-auto-flow: dense`. Pieces are 8, 6 or 4 columns wide, and every device is sized from the shared board height `--h`, so a row lines up.

## Components

- **Pill buttons** (`src/components/ui`): ink with white text, 58px tall (54px on phones). On ink bands they turn yellow. The drawn arrow flips in RTL.
- **Keys** (the "drum machine" grammar): a rounded key with a 2px ink ring, a title in wide caps, a sub-line, and an LED or a number. Keys come in several forms:
  - Home: the six service keys pin under the bar and light the service in view (`KeysNav`, `HomeMotion`).
  - Pages: the same keys are the in-page index (`JumpKeys`).
  - Program and trade tabs use keys with a hot LED when lit.
- **Devices** (`src/components/frames/Devices.tsx`): Laptop, Phone, PosTerminal, Monitor and Browser, drawn in CSS around a real render and sized in `cqw` of the device.
  - Children are laid over the screen. `ScreenSwitcher` cross-fades real screens inside one frame that way.
- **Stickers and markers:** the "01 / 06" counter, the tilted promo stickers of the hero, and the Réel / Exemple / Démo en ligne tags.
- **Forms:**
  - The contact form writes a WhatsApp message and posts nothing.
  - The demo stores share `CodOrderForm`, the Algerian cash-on-delivery form (58 wilayas, stop desk or home, live total). Each store supplies its own copy and CSS module.
- **Bans:**
  - No kickers or eyebrows above headlines.
  - No hard offset shadows.
  - No glyph or emoji icons (icons are drawn SVG).
  - No purple gradients.
  - No row of identical cards.

## Motion

- **Easing:** `--ease-out-expo` for everything that settles.
- **Home (`HomeMotion`, GSAP):**
  - The poster lines rise out of their masks and the stickers snap on.
  - The devices settle into place.
  - The keys pin under the bar during the services, and the process LEDs light in order.
- **Pages (`PageMotion`):** blocks marked `data-reveal` rise 26px into place the first time they are seen. Blocks already on screen stay put. Nothing is hidden without JavaScript.
- **Small moments:** the Caisses POS ticket feeds out of the printer in steps, and keys lift 2px on hover.
- **Reduced motion:** `prefers-reduced-motion` turns every animation and transition off (`globals.css`). States then change instantly.

## Imagery and truth

- Every screen is either real or a faithful HD rebuild of a real one, and its caption says which.
  - POS-MINI MARKET: rebuilds from `reference/superpos/`.
  - G-Stock: the real screens of the restaurant Lamssat Tlemcen, with example figures.
  - Budget Employé: demonstration screens.
- **Photos** are Canva AI, and each one is labelled:
  - The ZNIQA and NOUARA products.
  - Two counters, with POS-MINI MARKET composited onto their displays (`scripts/composite.mjs`).
- **The MINI MARKET storefront** is a photo supplied by the owner, sign included, and labelled as an example too.
- **Provenance:** every raster is listed in `CREDITS.md`. Each Canva source PNG carries its exact prompt (`impeccable embed-prompt --read`).
- **Delivery:** AVIF and WebP at 560, 1136, 1600 and 2880 wide (never upscaled), served through `Pic`.

## Pages

| Route | Content |
|---|---|
| `/{fr,ar}` | Hero, overview, six services, why, process, contact |
| `/services` | The six services, with what the client receives, who it is for, a visual, a quote and a demo |
| `/logiciels` | POS-MINI MARKET at the counter, G-Stock (Lamssat), Budget Employé, steps, FAQ |
| `/realisations` | A filterable gallery: live demos, real screens and examples |
| `/contact` | The WhatsApp form (its title is the page's h1), the place, the process |
| `/demo/{zniqa,zniqa/offre,nouara}` | Live demo stores, always showing the demo banner; `noindex`, not in the sitemap |

## Still open

- The owner's photo for "Pourquoi Broda Dev" (he will supply it; his face is never generated).
- `PREVIEW` stays on (`noindex`, robots.txt blocks everything) until the owner chooses to ship this version.
