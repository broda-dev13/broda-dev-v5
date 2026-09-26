import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { isRtl, routing } from "@/i18n/routing";
import { PREVIEW, SITE_URL } from "@/lib/site";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Analytics } from "@/components/site/Analytics";
import { WhatsAppConfirm } from "@/components/site/WhatsAppConfirm";

// Site faces (direction Affiche): Archivo with its width axis, Noto Kufi
// Arabic, declared in globals.css from public/fonts/ and preloaded below so
// the first paint is already in them. Demo brands load their own faces.
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    robots: PREVIEW ? { index: false, follow: false } : undefined,
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  // Arabic pages preload their faces, the Latin letters of Kufi included
  // (brand names inside Arabic sentences): without them the text reflows when
  // the fonts land and the page shifts (CLS 0.23–0.28 measured). On French
  // pages Archivo swaps in place with no measurable shift (CLS ≤ 0.003), so it
  // loads in turn, behind the hero's image (the page's largest paint).
  if (isRtl(locale)) {
    const font = { as: "font", type: "font/woff2", crossOrigin: "anonymous" } as const;
    preload("/fonts/noto-kufi-arabic-arabic-subset-wght.woff2", font);
    preload("/fonts/noto-kufi-arabic-latin-wght-normal.woff2", font);
    preload("/fonts/archivo-latin-wdth-normal.woff2", font);
  }

  return (
    <html lang={locale} dir={isRtl(locale) ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <SmoothScroll />
        <Analytics />
        <WhatsAppConfirm lang={locale} />
      </body>
    </html>
  );
}
