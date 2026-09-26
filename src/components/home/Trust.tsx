import { Pic } from "@/components/Pic";
import { Arrow } from "@/components/ui/ui";
import { SITE, type Lang } from "@/content/site";
import styles from "./Trust.module.css";

/**
 * Ils nous font confiance: real clients only, cited with their consent, and
 * what Broda Dev does for them, with the real screen. No testimonial is
 * written for anyone, and the invented demo brands never appear here.
 */
export function Trust({ lang }: { lang: Lang }) {
  const t = SITE[lang].trust;
  return (
    <section className={styles.trust} id="confiance" aria-labelledby="trust-title">
      <div className={styles.head}>
        <h2 id="trust-title" className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.note}>{t.note}</p>
      </div>
      <ul className={styles.clients}>
        {t.clients.map((c) => (
          <li key={c.name} className={styles.client}>
            <span className={styles.screen}>
              <Pic src={c.screen} alt={c.alt} width={1600} height={940} widths={[560]} sizes="240px" />
            </span>
            <div>
              <p className={styles.name}>{c.name}</p>
              <p className={styles.place}>{c.place}</p>
              <p className={styles.work}>{c.work}</p>
              <a className={styles.link} href={`/${lang}${c.href}`}>
                {c.link}
                <Arrow />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
