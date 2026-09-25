import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { pageMetadata } from "@/lib/site";
import { langOf } from "@/content/site";
import { PAGES } from "@/content/pages";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/pages/PageHero";
import { RealisationsPage } from "@/components/pages/RealisationsPage";
import { Contact } from "@/components/home/Contact";

export async function generateMetadata({ params }: PageProps<"/[locale]/realisations">): Promise<Metadata> {
  const { locale } = await params;
  const l = enterLocale(locale);
  const t = PAGES[langOf(l)].meta.realisations;
  return pageMetadata(l, "/realisations", t.title, t.description);
}

export default async function Page({ params }: PageProps<"/[locale]/realisations">) {
  const { locale } = await params;
  const lang = langOf(enterLocale(locale));
  const t = PAGES[lang].realisations;
  return (
    <PageShell lang={lang} path="/realisations">
      <PageHero title={t.title} lead={t.lead} />
      <RealisationsPage lang={lang} />
      <Contact lang={lang} />
    </PageShell>
  );
}
