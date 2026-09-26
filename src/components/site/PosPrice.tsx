import { SITE, type Lang } from "@/content/site";
import styles from "./PosPrice.module.css";

/**
 * The price of POS-MINI MARKET as a poster sticker beside its name (home
 * Logiciels section and the Logiciels page). It left the hero on
 * 2026-09-26: over the headline it priced the whole studio.
 */
export function PosPrice({ lang }: { lang: Lang }) {
  const p = SITE[lang].software.price;
  return (
    <span className={styles.price}>
      <span className="ltr">{p.amount}</span> <span className={styles.cur}>{p.currency}</span>
    </span>
  );
}
