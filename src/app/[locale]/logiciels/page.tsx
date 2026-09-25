import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { pageMetadata } from "@/lib/site";
import { langOf } from "@/content/site";
import { PAGES } from "@/content/pages";
import { PageShell } from "@/components/site/PageShell";
import { LogicielsPage } from "@/components/pages/LogicielsPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/logiciels">): Promise<Metadata> {
  const { locale } = await params;
  const l = enterLocale(locale);
  const t = PAGES[langOf(l)].meta.logiciels;
  return pageMetadata(l, "/logiciels", t.title, t.description);
}

export default async function Page({ params }: PageProps<"/[locale]/logiciels">) {
  const { locale } = await params;
  const lang = langOf(enterLocale(locale));
  return (
    <PageShell lang={lang} path="/logiciels">
      <LogicielsPage lang={lang} />
    </PageShell>
  );
}
