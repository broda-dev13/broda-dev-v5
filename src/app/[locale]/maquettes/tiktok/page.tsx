import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { TikTokAd } from "@/components/mockups/social/TikTokAd";

// Capture surface for scripts/render.mjs: the ZNIQA sponsored video, 390 x 844.
export const metadata: Metadata = { title: "ZNIQA · publicité", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/tiktok">) {
  const { locale } = await params;
  enterLocale(locale);
  return <TikTokAd lang={locale === "ar" ? "ar" : "fr"} />;
}
