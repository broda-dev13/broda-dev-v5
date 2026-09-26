"use client";

import { useEffect, useId, useRef, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { pill } from "@/components/ui/ui";
import { serviceOf, startTracking, track, trackingOn } from "@/lib/analytics";
import { ASK_WHATSAPP, CONTACT, type WhatsAppRequest } from "@/lib/contact";
import type { SiteCopy } from "@/content/site";
import styles from "./WhatsAppConfirm.module.css";

/**
 * No WhatsApp link leaves the site on the first click (the owner's call,
 * 2026-09-26): a small yellow card says the visitor is leaving Broda Dev,
 * shows the message already written, and asks. Yes opens WhatsApp beside
 * the site, in a new tab or the app; no, Escape or a tap outside stays.
 * Every link to wa.me is caught here; the contact form asks through
 * `askWhatsApp`. The conversion is counted on the yes. It receives its
 * own lines only (`SITE[lang].leave`), so the site's copy stays out of the
 * browser's scripts.
 */
export function WhatsAppConfirm({ t }: { t: SiteCopy["leave"] }) {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const open = useRef<HTMLButtonElement>(null);
  const [request, setRequest] = useState<WhatsAppRequest | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    const ask = (next: WhatsAppRequest) => {
      const box = dialog.current;
      if (!box || box.open) return;
      setRequest(next);
      // The page stays put behind the card (the scrollbar keeps its place).
      html.style.overflow = "hidden";
      html.style.scrollbarGutter = "stable";
      box.showModal();
      open.current?.focus();
    };
    const onClick = (e: MouseEvent) => {
      // A click with a modifier asks for a new tab on purpose: it leaves nothing.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[href^='https://wa.me/']");
      if (!a) return;
      e.preventDefault();
      ask({ href: a.href, conversion: a.dataset.track === "trial" ? "trial" : "whatsapp", service: serviceOf(a) });
    };
    const onAsk = (e: Event) => ask((e as CustomEvent<WhatsAppRequest>).detail);
    const onClose = () => {
      html.style.overflow = "";
      html.style.scrollbarGutter = "";
    };
    const box = dialog.current;
    document.addEventListener("click", onClick);
    window.addEventListener(ASK_WHATSAPP, onAsk);
    box?.addEventListener("close", onClose);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener(ASK_WHATSAPP, onAsk);
      box?.removeEventListener("close", onClose);
    };
  }, []);

  const message = request ? (new URL(request.href).searchParams.get("text") ?? "") : "";

  function go() {
    if (!request) return;
    if (trackingOn) {
      startTracking();
      track(request.conversion, request.service);
    }
    window.open(request.href, "_blank", "noopener");
    dialog.current?.close();
  }

  return (
    <dialog
      ref={dialog}
      className={styles.dialog}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-text`}
      // A tap on the dimmed page around the card closes it.
      onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
      data-lenis-prevent
    >
      <div className={styles.card}>
        <p className={styles.to}>
          <span className={styles.badge}>
            <WhatsAppIcon />
          </span>
          <span>
            <b>Broda Dev</b> <span className="ltr">{CONTACT.phone}</span>
          </span>
        </p>
        <h2 id={`${id}-title`} className={styles.title}>
          {t.title}
        </h2>
        <p id={`${id}-text`} className={styles.text}>
          {t.text}
        </p>
        {message && (
          <figure className={styles.message}>
            <figcaption>{t.message}</figcaption>
            <blockquote>{message}</blockquote>
            <p>{t.edit}</p>
          </figure>
        )}
        <div className={styles.actions}>
          <button ref={open} type="button" className={`${pill.ink} ${styles.open}`} onClick={go}>
            <WhatsAppIcon />
            {t.open}
          </button>
          <button type="button" className={pill.line} onClick={() => dialog.current?.close()}>
            {t.stay}
          </button>
        </div>
      </div>
    </dialog>
  );
}
