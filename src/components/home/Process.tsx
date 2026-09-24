import { SITE, type Lang } from "@/content/site";
import styles from "./Process.module.css";

/**
 * The process as the page's step row: four keys on the yellow board, their
 * lights coming on one after the other when the row enters the screen
 * (HomeMotion sets data-run). Here the numbers are a real sequence.
 */
export function Process({ lang }: { lang: Lang }) {
  const t = SITE[lang].process;
  return (
    <section className={styles.process} id="processus" aria-labelledby="process-title">
      <div className={styles.head}>
        <h2 id="process-title" className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.lead}>{t.lead}</p>
      </div>
      <ol className={styles.row} data-steps>
        {t.steps.map((s, i) => (
          <li key={s.title} style={{ "--i": i } as React.CSSProperties}>
            <span className={styles.top}>
              <b className="ltr">{i + 1}</b>
              <i aria-hidden="true" />
            </span>
            <h3>{s.title}</h3>
            <p>{s.line}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
