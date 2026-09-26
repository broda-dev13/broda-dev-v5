import { SITE, type Lang } from "@/content/site";
import styles from "./KeysNav.module.css";

/**
 * The services that have a section on the home, as one row of keys. It
 * slides in under the bar while the visitor is inside the services and
 * lights the key of the section in view (HomeMotion drives `data-shown` and
 * `aria-current`). Each key jumps to its section; a compact service (no
 * section of its own) takes no key.
 */
export function KeysNav({ lang }: { lang: Lang }) {
  const t = SITE[lang];
  return (
    <nav className={styles.keys} aria-label={t.servicesLabel} data-keys>
      <ol>
        {t.services.filter((s) => !s.compact).map((s, i) => (
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
