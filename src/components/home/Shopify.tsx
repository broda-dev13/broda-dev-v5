"use client";

import { useRef, useState } from "react";
import { Laptop, Phone } from "@/components/frames/Devices";
import { Pic } from "@/components/Pic";
import { Arrow, pill } from "@/components/ui/ui";
import { FORM_MARKERS, SITE, type Lang } from "@/content/site";
import { HostingLine } from "./HostingLine";
import styles from "./Shopify.module.css";

/**
 * Shopify and product pages, shown through two live demos of invented,
 * labelled brands: ZNIQA (a T-shirt) and NOUARA (a handbag). A key per demo
 * swaps the product page on the laptop and the cash-on-delivery form on the
 * phone, its five steps numbered on the screen and in the list; the demo
 * button opens the chosen store.
 */
export function Shopify({ lang, index }: { lang: Lang; index: number }) {
  const t = SITE[lang].shopify;
  const r = (name: string) => `/images/renders/${name}-${lang}`;
  const [active, setActive] = useState(0);
  const keys = useRef<(HTMLButtonElement | null)[]>([]);
  const demo = t.demos[active];

  function onKey(e: React.KeyboardEvent, i: number) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next = e.key === "Home" ? 0 : e.key === "End" ? t.demos.length - 1 : (i + 1) % t.demos.length;
    setActive(next);
    keys.current[next]?.focus();
  }

  return (
    <section className={styles.service} id="shopify" data-section={index} aria-labelledby="shopify-title">
      <div className={styles.text}>
        <span className={styles.platform}>
          <Pic src="/images/brands/shopify-logo" alt="Shopify" width={1542} height={482} sizes="120px" />
        </span>
        <h2 id="shopify-title" className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.lead}>{t.lead}</p>
        <p className={styles.body}>{t.body}</p>
        <div className={styles.demos} role="tablist" aria-label={t.demosLabel}>
          {t.demos.map((d, i) => (
            <button
              key={d.id}
              ref={(el) => {
                keys.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`demo-${d.id}`}
              aria-selected={active === i}
              aria-controls="shopify-panel"
              tabIndex={active === i ? 0 : -1}
              className={styles.demo}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <i aria-hidden="true" />
              <b>{d.name}</b>
              <small>{d.sub}</small>
            </button>
          ))}
        </div>
        <ol className={styles.features}>
          {t.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ol>
        <HostingLine lang={lang} />
        <a className={pill.ink} href={`/${lang}/demo/${demo.id}`}>
          {t.cta}
          <Arrow />
        </a>
        <p className={styles.example}>{demo.label}</p>
      </div>

      <figure className={styles.board} id="shopify-panel" role="tabpanel" aria-labelledby={`demo-${demo.id}`}>
        {t.demos.map((d, i) => (
          <div key={d.id} className={styles.slot} data-on={active === i || undefined} aria-hidden={active !== i}>
            <Laptop
              className={styles.laptop}
              screen={{ src: r(`${d.id}-bureau`), alt: d.laptopAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 46vw, 92vw" }}
            />
            <Phone
              className={styles.phone}
              statusBg="#ffffff"
              screen={{ src: r(`${d.id}-mobile-form`), alt: d.phoneAlt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 18vw, 46vw" }}
            >
              {FORM_MARKERS[d.id as keyof typeof FORM_MARKERS].map((top, n) => (
                <span key={top} className={styles.marker} style={{ top: `${top}%` }} aria-hidden="true">
                  {n + 1}
                </span>
              ))}
            </Phone>
          </div>
        ))}
      </figure>
    </section>
  );
}
