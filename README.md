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
| `/fr`, `/ar` | Home: the six services, why Broda Dev, the process, contact |
| `/fr/services` | The six services in detail |
| `/fr/logiciels` | SuperPOS, G-Stock and Budget Employé |
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
| `node scripts/composite.mjs` | Lays the SuperPOS screens on the counter photos |
| `node scripts/images.mjs` | Turns every source image in `assets/` into AVIF and WebP in `public/images/` |

The web images in `public/images/` are committed, so the site builds without running the image scripts.

## Put it online

The site needs a host that runs Next.js with its middleware, which handles the language redirect. Vercel is the simplest choice; any Node.js 20 host also works (`npm ci && npm run build && npm start`).

1. **Push the repository** to GitHub.
2. **Import it on Vercel.** Vercel recognises Next.js, so the default settings work.
3. **Set two environment variables:**
   - `NEXT_PUBLIC_SITE_URL`: the final address, for example `https://brodadev.dz`. It is used for the canonical links, the sitemap and the share images.
   - `NEXT_PUBLIC_PREVIEW`: leave it unset (preview) while the site is being checked. In preview, every page is `noindex` and `robots.txt` blocks search engines. Set it to `false` on launch day.
4. **Add the domain** in Vercel, then set the DNS records it shows at the domain's registrar.
5. **Check the live site.** Run `node scripts/check.mjs --base=https://your-address` against it, and open a link in WhatsApp to see the share image.

## Still to come from the owner

- The photo of Omar Benassid for "Pourquoi Broda Dev". It must be a real photo; his face is never generated.
- The decision to launch (step 3 above), which replaces the v3 site.
