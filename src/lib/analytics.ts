/**
 * Measurement for Broda Dev's own site (it sells media buying, so it is
 * measured too): Google Analytics 4, the Meta Pixel and the TikTok Pixel.
 * Each loads only when its ID is set on the host:
 *   NEXT_PUBLIC_GA4_ID           G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID    digits
 *   NEXT_PUBLIC_TIKTOK_PIXEL_ID  the pixel code
 * With none set, nothing loads and nothing is sent.
 *
 * Conversions, each with the service it came from (`service`):
 *   whatsapp  a WhatsApp link      GA4 whatsapp_click · Meta Contact · TikTok Contact
 *   phone     a tel: link          GA4 phone_click    · Meta Contact · TikTok Contact
 *   trial     the free trial       GA4 trial_click    · Meta StartTrial · TikTok ClickButton
 *   lead      the contact form     GA4 generate_lead  · Meta Lead · TikTok SubmitForm
 * The three that open WhatsApp count once the visitor confirms it
 * (WhatsAppConfirm), not at the first click.
 */

export const IDS = {
  ga4: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  meta: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "",
};

export const trackingOn = Boolean(IDS.ga4 || IDS.meta || IDS.tiktok);

export type Conversion = "whatsapp" | "phone" | "trial" | "lead";

type Queue = ((...args: unknown[]) => void) & { queue?: unknown[]; push?: unknown; loaded?: boolean; version?: string; callMethod?: (...args: unknown[]) => void };
type TikTok = unknown[] & Record<string, unknown> & { page: () => void; track: (event: string, props?: object) => void };
type Win = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; fbq?: Queue; _fbq?: Queue; ttq?: TikTok; TiktokAnalyticsObject?: string };

const GA4_EVENT: Record<Conversion, string> = { whatsapp: "whatsapp_click", phone: "phone_click", trial: "trial_click", lead: "generate_lead" };
const META_EVENT: Record<Conversion, string> = { whatsapp: "Contact", phone: "Contact", trial: "StartTrial", lead: "Lead" };
const TIKTOK_EVENT: Record<Conversion, string> = { whatsapp: "Contact", phone: "Contact", trial: "ClickButton", lead: "SubmitForm" };

/** The service a link belongs to: its nearest data-service, else where it sits. */
export const serviceOf = (el: Element) =>
  el.closest<HTMLElement>("[data-service]")?.dataset.service ??
  (el.closest("[data-float]") ? "whatsapp-float" : undefined) ??
  el.closest("section[id]")?.id ??
  (el.closest("header") ? "bar" : el.closest("footer") ? "footer" : location.pathname);

/** Records one conversion on every loaded (or queued) platform. */
export function track(conversion: Conversion, service: string) {
  const w = window as Win;
  w.gtag?.("event", GA4_EVENT[conversion], { service, transport_type: "beacon" });
  w.fbq?.("track", META_EVENT[conversion], { content_name: service, content_category: conversion });
  w.ttq?.track(TIKTOK_EVENT[conversion], { content_name: service, content_type: conversion });
}

function inject(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

let started = false;

/**
 * Loads the configured platforms once. Each sets up its official command
 * queue first, so events recorded before its library arrives are kept.
 */
export function startTracking() {
  if (started || !trackingOn) return;
  started = true;
  const w = window as Win;

  if (IDS.ga4) {
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag() {
      // gtag.js reads the arguments object itself, as in Google's snippet.
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    w.gtag("js", new Date());
    w.gtag("config", IDS.ga4);
    inject(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(IDS.ga4)}`);
  }

  if (IDS.meta && !w.fbq) {
    const n: Queue = function fbq(...args: unknown[]) {
      if (n.callMethod) n.callMethod(...args);
      else n.queue!.push(args);
    };
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    w.fbq = n;
    w._fbq = n;
    inject("https://connect.facebook.net/en_US/fbevents.js");
    w.fbq("init", IDS.meta);
    w.fbq("track", "PageView");
  }

  if (IDS.tiktok && !w.ttq) {
    // TikTok's own loader, written out: a queue of method calls until events.js arrives.
    w.TiktokAnalyticsObject = "ttq";
    const ttq = [] as unknown as TikTok;
    const methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
    const defer = (target: Record<string, unknown> & unknown[], method: string) => {
      target[method] = (...args: unknown[]) => target.push([method, ...args]);
    };
    for (const m of methods) defer(ttq, m);
    const base = "https://analytics.tiktok.com/i18n/pixel/events.js";
    ttq._i = { [IDS.tiktok]: Object.assign([], { _u: base }) };
    ttq._t = { [IDS.tiktok]: Date.now() };
    ttq._o = { [IDS.tiktok]: {} };
    w.ttq = ttq;
    inject(`${base}?sdkid=${encodeURIComponent(IDS.tiktok)}&lib=ttq`);
    ttq.page();
  }
}
