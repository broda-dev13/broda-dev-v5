import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { Nuit } from "@/components/pistes/nuit/Nuit";
import { lang } from "@/content/pistes";

export const metadata: Metadata = { title: "Broda Dev · Piste 2, Nuit", robots: { index: false, follow: false } };

export default async function Page({ params }: PageProps<"/[locale]/pistes/nuit">) {
  const { locale } = await params;
  enterLocale(locale);
  return <Nuit lang={lang(locale)} />;
}
