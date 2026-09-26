"use client";

import { useEffect } from "react";
import { serviceOf, startTracking, track, trackingOn } from "@/lib/analytics";

/**
 * Loads the measurement platforms (src/lib/analytics.ts) out of the way of
 * the page: at the visitor's first interaction, or four seconds after the
 * page has loaded, whichever comes first. One click listener records the
 * calls (tel: links); WhatsApp, the free trial and the form are recorded by
 * WhatsAppConfirm, once the visitor agrees to open WhatsApp.
 * Renders nothing, and does nothing at all when no ID is set.
 */
export function Analytics() {
  useEffect(() => {
    if (!trackingOn) return;

    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    let timer = 0;
    const start = () => {
      events.forEach((e) => window.removeEventListener(e, start));
      window.clearTimeout(timer);
      startTracking();
    };
    events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    const later = () => {
      timer = window.setTimeout(start, 4000);
    };
    if (document.readyState === "complete") later();
    else window.addEventListener("load", later, { once: true });

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href^='tel:']");
      if (!a) return;
      startTracking();
      track("phone", serviceOf(a));
    };
    document.addEventListener("click", onClick, true);

    return () => {
      events.forEach((e) => window.removeEventListener(e, start));
      window.removeEventListener("load", later);
      window.clearTimeout(timer);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
