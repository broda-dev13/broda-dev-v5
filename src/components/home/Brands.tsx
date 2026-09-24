// The demo brands' own faces, for their logos and mockups.
import "@fontsource-variable/big-shoulders-display/wght";
import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/cairo/wght.css";
import { LogoHanout, LogoLemma, LogoNouara, LogoZniqa } from "@/components/brands/Logos";
import { Phone } from "@/components/frames/Devices";
import { Pic } from "@/components/Pic";
import { Arrow, pill } from "@/components/ui/ui";
import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import styles from "./Brands.module.css";

/**
 * Logos and identity: a board of four logos for invented brands, each on its
 * own colours, then the same marks at work, on business cards, embroidered
 * on a t-shirt and on a social profile. All labelled as examples.
 */
export function Brands({ lang, index }: { lang: Lang; index: number }) {
  const t = SITE[lang].logos;
  const logo = {
    lemma: <LogoLemma className={styles.logo} />,
    nouara: <LogoNouara className={styles.logo} />,
    hanout: <LogoHanout className={styles.logo} />,
    zniqa: <LogoZniqa className={styles.logo} />,
  } as const;

  return (
    <section className={styles.brands} id="logos" data-section={index} aria-labelledby="logos-title">
      <div className={styles.head}>
        <h2 id="logos-title" className={styles.title}>
          {t.title}
        </h2>
        <div>
          <p className={styles.lead}>{t.lead}</p>
          <p className={styles.body}>{t.body}</p>
          <a className={pill.ink} href={whatsapp(t.wa)}>
            {t.cta}
            <Arrow />
          </a>
        </div>
      </div>

      <ul className={styles.board}>
        {t.brands.map((b) => (
          <li key={b.id} className={styles.tile} data-brand={b.id}>
            {logo[b.id as keyof typeof logo]}
            <span className={styles.sector}>{b.sector}</span>
          </li>
        ))}
      </ul>

      <div className={styles.uses}>
        <figure className={styles.cards} aria-label={t.cardsAlt}>
          <div className={styles.cardBack}>
            <LogoLemma className={styles.cardLogoSmall} tone="dark" />
            <p>
              <b>{t.card.role}</b>
              <span>{t.card.tagline}</span>
              <span>{t.card.hours}</span>
              <span className="ltr">{t.card.handle}</span>
            </p>
          </div>
          <div className={styles.cardFront}>
            <LogoLemma className={styles.cardLogo} />
          </div>
        </figure>
        <figure className={styles.tee}>
          <Pic src="/images/zniqa/zniqa-detail" alt={t.teeAlt} width={1136} height={1408} widths={[560, 1136]} sizes="(min-width: 1024px) 22vw, 50vw" />
        </figure>
        <figure className={styles.phoneWrap}>
          <Phone
            className={styles.phone}
            bare
            screen={{ src: `/images/renders/hanout-profil-${lang}`, alt: t.phoneAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 16vw, 40vw" }}
          />
        </figure>
      </div>
      <p className={styles.example}>{t.label}</p>
    </section>
  );
}
