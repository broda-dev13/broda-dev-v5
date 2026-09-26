import type { Metadata } from "next";
import { enterLocale } from "@/i18n/locale";
import { pageMetadata } from "@/lib/site";
import { langOf } from "@/content/site";
import { PAGES } from "@/content/pages";
import { PageShell } from "@/components/site/PageShell";
import { Contact } from "@/components/home/Contact";
import { ContactWhere } from "@/components/pages/ContactWhere";
import { Process } from "@/components/home/Process";
import { Faq } from "@/components/home/Faq";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const l = enterLocale(locale);
  const t = PAGES[langOf(l)].meta.contact;
  return pageMetadata(l, "/contact", t.title, t.description);
}

// Contact: the form that writes the WhatsApp message (its title is the h1),
// where Broda Dev is, the frequent questions, and how a project goes.
export default async function Page({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  const lang = langOf(enterLocale(locale));
  return (
    <PageShell lang={lang} path="/contact">
      <Contact lang={lang} heading="h1" />
      <ContactWhere lang={lang} />
      <Faq lang={lang} />
      <Process lang={lang} />
    </PageShell>
  );
}
