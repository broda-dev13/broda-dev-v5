// Broda Dev's contact details (PRODUCT.md, Brand Commitments). Every call
// to action ends on WhatsApp, the phone or email: the site posts nothing.

import type { Conversion } from "./analytics";

export const CONTACT = {
  phone: "0542 95 25 96",
  tel: "+213542952596",
  email: "omar.benassid13@gmail.com",
  whatsapp: "213542952596",
} as const;

/** A WhatsApp link that opens a chat with Broda Dev, the message already typed. */
export const whatsapp = (text?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/**
 * WhatsApp never opens without the visitor's yes: WhatsAppConfirm catches
 * every WhatsApp link, and a script (the contact form) asks through this.
 */
export const ASK_WHATSAPP = "broda:whatsapp";
export type WhatsAppRequest = { href: string; conversion: Conversion; service: string };
export const askWhatsApp = (request: WhatsAppRequest) =>
  window.dispatchEvent(new CustomEvent<WhatsAppRequest>(ASK_WHATSAPP, { detail: request }));
