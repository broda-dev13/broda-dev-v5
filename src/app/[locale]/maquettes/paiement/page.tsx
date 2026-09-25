import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { SuperPosPayment } from "@/components/mockups/superpos/SuperPosPayment";

// Capture surface for scripts/render.mjs: the POS-MINI MARKET payment screen at full viewport.
export const metadata: Metadata = { title: "POS-MINI MARKET · paiement", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/paiement">) {
  const { locale } = await params;
  enterLocale(locale);
  return <SuperPosPayment lang={locale === "ar" ? "ar" : "fr"} />;
}
