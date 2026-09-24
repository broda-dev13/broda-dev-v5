import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { SuperPosPayment } from "@/components/mockups/superpos/SuperPosPayment";

// Capture surface for scripts/render.mjs: the SuperPOS payment screen at full viewport.
export const metadata: Metadata = { title: "SuperPOS · paiement", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/paiement">) {
  const { locale } = await params;
  enterLocale(locale);
  return <SuperPosPayment lang={locale === "ar" ? "ar" : "fr"} />;
}
