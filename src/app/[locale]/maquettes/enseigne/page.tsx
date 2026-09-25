import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { HanoutFacade } from "@/components/mockups/brands/HanoutFacade";

// Capture surface for scripts/render.mjs: the HANOUT 13 sign on a storefront photo.
export const metadata: Metadata = { title: "HANOUT 13 · enseigne", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/enseigne">) {
  const { locale } = await params;
  enterLocale(locale);
  return <HanoutFacade />;
}
