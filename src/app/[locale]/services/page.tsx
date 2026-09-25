import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { pageMetadata } from "@/lib/site";
import { langOf } from "@/content/site";
import { PAGES } from "@/content/pages";
import { PageShell } from "@/components/site/PageShell";
import { ServicesPage } from "@/components/pages/ServicesPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  const l = enterLocale(locale);
  const t = PAGES[langOf(l)].meta.services;
  return pageMetadata(l, "/services", t.title, t.description);
}

export default async function Page({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  const lang = langOf(enterLocale(locale));
  return (
    <PageShell lang={lang} path="/services">
      <ServicesPage lang={lang} />
    </PageShell>
  );
}
