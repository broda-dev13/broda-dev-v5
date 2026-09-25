import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { langOf } from "@/content/site";
import { OgCard } from "@/components/mockups/og/OgCard";

// Capture surface for scripts/render.mjs: the share card, 1200 × 630.
export const metadata: Metadata = { title: "Broda Dev · carte de partage", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/og">) {
  const { locale } = await params;
  return <OgCard lang={langOf(enterLocale(locale))} />;
}
