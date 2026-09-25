import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { MiniMarketSite } from "@/components/mockups/sites/MiniMarketSite";

// Capture surface for scripts/render.mjs: MINI MARKET's example showcase site, 1440 x 900.
export const metadata: Metadata = { title: "MINI MARKET · site vitrine (exemple)", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/site-minimarket">) {
  const { locale } = await params;
  return <MiniMarketSite lang={enterLocale(locale) === "ar" ? "ar" : "fr"} />;
}
