import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { Affiche } from "@/components/pistes/affiche/Affiche";
import { lang } from "@/content/pistes";

export const metadata: Metadata = { title: "Broda Dev · Piste 1, Affiche", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/pistes/affiche">) {
  const { locale } = await params;
  enterLocale(locale);
  return <Affiche lang={lang(locale)} />;
}
