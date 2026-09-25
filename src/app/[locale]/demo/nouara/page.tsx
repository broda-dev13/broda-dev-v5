import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { langOf } from "@/content/site";
import { NouaraProduct } from "@/components/demo/nouara/NouaraProduct";

// A live demo store (invented brand), reached from Réalisations. Never indexed.
const TITLE = {
  fr: "NOUARA · Sac à fermoir fleur (démo Broda Dev)",
  ar: "NOUARA · حقيبة نوّارة بقفل الوردة (نموذج من Broda Dev)",
};

export async function generateMetadata({ params }: PageProps<"/[locale]/demo/nouara">): Promise<Metadata> {
  const { locale } = await params;
  return { title: TITLE[langOf(enterLocale(locale))], robots: { index: false, follow: false } };
}

export default async function Page({ params, searchParams }: PageProps<"/[locale]/demo/nouara">) {
  const { locale } = await params;
  const { capture } = await searchParams;
  enterLocale(locale);
  return <NouaraProduct lang={locale === "ar" ? "ar" : "fr"} capture={typeof capture === "string" ? capture : undefined} />;
}
