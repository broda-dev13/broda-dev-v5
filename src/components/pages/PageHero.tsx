import styles from "./PageHero.module.css";

/**
 * The head of a page: the title set as a poster on the yellow, the lead
 * beside it, and an optional row under them (the jump keys of the page).
 */
export function PageHero({ title, lead, children }: { title: string; lead: string; children?: React.ReactNode }) {
  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.lead}>{lead}</p>
      {children && <div className={styles.row}>{children}</div>}
    </header>
  );
}
