import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { AdsDashboard } from "@/components/mockups/ads/AdsDashboard";

// Capture surface for scripts/render.mjs: the example ads dashboard, 1440 x 900.
export const metadata: Metadata = { title: "Tableau de bord publicitaire (exemple)", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/pubs">) {
  const { locale } = await params;
  return <AdsDashboard lang={enterLocale(locale) === "ar" ? "ar" : "fr"} />;
}
