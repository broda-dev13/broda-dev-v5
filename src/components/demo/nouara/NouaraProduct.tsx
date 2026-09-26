"use client";

// NOUARA's own faces (the demo brand, not Broda Dev): Archivo narrow and light
// for the brand's voice, Figtree for reading, Cairo in Arabic.
import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/cairo/wght.css";
import { useMemo, useState } from "react";
import { Pic } from "@/components/Pic";
import { LogoNouara } from "@/components/brands/Logos";
import { CodOrderForm } from "../CodOrderForm";
import { COLORS, COPY, DIMS, OLD_PRICE, PRICE, type ColorId } from "./copy";
import styles from "./NouaraProduct.module.css";

type Lang = "fr" | "ar";

/**
 * NOUARA, an invented handbag brand: the cash-on-delivery product page of one
 * bag in three colours. Capture modes, as for ZNIQA:
 *   capture=1     hides the demo banner
 *   capture=form  hides the banner and fills the order form, phone field in focus
 * With no capture parameter the demo banner always shows.
 */
export function NouaraProduct({ lang, capture }: { lang: Lang; capture?: string }) {
  const t = COPY[lang];
  const [color, setColor] = useState<ColorId>("camel");
  const [view, setView] = useState(0);
  const [qty, setQty] = useState(1);

  const gallery = useMemo(
    () => [
      { src: `/images/nouara/nouara-${color}`, alt: t.alt[color] },
      { src: "/images/nouara/nouara-portee", alt: t.alt.portee },
      { src: "/images/nouara/nouara-detail", alt: t.alt.detail },
      { src: "/images/nouara/nouara-interieur", alt: t.alt.interieur },
      { src: "/images/nouara/nouara-trio", alt: t.alt.trio },
    ],
    [color, t],
  );

  const fmt = (n: number) => n.toLocaleString("fr-FR").replace(/[  ]/g, " ");
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
        <nav className={styles.nav} aria-label="NOUARA">
          {t.nav.map((n, i) => (
            <a key={n} href="#" aria-current={i === 1 ? "page" : undefined}>
              {n}
            </a>
          ))}
        </nav>
        <a className={styles.logo} href="#" aria-label="NOUARA">
          <LogoNouara className={styles.logoMark} tone="dark" />
        </a>
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
        <nav className={styles.crumbs} aria-label={lang === "ar" ? "مسار التصفح" : "Fil d'Ariane"}>
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
                <Pic src={g.src} alt="" width={1200} height={1500} sizes="96px" />
              </button>
            ))}
          </div>
          <div className={styles.main}>
            <Pic
              src={gallery[view].src}
              alt={gallery[view].alt}
              width={1200}
              height={1500}
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
            <p className={styles.stock}>
              <i aria-hidden="true" />
              {t.stock}
            </p>
          </fieldset>

          <p className={styles.dims}>
            <span>{t.dimsLabel}</span>
            <b>
              <span className="ltr">{DIMS}</span> {t.dimsUnit}
            </b>
            <small>{t.dimsNote}</small>
          </p>

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

          <CodOrderForm
            lang={lang}
            t={t}
            price={PRICE}
            qty={qty}
            styles={styles}
            mark={<Flower className={styles.doneMark} />}
            filled={
              capture === "form"
                ? { name: lang === "ar" ? "أمينة بلقاسم" : "Amina Belkacem", wilaya: "13", commune: lang === "ar" ? "منصورة" : "Mansourah" }
                : undefined
            }
          />

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
              <li>
                <span className="ltr">{DIMS}</span> {t.dimsUnit}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

/** NOUARA's five-petal flower, the mark shown when an order is confirmed. */
function Flower({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-24 -24 48 48" aria-hidden="true">
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy="-9" rx="5.6" ry="9.2" transform={`rotate(${a})`} />
      ))}
      <circle r="3" />
    </svg>
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
