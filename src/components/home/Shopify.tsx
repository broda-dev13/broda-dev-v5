import { Laptop, Phone } from "@/components/frames/Devices";
import { Arrow, pill } from "@/components/ui/ui";
import { FORM_MARKERS, SITE, type Lang } from "@/content/site";
import styles from "./Shopify.module.css";

/**
 * Shopify and product pages, shown through the ZNIQA demo (an invented brand,
 * labelled): the product page on a laptop and the cash-on-delivery form on a
 * phone, its five steps numbered on the screen and in the list.
 */
export function Shopify({ lang, index }: { lang: Lang; index: number }) {
  const t = SITE[lang].shopify;
  const r = (name: string) => `/images/renders/${name}-${lang}`;
  return (
    <section className={styles.service} id="shopify" data-section={index} aria-labelledby="shopify-title">
      <div className={styles.text}>
        <h2 id="shopify-title" className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.lead}>{t.lead}</p>
        <p className={styles.body}>{t.body}</p>
        <ol className={styles.features}>
          {t.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ol>
        <a className={pill.ink} href={`/${lang}/demo/zniqa`}>
          {t.cta}
          <Arrow />
        </a>
        <p className={styles.example}>{t.label}</p>
      </div>

      <figure className={styles.board}>
        <Laptop
          className={styles.laptop}
          screen={{ src: r("zniqa-bureau"), alt: t.laptopAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 46vw, 92vw" }}
        />
        <Phone
          className={styles.phone}
          statusBg="#ffffff"
          screen={{ src: r("zniqa-mobile-form"), alt: t.phoneAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 18vw, 46vw" }}
        >
          {FORM_MARKERS.map((top, i) => (
            <span key={top} className={styles.marker} style={{ top: `${top}%` }} aria-hidden="true">
              {i + 1}
            </span>
          ))}
        </Phone>
      </figure>
    </section>
  );
}
