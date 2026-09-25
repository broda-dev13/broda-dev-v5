"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SiteHeader.module.css";

type Props = {
  labels: { open: string; close: string; quote: string; switchLang: string };
  links: { href: string; label: string }[];
  langHref: string;
  other: string;
  quoteHref: string;
};

/**
 * Phones: the four pages as a full yellow poster sheet. Escape or the button
 * closes it; while it is open, Tab stays between the button and the sheet.
 */
export function MobileMenu({ labels, links, langHref, other, quoteHref }: Props) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const sheet = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    sheet.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      } else if (e.key === "Tab") {
        const ring = [button.current, ...(sheet.current?.querySelectorAll<HTMLElement>("a") ?? [])].filter((el) => el !== null);
        const first = ring[0];
        const last = ring[ring.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (!ring.includes(document.activeElement as HTMLElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={button}
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls="menu-sheet"
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((o) => !o)}
      >
        <span data-open={open || undefined} aria-hidden="true" />
      </button>
      <div id="menu-sheet" ref={sheet} className={styles.sheet} data-open={open || undefined} hidden={!open}>
        <nav aria-label={labels.open}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className={styles.sheetQuote} href={quoteHref}>
          {labels.quote}
        </a>
        <a className={styles.sheetLang} href={langHref} lang={other} hrefLang={other}>
          {labels.switchLang}
        </a>
      </div>
    </>
  );
}
