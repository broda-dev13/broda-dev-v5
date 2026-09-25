import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { SuperPosCarnet } from "@/components/mockups/superpos/SuperPosCarnet";

// Capture surface for scripts/render.mjs: the POS-MINI MARKET debt book at full viewport.
export const metadata: Metadata = { title: "POS-MINI MARKET · carnet de dettes", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/carnet">) {
  const { locale } = await params;
  enterLocale(locale);
  return <SuperPosCarnet lang={locale === "ar" ? "ar" : "fr"} />;
}
