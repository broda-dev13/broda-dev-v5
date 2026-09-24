import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "./routing";

/** Validates a page's [locale] segment (404 otherwise) and enables static rendering for it. */
export function enterLocale(locale: string): Locale {
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return locale;
}
