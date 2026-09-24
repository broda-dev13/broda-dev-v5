import { Laptop, Phone, PosTerminal } from "@/components/frames/Devices";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { whatsapp } from "@/lib/contact";
import { khatamPath } from "@/lib/khatam";
import { FORM_MARKERS, PISTES, type Lang } from "@/content/pistes";
import { ZelligeMotion } from "./ZelligeMotion";
import styles from "./Zellige.module.css";

/**
 * Direction 3, "Zellige": a modern software studio with Tlemcen underfoot.
 * Deep glazed green owns the hero, the layout keeps to a tile module whose
 * seams stay visible, and heritage appears in two exact places only: one
 * star-and-cross frieze and the khatam stars that number things. The work
 * sits in a glaze-white window that is laid tile by tile when the page opens.
 */
const TILES = 36; // the window's reveal grid, 6 x 6

export function Zellige({ lang }: { lang: Lang }) {
  const t = PISTES[lang];
  const other = lang === "ar" ? "fr" : "ar";
  const r = (name: string) => `/images/renders/${name}-${lang}`;

  return (
    <div className={styles.page} dir={lang === "ar" ? "rtl" : "ltr"} data-lang={lang}>
      <div className={styles.field}>
        <header className={styles.bar}>
          <a className={styles.logo} href={`/${lang}/pistes/zellige`} aria-label={t.nav.home}>
            <Star className={styles.logoStar} />
            Broda Dev
          </a>
          <nav className={styles.links} aria-label="Principale">
            <a href="#services">{t.nav.services}</a>
            <a href="#logiciels">{t.nav.software}</a>
            <a href="#realisations">{t.nav.work}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <a className={styles.lang} href={`/${other}/pistes/zellige`} lang={other} aria-label={t.nav.switchLang}>
            {t.nav.switchShort}
          </a>
          <a className={styles.quote} href={whatsapp(t.waMessage)}>
            <span className={styles.long}>{t.nav.quote}</span>
          <span className={styles.short}>{t.nav.quoteShort}</span>
          </a>
        </header>

        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.copy}>
            <h1 id="hero-title" className={styles.title}>
              <span data-rise>{t.hero.titleA}</span>
              <span data-rise className={styles.titleB}>
                {t.hero.titleB}
              </span>
            </h1>
            <p className={styles.lead} data-rise>
              {t.hero.lead}
            </p>
            <div className={styles.actions} data-rise>
              <a className={styles.primary} href={whatsapp(t.waMessage)}>
                {t.hero.primary}
              </a>
              <a className={styles.secondary} href={whatsapp(t.waMessage)}>
                <WhatsAppIcon className={styles.waIcon} />
                {t.hero.whatsapp}
              </a>
            </div>
          </div>

          <figure className={styles.window}>
            <div className={styles.frieze} aria-hidden="true" />
            <div className={styles.windowBody}>
              <PosTerminal
                className={styles.pos}
                screen={{ src: r("superpos-caisse"), alt: t.hero.posAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 40vw, 90vw", priority: true }}
              />
              <Phone
                className={styles.heroPhone}
                bare
                screen={{ src: r("tiktok-zniqa"), alt: t.hero.adAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 14vw, 36vw", priority: true }}
              />
            </div>
            <div className={styles.tiles} aria-hidden="true" data-tiles>
              {Array.from({ length: TILES }, (_, i) => (
                <i key={i} style={{ "--d": Math.abs(Math.floor(i / 6) - 2.5) + Math.abs((i % 6) - 2.5) } as React.CSSProperties} />
              ))}
            </div>
            <figcaption className={styles.caption}>{t.hero.caption}</figcaption>
          </figure>
        </section>
      </div>

      <main>
        <section className={styles.service} id="shopify" aria-labelledby="shopify-title" data-service>
          <div className={styles.serviceText}>
            <h2 id="shopify-title" className={styles.serviceTitle}>
              {t.service.kicker}.
            </h2>
            <p className={styles.serviceLead}>{t.service.title}</p>
            <p className={styles.serviceBody}>{t.service.body}</p>
            <ol className={styles.features}>
              {t.service.features.map((f, i) => (
                <li key={f}>
                  <span className={styles.bullet} aria-hidden="true">
                    <Star />
                    <b>{i + 1}</b>
                  </span>
                  {f}
                </li>
              ))}
            </ol>
            <a className={styles.primary} href={`/${lang}/demo/zniqa`}>
              {t.service.cta}
            </a>
            <p className={styles.example}>{t.service.label}</p>
          </div>

          <figure className={styles.panel} data-panel>
            <Laptop
              className={styles.panelLaptop}
              screen={{ src: r("zniqa-bureau"), alt: t.service.laptopAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 44vw, 90vw" }}
            />
            <Phone
              className={styles.panelPhone}
              statusBg="#ffffff"
              screen={{ src: r("zniqa-mobile-form"), alt: t.service.phoneAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 17vw, 44vw" }}
            >
              {FORM_MARKERS.map((top, i) => (
                <span key={top} className={styles.marker} style={{ top: `${top}%` }} aria-hidden="true" data-marker>
                  <Star />
                  <b>{i + 1}</b>
                </span>
              ))}
            </Phone>
          </figure>
        </section>
      </main>

      <a className={styles.wa} href={whatsapp(t.waMessage)} aria-label={t.whatsappLabel}>
        <WhatsAppIcon />
      </a>
      <ZelligeMotion />
    </div>
  );
}

const STAR = khatamPath(12, 12, 7.6);
function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={STAR} />
    </svg>
  );
}
