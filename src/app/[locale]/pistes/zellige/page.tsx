import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { Zellige } from "@/components/pistes/zellige/Zellige";
import { lang } from "@/content/pistes";

export const metadata: Metadata = { title: "Broda Dev · Piste 3, Zellige", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/pistes/zellige">) {
  const { locale } = await params;
  enterLocale(locale);
  return <Zellige lang={lang(locale)} />;
}
