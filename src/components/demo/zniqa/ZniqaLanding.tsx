"use client";

// ZNIQA's own faces (the demo brand, not Broda Dev).
import "@fontsource-variable/big-shoulders-display/wght";
import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/cairo/wght.css";
import { useState } from "react";
import { Pic } from "@/components/Pic";
import { COLORS, COPY, OLD_PRICE, PRICE, SIZES, type ColorId } from "./copy";
import { LANDING } from "./landing-copy";
import { ZniqaOrderForm, ZniqaStar } from "./ZniqaOrderForm";
import base from "./ZniqaProduct.module.css";
import styles from "./ZniqaLanding.module.css";

type Lang = "fr" | "ar";

/**
 * The ZNIQA landing page: one product, one scroll, one action. Hero, three
 * reasons, the colours, example reviews (labelled), the offer and the
 * cash-on-delivery form, a short FAQ, and a sticky order bar on phones.
 * capture=form pre-fills the form and hides the demo banner for renders.
 */
export function ZniqaLanding({ lang, capture }: { lang: Lang; capture?: string }) {
  const t = LANDING[lang];
  const p = COPY[lang];
  const [color, setColor] = useState<ColorId>("noir");
  const [size, setSize] = useState("L");
  const fmt = (n: number) => n.toLocaleString("fr-FR").replace(/ | /g, " ");
  const money = (n: number) => (
    <>
      <span className="ltr">{fmt(n)}</span> {p.currency}
    </>
  );

  return (
    <div className={`${base.page} ${styles.landing}`} dir={lang === "ar" ? "rtl" : "ltr"} data-lang={lang}>
      {!capture && (
        <div className={base.demo}>
          <span>{p.banner}</span>
          <a href={`/${lang}`}>{p.bannerBack}</a>
        </div>
      )}
      <p className={base.announce}>{t.announce}</p>

      <header className={styles.top}>
        <span className={styles.logo}>
          <ZniqaStar className={styles.logoStar} />
          ZNIQA
        </span>
        <a className={styles.topCta} href="#commande">
          {t.cta}
        </a>
      </header>

      <section className={styles.hero}>
        <Pic src="/images/zniqa/zniqa-porte" alt={p.alt.porte} width={1136} height={1408} sizes="(min-width: 900px) 50vw, 100vw" className={styles.heroImg} priority />
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            {t.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h1>
          <p className={styles.sub}>{t.sub}</p>
          <p className={styles.price}>
            <strong>{money(PRICE)}</strong>
            <s>{money(OLD_PRICE)}</s>
            <span className="ltr">{p.save}</span>
          </p>
          <a className={styles.cta} href="#commande">
            {t.cta}
          </a>
          <p className={styles.cod}>{t.cod}</p>
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.h2}>{t.benefitsTitle}</h2>
        <ul className={styles.benefits}>
          {t.benefits.map(([title, line]) => (
            <li key={title}>
              <ZniqaStar className={styles.bulletStar} />
              <b>{title}</b>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.block}>
        <h2 className={styles.h2}>{t.colorsTitle}</h2>
        <div className={styles.colors}>
          {COLORS.map((c) => (
            <figure key={c.id}>
              <Pic src={`/images/zniqa/zniqa-${c.id}`} alt={p.alt[c.id]} width={1136} height={1408} sizes="(min-width: 900px) 20vw, 45vw" />
              <figcaption>{p.colors[c.id]}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={`${styles.block} ${styles.reviewsBlock}`}>
        <h2 className={styles.h2}>{t.reviewsTitle}</h2>
        <p className={styles.reviewsLabel}>{t.reviewsLabel}</p>
        <ul className={styles.reviews}>
          {t.reviews.map(([who, text]) => (
            <li key={who}>
              <span className={styles.stars} aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 24 24">
                    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
                  </svg>
                ))}
              </span>
              <p>{text}</p>
              <small>{who}</small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.block} ${styles.buy}`}>
        <div className={styles.offer}>
          <b>{t.offer}</b>
          <span>
            <i aria-hidden="true" />
            {t.stock}
          </span>
        </div>
        <fieldset className={base.field}>
          <legend>
            {p.colorLabel} : <b>{p.colors[color]}</b>
          </legend>
          <div className={base.swatches}>
            {COLORS.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={color === c.id}
                aria-label={p.colors[c.id]}
                style={{ "--sw": c.swatch } as React.CSSProperties}
                onClick={() => setColor(c.id)}
              />
            ))}
          </div>
        </fieldset>
        <fieldset className={base.field}>
          <legend>
            {p.sizeLabel} : <b>{size}</b>
          </legend>
          <div className={base.sizes}>
            {SIZES.map((s) => (
              <button key={s} type="button" aria-pressed={size === s} onClick={() => setSize(s)}>
                {s}
              </button>
            ))}
          </div>
        </fieldset>
        <ZniqaOrderForm lang={lang} qty={1} filled={capture === "form"} />
      </section>

      <section className={styles.block}>
        <h2 className={styles.h2}>{t.faqTitle}</h2>
        <div className={styles.faq}>
          {t.faq.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <a className={styles.sticky} href="#commande">
        <span>{money(PRICE)}</span>
        <b>{t.sticky}</b>
      </a>
    </div>
  );
}
