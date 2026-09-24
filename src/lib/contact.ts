// Broda Dev's contact details (PRODUCT.md, Brand Commitments). Every call
// to action ends on WhatsApp, the phone or email: the site posts nothing.

export const CONTACT = {
  phone: "0542 95 25 96",
  tel: "+213542952596",
  email: "omar.benassid13@gmail.com",
  whatsapp: "213542952596",
} as const;

/** A WhatsApp link that opens a chat with Broda Dev, the message already typed. */
export const whatsapp = (text?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
