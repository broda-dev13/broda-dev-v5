import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import { Arrow, pill } from "@/components/ui/ui";
import { MobileMenu } from "./MobileMenu";
import styles from "./SiteHeader.module.css";

/** The yellow bar: wordmark, the four pages, language, and the quote action, always in reach. */
export function SiteHeader({ lang, path = "" }: { lang: Lang; path?: string }) {
  const t = SITE[lang].nav;
  const other: Lang = lang === "ar" ? "fr" : "ar";
  const links = [
    [`/${lang}/services`, t.services],
    [`/${lang}/logiciels`, t.software],
    [`/${lang}/realisations`, t.work],
    [`/${lang}/contact`, t.contact],
  ] as const;
  const quote = whatsapp(SITE[lang].waMessage);

  return (
    <header className={styles.bar} data-bar>
      <a className={styles.skip} href="#contenu">
        {t.skip}
      </a>
      <a className={styles.logo} href={`/${lang}`} aria-label={t.home}>
        Broda<span>Dev</span>
      </a>
      <nav className={styles.links} aria-label={t.main}>
        {links.map(([href, label]) => (
          <a key={href} href={href} aria-current={href === `/${lang}${path}` ? "page" : undefined}>
            {label}
          </a>
        ))}
      </nav>
      <a className={styles.lang} href={`/${other}${path}`} lang={other} hrefLang={other} aria-label={t.switchLang}>
        {t.switchShort}
      </a>
      <a className={`${pill.ink} ${pill.small} ${styles.quote}`} href={quote}>
        <span className={styles.long}>{t.quote}</span>
        <span className={styles.short}>{t.quoteShort}</span>
        <Arrow />
      </a>
      <MobileMenu
        labels={{ open: t.menu, close: t.close, quote: t.quote, switchLang: t.switchLang }}
        links={links.map(([href, label]) => ({ href, label }))}
        langHref={`/${other}${path}`}
        other={other}
        quoteHref={quote}
      />
    </header>
  );
}
