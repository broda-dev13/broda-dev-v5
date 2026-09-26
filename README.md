# Broda Dev · site v5

The Broda Dev website (Kiffan, Tlemcen), in French and Arabic. It is built with Next.js 16, direction "Affiche".

- **For people:** this README covers how to run it and put it online.
- **Design and content rules:** `DESIGN.md` and `PRODUCT.md`.
- **Image provenance:** `CREDITS.md`.
- **For Claude Code:** `CLAUDE.md`.

## Run it locally

You need Node.js 20 or later. Then:

```bash
npm install
npm run dev -- -p 3005
```

Open <http://localhost:3005>. It redirects to `/fr`; the Arabic site is at `/ar`.

## The pages

| Address | Page |
|---|---|
| `/fr`, `/ar` | Home: the services, why Broda Dev, who trusts us, the process, questions, contact |
| `/fr/services` | The seven services in detail |
| `/fr/logiciels` | POS-MINI MARKET, G-Stock and Budget Employé |
| `/fr/realisations` | The gallery of work and demos |
| `/fr/contact` | The contact form (it opens WhatsApp) and the address |
| `/fr/demo/zniqa`, `/fr/demo/zniqa/offre`, `/fr/demo/nouara` | Live demo stores (invented brands) |

Every `/fr/...` page also exists under `/ar/...`.

## Scripts

| Command | What it does |
|---|---|
| `npm run build` | Production build, which is also the type check |
| `npm start` | Serves the production build |
| `npm run lint` | ESLint |
| `npm run check` | Visits every page and demo in both languages, on desktop and phone. It fails on a missing file, a console error or a page that scrolls sideways. It needs a running server. |
| `node scripts/render.mjs` | Recaptures the interface mockups into `assets/renders/`. It needs a running server. |
| `node scripts/composite.mjs` | Lays the POS-MINI MARKET screens on the counter photos |
| `node scripts/images.mjs` | Turns every source image in `assets/` into AVIF and WebP in `public/images/` |

The web images in `public/images/` are committed, so the site builds without running the image scripts.

## Put it online

The site runs on Netlify, built from its GitHub repository: every push to `main` publishes a new version. It needs Next.js with its middleware (the language redirect), so the folder cannot simply be dragged onto Netlify. `netlify.toml` holds the build settings.

1. **Push** to the GitHub repository.
2. **Link it on Netlify** (once): Add new project → Import an existing project → GitHub → the repository. Netlify reads `netlify.toml`.
3. **Environment variables** (Site configuration → Environment variables), read at build time, so redeploy after changing them:
   - `NEXT_PUBLIC_SITE_URL`: the final address, for example `https://brodadev.dz`. It is used for the canonical links, the sitemap and the share images.
   - `NEXT_PUBLIC_PREVIEW`: leave it unset (preview) while the site is being checked. In preview, every page is `noindex` and `robots.txt` blocks search engines. Set it to `false` on launch day.
   - Tracking, each optional (nothing loads without it): `NEXT_PUBLIC_GA4_ID` (G-XXXXXXXXXX), `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`. These platforms set cookies: the owner leaves them unset until the site is finished.
4. **Turn off the "Powered by Netlify" badge** (it covers the WhatsApp button on phones): Project configuration → General → Powered by Netlify badge.
5. **Add the domain** in Netlify (Domain management), then set the DNS records it shows at the domain's registrar.
6. **Check the live site.** Run `node scripts/check.mjs --base=https://your-address` against it, and open a link in WhatsApp to see the share image.

The site sets no cookie of its own.

## Still to come from the owner

- The tracking IDs, once the site is finished.
- The decision to launch (step 3 above), which replaces the v3 site.
