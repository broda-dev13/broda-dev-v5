import { Phone, PosTerminal } from "@/components/frames/Devices";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Arrow, pill } from "@/components/ui/ui";
import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import styles from "./Hero.module.css";

/**
 * The poster: the promise in three words (gérer, vendre, grandir), the lead
 * with who it is for, the two actions, and the proof beside it: a till
 * running POS-MINI MARKET and, in front of it, a phone playing a sponsored
 * video, with the sticker "du logiciel à la pub" across the two.
 */
export function Hero({ lang }: { lang: Lang }) {
  const t = SITE[lang].hero;
  const r = (name: string) => `/images/renders/${name}-${lang}`;
  const wa = whatsapp(SITE[lang].waMessage);

  return (
    <section className={styles.hero} aria-label={t.title}>
      <h1 className={styles.title}>
        <span className="sr-only">{t.title}</span>
        {t.poster.map((line) => (
          <span key={line} className={styles.line} aria-hidden="true">
            <span>{line}</span>
          </span>
        ))}
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
          screen={{ src: r("superpos-caisse"), alt: t.posAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 37vw, 79vw", priority: true }}
        />
        <Phone
          className={styles.phone}
          bare
          screen={{ src: r("tiktok-zniqa"), alt: t.adAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 15vw, 30vw", priority: true }}
        />
        <p className={`${styles.pill} ${styles.stamp}`}>
          {t.stamp}
          <span className={styles.play} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
            </svg>
          </span>
        </p>
        <figcaption className={styles.caption}>{t.caption}</figcaption>
      </figure>
    </section>
  );
}
