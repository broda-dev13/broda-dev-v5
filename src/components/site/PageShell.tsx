import type { Lang } from "@/content/site";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { PageMotion } from "./PageMotion";

/**
 * The frame of every page but the home: the yellow bar (with the current page
 * marked, and the language switch pointing at the same page), the footer,
 * WhatsApp always in reach, and the reveal of blocks marked `data-reveal`.
 */
export function PageShell({ lang, path, children }: { lang: Lang; path: string; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader lang={lang} path={path} />
      <main id="contenu">{children}</main>
      <SiteFooter lang={lang} path={path} />
      <WhatsAppFloat lang={lang} />
      <PageMotion />
    </>
  );
}
