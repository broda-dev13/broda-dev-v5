import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { langOf } from "@/content/site";
import { ZniqaLanding } from "@/components/demo/zniqa/ZniqaLanding";

// A live demo landing page (invented brand), reached from Réalisations. Never indexed.
const TITLE = {
  fr: "ZNIQA · Le t-shirt qui tient la rue (démo Broda Dev)",
  ar: "ZNIQA · التيشيرت الذي يصمد في الشارع (مثال من Broda Dev)",
};

export async function generateMetadata({ params }: PageProps<"/[locale]/demo/zniqa/offre">): Promise<Metadata> {
  const { locale } = await params;
  return { title: TITLE[langOf(enterLocale(locale))], robots: { index: false, follow: false } };
}

export default async function Page({ params, searchParams }: PageProps<"/[locale]/demo/zniqa/offre">) {
  const { locale } = await params;
  const { capture } = await searchParams;
  const lang = enterLocale(locale) === "ar" ? "ar" : "fr";
  return <ZniqaLanding lang={lang} capture={typeof capture === "string" ? capture : undefined} />;
}
