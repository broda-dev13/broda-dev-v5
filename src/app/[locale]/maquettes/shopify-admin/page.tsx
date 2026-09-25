import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { ShopifyAdmin } from "@/components/mockups/shopify/ShopifyAdmin";

// Capture surface for scripts/render.mjs: the ZNIQA example store's order list, in French.
export const metadata: Metadata = { title: "ZNIQA · commandes (Shopify)", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/maquettes/shopify-admin">) {
  const { locale } = await params;
  enterLocale(locale);
  return <ShopifyAdmin />;
}
