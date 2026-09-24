import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { HanoutSite } from "@/components/mockups/sites/HanoutSite";

// Capture surface for scripts/render.mjs: HANOUT 13's example showcase site, 1440 x 900.
export const metadata: Metadata = { title: "HANOUT 13 · site vitrine (exemple)", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/site-hanout">) {
  const { locale } = await params;
  return <HanoutSite lang={enterLocale(locale) === "ar" ? "ar" : "fr"} />;
}
