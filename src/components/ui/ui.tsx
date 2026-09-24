import styles from "./ui.module.css";

/** The drawn arrow for buttons and links; it points the reading way (flipped in RTL by CSS). */
export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

/** Pill button classes: `ink` (primary, black) and `line` (secondary, outlined). */
export const pill = {
  ink: `${styles.pill} ${styles.ink}`,
  line: `${styles.pill} ${styles.line}`,
  small: styles.small,
};
