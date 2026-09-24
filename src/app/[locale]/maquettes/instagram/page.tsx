import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { FeedAd } from "@/components/mockups/social/FeedAd";

// Capture surface for scripts/render.mjs: ZNIQA's example photo post, 390 x 844.
export const metadata: Metadata = { title: "ZNIQA · photo sponsorisée", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/instagram">) {
  const { locale } = await params;
  return <FeedAd kind="instagram" lang={enterLocale(locale) === "ar" ? "ar" : "fr"} />;
}
