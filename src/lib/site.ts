import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

/**
 * The site's public address. v3 declared https://brodadev.dz; set
 * NEXT_PUBLIC_SITE_URL on the host (Netlify) if the domain differs.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://brodadev.dz").replace(/\/$/, "");

/**
 * Preview build: every page noindex, robots.txt disallows everything. The
 * owner has not yet chosen between this version and the Astro v3; switch to
 * false (or set NEXT_PUBLIC_PREVIEW=false) on the day this one ships.
 */
export const PREVIEW = process.env.NEXT_PUBLIC_PREVIEW !== "false";

const OG_LOCALE: Record<Locale, string> = { fr: "fr_DZ", ar: "ar_DZ" };

/** Canonical, hreflang alternates and share cards for a page at `path` (after the locale, e.g. "" or "/services"). */
export function pageMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `/${l}${path}`]));
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { ...languages, "x-default": `/${routing.defaultLocale}${path}` },
    },
    openGraph: {
      type: "website",
      siteName: "Broda Dev",
      locale: OG_LOCALE[locale],
      url: `/${locale}${path}`,
      title,
      description,
      images: [{ url: `/og/og-${locale}.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/og/og-${locale}.png`] },
    robots: PREVIEW ? { index: false, follow: false } : { index: true, follow: true },
  };
}
