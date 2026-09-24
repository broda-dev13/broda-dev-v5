import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { isRtl, routing } from "@/i18n/routing";
import { PREVIEW, SITE_URL } from "@/lib/site";
import { SmoothScroll } from "@/components/site/SmoothScroll";

// Direction 1 (bold agency): Archivo with its width axis, Noto Kufi Arabic.
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/noto-kufi-arabic/wght.css";
// Direction 2 (premium dark): Mona Sans with its width axis, Readex Pro.
import "@fontsource-variable/mona-sans/wdth.css";
import "@fontsource-variable/readex-pro/wght.css";
// Direction 3 (Tlemcen touch): Kufam (Latin and Arabic), Hanken Grotesk, Almarai.
import "@fontsource-variable/kufam/wght.css";
import "@fontsource-variable/hanken-grotesk/wght.css";
import "@fontsource/almarai/400.css";
import "@fontsource/almarai/700.css";
import "@fontsource/almarai/800.css";
// Demo brand ZNIQA: Big Shoulders Display, Figtree, Cairo.
// This package's exports map adds ".css" itself.
import "@fontsource-variable/big-shoulders-display/wght";
import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/cairo/wght.css";
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

  return (
    <html lang={locale} dir={isRtl(locale) ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <SmoothScroll />
      </body>
    </html>
  );
}
