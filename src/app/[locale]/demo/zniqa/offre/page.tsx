import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { ZniqaLanding } from "@/components/demo/zniqa/ZniqaLanding";

// A live demo landing page (invented brand), reached from Réalisations. Never indexed.
export const metadata: Metadata = {
  title: "ZNIQA · Le t-shirt qui tient la rue (démo Broda Dev)",
  robots: { index: false, follow: false },
};

export default async function Page({ params, searchParams }: PageProps<"/[locale]/demo/zniqa/offre">) {
  const { locale } = await params;
  const { capture } = await searchParams;
  const lang = enterLocale(locale) === "ar" ? "ar" : "fr";
  return <ZniqaLanding lang={lang} capture={typeof capture === "string" ? capture : undefined} />;
}
