import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { NouaraProduct } from "@/components/demo/nouara/NouaraProduct";

// A live demo store (invented brand), reached from Réalisations. Never indexed.
export const metadata: Metadata = {
  title: "NOUARA · Sac à fermoir fleur (démo Broda Dev)",
  robots: { index: false, follow: false },
};

export default async function Page({ params, searchParams }: PageProps<"/[locale]/demo/nouara">) {
  const { locale } = await params;
  const { capture } = await searchParams;
  enterLocale(locale);
  return <NouaraProduct lang={locale === "ar" ? "ar" : "fr"} capture={typeof capture === "string" ? capture : undefined} />;
}
