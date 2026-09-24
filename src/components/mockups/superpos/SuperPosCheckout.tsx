import { SuperPosBar } from "./SuperPosBar";
import { SHOPS, type Shop } from "./shops";
import styles from "./SuperPosCheckout.module.css";

/**
 * SuperPOS checkout, rebuilt in HTML from the real screen
 * (public/screens/superpos/caisse-fr.png and caisse-ar.png): same layout,
 * controls and wording, fresh sample data. It fills its viewport and is
 * captured at 2x by scripts/render.mjs for the device frames.
 *
 * `shop` swaps the shop data only: the grocery of the real screens, or the
 * same checkout filled with the menu of LEMMA, an invented café.
 */

type Lang = "fr" | "ar";

const UI = {
  fr: {
    search: "Scannez un code-barres ou tapez le nom d'un produit",
    all: "Tout",
    tax: "Dont TVA",
    total: "Total",
    currency: "DA",
    discount: "Remise",
    remove: "Retirer",
    cancel: "Annuler",
    qty: "Qté",
    pctDiscount: "% Rem.",
    price: "Prix",
    pay: "Paiement",
  },
  ar: {
    search: "امسح الرمز الشريطي أو اكتب اسم المنتج",
    all: "الكل",
    tax: "منها الرسم",
    total: "المجموع",
    currency: "دج",
    discount: "خصم",
    remove: "حذف",
    cancel: "إلغاء",
    qty: "الكمية",
    pctDiscount: "خصم %",
    price: "السعر",
    pay: "الدفع",
  },
} as const;

const Icon = {
  barcode: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3M7 8v8M10 8v8M12.5 8v8M15 8v8M17 8v8" strokeLinecap="round" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 12V4h8l10 10-8 8L3 12Z" strokeLinejoin="round" />
      <circle cx="7.5" cy="8.5" r="1.3" />
    </svg>
  ),
  trash: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  ),
  back: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M9 5h11v14H9l-6-7 6-7Z" strokeLinejoin="round" />
      <path d="m12 9 5 6M17 9l-5 6" strokeLinecap="round" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function SuperPosCheckout({ lang, shop = "superette" }: { lang: Lang; shop?: Shop }) {
  const t = UI[lang];
  const { categories, ticket, products, tax, total } = SHOPS[shop];
  const money = (v: string) =>
    lang === "ar" ? (
      <>
        <span className="ltr">{v}</span> {t.currency}
      </>
    ) : (
      `${v} ${t.currency}`
    );

  return (
    <div className={styles.app} dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <SuperPosBar className={styles.bar} />

      <aside className={styles.ticket}>
        <ul className={styles.lines}>
          {ticket.map((l, i) => (
            <li key={l.name} className={i === ticket.length - 1 ? styles.lineOn : undefined}>
              <span className={styles.lineName}>
                <bdi>{l.name}</bdi>
              </span>
              <span className={`${styles.lineTotal} ltr`}>{l.total}</span>
              <span className={`${styles.lineQty} ltr`}>
                {l.qty} × {l.unit}
              </span>
            </li>
          ))}
        </ul>
        <div className={styles.sums}>
          <div className={styles.tax}>
            <span>{t.tax}</span>
            <span className="ltr">{tax}</span>
          </div>
          <div className={styles.total}>
            <span>{t.total}</span>
            <span>
              <b className="ltr">{total}</b> <small>{t.currency}</small>
            </span>
          </div>
        </div>
        <div className={styles.actions}>
          <span>
            {Icon.tag}
            {t.discount}
          </span>
          <span>
            {Icon.trash}
            {t.remove}
          </span>
          <span>
            {Icon.x}
            {t.cancel}
          </span>
        </div>
        <div className={styles.pad}>
          {["1", "2", "3"].map((k) => (
            <span key={k}>{k}</span>
          ))}
          <span className={styles.padOn}>{t.qty}</span>
          {["4", "5", "6"].map((k) => (
            <span key={k}>{k}</span>
          ))}
          <span className={styles.padFn}>{t.pctDiscount}</span>
          {["7", "8", "9"].map((k) => (
            <span key={k}>{k}</span>
          ))}
          <span className={styles.padFn}>{t.price}</span>
          <span>C</span>
          <span>0</span>
          <span>,</span>
          <span className={styles.padFn}>{Icon.back}</span>
        </div>
        <div className={styles.pay}>
          <span className={styles.payIcon}>{Icon.check}</span>
          <span>{t.pay}</span>
          <small>F12</small>
        </div>
      </aside>

      <main className={styles.catalog}>
        <div className={styles.search}>
          <span className={styles.searchIcon}>{Icon.barcode}</span>
          <span>{t.search}</span>
        </div>
        <div className={styles.chips}>
          <span className={styles.chipOn}>{t.all}</span>
          {categories.map((c) => (
            <span key={c} dir="ltr">
              {c}
            </span>
          ))}
        </div>
        <div className={styles.grid}>
          {products.map(([name, price, low]) => (
            <div key={name} className={styles.product}>
              <span className={styles.initial}>{name[0]}</span>
              <span className={styles.productName} dir="ltr">
                {name}
              </span>
              <span className={styles.price}>{money(price)}</span>
              {low && <span className={styles.low} />}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
