import { Laptop, Phone, PosTerminal } from "@/components/frames/Devices";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { whatsapp } from "@/lib/contact";
import { FORM_MARKERS, PISTES, type Lang } from "@/content/pistes";
import { NuitMotion } from "./NuitMotion";
import styles from "./Nuit.module.css";

/**
 * Direction 2, "Nuit": the shop after closing, when the till is the only
 * light in the room. Near-black void, no boxes and no rules: rank is depth
 * and brightness. The receipt paper is the brightest object on the page, and
 * one mint signal marks every action.
 */
const RECEIPT = [
  ["Semoule moyenne 1kg", "2 × 110,00", "220,00"],
  ["Pois chiches 1kg", "1 × 350,00", "350,00"],
  ["Huile d'olive 1L", "1 × 1 200,00", "1 200,00"],
  ["Dattes Deglet Nour", "1 × 450,00", "450,00"],
  ["Thé vert 250g", "1 × 280,00", "280,00"],
];

export function Nuit({ lang }: { lang: Lang }) {
  const t = PISTES[lang];
  const other = lang === "ar" ? "fr" : "ar";
  const r = (name: string) => `/images/renders/${name}-${lang}`;

  return (
    <div className={styles.page} dir={lang === "ar" ? "rtl" : "ltr"} data-lang={lang}>
      <header className={styles.bar}>
        <a className={styles.logo} href={`/${lang}/pistes/nuit`} aria-label={t.nav.home}>
          <i aria-hidden="true" />
          Broda Dev
        </a>
        <nav className={styles.links} aria-label="Principale">
          <a href="#services">{t.nav.services}</a>
          <a href="#logiciels">{t.nav.software}</a>
          <a href="#realisations">{t.nav.work}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <a className={styles.lang} href={`/${other}/pistes/nuit`} lang={other} aria-label={t.nav.switchLang}>
          {t.nav.switchShort}
        </a>
        <a className={styles.quote} href={whatsapp(t.waMessage)}>
          <span className={styles.long}>{t.nav.quote}</span>
          <span className={styles.short}>{t.nav.quoteShort}</span>
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.light} aria-hidden="true" />
          <h1 id="hero-title" className={styles.title}>
            <span data-reveal>{t.hero.titleA}</span>
            <span data-reveal className={styles.titleFar}>
              {t.hero.titleB}
            </span>
          </h1>
          <p className={styles.lead} data-fade>
            {t.hero.lead}
          </p>
          <div className={styles.actions} data-fade>
            <a className={styles.primary} href={whatsapp(t.waMessage)}>
              {t.hero.primary}
            </a>
            <a className={styles.secondary} href={whatsapp(t.waMessage)}>
              <WhatsAppIcon className={styles.waIcon} />
              {t.hero.whatsapp}
            </a>
          </div>

          <figure className={styles.stage} data-stage>
            <div className={styles.stageTilt} data-tilt>
              <PosTerminal
                className={styles.pos}
                screen={{ src: r("superpos-caisse"), alt: t.hero.posAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 62vw, 94vw", priority: true }}
              />
              <div className={styles.receipt} data-receipt aria-hidden="true">
                <p className={styles.receiptHead}>
                  SuperPOS
                  <small>
                    Caisse 001 · <span className="ltr">24/09/2026 19:42</span>
                  </small>
                </p>
                <dl>
                  {RECEIPT.map(([name, qty, total]) => (
                    <div key={name}>
                      <dt>
                        {name}
                        <small className="ltr">{qty}</small>
                      </dt>
                      <dd className="ltr">{total}</dd>
                    </div>
                  ))}
                </dl>
                <p className={styles.receiptTotal}>
                  <span>{lang === "ar" ? "المجموع" : "TOTAL"}</span>
                  <b className="ltr">3 070,00 {lang === "ar" ? "دج" : "DA"}</b>
                </p>
                <p className={styles.receiptBars} />
              </div>
            </div>
            <Phone
              className={styles.heroPhone}
              bare
              screen={{ src: r("tiktok-zniqa"), alt: t.hero.adAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 17vw, 38vw", priority: true }}
            />
            <figcaption className={styles.caption}>{t.hero.caption}</figcaption>
          </figure>
        </section>

        <section className={styles.service} id="shopify" data-service aria-labelledby="shopify-title">
          <div className={styles.serviceSticky}>
            <div className={styles.serviceText}>
              <h2 id="shopify-title" className={styles.serviceTitle}>
                {t.service.kicker}.
              </h2>
              <p className={styles.serviceLead}>{t.service.title}</p>
              <p className={styles.serviceBody}>{t.service.body}</p>
              <ol className={styles.steps}>
                {t.service.features.map((f, i) => (
                  <li key={f} data-step={i}>
                    <span className="ltr">{i + 1}</span>
                    {f}
                  </li>
                ))}
              </ol>
              <a className={styles.primary} href={`/${lang}/demo/zniqa`}>
                {t.service.cta}
              </a>
              <p className={styles.example}>{t.service.label}</p>
            </div>

            <figure className={styles.depth}>
              <Laptop
                className={styles.far}
                tone="graphite"
                screen={{ src: r("zniqa-bureau"), alt: t.service.laptopAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 40vw, 90vw" }}
              />
              <Phone
                className={styles.near}
                statusBg="#ffffff"
                screen={{ src: r("zniqa-mobile-form"), alt: t.service.phoneAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 22vw, 60vw" }}
              >
                {FORM_MARKERS.map((top, i) => (
                  <span key={top} className={styles.focus} data-focus={i} style={{ top: `${top}%` }} aria-hidden="true" />
                ))}
              </Phone>
            </figure>
          </div>
        </section>
      </main>

      <a className={styles.wa} href={whatsapp(t.waMessage)} aria-label={t.whatsappLabel}>
        <WhatsAppIcon />
      </a>
      <NuitMotion />
    </div>
  );
}
