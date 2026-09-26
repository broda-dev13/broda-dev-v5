"use client";

import { useEffect } from "react";
import { startTracking, track, trackingOn, type Conversion } from "@/lib/analytics";

/**
 * Loads the measurement platforms (src/lib/analytics.ts) out of the way of
 * the page: at the visitor's first interaction, or four seconds after the
 * page has loaded, whichever comes first. One click listener records the
 * conversions: a WhatsApp link, a tel: link, the free trial. Their service
 * is the nearest data-service, else the section they sit in. With tracking
 * on, WhatsApp opens in a new tab so the page stays to send the event.
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

    const serviceOf = (el: Element) =>
      el.closest<HTMLElement>("[data-service]")?.dataset.service ??
      (el.closest("[data-float]") ? "whatsapp-float" : undefined) ??
      el.closest("section[id]")?.id ??
      (el.closest("header") ? "bar" : el.closest("footer") ? "footer" : location.pathname);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      let conversion: Conversion | null = null;
      if (a.getAttribute("data-track") === "trial") conversion = "trial";
      else if (href.startsWith("https://wa.me/")) conversion = "whatsapp";
      else if (href.startsWith("tel:")) conversion = "phone";
      if (!conversion) return;
      startTracking();
      track(conversion, serviceOf(a));
      // Keep this page alive long enough to send: WhatsApp opens beside it.
      if (href.startsWith("https://wa.me/") && !e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        window.open(href, "_blank", "noopener");
      }
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
