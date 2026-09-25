import { Phone, PosTerminal } from "@/components/frames/Devices";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Arrow, pill } from "@/components/ui/ui";
import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import styles from "./Hero.module.css";

/**
 * The poster: the promise in four lines with two stickers, the lead and the
 * two actions, and the proof beside it: a till running POS-MINI MARKET and a phone
 * playing a sponsored video, "de la caisse à la pub TikTok" made literal.
 */
export function Hero({ lang }: { lang: Lang }) {
  const t = SITE[lang].hero;
  const r = (name: string) => `/images/renders/${name}-${lang}`;
  const wa = whatsapp(SITE[lang].waMessage);

  return (
    <section className={styles.hero} aria-label={t.title}>
      <h1 className={styles.title}>
        <span className="sr-only">{t.title}</span>
        <span className={styles.line} aria-hidden="true">
          <span data-line>{t.poster[0]}</span>
          <span className={`${styles.pill} ${styles.pillTotal}`} data-pill>
            <span className="ltr">3 070,00</span> {lang === "ar" ? "دج" : "DA"}
          </span>
        </span>
        <span className={styles.line} aria-hidden="true">
          <span data-line>{t.poster[1]}</span>
        </span>
        <span className={styles.line} aria-hidden="true">
          <span data-line>{t.poster[2]}</span>
        </span>
        <span className={styles.line} aria-hidden="true">
          <span data-line>{t.poster[3]}</span>
          <span className={`${styles.pill} ${styles.pillPlay}`} data-pill>
            <svg viewBox="0 0 24 24">
              <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
            </svg>
          </span>
        </span>
      </h1>

      <div className={styles.intro}>
        <p className={styles.lead}>{t.lead}</p>
        <div className={styles.actions}>
          <a className={pill.ink} href={wa}>
            {t.primary}
            <Arrow />
          </a>
          <a className={pill.line} href={wa}>
            <WhatsAppIcon className={styles.waIcon} />
            {t.whatsapp}
          </a>
        </div>
      </div>

      <figure className={styles.stage} data-stage>
        <PosTerminal
          className={styles.pos}
          screen={{ src: r("superpos-caisse"), alt: t.posAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 44vw, 88vw", priority: true }}
        />
        <Phone
          className={styles.phone}
          bare
          screen={{ src: r("tiktok-zniqa"), alt: t.adAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 14vw, 30vw", priority: true }}
        />
        <figcaption className={styles.caption}>{t.caption}</figcaption>
      </figure>
    </section>
  );
}
