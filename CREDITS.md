# Image credits and provenance

Every raster on the site is listed here with its origin. No stock photo is used. The five Adobe Stock previews found in the v3 folder are unlicensed and are not used.

## Photos generated with Canva AI

The photos were generated on 2026-09-24 with Canva's image generation (Magic Media) in the owner's Canva account. Canva allows commercial use of these images on a business website under its Terms of Use. The full-resolution files were exported from the Canva design "Broda Dev – photos ZNIQA (export)" (`DAHWIorDYAA`). They are kept in `assets/canva/`, and `scripts/images.mjs` converts them into `public/images/`.

ZNIQA is an **invented** streetwear brand, shown as a labelled example. All of these photos are 1136 × 1408.

| File | Canva media | Prompt |
|---|---|---|
| `zniqa/zniqa-blanc` | `MAHWIvQvD8A` | Edit of `MAHWIkB9eHA`: "Keep this exact T-shirt photo (same flat-lay framing, shape, folds, background and lighting). Replace the round chest mark with a small tonal embroidered eight-pointed star made of two overlapping squares, stitched in off-white thread on the left chest. Keep the shirt off-white. No text, no letters." |
| `zniqa/zniqa-noir` | `MAHWIhyNWD0` | Edit of `MAHWIkB9eHA`: same instruction, T-shirt recoloured to washed black, star in dark grey thread |
| `zniqa/zniqa-sable` | `MAHWIri_lKQ` | Edit of `MAHWIkB9eHA`: same instruction, T-shirt recoloured to warm sand beige, star in sand thread |
| `zniqa/zniqa-olive` | `MAHWIjDnSrM` | Edit of `MAHWIkB9eHA`: same instruction, T-shirt recoloured to muted olive green, star in olive thread |
| `zniqa/zniqa-porte` | `MAHWIoi4_v8` | "Lifestyle fashion photo: a young North African man in his early twenties, short dark curly hair, wearing a plain heavyweight oversized black T-shirt with a small tonal embroidered eight-pointed star on the left chest, relaxed confident pose, leaning against a sunlit whitewashed wall with a deep blue wooden door in an old Maghreb medina alley, late afternoon warm light and soft shadows, shot on 50mm, shallow depth of field, natural skin texture, editorial streetwear campaign look. Framed from mid-thigh up, the T-shirt clearly visible. No text, no letters, no logos." (The person is AI-generated, not a real model.) |
| `zniqa/zniqa-detail` | `MAHWIgqtA68` | "Macro close-up product detail photo of thick heavyweight cotton jersey fabric in washed black, showing a small tonal embroidered eight-pointed star (two overlapping squares) stitched in dark grey thread, and part of a thick ribbed crew collar. Soft raking daylight revealing the knit texture and embroidery stitches, shallow depth of field, premium catalogue detail shot. No text, no letters." |
| `zniqa/zniqa-pile` | `MAHWInh5hDM` | "Studio product photo of four heavyweight streetwear T-shirts neatly folded and stacked, colors from bottom to top: washed black, olive green, sand beige, off-white. Each has a small tonal embroidered eight-pointed star on the chest. Warm light-grey seamless background, soft daylight, realistic shadows, crisp cotton texture, premium e-commerce catalogue photography. No text, no letters, no logos, no people." |

The source of the four flat-lay edits, `MAHWIkB9eHA`, was generated with: "E-commerce studio product photo, front view of a heavyweight oversized streetwear T-shirt in off-white cotton, laid perfectly flat and symmetrical, with a small tonal embroidered eight-pointed star (two overlapping squares) on the left chest in off-white thread, dropped shoulders, thick ribbed collar. Warm light-grey seamless background, soft daylight from the upper left, crisp visible cotton texture, gentle realistic shadow. No text, no letters, no logo words, no people, no hanger. Premium catalogue photography, sharp focus, centered with generous margin."

## Interface renders made by Broda Dev

`scripts/render.mjs` captures these from the site's own coded mockups at 2× or 3×, into `assets/renders/` and then `public/images/renders/`.

- **`superpos-caisse-{fr,ar}`:** the SuperPOS checkout, rebuilt in HTML from the real screens in `public/screens/superpos/`. The layout, controls and wording are the real ones. The products and totals are sample data.
- **`zniqa-*`:** the ZNIQA demo product page (`/[locale]/demo/zniqa`), invented brand.
- **`tiktok-zniqa-{fr,ar}`:** an example sponsored video in a generic short-video feed. The engagement figures are illustrative.

## Real screens

- **G-Stock:** `public/screens/gstock/`, from the restaurant Lamssat Tlemcen, which agreed to be named. The figures are sample data.
- **SuperPOS:** `public/screens/superpos/`, real screens. No client is claimed.
- **Budget Employé:** `public/screens/budget-employe/`, demonstration screens.

## Drawn in code

The khatam stars, the zellige frieze and the device frames are drawn in CSS and SVG from exact geometry (`src/lib/khatam.ts`). No image source is involved.
