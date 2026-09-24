import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { HanoutProfile } from "@/components/mockups/social/HanoutProfile";

// Capture surface for scripts/render.mjs: HANOUT 13's example social profile, 390 x 844.
export const metadata: Metadata = { title: "HANOUT 13 · profil (exemple)", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/hanout">) {
  const { locale } = await params;
  return <HanoutProfile lang={enterLocale(locale) === "ar" ? "ar" : "fr"} />;
}
