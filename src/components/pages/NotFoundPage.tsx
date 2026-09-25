import { Arrow, pill } from "@/components/ui/ui";
import type { Lang } from "@/content/site";
import { PAGES } from "@/content/pages";
import { PageHero } from "./PageHero";
import styles from "./NotFoundPage.module.css";

/** The 404: the page's poster head saying so, and the ways back into the site. */
export function NotFoundPage({ lang }: { lang: Lang }) {
  const t = PAGES[lang].notFound;
  return (
    <PageHero title={t.title} lead={t.lead}>
      <div className={styles.actions}>
        <a className={pill.ink} href={`/${lang}`}>
          {t.home}
          <Arrow />
        </a>
        <a className={pill.line} href={`/${lang}/services`}>
          {t.services}
        </a>
        <a className={pill.line} href={`/${lang}/realisations`}>
          {t.work}
        </a>
      </div>
    </PageHero>
  );
}
