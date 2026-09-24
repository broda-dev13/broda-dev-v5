import styles from "./SuperPosBar.module.css";

/**
 * The SuperPOS top bar, shared by every rebuilt screen: the logo, the open
 * order tabs (several orders run in parallel) and the signed-in cashier.
 */
export function SuperPosBar({ tabs = ["001"], className }: { tabs?: string[]; className?: string }) {
  return (
    <header className={`${styles.bar} ${className ?? ""}`}>
      <div className={styles.brand}>
        <span className={styles.logo}>S</span>
        <strong>SuperPOS</strong>
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab, i) => (
          <span key={tab} className={i === 0 ? `${styles.tab} ${styles.tabOn}` : styles.tab}>
            {tab}
          </span>
        ))}
        <span className={styles.tabAdd}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <div className={styles.user}>
        <span className={styles.userIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" strokeLinecap="round" />
          </svg>
        </span>
        <span>Amine Kaci</span>
        <span className={styles.menu}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </header>
  );
}
