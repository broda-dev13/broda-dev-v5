"use client";

import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/cairo/wght.css";
import { useEffect, useRef, useState } from "react";
import { LogoLemma, LogoMiniMarket } from "@/components/brands/Logos";
import { PosTerminal } from "@/components/frames/Devices";
import { SHOPS, type Shop } from "@/components/mockups/superpos/shops";
import { Arrow, pill } from "@/components/ui/ui";
import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import styles from "./Caisses.module.css";

/**
 * POS systems as a counter: the till running POS-MINI MARKET and the ticket
 * printer beside it. Two keys choose the trade. The supérette shows the
 * real payment screen; the café shows the same checkout filled with the menu
 * of LEMMA, an invented café. Each switch prints that shop's ticket, whose
 * lines and totals match the screen.
 */
export function Caisses({ lang, index }: { lang: Lang; index: number }) {
  const t = SITE[lang].caisses;
  const [active, setActive] = useState(0);
  // idle: server HTML, ticket shown; armed: ticket waits in the printer; run: it prints.
  const [print, setPrint] = useState<"idle" | "armed" | "run">("idle");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const counter = useRef<HTMLElement>(null);
  const trade = t.trades[active];

  // The first ticket prints when the counter comes into view.
  useEffect(() => {
    const el = counter.current;
    if (!el) return;
    setPrint("armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPrint("run");
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function onKey(e: React.KeyboardEvent, i: number) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next = e.key === "Home" ? 0 : e.key === "End" ? t.trades.length - 1 : (i + 1) % t.trades.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  const screens = [`superpos-paiement-${lang}`, `superpos-cafe-${lang}`];

  return (
    <section className={styles.caisses} id="caisses" data-section={index} aria-labelledby="caisses-title">
      <div className={styles.text}>
        <h2 id="caisses-title" className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.lead}>{t.lead}</p>
        <p className={styles.body}>{t.body}</p>

        <div className={styles.trades} role="tablist" aria-label={t.tradesLabel}>
          {t.trades.map((tr, i) => (
            <button
              key={tr.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`trade-${tr.id}`}
              aria-selected={active === i}
              aria-controls="caisses-panel"
              tabIndex={active === i ? 0 : -1}
              className={styles.trade}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <i aria-hidden="true" />
              <b>{tr.name}</b>
              <small>{tr.sub}</small>
            </button>
          ))}
        </div>

        <div className={styles.panel} role="tabpanel" id="caisses-panel" aria-labelledby={`trade-${trade.id}`} key={trade.id}>
          <p className={styles.line}>{trade.line}</p>
          <p className={styles.proof}>{trade.proof}</p>
        </div>

        <a className={`${pill.ink} ${styles.cta}`} href={whatsapp(t.wa)}>
          {t.cta}
          <Arrow />
        </a>
      </div>

      <figure className={styles.counter} ref={counter} data-print={print}>
        <div className={styles.slab} aria-hidden="true" />
        {t.trades.map((tr, i) => (
          <div key={tr.id} className={styles.slot} data-on={active === i || undefined} aria-hidden={active !== i}>
            <PosTerminal
              className={styles.pos}
              screen={{ src: `/images/renders/${screens[i]}`, alt: tr.alt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 38vw, 84vw" }}
            />
          </div>
        ))}
        <div className={styles.printer} aria-hidden="true">
          <div className={styles.paper}>
            <Ticket key={trade.id} shop={trade.id as Shop} lang={lang} />
          </div>
          <div className={styles.printerBody}>
            <span className={styles.led} />
          </div>
        </div>
      </figure>
    </section>
  );
}

const TICKET = {
  fr: { superette: "Supérette · Tlemcen", cafe: "Café · Tlemcen", no: "N°", total: "Total", cash: "Espèces", change: "Rendu", thanks: "Merci de votre visite", currency: "DA" },
  ar: { superette: "بقالة · تلمسان", cafe: "مقهى · تلمسان", no: "رقم", total: "المجموع", cash: "نقداً", change: "الباقي", thanks: "شكراً لزيارتكم", currency: "دج" },
} as const;

const RECEIPT: Record<Shop, { no: string; time: string }> = {
  superette: { no: "000128", time: "18:42" },
  cafe: { no: "000057", time: "09:15" },
};

/** The printed ticket: the shop's lines and totals, exactly those on the screen. */
function Ticket({ shop, lang }: { shop: Shop; lang: Lang }) {
  const t = TICKET[lang];
  const s = SHOPS[shop];
  const r = RECEIPT[shop];
  return (
    <div className={styles.ticket} dir={lang === "ar" ? "rtl" : "ltr"}>
      {shop === "superette" ? <LogoMiniMarket className={`${styles.logo} ${styles.logoWide}`} tone="dark" /> : <LogoLemma className={styles.logo} tone="dark" />}
      <p className={styles.shop}>{t[shop]}</p>
      <p className={styles.meta}>
        <span>
          {t.no} <span className="ltr">{r.no}</span>
        </span>
        <span className="ltr">25/09/2026 {r.time}</span>
      </p>
      <ul className={styles.items}>
        {s.ticket.map((l) => (
          <li key={l.name}>
            <span className={styles.item}>
              <span className="ltr">{/^\d+$/.test(l.qty) ? `${l.qty}×` : l.qty}</span> <bdi>{l.name}</bdi>
            </span>
            <span className="ltr">{l.total}</span>
          </li>
        ))}
      </ul>
      <p className={styles.total}>
        <span>{t.total}</span>
        <span>
          <b className="ltr">{s.total}</b> {t.currency}
        </span>
      </p>
      <p className={styles.row}>
        <span>{t.cash}</span>
        <span className="ltr">{s.cash}</span>
      </p>
      <p className={styles.row}>
        <span>{t.change}</span>
        <span className="ltr">{s.change}</span>
      </p>
      <p className={styles.thanks}>{t.thanks}</p>
      <span className={styles.barcode} />
    </div>
  );
}
