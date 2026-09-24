"use client";

// ZNIQA's own faces (the demo brand, not Broda Dev): Big Shoulders Display, Figtree, Cairo.
import "@fontsource-variable/big-shoulders-display/wght";
import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/cairo/wght.css";
import { useMemo, useState } from "react";
import { Pic } from "@/components/Pic";
import { ZniqaOrderForm, ZniqaStar as Star } from "./ZniqaOrderForm";
import { COLORS, COPY, OLD_PRICE, PRICE, SIZES, type ColorId } from "./copy";
import styles from "./ZniqaProduct.module.css";

type Lang = "fr" | "ar";

/**
 * Capture modes (used by scripts/render.mjs for the Broda Dev visuals):
 *   capture=1     hides the demo banner
 *   capture=form  hides the banner and fills the order form, phone field in focus
 * With no capture parameter the demo banner always shows.
 */
export function ZniqaProduct({ lang, capture }: { lang: Lang; capture?: string }) {
  const t = COPY[lang];
  const filled = capture === "form";

  const [color, setColor] = useState<ColorId>("noir");
  const [view, setView] = useState(0);
  const [size, setSize] = useState<string>("L");
  const [qty, setQty] = useState(1);

  const gallery = useMemo(
    () => [
      { src: `/images/zniqa/zniqa-${color}`, alt: t.alt[color] },
      { src: "/images/zniqa/zniqa-porte", alt: t.alt.porte },
      { src: "/images/zniqa/zniqa-detail", alt: t.alt.detail },
      { src: "/images/zniqa/zniqa-pile", alt: t.alt.pile },
    ],
    [color, t],
  );

  const fmt = (n: number) => n.toLocaleString("fr-FR").replace(/ | /g, " ");
  const money = (n: number) => (
    <>
      <span className="ltr">{fmt(n)}</span> {t.currency}
    </>
  );

  return (
    <div className={styles.page} dir={lang === "ar" ? "rtl" : "ltr"} data-lang={lang}>
      {!capture && (
        <div className={styles.demo}>
          <span>{t.banner}</span>
          <a href={`/${lang}`}>{t.bannerBack}</a>
        </div>
      )}
      <p className={styles.announce}>{t.announce}</p>

      <header className={styles.header}>
        <a className={styles.logo} href="#" aria-label="ZNIQA">
          <Star className={styles.logoStar} />
          <span>ZNIQA</span>
        </a>
        <nav className={styles.nav} aria-label="ZNIQA">
          {t.nav.map((n, i) => (
            <a key={n} href="#" aria-current={i === 1 ? "page" : undefined}>
              {n}
            </a>
          ))}
        </nav>
        <div className={styles.tools}>
          <button type="button" aria-label={t.search}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
          </button>
          <button type="button" aria-label={t.bag} className={styles.bag}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 8h14l-1 12H6L5 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            <span>1</span>
          </button>
        </div>
      </header>

      <main className={styles.product}>
        <nav className={styles.crumbs} aria-label="Fil d'Ariane">
          {t.crumbs.map((c) => (
            <span key={c}>
              <a href="#">{c}</a>
              <i aria-hidden="true">/</i>
            </span>
          ))}
          <span aria-current="page">{t.title}</span>
        </nav>

        <section className={styles.gallery} aria-label={t.title}>
          <div className={styles.thumbs}>
            {gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                className={styles.thumb}
                aria-pressed={view === i}
                aria-label={g.alt}
                onClick={() => setView(i)}
              >
                <Pic src={g.src} alt="" width={1136} height={1408} widths={[560]} sizes="96px" />
              </button>
            ))}
          </div>
          <div className={styles.main}>
            <Pic
              src={gallery[view].src}
              alt={gallery[view].alt}
              width={1136}
              height={1408}
              sizes="(min-width: 1024px) 46vw, 100vw"
              priority
            />
            <span className={`${styles.badge} ltr`}>{t.save}</span>
            <span className={styles.dots} aria-hidden="true">
              {gallery.map((g, i) => (
                <i key={g.src} data-on={view === i || undefined} />
              ))}
            </span>
          </div>
        </section>

        <section className={styles.info}>
          <p className={styles.kicker}>{t.kicker}</p>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.prices}>
            <strong>{money(PRICE)}</strong>
            <s>{money(OLD_PRICE)}</s>
            <span className={`${styles.save} ltr`}>{t.save}</span>
          </p>

          <fieldset className={styles.field}>
            <legend>
              {t.colorLabel} : <b>{t.colors[color]}</b>
            </legend>
            <div className={styles.swatches}>
              {COLORS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={color === c.id}
                  aria-label={t.colors[c.id]}
                  style={{ "--sw": c.swatch } as React.CSSProperties}
                  onClick={() => {
                    setColor(c.id);
                    setView(0);
                  }}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className={styles.field}>
            <legend className={styles.legendRow}>
              <span>
                {t.sizeLabel} : <b>{size}</b>
              </span>
              <a href="#">{t.sizeGuide}</a>
            </legend>
            <div className={styles.sizes}>
              {SIZES.map((s) => (
                <button key={s} type="button" aria-pressed={size === s} onClick={() => setSize(s)}>
                  {s}
                </button>
              ))}
            </div>
            <p className={styles.stock}>
              <i aria-hidden="true" />
              {t.stock}
            </p>
          </fieldset>

          <div className={styles.qtyRow}>
            <span>{t.qtyLabel}</span>
            <div className={styles.qty}>
              <button type="button" aria-label={t.less} onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </button>
              <output aria-live="polite">{qty}</output>
              <button type="button" aria-label={t.more} onClick={() => setQty((q) => Math.min(9, q + 1))}>
                +
              </button>
            </div>
          </div>

          <ZniqaOrderForm lang={lang} qty={qty} filled={filled} />

          <ul className={styles.trust}>
            {t.trust.map((item, i) => (
              <li key={item}>
                <TrustIcon kind={i} />
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.desc}>
            <h2>{t.descTitle}</h2>
            <p>{t.desc}</p>
            <ul>
              {t.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

function TrustIcon({ kind }: { kind: number }) {
  const paths = [
    "M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-.01M17 19a2 2 0 1 0 0-.01",
    "M4 12a8 8 0 0 1 14-5.3M20 4v4h-4M20 12a8 8 0 0 1-14 5.3M4 20v-4h4",
    "M3 7h18v10H3zM3 11h18M7 15h3",
  ];
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[kind]} />
    </svg>
  );
}
