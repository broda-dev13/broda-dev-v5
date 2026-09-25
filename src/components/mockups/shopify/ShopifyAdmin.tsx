import { TARIFS_PAR_WILAYA, WILAYAS } from "@/data/wilayas";
import { khatamPath } from "@/lib/khatam";
import styles from "./ShopifyAdmin.module.css";

/**
 * The order list of the ZNIQA example store in a Shopify-style admin, in
 * French (the language an Algerian seller runs the admin in). Cash on
 * delivery orders from the product page's form: each total is the example
 * price plus the example delivery rate of the wilaya (src/data/wilayas.ts).
 * No Shopify logo; the store is named, the data is marked as example.
 * Captured at 1440 x 900 @2x by scripts/render.mjs.
 */

const PRICE = 2500;

type Order = { no: number; when: string; name: string; wilaya: number; home: boolean; qty: number; state: "todo" | "done" | "sent" };

const ORDERS: Order[] = [
  { no: 1048, when: "Aujourd'hui à 14:32", name: "Yacine Belkacem", wilaya: 13, home: false, qty: 1, state: "todo" },
  { no: 1047, when: "Aujourd'hui à 13:05", name: "Sara Mebarki", wilaya: 31, home: true, qty: 2, state: "todo" },
  { no: 1046, when: "Aujourd'hui à 11:48", name: "Amine Kaci", wilaya: 16, home: false, qty: 1, state: "todo" },
  { no: 1045, when: "Aujourd'hui à 10:17", name: "Nour El Houda Saidi", wilaya: 25, home: true, qty: 1, state: "todo" },
  { no: 1044, when: "Aujourd'hui à 09:02", name: "Walid Hamidi", wilaya: 22, home: false, qty: 3, state: "done" },
  { no: 1043, when: "Hier à 21:40", name: "Imane Boudiaf", wilaya: 19, home: true, qty: 1, state: "done" },
  { no: 1042, when: "Hier à 18:26", name: "Karim Zerrouki", wilaya: 30, home: false, qty: 2, state: "done" },
  { no: 1041, when: "Hier à 16:55", name: "Lina Cherif", wilaya: 9, home: true, qty: 1, state: "sent" },
  { no: 1040, when: "Hier à 12:10", name: "Mohamed Bouzid", wilaya: 47, home: false, qty: 1, state: "sent" },
  { no: 1039, when: "22 sept. à 19:44", name: "Ryma Benali", wilaya: 6, home: true, qty: 2, state: "sent" },
];

const NAV = [
  ["Accueil", "M4 11 12 4l8 7v9h-5v-6H9v6H4z"],
  ["Commandes", "M5 4h14l1 16H4L5 4Zm4 0v3a3 3 0 0 0 6 0V4"],
  ["Produits", "M3 8l9-5 9 5-9 5-9-5Zm0 0v8l9 5 9-5V8"],
  ["Clients", "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0"],
  ["Contenu", "M4 5h16v14H4zM4 9h16"],
  ["Analyses", "M5 20V10M12 20V4M19 20v-7"],
  ["Marketing", "M4 14V9l12-5v16L4 14Zm4 1v5"],
  ["Remises", "M4 12V4h8l8 8-8 8-8-8Zm4.5-4.5h.01"],
] as const;

const fmt = (n: number) => `${n.toLocaleString("fr-FR").replace(/[  ]/g, " ")},00 DA`;
const total = (o: Order) => PRICE * o.qty + TARIFS_PAR_WILAYA[String(o.wilaya)][o.home ? 1 : 0];
const wilayaName = (code: number) => WILAYAS.find(([c]) => c === code)?.[1] ?? "";

export function ShopifyAdmin() {
  const todo = ORDERS.filter((o) => o.state === "todo").length;
  return (
    <div className={styles.admin} lang="fr">
      <header className={styles.top}>
        <div className={styles.search}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6" />
            <path d="m16 16 4 4" />
          </svg>
          <span>Rechercher</span>
          <kbd>Ctrl K</kbd>
        </div>
        <span className={styles.example}>Boutique d&apos;exemple · données d&apos;exemple</span>
        <div className={styles.store}>
          <span className={styles.avatar}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={khatamPath(12, 12, 7)} />
            </svg>
          </span>
          ZNIQA
        </div>
      </header>

      <aside className={styles.side}>
        <nav>
          {NAV.map(([label, d]) => (
            <span key={label} className={label === "Commandes" ? styles.on : undefined}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={d} />
              </svg>
              {label}
              {label === "Commandes" && <b>{todo}</b>}
            </span>
          ))}
        </nav>
        <p className={styles.sideHead}>Canaux de vente</p>
        <nav>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9h16l-1-4H5L4 9Zm1 0v10h14V9M9 19v-6h6v6" />
            </svg>
            Boutique en ligne
          </span>
        </nav>
        <nav className={styles.settings}>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
            </svg>
            Paramètres
          </span>
        </nav>
      </aside>

      <main className={styles.main}>
        <div className={styles.head}>
          <h1>Commandes</h1>
          <div className={styles.actions}>
            <span className={styles.ghost}>Exporter</span>
            <span className={styles.ghost}>Plus d&apos;actions</span>
            <span className={styles.primary}>Créer une commande</span>
          </div>
        </div>

        <div className={styles.stats}>
          <span>Aujourd&apos;hui</span>
          <div>
            <small>Commandes</small>
            <b>5</b>
          </div>
          <div>
            <small>Articles commandés</small>
            <b>8</b>
          </div>
          <div>
            <small>À confirmer par téléphone</small>
            <b>{todo}</b>
          </div>
          <div>
            <small>Paiement</small>
            <b>À la livraison</b>
          </div>
        </div>

        <section className={styles.card}>
          <div className={styles.tabs}>
            {["Toutes", "Non traitées", "Paiement en attente", "Ouvertes", "Archivées"].map((t, i) => (
              <span key={t} className={i === 0 ? styles.tabOn : undefined}>
                {t}
              </span>
            ))}
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th aria-label="Sélection">
                  <i />
                </th>
                <th>Commande</th>
                <th>Date</th>
                <th>Client</th>
                <th>Livraison</th>
                <th className={styles.num}>Total</th>
                <th>Paiement</th>
                <th>Traitement</th>
                <th className={styles.num}>Articles</th>
              </tr>
            </thead>
            <tbody>
              {ORDERS.map((o) => (
                <tr key={o.no}>
                  <td>
                    <i />
                  </td>
                  <td className={styles.no}>#{o.no}</td>
                  <td className={styles.muted}>{o.when}</td>
                  <td>{o.name}</td>
                  <td>
                    {o.home ? "Domicile" : "Stop desk"} · {wilayaName(o.wilaya)}
                  </td>
                  <td className={styles.num}>{fmt(total(o))}</td>
                  <td>
                    <span className={styles.badge} data-tone="wait">
                      <i />
                      Paiement à la livraison
                    </span>
                  </td>
                  <td>
                    {o.state === "todo" && (
                      <span className={styles.badge} data-tone="todo">
                        <i />À confirmer
                      </span>
                    )}
                    {o.state === "done" && (
                      <span className={styles.badge} data-tone="done">
                        <i />
                        Confirmée
                      </span>
                    )}
                    {o.state === "sent" && (
                      <span className={styles.badge} data-tone="sent">
                        <i />
                        Expédiée
                      </span>
                    )}
                  </td>
                  <td className={styles.num}>{o.qty} article{o.qty > 1 ? "s" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
