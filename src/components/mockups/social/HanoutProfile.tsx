import "@fontsource-variable/cairo/wght.css";
import { LogoHanout } from "@/components/brands/Logos";
import styles from "./HanoutProfile.module.css";

/**
 * The social profile of HANOUT 13, an invented supérette: its logo as the
 * avatar and a grid of graphic posts in the brand's colours. Everything is
 * an example. Captured at 390 x 844 @3x by scripts/render.mjs.
 */
type Lang = "fr" | "ar";

const T = {
  fr: {
    posts: "publications",
    followers: "abonnés",
    following: "abonnements",
    bio: ["Supérette de quartier", "Livraison à domicile · 7j/7, 8h–23h"],
    follow: "Suivre",
    message: "Message",
    highlights: ["Promos", "Arrivages", "Livraison"],
    tiles: [
      ["PROMO", "-20 % sur l'huile"],
      ["ARRIVAGE", "Dattes Deglet Nour"],
      ["LIVRAISON", "offerte dès 3 000 DA"],
      ["OUVERT", "7 jours sur 7"],
      ["NOUVEAU", "Rayon épices"],
      ["WEEK-END", "Packs familles"],
      ["FRAIS", "Fruits et légumes"],
      ["SUCRÉ", "Gâteaux traditionnels"],
      ["RENTRÉE", "Packs fournitures"],
    ],
  },
  ar: {
    posts: "منشور",
    followers: "متابِع",
    following: "متابَع",
    bio: ["متجر الحي", "توصيل إلى المنزل · 7/7، 8سا–23سا"],
    follow: "متابعة",
    message: "مراسلة",
    highlights: ["تخفيضات", "وصل حديثاً", "التوصيل"],
    tiles: [
      ["تخفيض", "20% على الزيت"],
      ["وصل حديثاً", "تمر دقلة نور"],
      ["توصيل مجاني", "ابتداءً من 3 000 دج"],
      ["مفتوح", "7 أيام على 7"],
      ["جديد", "ركن التوابل"],
      ["نهاية الأسبوع", "علب العائلة"],
      ["طازج", "خضر وفواكه"],
      ["حلويات", "حلويات تقليدية"],
      ["الدخول المدرسي", "علب الأدوات"],
    ],
  },
};

const TILE_TONES = ["green", "yellow", "white", "green", "white", "yellow", "white", "green", "yellow"] as const;

export function HanoutProfile({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className={styles.screen} dir={lang === "ar" ? "rtl" : "ltr"} data-lang={lang}>
      <div className={styles.status}>
        <span className="ltr">9:41</span>
        <span className={styles.icons} aria-hidden="true">
          <svg viewBox="0 0 18 12">
            <rect x="0" y="8" width="3" height="4" rx="1" />
            <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
            <rect x="10" y="3" width="3" height="9" rx="1" />
            <rect x="15" y="0" width="3" height="12" rx="1" />
          </svg>
          <svg viewBox="0 0 26 12">
            <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity="0.5" />
            <rect x="2.5" y="2.5" width="16" height="7" rx="1.5" />
          </svg>
        </span>
      </div>
      <header className={styles.top}>
        <b>hanout13</b>
      </header>
      <section className={styles.head}>
        <span className={styles.avatar}>
          <LogoHanout className={styles.logo} />
        </span>
        <dl className={styles.stats}>
          <div>
            <dt className="ltr">128</dt>
            <dd>{t.posts}</dd>
          </div>
          <div>
            <dt className="ltr">4 210</dt>
            <dd>{t.followers}</dd>
          </div>
          <div>
            <dt className="ltr">96</dt>
            <dd>{t.following}</dd>
          </div>
        </dl>
      </section>
      <div className={styles.bio}>
        <b>HANOUT 13</b>
        {t.bio.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
      <div className={styles.buttons}>
        <span className={styles.follow}>{t.follow}</span>
        <span>{t.message}</span>
      </div>
      <div className={styles.highlights}>
        {t.highlights.map((h, i) => (
          <span key={h}>
            <i data-tone={TILE_TONES[i]} />
            {h}
          </span>
        ))}
      </div>
      <div className={styles.grid}>
        {t.tiles.map(([big, small], i) => (
          <div key={big} className={styles.tile} data-tone={TILE_TONES[i]}>
            <b>{big}</b>
            <small>{small}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
