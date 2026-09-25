import { SuperPosBar } from "./SuperPosBar";
import { SHOPS, type Shop } from "./shops";
import styles from "./SuperPosPayment.module.css";

/**
 * POS-MINI MARKET payment, rebuilt in HTML from the real screen
 * (public/screens/superpos/paiement-fr.png): the total, the cash received
 * with its quick amounts, the change to give back, and the keypad. The
 * Arabic labels reuse the wording of the real Arabic screens where it
 * exists (recu-ar.png). Captured at 2x by scripts/render.mjs.
 */

type Lang = "fr" | "ar";

const UI = {
  fr: {
    back: "Retour",
    title: "Paiement",
    due: "Total à payer",
    received: "Montant reçu (vide = montant exact)",
    exact: "Exact",
    change: "Monnaie à rendre",
    validate: "Valider le paiement",
    currency: "DA",
  },
  ar: {
    back: "رجوع",
    title: "الدفع",
    due: "المبلغ المطلوب",
    received: "المبلغ المستلم (فارغ = المبلغ بالضبط)",
    exact: "بالضبط",
    change: "الباقي للزبون",
    validate: "تأكيد الدفع",
    currency: "دج",
  },
} as const;

export function SuperPosPayment({ lang, shop = "superette" }: { lang: Lang; shop?: Shop }) {
  const t = UI[lang];
  const { total, cash, change } = SHOPS[shop];
  return (
    <div className={styles.app} dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <SuperPosBar tabs={["001", "002"]} />
      <main className={styles.canvas}>
        <section className={styles.card}>
          <div className={styles.head}>
            <span className={styles.back}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="m14 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <b>{t.back}</b>
              <small>Échap</small>
            </span>
            <h1>{t.title}</h1>
          </div>

          <div className={styles.amounts}>
            <p className={styles.label}>{t.due}</p>
            <p className={styles.due}>
              <b className="ltr">{total}</b> <small>{t.currency}</small>
            </p>
            <p className={styles.label}>{t.received}</p>
            <p className={styles.input} dir="ltr">
              <span>{cash.replace(/\D/g, "").slice(0, -2)}</span>
              <i />
            </p>
            <div className={styles.quick}>
              {[t.exact, "+200", "+500", "+1000", "+2000"].map((q) => (
                <span key={q} className="ltr">
                  {q}
                </span>
              ))}
            </div>
            <div className={styles.change}>
              <span>{t.change}</span>
              <span>
                <b className="ltr">{change}</b> <small>{t.currency}</small>
              </span>
            </div>
          </div>

          <div className={styles.pad}>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0"].map((k) => (
              <span key={k}>{k}</span>
            ))}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M9 5h11v14H9l-6-7 6-7Z" strokeLinejoin="round" />
                <path d="m12 9 5 6M17 9l-5 6" strokeLinecap="round" />
              </svg>
            </span>
          </div>

          <div className={styles.validate}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{t.validate}</span>
            <small>Entrée</small>
          </div>
        </section>
      </main>
    </div>
  );
}
