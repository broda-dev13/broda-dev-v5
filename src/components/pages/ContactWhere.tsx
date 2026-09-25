import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CONTACT, whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import { PAGES } from "@/content/pages";
import styles from "./ContactWhere.module.css";

/**
 * Where Broda Dev is, said as a poster rather than a map: the place in big
 * type, who it works for, and the three ways in, each one a large key.
 */
export function ContactWhere({ lang }: { lang: Lang }) {
  const site = SITE[lang];
  const t = PAGES[lang].contact.where;
  return (
    <section className={styles.where} aria-labelledby="where-title">
      <h2 id="where-title" className={styles.title}>
        {t.title}
      </h2>
      <div className={styles.side}>
        <p className={styles.line}>{t.line}</p>
        <p className={styles.hours}>{t.hours}</p>
        <ul className={styles.ways}>
          <li>
            <a href={whatsapp(site.waMessage)}>
              <WhatsAppIcon className={styles.wa} />
              <span>WhatsApp</span>
              <b className="ltr">{CONTACT.phone}</b>
            </a>
          </li>
          <li>
            <a href={`tel:${CONTACT.tel}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v3a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3Z" />
              </svg>
              <span>{site.contact.phoneLabel}</span>
              <b className="ltr">{CONTACT.phone}</b>
            </a>
          </li>
          <li>
            <a href={`mailto:${CONTACT.email}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6h18v12H3zM3 7l9 7 9-7" />
              </svg>
              <span>{site.contact.emailLabel}</span>
              <b>{CONTACT.email}</b>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
