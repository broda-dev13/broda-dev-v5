import styles from "./JumpKeys.module.css";

/**
 * The keys of a page: one per part (the six services, the three programs),
 * the same grammar as the service keys on the home, each jumping to its part.
 */
export function JumpKeys({ label, keys }: { label: string; keys: { id: string; title: string; sub: string }[] }) {
  return (
    <nav className={styles.keys} aria-label={label}>
      <ol style={{ "--n": keys.length } as React.CSSProperties}>
        {keys.map((k, i) => (
          <li key={k.id}>
            <a href={`#${k.id}`}>
              <span className={`${styles.no} ltr`}>{String(i + 1).padStart(2, "0")}</span>
              <b>{k.title}</b>
              <small>{k.sub}</small>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
