import { getLocale } from "next-intl/server";
import { langOf } from "@/content/site";
import { PageShell } from "@/components/site/PageShell";
import { NotFoundPage } from "@/components/pages/NotFoundPage";

// The 404 of every address under a language: an unknown page ([...rest]),
// or notFound() in a page. Next.js marks it noindex and answers 404.
export default async function NotFound() {
  const lang = langOf(await getLocale());
  return (
    <PageShell lang={lang} path="">
      <NotFoundPage lang={lang} />
    </PageShell>
  );
}
