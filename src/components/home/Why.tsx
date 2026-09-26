import { Pic } from "@/components/Pic";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import styles from "./Why.module.css";

/**
 * Why Broda Dev: the one ink band of the page, a quiet passage after the
 * bright services. Four true reasons set large, and the founder's signature
 * with his own photo (assets/owner/team/omar.jpg: cropped and lightly graded,
 * never retouched or generated).
 */
export function Why({ lang }: { lang: Lang }) {
  const t = SITE[lang].why;
  return (
    <section className={styles.why} id="pourquoi" aria-labelledby="why-title">
      <div className={styles.side}>
        <h2 id="why-title" className={styles.title}>
          {t.title}
        </h2>
        <div className={styles.signature}>
          <span className={styles.portrait}>
            <Pic src="/images/team/omar" alt={`${t.founder} · ${t.role}`} width={1300} height={1625} sizes="180px" />
          </span>
          <div>
            <p className={styles.founder}>{t.founder}</p>
            <p className={styles.role}>{t.role}</p>
            <a className={styles.write} href={whatsapp(SITE[lang].waMessage)}>
              <WhatsAppIcon className={styles.wa} />
              {t.write}
            </a>
          </div>
        </div>
      </div>
      <ul className={styles.reasons}>
        {t.reasons.map((r) => (
          <li key={r.title}>
            <h3>{r.title}</h3>
            <p>{r.line}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
