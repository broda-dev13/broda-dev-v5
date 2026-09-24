import styles from "./SuperPosCheckout.module.css";

/**
 * SuperPOS checkout, rebuilt in HTML from the real screen
 * (public/screens/superpos/caisse-fr.png and caisse-ar.png): same layout,
 * controls and wording, fresh sample data. It fills its viewport and is
 * captured at 2x by scripts/render.mjs for the device frames.
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

// Product names and categories are shop data, entered in French, as on the real screens.
const CATEGORIES = [
  "Produits laitiers",
  "Épicerie",
  "Boissons",
  "Confiserie & biscuits",
  "Fruits & légumes",
  "Boulangerie",
  "Hygiène & entretien",
];

const TICKET: { name: string; qty: string; unit: string; total: string }[] = [
  { name: "Semoule moyenne 1kg", qty: "2", unit: "110,00", total: "220,00" },
  { name: "Tomates fraîches", qty: "0,75 kg", unit: "120,00", total: "90,00" },
  { name: "Pois chiches 1kg", qty: "1", unit: "350,00", total: "350,00" },
  { name: "زيت زيتون بلدي 1L", qty: "1", unit: "1 200,00", total: "1 200,00" },
  { name: "Lben 1L", qty: "2", unit: "90,00", total: "180,00" },
  { name: "Dattes Deglet Nour 500g", qty: "1", unit: "450,00", total: "450,00" },
  { name: "Thé vert 250g", qty: "1", unit: "280,00", total: "280,00" },
  { name: "Bonbons assortis (vrac)", qty: "0,5 kg", unit: "600,00", total: "300,00" },
];

const PRODUCTS: [string, string, boolean?][] = [
  ["Beurre doux 200g", "390,00", true],
  ["Biscuits au chocolat 100g", "50,00"],
  ["Boisson gazeuse 2L", "150,00"],
  ["Bonbons assortis (vrac)", "600,00"],
  ["Café moulu 250g", "380,00"],
  ["Chocolat au lait 100g", "180,00"],
  ["Concentré de tomate 400g", "150,00"],
  ["Couches bébé taille 4 x44", "1 450,00"],
  ["Couscous fin 1kg", "180,00"],
  ["Dattes Deglet Nour 500g", "450,00"],
  ["Dentifrice 75ml", "220,00"],
  ["Eau de javel 1L", "90,00"],
  ["Eau minérale 0,5L", "25,00"],
  ["Eau minérale 1,5L", "45,00"],
  ["Farine de blé 1kg", "90,00"],
  ["Fromage fondu 8 portions", "220,00"],
  ["Harissa 135g", "120,00"],
  ["Huile de table 1L", "140,00"],
  ["Lben 1L", "90,00"],
  ["Lentilles 1kg", "260,00"],
  ["Pois chiches 1kg", "350,00"],
  ["Riz long 1kg", "170,00"],
  ["Sardines à l'huile 125g", "110,00"],
  ["Savon de Marseille 300g", "95,00"],
  ["Semoule moyenne 1kg", "110,00"],
  ["Shampoing 400ml", "380,00"],
  ["Sucre blanc 1kg", "100,00"],
  ["Thé vert 250g", "280,00"],
  ["Vinaigre 1L", "70,00"],
  ["Yaourt nature x4", "120,00"],
];

const Icon = {
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" strokeLinecap="round" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  ),
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

export function SuperPosCheckout({ lang }: { lang: Lang }) {
  const t = UI[lang];
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
      <header className={styles.bar}>
        <div className={styles.brand}>
          <span className={styles.logo}>S</span>
          <strong>SuperPOS</strong>
        </div>
        <div className={styles.tabs}>
          <span className={`${styles.tab} ${styles.tabOn}`}>001</span>
          <span className={styles.tabAdd}>{Icon.plus}</span>
        </div>
        <div className={styles.user}>
          <span className={styles.userIcon}>{Icon.user}</span>
          <span>Amine Kaci</span>
          <span className={styles.menu}>{Icon.menu}</span>
        </div>
      </header>

      <aside className={styles.ticket}>
        <ul className={styles.lines}>
          {TICKET.map((l, i) => (
            <li key={l.name} className={i === TICKET.length - 1 ? styles.lineOn : undefined}>
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
            <span className="ltr">312,40</span>
          </div>
          <div className={styles.total}>
            <span>{t.total}</span>
            <span>
              <b className="ltr">3 070,00</b> <small>{t.currency}</small>
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
          {CATEGORIES.map((c) => (
            <span key={c} dir="ltr">
              {c}
            </span>
          ))}
        </div>
        <div className={styles.grid}>
          {PRODUCTS.map(([name, price, low]) => (
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
