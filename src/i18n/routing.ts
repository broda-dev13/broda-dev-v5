import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "ar"],
  defaultLocale: "fr",
  localePrefix: "always",
  // No cookie at all for now (the owner, 2026-09-26): "/" follows the
  // browser's language each time instead of remembering the last one.
  localeCookie: false,
});

export type Locale = (typeof routing.locales)[number];

export const isRtl = (locale: string) => locale === "ar";
