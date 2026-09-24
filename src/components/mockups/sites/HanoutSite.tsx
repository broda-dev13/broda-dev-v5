import "@fontsource-variable/cairo/wght.css";
import { LogoHanout } from "@/components/brands/Logos";
import styles from "./HanoutSite.module.css";

/**
 * The showcase site of HANOUT 13, an invented supérette: its colours, its
 * sign and its promo posts carry the page, with the neighbourhood's real
 * needs (hours, delivery, ordering on WhatsApp). Example only. Captured at
 * 1440 x 900 @2x by scripts/render.mjs.
 */
type Lang = "fr" | "ar";

const T = {
  fr: {
    strip: "Livraison à domicile · Ouvert 7j/7 de 8 h à 23 h",
    nav: ["Rayons", "Promos", "Livraison", "Contact"],
    order: "Commander sur WhatsApp",
    title: ["Tout le quartier", "fait ses courses ici."],
    sub: "Épicerie, frais, boissons, hygiène : vous commandez sur WhatsApp, on vous livre en moins d'une heure dans le quartier.",
    primary: "Commander sur WhatsApp",
    secondary: "Voir les promos",
    tiles: [
      ["PROMO", "-20 % sur l'huile"],
      ["ARRIVAGE", "Dattes Deglet Nour"],
      ["LIVRAISON", "offerte dès 3 000 DA"],
      ["OUVERT", "7 jours sur 7"],
    ],
    aisles: ["Épicerie", "Frais", "Boissons", "Hygiène", "Bébé", "Fruits et légumes"],
  },
  ar: {
    strip: "توصيل إلى المنزل · مفتوح 7/7 من 8سا إلى 23سا",
    nav: ["الأقسام", "التخفيضات", "التوصيل", "اتصل بنا"],
    order: "اطلب عبر واتساب",
    title: ["كل الحي", "يتسوّق من هنا."],
    sub: "بقالة، طازج، مشروبات، نظافة: اطلب عبر واتساب ونوصلك في أقل من ساعة داخل الحي.",
    primary: "اطلب عبر واتساب",
    secondary: "شاهد التخفيضات",
    tiles: [
      ["تخفيض", "20% على الزيت"],
      ["وصل حديثاً", "تمر دقلة نور"],
      ["توصيل مجاني", "ابتداءً من 3 000 دج"],
      ["مفتوح", "7 أيام على 7"],
    ],
    aisles: ["بقالة", "طازج", "مشروبات", "نظافة", "رضّع", "خضر وفواكه"],
  },
};

const TONES = ["green", "yellow", "white", "green"] as const;

const AISLE_ICONS = [
  "M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2",
  "M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9Z",
  "M9 3h6v4l2 3v11H7V10l2-3V3Z",
  "M8 4h8v4H8zM7 8h10v13H7zM10 12h4",
  "M12 4a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1a4 4 0 0 1-8 0H7a3 3 0 0 1 0-6h1V8a4 4 0 0 1 4-4Z",
  "M12 7c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7Zm0 0c0-2 1-4 3-4",
];

export function HanoutSite({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className={styles.site} dir={lang === "ar" ? "rtl" : "ltr"} data-lang={lang}>
      <p className={styles.strip}>{t.strip}</p>
      <header className={styles.header}>
        <LogoHanout className={styles.logo} />
        <nav className={styles.nav}>
          {t.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </nav>
        <span className={styles.order}>
          <WaGlyph />
          {t.order}
        </span>
      </header>

      <main className={styles.hero}>
        <div>
          <h1 className={styles.title}>
            {t.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h1>
          <p className={styles.sub}>{t.sub}</p>
          <div className={styles.actions}>
            <span className={styles.primary}>
              <WaGlyph />
              {t.primary}
            </span>
            <span className={styles.secondary}>{t.secondary}</span>
          </div>
        </div>
        <div className={styles.tiles}>
          {t.tiles.map(([big, small], i) => (
            <div key={big} className={styles.tile} data-tone={TONES[i]}>
              <b>{big}</b>
              <small>{small}</small>
            </div>
          ))}
        </div>
      </main>

      <section className={styles.aisles}>
        {t.aisles.map((a, i) => (
          <span key={a}>
            <i>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={AISLE_ICONS[i]} />
              </svg>
            </i>
            {a}
          </span>
        ))}
      </section>
    </div>
  );
}

function WaGlyph() {
  return (
    <svg className={styles.wa} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
    </svg>
  );
}
