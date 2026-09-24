import { Browser, Phone } from "@/components/frames/Devices";
import { Arrow, pill } from "@/components/ui/ui";
import { SITE, type Lang } from "@/content/site";
import styles from "./Sites.module.css";

/**
 * Websites: a showcase site in a browser window (the invented supérette
 * HANOUT 13) and a landing page on a phone (the invented brand ZNIQA),
 * which the visitor can open and try. Both labelled as examples.
 */
export function Sites({ lang, index }: { lang: Lang; index: number }) {
  const t = SITE[lang].sites;
  return (
    <section className={styles.sites} id="sites" data-section={index} aria-labelledby="sites-title">
      <div className={styles.text}>
        <h2 id="sites-title" className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.lead}>{t.lead}</p>
        <p className={styles.body}>{t.body}</p>
        <ul className={styles.features}>
          {t.features.map((f) => (
            <li key={f}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <a className={pill.ink} href={`/${lang}/demo/zniqa/offre`}>
          {t.cta}
          <Arrow />
        </a>
        <p className={styles.example}>{t.label}</p>
      </div>

      <figure className={styles.board}>
        <Browser
          className={styles.browser}
          url="hanout13.dz"
          screen={{ src: `/images/renders/site-hanout-${lang}`, alt: t.siteAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 48vw, 92vw" }}
        />
        <Phone
          className={styles.phone}
          bare
          screen={{ src: `/images/renders/zniqa-offre-mobile-${lang}`, alt: t.landingAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 16vw, 36vw" }}
        />
      </figure>
    </section>
  );
}
