import { Arrow } from "@/components/ui/ui";
import { SITE, type Lang } from "@/content/site";
import styles from "./Overview.module.css";

/**
 * The six services as a poster index: one row per service, set big, each row
 * jumping to its section. On hover (or keyboard focus) a row fills with
 * yellow like a shop sign lighting up.
 */
export function Overview({ lang }: { lang: Lang }) {
  const t = SITE[lang];
  return (
    <section className={styles.overview} id="services" aria-labelledby="overview-title">
      <div className={styles.head}>
        <h2 id="overview-title" className={styles.title}>
          {t.overview.title}
        </h2>
        <p className={styles.lead}>{t.overview.lead}</p>
      </div>
      <ol className={styles.list}>
        {t.services.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={styles.row}>
              <span className={styles.name}>{s.long}</span>
              <span className={styles.line}>{s.line}</span>
              <span className={styles.go} aria-hidden="true">
                <Arrow />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
