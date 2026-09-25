# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

- **Framework:** Next.js 16 (App Router) with TypeScript and Tailwind CSS 4.
- **Languages:** next-intl.
- **Motion:** GSAP with ScrollTrigger, Lenis and Motion.
- **Fonts:** self-hosted through `@fontsource`.
- **Images:** prepared by script as AVIF/WebP at 1× and 2×.
- **Deploy target:** Vercel.

This is the fifth version of the site. It was started on 2026-09-24 from the owner's "180°" redesign brief, which sits in the conversation of that date and is summarised here. v3 (Astro, `Bureau\web site broda dev`) and v4 (Next.js Tlemcen edition, `Bureau\broda-dev-tlemcen`) are kept on backup branches. v4's Next.js setup seeded this project.

## Users

Two audiences, served equally:

1. **Algerian shops and businesses.** Restaurants, cafés, grocery stores, supermarkets and small businesses that need management software and point-of-sale systems.
   - The people are owners and managers, often non-technical, often reading in Arabic.
   - They should feel that Broda Dev is serious, modern and local.
2. **Algerian online sellers.** People selling through Facebook, Instagram and TikTok, with cash-on-delivery orders across the 58 wilayas.
   - They need a store, a product or landing page that converts, sponsored ads and a logo.
   - They mostly browse on their phone and are young.

The test for every section: would an Algerian business owner be impressed, and want to work with Broda Dev right away?

## Product Purpose

Broda Dev is Omar Benassid's company in Tlemcen, Algeria. The site must present all six services, each with strong, realistic, modern visuals:

1. **Business software:**
   - **POS-MINI MARKET** (called SuperPOS until 2026-09-25, when the owner renamed it everywhere on the site): retail checkout. Its interface is in French and Arabic. It works offline, runs fast on old PCs, includes training and has a built-in debt book (*carnet de dettes*).
   - **G-Stock:** restaurant stock management.
   - **Budget Employé:** staff, attendance and pay.
2. **Websites:** showcase sites, business sites and landing pages.
3. **POS systems of every kind:** shops, supermarkets, restaurants, cafés.
4. **Shopify:** opening and setting up stores, plus landing pages and product pages.
5. **Media buying:** sponsored ads on Facebook, Instagram and TikTok.
6. **Logo design:** brand identity and logos.

Success means that a visitor understands within seconds that one Algerian partner handles everything from the checkout to the TikTok ad, sees work that looks real, and asks for a free quote on WhatsApp.

## Positioning

From the checkout to the TikTok ad: the software that runs an Algerian business and the stores, pages, ads and logos that bring it customers, from one partner in Tlemcen. DA, wilayas, Arabic, cash on delivery and offline work are the default, not an adaptation.

## Operating Context

- **Software:** businesses run installed software on their own PCs, and the data stays on the client's machine.
- **Algerian e-commerce runs on cash on delivery.** The order form asks for:
  - Full name, phone, wilaya and commune.
  - Stop desk or home delivery.
  - The total in DA.
- **Traffic:** visitors often arrive on a phone, from an ad or a WhatsApp link.

## Capabilities and Constraints

- **Languages:** French (default) and Arabic (RTL) at launch. English may come later, so keep strings in dictionaries.
- **Pages:** five at most, **Accueil, Services, Logiciels, Réalisations, Contact**.
  - The home tells the whole story: hero, services overview, one section per service, why Broda Dev, a 4-step process, contact.
  - Three live demo pages (T-shirt product page, handbag product page, landing page) are reached from Réalisations. They are `noindex` and stay out of the menu and the sitemap.
  - Every other v3 and v4 page is gone.
- **Always visible:** a sticky "Demander un devis" action and a WhatsApp button.
- **No prices for Broda Dev's own services.** Every action is a free quote on WhatsApp or a demo request. Prices inside demo stores are example prices in DA, labelled as such.
- **Brand names stay in Latin script in every language:** Broda Dev, POS-MINI MARKET, G-Stock, Budget Employé, Shopify, Facebook, Instagram, TikTok, and the invented demo brands.
- **Motion:** smooth and physical with GSAP, Lenis and Motion, fully off under `prefers-reduced-motion`.
- **Design bans:** no purple gradients, no emoji icons, no three identical cards.

## Brand Commitments

- **Name:** Broda Dev. **Founder:** Omar Benassid.
- **Contact:**
  - Phone: 0542 95 25 96 (+213542952596).
  - WhatsApp: wa.me/213542952596.
  - E-mail: omar.benassid13@gmail.com.
  - Address: Kiffan, Tlemcen.
- **Visual identity:** the owner is choosing between three directions (bold modern agency, premium dark tech, modern with a light Tlemcen touch). DESIGN.md records the chosen world after the build.
- **Real photo:** the owner agreed to supply a real photo of himself for "Pourquoi Broda Dev". Until it arrives, the slot stays empty. Never generate a face for him.

## Evidence on Hand

- **G-Stock, real screens** from the restaurant Lamssat Tlemcen, which agreed to be named.
  - The figures are sample data from a showcase database. Say so.
  - Location: `public/screens/gstock/`.
- **POS-MINI MARKET (ex-SuperPOS), real screens** in French and Arabic: checkout, payment, products, orders, debt book, receipt, refund, login.
  - No named client is confirmed.
  - Location: `public/screens/superpos/`.
- **Budget Employé:** demonstration screens with a "Données de démonstration" badge. Location: `public/screens/budget-employe/`.
- **Software visuals (owner's decision, 2026-09-24):** faithful HD recreations of the real screens, with the same layout and features, fresh Algerian data (DA prices, local product names) and premium device frames. Never show a feature, screen or module the software does not have. POS-MINI MARKET closing and report screens don't exist, so they are not shown.
- **Websites, Shopify, landing pages, ads, logos:** no real client work yet. Everything is shown through invented brands labelled "Exemple":
  - ZNIQA, a streetwear T-shirt brand.
  - NOUARA, a handbag brand, with a demo product page at `/demo/nouara`.
  - A landing-page product.
  - A Shopify store.
  - 4–6 logo brands.
- **Imagery:** product, scene and lifestyle photos are generated with Canva AI and recorded in `CREDITS.md`. Any stock photo needs its source and licence there. The Adobe Stock previews found in v3 are unlicensed and not used.
- **Never invented:** testimonials, client names other than Lamssat Tlemcen, client logos, statistics, campaign results, Broda Dev prices. Reviews on the demo landing page are labelled "Avis d'exemple". The ads dashboard is labelled "Chiffres d'exemple".

## Product Principles

1. **Real or labelled.** Every screen is a real program screen, a faithful recreation of one, or an example that says so.
2. **Show the work.** Each service is presented by what it produces, in a realistic frame (laptop, phone, POS terminal, browser, social feed), never by adjectives.
3. **Few pages, strong flow.** One headline, one great visual, short text and one action per section. Every section must make the visitor want to keep scrolling.
4. **From here.** Tlemcen, Algeria, Arabic, DA and cash on delivery are the starting point.
5. **Youthful and premium.** Fast, dynamic, confident. Never template-like.

## Accessibility & Inclusion

Arabic RTL must be as polished as French. Meet WCAG AA contrast. Pages must stay usable on small phones (320px) with no horizontal scrolling. All motion respects `prefers-reduced-motion`.
