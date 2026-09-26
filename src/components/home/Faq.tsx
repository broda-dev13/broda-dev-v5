import { FAQ } from "@/content/faq";
import type { Lang } from "@/content/site";
import styles from "./Faq.module.css";

/**
 * The frequent questions, closed by default (native details, no script),
 * before the contact on the home and on /contact. Only answers the owner has
 * confirmed are published; in development the drafts show, marked, so he can
 * review them. With nothing confirmed, production shows no FAQ at all.
 */
export function Faq({ lang }: { lang: Lang }) {
  const t = FAQ[lang];
  const drafts = process.env.NODE_ENV !== "production";
  const items = t.items.filter((item) => item.confirmed || drafts);
  if (!items.length) return null;
  return (
    <section className={styles.faq} id="faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className={styles.title}>
        {t.title}
      </h2>
      <div className={styles.questions}>
        {items.map((item) => (
          <details key={item.q}>
            <summary>
              <span>
                {item.q}
                {!item.confirmed && <small className={styles.draft}>{t.draft}</small>}
              </span>
              <i aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
