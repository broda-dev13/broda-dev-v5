import "@fontsource-variable/figtree/wght.css";
import { LogoMiniMarketMark } from "@/components/brands/Logos";
import styles from "./SuperPosBar.module.css";

/**
 * The POS-MINI MARKET top bar, shared by every rebuilt screen: the name and
 * cart mark, the open order tabs (several orders run in parallel) and the
 * signed-in cashier. The software was called SuperPOS until the owner
 * renamed it on 2026-09-25; the components keep that name in code.
 */
export function SuperPosBar({ tabs = ["001"], className }: { tabs?: string[]; className?: string }) {
  return (
    <header className={`${styles.bar} ${className ?? ""}`}>
      <PosBrand />
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

/** The software's name and mark, at the start of every bar (the debt book has its own bar). */
export function PosBrand() {
  return (
    <div className={styles.brand}>
      <LogoMiniMarketMark className={styles.mark} />
      <strong className={styles.name}>
        <span>POS</span>-MINI MARKET
      </strong>
    </div>
  );
}
