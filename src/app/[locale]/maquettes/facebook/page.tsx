import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { FeedAd } from "@/components/mockups/social/FeedAd";

// Capture surface for scripts/render.mjs: ZNIQA's example page post, 390 x 844.
export const metadata: Metadata = { title: "ZNIQA · publication sponsorisée", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/facebook">) {
  const { locale } = await params;
  return <FeedAd kind="facebook" lang={enterLocale(locale) === "ar" ? "ar" : "fr"} />;
}
