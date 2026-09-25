"use client";

import { useRef, useState } from "react";
import { Laptop, Monitor, PosTerminal } from "@/components/frames/Devices";
import { Arrow, pill } from "@/components/ui/ui";
import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import styles from "./Software.module.css";

/**
 * The three programs as three keys. Each key swaps the device on the yellow
 * board (the till for POS-MINI MARKET, the office monitor for G-Stock, the laptop
 * for Budget Employé) and the claims beside it. Every screen is real or a
 * faithful HD rebuild of a real one, and says which.
 */
export function Software({ lang }: { lang: Lang }) {
  const t = SITE[lang].software;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const product = t.products[active];

  function onKey(e: React.KeyboardEvent, i: number) {
    const forward = lang === "ar" ? "ArrowLeft" : "ArrowRight";
    const back = lang === "ar" ? "ArrowRight" : "ArrowLeft";
    let next = i;
    if (e.key === forward) next = (i + 1) % t.products.length;
    else if (e.key === back) next = (i - 1 + t.products.length) % t.products.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = t.products.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  const screens = [
    <PosTerminal
      key="pos-minimarket"
      className={styles.pos}
      screen={{ src: `/images/renders/superpos-carnet-${lang}`, alt: t.products[0].alt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 46vw, 90vw" }}
    />,
    <Monitor
      key="gstock"
      className={styles.monitor}
      ratio={1600 / 940}
      screen={{ src: "/images/gstock/gstock-tableau-de-bord", alt: t.products[1].alt, width: 1600, height: 940, sizes: "(min-width: 1024px) 48vw, 92vw" }}
    />,
    <Laptop
      key="budget"
      className={styles.laptop}
      screen={{ src: `/images/budget/budget-dashboard-${lang}`, alt: t.products[2].alt, width: 1600, height: 1000, widths: [1136, 1600], sizes: "(min-width: 1024px) 48vw, 92vw" }}
    />,
  ];

  return (
    <section className={styles.software} id="logiciels" data-section={0} aria-labelledby="software-title">
      <div className={styles.head}>
        <h2 id="software-title" className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.lead}>{t.lead}</p>
      </div>

      <div className={styles.tabs} role="tablist" aria-label={t.tabsLabel}>
        {t.products.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${p.id}`}
            aria-selected={active === i}
            aria-controls="software-panel"
            tabIndex={active === i ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <i aria-hidden="true" />
            <b>{p.name}</b>
            <small>{p.what}</small>
          </button>
        ))}
      </div>

      <div className={styles.panel} role="tabpanel" id="software-panel" aria-labelledby={`tab-${product.id}`}>
        <figure className={styles.board}>
          {screens.map((screen, i) => (
            <div key={i} className={styles.slot} data-on={active === i || undefined} aria-hidden={active !== i}>
              {screen}
            </div>
          ))}
        </figure>

        <div className={styles.text} key={product.id}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.what}>{product.what}</p>
          <ul className={styles.features}>
            {product.features.map((f) => (
              <li key={f}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m5 12.5 4.5 4.5L19 7.5" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <a className={pill.ink} href={whatsapp(product.wa)}>
            {product.cta}
            <Arrow />
          </a>
          <p className={styles.proof}>{product.proof}</p>
        </div>
      </div>
    </section>
  );
}
