import { CONTACT, whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import styles from "./SiteFooter.module.css";

/** The footer: the wordmark as a poster across the page, then the map of the site and the contacts. */
export function SiteFooter({ lang }: { lang: Lang }) {
  const site = SITE[lang];
  const t = site.footer;
  const other: Lang = lang === "ar" ? "fr" : "ar";
  return (
    <footer className={styles.footer}>
      <p className={styles.mark} aria-hidden="true">
        Broda<span>Dev</span>
      </p>
      <div className={styles.cols}>
        <nav aria-label={t.services}>
          <h2>{t.services}</h2>
          <ul>
            {site.services.map((s) => (
              <li key={s.id}>
                <a href={`/${lang}#${s.id}`}>{s.long}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={t.pages}>
          <h2>{t.pages}</h2>
          <ul>
            <li>
              <a href={`/${lang}`}>{t.home}</a>
            </li>
            <li>
              <a href={`/${lang}/services`}>{site.nav.services}</a>
            </li>
            <li>
              <a href={`/${lang}/logiciels`}>{site.nav.software}</a>
            </li>
            <li>
              <a href={`/${lang}/realisations`}>{site.nav.work}</a>
            </li>
            <li>
              <a href={`/${lang}/contact`}>{site.nav.contact}</a>
            </li>
          </ul>
        </nav>
        <div>
          <h2>{t.contact}</h2>
          <ul>
            <li>
              <a href={whatsapp(site.waMessage)}>WhatsApp</a>
            </li>
            <li>
              <a className="ltr" href={`tel:${CONTACT.tel}`}>
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>{site.contact.address}</li>
          </ul>
        </div>
      </div>
      <div className={styles.base}>
        <p>
          © <span className="ltr">2026</span> {t.rights}
        </p>
        <p>{t.examples}</p>
        <a href={`/${other}`} lang={other} hrefLang={other}>
          {site.nav.switchLang}
        </a>
      </div>
    </footer>
  );
}
