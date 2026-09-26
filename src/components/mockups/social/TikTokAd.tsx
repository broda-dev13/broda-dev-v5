// ZNIQA's own faces (the demo brand, not Broda Dev): Big Shoulders Display, Figtree, Cairo.
import "@fontsource-variable/big-shoulders-display/wght";
import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/cairo/wght.css";
import { Pic } from "@/components/Pic";
import { khatamPath } from "@/lib/khatam";
import styles from "./TikTokAd.module.css";

/**
 * A sponsored video in a short-video feed, for the invented brand ZNIQA.
 * Generic feed interface (no platform logo), captured at 390 x 844 @3x by
 * scripts/render.mjs. Example ad: the figures are illustrative.
 */
type Lang = "fr" | "ar";

const T = {
  fr: {
    following: "Abonnements",
    forYou: "Pour toi",
    sponsored: "Sponsorisé",
    caption: "Le t-shirt oversize Étoile. Coton lourd 240 g, étoile brodée ton sur ton. Livraison 58 wilayas, paiement à la livraison.",
    sound: "son original · zniqa.dz",
    cta: "Commander",
    price: "2 500 DA",
    nav: ["Accueil", "Amis", "", "Messages", "Profil"],
  },
  ar: {
    following: "المتابَعون",
    forYou: "لك",
    sponsored: "مُموَّل",
    caption: "تيشيرت أوفرسايز النجمة. قطن ثقيل 240 غ، ونجمة مطرّزة بنفس اللون. توصيل إلى 58 ولاية، والدفع عند الاستلام.",
    sound: "الصوت الأصلي · zniqa.dz",
    cta: "اطلب الآن",
    price: "2 500 دج",
    nav: ["الرئيسية", "الأصدقاء", "", "الرسائل", "الملف"],
  },
};

export function TikTokAd({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className={styles.screen} dir={lang === "ar" ? "rtl" : "ltr"} data-lang={lang}>
      <Pic
        src="/images/zniqa/zniqa-porte"
        alt=""
        width={1136}
        height={1408}
        sizes="390px"
        className={styles.video}
        priority
      />
      <div className={styles.shade} />

      <div className={styles.status}>
        <span className="ltr">9:41</span>
        <span className={styles.statusIcons} aria-hidden="true">
          <svg viewBox="0 0 18 12">
            <rect x="0" y="8" width="3" height="4" rx="1" />
            <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
            <rect x="10" y="3" width="3" height="9" rx="1" />
            <rect x="15" y="0" width="3" height="12" rx="1" />
          </svg>
          <svg viewBox="0 0 26 12">
            <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity="0.5" />
            <rect x="2.5" y="2.5" width="16" height="7" rx="1.5" />
            <rect x="24" y="4" width="1.8" height="4" rx="0.9" opacity="0.5" />
          </svg>
        </span>
      </div>

      <div className={styles.tabs}>
        <span>{t.following}</span>
        <b>{t.forYou}</b>
        <svg className={styles.searchIcon} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m16.5 16.5 4 4" />
        </svg>
      </div>

      <div className={styles.rail}>
        <span className={styles.avatar}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={khatamPath(12, 12, 6.2)} />
          </svg>
          <i>+</i>
        </span>
        <span className={styles.action}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
          </svg>
          <small className="ltr">2 418</small>
        </span>
        <span className={styles.action}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 11.5C4 7.4 7.6 4.5 12 4.5s8 2.9 8 7-3.6 7-8 7c-1 0-2-.1-2.9-.4L5 19.5l1.2-3.4A6.6 6.6 0 0 1 4 11.5Z" />
          </svg>
          <small className="ltr">96</small>
        </span>
        <span className={styles.action}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 4h12v16l-6-4-6 4V4Z" />
          </svg>
          <small className="ltr">341</small>
        </span>
        <span className={styles.action}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13 5v4C6 9 4 13 4 19c2-3.5 5-5 9-5v4l7-6.5L13 5Z" />
          </svg>
          <small className="ltr">187</small>
        </span>
        <span className={styles.disc} />
      </div>

      <div className={styles.meta}>
        <p className={styles.handle}>
          zniqa.dz <span>{t.sponsored}</span>
        </p>
        <p className={styles.caption}>{t.caption}</p>
        <p className={styles.sound}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 18V6l10-2v12" />
            <circle cx="6.5" cy="18" r="2.5" />
            <circle cx="16.5" cy="16" r="2.5" />
          </svg>
          {t.sound}
        </p>
        <div className={styles.cta}>
          <span className={styles.ctaProduct}>
            <Pic src="/images/zniqa/zniqa-noir" alt="" width={1136} height={1408} sizes="44px" />
          </span>
          <span className={styles.ctaText}>
            <b>ZNIQA</b>
            <small>{t.price}</small>
          </span>
          <span className={styles.ctaButton}>{t.cta}</span>
        </div>
      </div>

      <nav className={styles.nav} aria-hidden="true">
        {t.nav.map((label, i) =>
          i === 2 ? (
            <span key="plus" className={styles.plus}>
              +
            </span>
          ) : (
            <span key={label} data-on={i === 0 || undefined}>
              <NavIcon i={i} />
              {label}
            </span>
          ),
        )}
      </nav>
    </div>
  );
}

function NavIcon({ i }: { i: number }) {
  const d = [
    "M4 11 12 4l8 7v9h-5v-6H9v6H4v-9Z",
    "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM3 20c.8-3.5 3.2-5.5 6-5.5s5.2 2 6 5.5M16 4.5a3.5 3.5 0 0 1 0 6.8M18 14.8c1.7.8 2.7 2.6 3 5.2",
    "",
    "M4 6h16v10H9l-5 4V6Z",
    "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 21c1-4 4-6 7.5-6s6.5 2 7.5 6",
  ][i];
  return (
    <svg viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  );
}
