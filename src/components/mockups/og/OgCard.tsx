/* eslint-disable @next/next/no-img-element -- a capture surface, not a page */
import { SITE, type Lang } from "@/content/site";
import { CONTACT } from "@/lib/contact";
import styles from "./OgCard.module.css";

/**
 * The share card (1200 × 630) for links on WhatsApp, Facebook and the rest:
 * the poster line of the home, the seven trades, the number, and the till at
 * the counter. Captured by scripts/render.mjs into public/og/og-<lang>.png.
 */
export function OgCard({ lang }: { lang: Lang }) {
  const t = SITE[lang];
  return (
    <div className={styles.card} dir={lang === "ar" ? "rtl" : "ltr"}>
      <p className={styles.mark} dir="ltr">
        Broda<span>Dev</span>
      </p>
      <h1 className={styles.title}>
        {t.hero.poster.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </h1>
      <p className={styles.trades}>{t.services.map((s) => s.title).join(" · ")}</p>
      <p className={styles.where}>
        {t.contact.address} · <span className="ltr">{CONTACT.phone}</span>
      </p>
      <figure className={styles.photo}>
        <img src={`/images/renders/scene-superette-${lang}-1136.webp`} alt="" />
      </figure>
    </div>
  );
}
