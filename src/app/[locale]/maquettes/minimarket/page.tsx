import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { MiniMarketProfile } from "@/components/mockups/social/MiniMarketProfile";

// Capture surface for scripts/render.mjs: MINI MARKET's example social profile, 390 x 844.
export const metadata: Metadata = { title: "MINI MARKET · profil (exemple)", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/minimarket">) {
  const { locale } = await params;
  return <MiniMarketProfile lang={enterLocale(locale) === "ar" ? "ar" : "fr"} />;
}
