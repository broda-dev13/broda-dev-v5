import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { SuperPosCheckout } from "@/components/mockups/superpos/SuperPosCheckout";

// Capture surface for scripts/render.mjs: the SuperPOS checkout configured for LEMMA, an invented café.
export const metadata: Metadata = { title: "SuperPOS · café", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/superpos-cafe">) {
  const { locale } = await params;
  enterLocale(locale);
  return <SuperPosCheckout lang={locale === "ar" ? "ar" : "fr"} shop="cafe" />;
}
