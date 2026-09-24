import styles from "./SuperPosCarnet.module.css";

/**
 * SuperPOS debt book ("Carnet de dettes"), rebuilt in HTML from the real
 * screen (public/screens/superpos/carnet-dettes-fr.png): same layout,
 * controls and wording, with a fuller sample client list. Captured at 2x by
 * scripts/render.mjs.
 */

type Lang = "fr" | "ar";

const UI = {
  fr: {
    title: "Carnet de dettes",
    back: "Retour à la caisse",
    search: "Rechercher : nom ou téléphone",
    debtorsOnly: "Débiteurs seulement",
    newClient: "Nouveau client",
    cols: ["Nom", "Téléphone", "Dernier mouvement", "Solde"],
    clients: "Clients",
    totalDue: "Total dû",
    balance: "Solde",
    addDebt: "Noter une dette",
    addPayment: "Noter un versement",
    history: "Historique",
    debt: "Dette",
    payment: "Versement",
    currency: "DA",
    address: "Cité 200 logements, Tlemcen",
    notes: ["Lait et pain", "", "Courses du mois", "Sucre, huile, café"],
  },
  ar: {
    title: "دفتر الديون",
    back: "العودة إلى الصندوق",
    search: "بحث: الاسم أو الهاتف",
    debtorsOnly: "المدينون فقط",
    newClient: "زبون جديد",
    cols: ["الاسم", "الهاتف", "آخر حركة", "الرصيد"],
    clients: "الزبائن",
    totalDue: "مجموع الديون",
    balance: "الرصيد",
    addDebt: "تسجيل دين",
    addPayment: "تسجيل دفعة",
    history: "السجل",
    debt: "دين",
    payment: "دفعة",
    currency: "دج",
    address: "حي 200 مسكن، تلمسان",
    notes: ["حليب وخبز", "", "مشتريات الشهر", "سكر، زيت، قهوة"],
  },
} as const;

// Shop data, as a shopkeeper types it: names in French or Arabic.
const CLIENTS: [string, string, string, string][] = [
  ["Ammi Rachid", "0550 12 34 56", "22/09/2026", "1 850,00"],
  ["Khalti Fatima", "0661 20 30 40", "22/09/2026", "800,00"],
  ["Boulangerie du quartier", "0770 11 22 33", "21/09/2026", "3 200,00"],
  ["Yacine B.", "0551 44 55 66", "20/09/2026", "1 250,00"],
  ["Mourad Hamidi", "0662 70 80 90", "19/09/2026", "4 600,00"],
  ["خالتي زهرة", "", "18/09/2026", "2 000,00"],
  ["Nadia, voisine", "0699 10 20 30", "18/09/2026", "450,00"],
  ["Café du coin", "0771 30 40 50", "17/09/2026", "2 780,00"],
  ["Sid Ahmed", "0552 60 70 80", "15/09/2026", "1 500,00"],
  ["عمي صالح", "", "", "0,00"],
];

const HISTORY: { kind: "debt" | "payment"; amount: string; after: string; note: number; time: string }[] = [
  { kind: "debt", amount: "+350,00", after: "1 850,00", note: 0, time: "22/09/2026  07:19" },
  { kind: "payment", amount: "−1 000,00", after: "1 500,00", note: 1, time: "20/09/2026  18:42" },
  { kind: "debt", amount: "+2 500,00", after: "2 500,00", note: 2, time: "14/09/2026  10:05" },
];

const Icon = {
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 4h2l2.2 10.5h10.6L20 7H6.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </svg>
  ),
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
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" strokeLinecap="round" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" strokeLinejoin="round" />
    </svg>
  ),
  trash: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function SuperPosCarnet({ lang }: { lang: Lang }) {
  const t = UI[lang];
  return (
    <div className={styles.app} dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <header className={styles.bar}>
        <div className={styles.brand}>
          <span className={styles.logo}>S</span>
          <strong>SuperPOS</strong>
        </div>
        <h1 className={styles.title}>{t.title}</h1>
        <span className={styles.back}>
          {Icon.cart}
          {t.back}
          <small>F1</small>
        </span>
        <div className={styles.user}>
          <span className={styles.muted}>{Icon.user}</span>
          <span>Amine Kaci</span>
          <span className={styles.menu}>{Icon.menu}</span>
        </div>
      </header>

      <main className={styles.body}>
        <section className={styles.list}>
          <div className={styles.tools}>
            <span className={styles.search}>
              <span className={styles.muted}>{Icon.search}</span>
              <span className={styles.caret} />
              {t.search}
            </span>
            <span className={styles.filter}>{t.debtorsOnly}</span>
            <span className={styles.new}>
              {Icon.plus}
              {t.newClient}
              <small>Ctrl+N</small>
            </span>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                {t.cols.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CLIENTS.map(([name, phone, date, balance], i) => (
                <tr key={name} className={i === 0 ? styles.on : undefined}>
                  <td>
                    <bdi>{name}</bdi>
                  </td>
                  <td className="ltr">{phone}</td>
                  <td className="ltr">{date}</td>
                  <td className={`ltr ${balance === "0,00" ? styles.zero : styles.amount}`}>{balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer className={styles.foot}>
            <span>
              {t.clients} : <span className="ltr">10</span>
            </span>
            <span>
              {t.totalDue} : <span className="ltr">18 430,00</span> {t.currency}
            </span>
          </footer>
        </section>

        <aside className={styles.detail}>
          <div className={styles.who}>
            <div>
              <h2>Ammi Rachid</h2>
              <p className="ltr">0550 12 34 56</p>
              <p className={styles.small}>{t.address}</p>
            </div>
            <span className={styles.actionsIcons}>
              {Icon.pen}
              {Icon.trash}
            </span>
          </div>
          <div className={styles.balance}>
            <div className={styles.balanceRow}>
              <span>{t.balance}</span>
              <span>
                <b className="ltr">1 850,00</b> <small>{t.currency}</small>
              </span>
            </div>
            <div className={styles.balanceButtons}>
              <span>
                {Icon.plus}
                {t.addDebt}
              </span>
              <span className={styles.primary}>
                {Icon.check}
                {t.addPayment}
              </span>
            </div>
          </div>
          <p className={styles.historyTitle}>{t.history}</p>
          <ul className={styles.history}>
            {HISTORY.map((h) => (
              <li key={h.time}>
                <div>
                  <b>{h.kind === "debt" ? t.debt : t.payment}</b>
                  <small>
                    <span className="ltr">{h.time}</span> · Amine Kaci
                  </small>
                  {t.notes[h.note] && <small>{t.notes[h.note]}</small>}
                </div>
                <div className={styles.historyAmount}>
                  <b className={`ltr ${h.kind === "payment" ? styles.paid : ""}`}>{h.amount}</b>
                  <small>
                    {t.balance} : <span className="ltr">{h.after}</span>
                  </small>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
}
