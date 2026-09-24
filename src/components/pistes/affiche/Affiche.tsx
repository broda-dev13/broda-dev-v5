import { Laptop, Phone, PosTerminal } from "@/components/frames/Devices";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { whatsapp } from "@/lib/contact";
import { FORM_MARKERS, PISTES, type Lang } from "@/content/pistes";
import { AfficheMotion } from "./AfficheMotion";
import styles from "./Affiche.module.css";

/**
 * Direction 1, "Affiche": the Algerian shop poster and promo sticker, pushed
 * into a bold agency grammar. Chrome yellow owns the hero, expanded black
 * type carries the sentence, and the six services sit in one row of keys
 * that stays under the bar as the page's navigation.
 */
export function Affiche({ lang }: { lang: Lang }) {
  const t = PISTES[lang];
  const other = lang === "ar" ? "fr" : "ar";
  const r = (name: string) => `/images/renders/${name}-${lang}`;

  return (
    <div className={styles.page} dir={lang === "ar" ? "rtl" : "ltr"} data-lang={lang}>
      <header className={styles.bar} data-bar>
        <a className={styles.logo} href={`/${lang}/pistes/affiche`} aria-label={t.nav.home}>
          Broda<span>Dev</span>
        </a>
        <nav className={styles.links} aria-label="Principale">
          <a href="#services">{t.nav.services}</a>
          <a href="#logiciels">{t.nav.software}</a>
          <a href="#realisations">{t.nav.work}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <a className={styles.lang} href={`/${other}/pistes/affiche`} lang={other} aria-label={t.nav.switchLang}>
          {t.nav.switchShort}
        </a>
        <a className={styles.quote} href={whatsapp(t.waMessage)}>
          <span className={styles.long}>{t.nav.quote}</span>
          <span className={styles.short}>{t.nav.quoteShort}</span>
          <Arrow />
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.line}>
              <span data-line>{t.hero.poster[0]}</span>
              <span className={`${styles.pill} ${styles.pillTotal}`} data-pill aria-hidden="true">
                <span className="ltr">3 070,00</span> {lang === "ar" ? "دج" : "DA"}
              </span>
            </span>
            <span className={styles.line}>
              <span data-line>{t.hero.poster[1]}</span>
            </span>
            <span className={styles.line}>
              <span data-line>{t.hero.poster[2]}</span>
            </span>
            <span className={styles.line}>
              <span data-line>{t.hero.poster[3]}</span>
              <span className={`${styles.pill} ${styles.pillPlay}`} data-pill aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
                </svg>
              </span>
            </span>
          </h1>

          <div className={styles.intro}>
            <p className={styles.lead}>{t.hero.lead}</p>
            <div className={styles.actions}>
              <a className={styles.primary} href={whatsapp(t.waMessage)}>
                {t.hero.primary}
                <Arrow />
              </a>
              <a className={styles.secondary} href={whatsapp(t.waMessage)}>
                <WhatsAppIcon className={styles.waIcon} />
                {t.hero.whatsapp}
              </a>
            </div>
          </div>

          <figure className={styles.stage} data-stage>
            <PosTerminal
              className={styles.pos}
              screen={{ src: r("superpos-caisse"), alt: t.hero.posAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 44vw, 92vw", priority: true }}
            />
            <Phone
              className={styles.heroPhone}
              bare
              screen={{ src: r("tiktok-zniqa"), alt: t.hero.adAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 16vw, 40vw", priority: true }}
            />
            <figcaption className={styles.caption}>{t.hero.caption}</figcaption>
          </figure>
        </section>

        <nav className={styles.keys} aria-label={t.servicesLabel} id="services" data-keys>
          <ol>
            {t.services.map((s, i) => (
              <li key={s.n}>
                <a href={i === 3 ? "#shopify" : "#services"} data-key={i}>
                  <i aria-hidden="true" />
                  <b>{s.title}</b>
                  <small>{s.sub}</small>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section className={styles.service} id="shopify" data-section={3} aria-labelledby="shopify-title">
          <div className={styles.serviceText}>
            <h2 id="shopify-title" className={styles.serviceTitle}>
              {t.service.kicker}.
            </h2>
            <p className={styles.serviceLead}>{t.service.title}</p>
            <p className={styles.serviceBody}>{t.service.body}</p>
            <ol className={styles.features}>
              {t.service.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ol>
            <a className={styles.primary} href={`/${lang}/demo/zniqa`}>
              {t.service.cta}
              <Arrow />
            </a>
            <p className={styles.example}>{t.service.label}</p>
          </div>

          <figure className={styles.board}>
            <Laptop
              className={styles.boardLaptop}
              screen={{ src: r("zniqa-bureau"), alt: t.service.laptopAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 46vw, 92vw" }}
            />
            <Phone
              className={styles.boardPhone}
              statusBg="#ffffff"
              screen={{ src: r("zniqa-mobile-form"), alt: t.service.phoneAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 18vw, 46vw" }}
            >
              {FORM_MARKERS.map((top, i) => (
                <span key={top} className={styles.marker} style={{ top: `${top}%` }} aria-hidden="true">
                  {i + 1}
                </span>
              ))}
            </Phone>
          </figure>
        </section>
      </main>

      <a className={styles.wa} href={whatsapp(t.waMessage)} aria-label={t.whatsappLabel}>
        <WhatsAppIcon />
      </a>
      <AfficheMotion />
    </div>
  );
}

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}
