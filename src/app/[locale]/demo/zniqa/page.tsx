import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { langOf } from "@/content/site";
import { ZniqaProduct } from "@/components/demo/zniqa/ZniqaProduct";

// A live demo store (invented brand), reached from Réalisations. Never indexed.
const TITLE = {
  fr: "ZNIQA · T-shirt oversize Étoile (démo Broda Dev)",
  ar: "ZNIQA · تيشيرت أوفرسايز النجمة (مثال من Broda Dev)",
};

export async function generateMetadata({ params }: PageProps<"/[locale]/demo/zniqa">): Promise<Metadata> {
  const { locale } = await params;
  return { title: TITLE[langOf(enterLocale(locale))], robots: { index: false, follow: false } };
}

export default async function Page({ params, searchParams }: PageProps<"/[locale]/demo/zniqa">) {
  const { locale } = await params;
  const { capture } = await searchParams;
  enterLocale(locale);
  return <ZniqaProduct lang={locale === "ar" ? "ar" : "fr"} capture={typeof capture === "string" ? capture : undefined} />;
}
