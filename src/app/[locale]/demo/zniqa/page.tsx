import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { ZniqaProduct } from "@/components/demo/zniqa/ZniqaProduct";

// A live demo store (invented brand), reached from Réalisations. Never indexed.
export const metadata: Metadata = {
  title: "ZNIQA · T-shirt oversize Étoile (démo Broda Dev)",
  robots: { index: false, follow: false },
};

export default async function Page({ params, searchParams }: PageProps<"/[locale]/demo/zniqa">) {
  const { locale } = await params;
  const { capture } = await searchParams;
  enterLocale(locale);
  return <ZniqaProduct lang={locale === "ar" ? "ar" : "fr"} capture={typeof capture === "string" ? capture : undefined} />;
}
