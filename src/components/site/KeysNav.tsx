import { SITE, type Lang } from "@/content/site";
import styles from "./KeysNav.module.css";

/**
 * The six services as one row of keys. It slides in under the bar while the
 * visitor is inside the services and lights the key of the section in view
 * (HomeMotion drives `data-shown` and `aria-current`). Each key jumps to its
 * section.
 */
export function KeysNav({ lang }: { lang: Lang }) {
  const t = SITE[lang];
  return (
    <nav className={styles.keys} aria-label={t.servicesLabel} data-keys>
      <ol>
        {t.services.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} data-key={i}>
              <i aria-hidden="true" />
              <b>{s.title}</b>
              <small>{s.sub}</small>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
