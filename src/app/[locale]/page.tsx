import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { enterLocale } from "@/i18n/locale";
import { pageMetadata } from "@/lib/site";
import { langOf } from "@/content/site";
import { SiteHeader } from "@/components/site/SiteHeader";
import { KeysNav } from "@/components/site/KeysNav";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Hero } from "@/components/home/Hero";
import { Overview } from "@/components/home/Overview";
import { Software } from "@/components/home/Software";
import { Caisses } from "@/components/home/Caisses";
import { Sites } from "@/components/home/Sites";
import { Shopify } from "@/components/home/Shopify";
import { Ads } from "@/components/home/Ads";
import { Brands } from "@/components/home/Brands";
import { Why } from "@/components/home/Why";
import { Process } from "@/components/home/Process";
import { Contact } from "@/components/home/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HomeMotion } from "@/components/home/HomeMotion";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const l = enterLocale(locale);
  const t = await getTranslations({ locale: l, namespace: "meta" });
  return pageMetadata(l, "", t("title"), t("description"));
}

// Home: hero, services overview, one section per service (built in order,
// section by section with the owner), why Broda Dev, process, contact.
export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const lang = langOf(enterLocale(locale));

  return (
    <>
      <SiteHeader lang={lang} />
      <KeysNav lang={lang} />
      <main id="contenu">
        <Hero lang={lang} />
        <Overview lang={lang} />
        <Software lang={lang} />
        <Caisses lang={lang} index={1} />
        <Sites lang={lang} index={2} />
        <Shopify lang={lang} index={3} />
        <Ads lang={lang} index={4} />
        <Brands lang={lang} index={5} />
        <Why lang={lang} />
        <Process lang={lang} />
        <Contact lang={lang} />
      </main>
      <SiteFooter lang={lang} />
      <WhatsAppFloat lang={lang} />
      <HomeMotion />
    </>
  );
}
