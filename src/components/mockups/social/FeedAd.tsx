// ZNIQA's own faces (the demo brand, not Broda Dev).
import "@fontsource-variable/big-shoulders-display/wght";
import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/cairo/wght.css";
import { Pic } from "@/components/Pic";
import { khatamPath } from "@/lib/khatam";
import styles from "./FeedAd.module.css";

/**
 * A sponsored post for the invented brand ZNIQA in two generic feeds (no
 * platform logo): "facebook" (a page post with a link card) and "instagram"
 * (a square-ish photo post with a shop strip). Captured at 390 x 844 @3x by
 * scripts/render.mjs. Example ads: the figures are illustrative.
 */
type Lang = "fr" | "ar";
type Kind = "facebook" | "instagram";

const T = {
  fr: {
    sponsored: "Sponsorisé",
    fbText: "Nouvelle collection. Le t-shirt oversize Étoile, en coton lourd, brodé ton sur ton. 2 500 DA au lieu de 3 200 DA, livraison dans les 58 wilayas.",
    linkTitle: "T-shirt oversize Étoile · 2 500 DA",
    linkSite: "zniqa.dz",
    order: "Commander",
    like: "J'aime",
    comment: "Commenter",
    share: "Partager",
    reactions: "1,2 k",
    comments: "184 commentaires",
    igCta: "Commander maintenant",
    igLikes: "J'aime",
    igCaption: "La nouvelle Étoile est là. Coton lourd 240 g, broderie ton sur ton.",
    seeAll: "Voir les 96 commentaires",
    feedTitle: "Fil d'actualité",
  },
  ar: {
    sponsored: "مُموَّل",
    fbText: "تشكيلة جديدة. تيشيرت أوفرسايز النجمة، قطن ثقيل ومطرّز بنفس اللون. 2 500 دج بدل 3 200 دج، توصيل إلى الـ58 ولاية.",
    linkTitle: "تيشيرت أوفرسايز النجمة · 2 500 دج",
    linkSite: "zniqa.dz",
    order: "اطلب الآن",
    like: "أعجبني",
    comment: "تعليق",
    share: "مشاركة",
    reactions: "1,2 ألف",
    comments: "184 تعليقاً",
    igCta: "اطلب الآن",
    igLikes: "إعجاباً",
    igCaption: "النجمة الجديدة وصلت. قطن ثقيل 240 غ، وتطريز بنفس اللون.",
    seeAll: "عرض التعليقات الـ96",
    feedTitle: "آخر الأخبار",
  },
};

const STAR = khatamPath(12, 12, 6.2);

function Avatar() {
  return (
    <span className={styles.avatar}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={STAR} />
      </svg>
    </span>
  );
}

function StatusBar({ dark }: { dark?: boolean }) {
  return (
    <div className={styles.status} data-dark={dark || undefined}>
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
        </svg>
      </span>
    </div>
  );
}

const icon = {
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 4.5 4.5",
  chat: "M4 11.5C4 7.4 7.6 4.5 12 4.5s8 2.9 8 7-3.6 7-8 7c-1 0-2-.1-2.9-.4L5 19.5l1.2-3.4A6.6 6.6 0 0 1 4 11.5Z",
  plus: "M12 5v14M5 12h14",
  like: "M7 21V10l4-7c1.5 0 2.5 1.2 2.2 2.7L12.5 10H19a2 2 0 0 1 2 2.3l-1.3 7A2 2 0 0 1 17.7 21H7Zm0 0H4V10h3",
  share: "M13 5v4C6 9 4 13 4 19c2-3.5 5-5 9-5v4l7-6.5L13 5Z",
  heart: "M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z",
  send: "M21 3 3 10.5l7 2.5 2.5 7L21 3Zm-11 10 5-5",
  save: "M6 4h12v16l-6-4-6 4V4Z",
  more: "M5 12h.01M12 12h.01M19 12h.01",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.4 3.8 5.4 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3Z",
  home: "M4 11 12 4l8 7v9h-5v-6H9v6H4v-9Z",
  video: "M4 6h11v12H4zM15 10l5-3v10l-5-3",
  bag: "M5 8h14l-1 12H6L5 8Zm4 0V6a3 3 0 0 1 6 0v2",
  user: "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 21c1-4 4-6 7.5-6s6.5 2 7.5 6",
  bell: "M6 17V11a6 6 0 1 1 12 0v6l1.5 2h-15L6 17Zm4 3a2 2 0 0 0 4 0",
  menu: "M4 7h16M4 12h16M4 17h16",
};

function I({ d, className }: { d: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export function FeedAd({ kind, lang }: { kind: Kind; lang: Lang }) {
  const t = T[lang];
  return (
    <div className={styles.screen} data-kind={kind} dir={lang === "ar" ? "rtl" : "ltr"} data-lang={lang}>
      <StatusBar />
      {kind === "facebook" ? (
        <>
          <header className={styles.fbTop}>
            <b>{t.feedTitle}</b>
            <span>
              <I d={icon.plus} />
              <I d={icon.search} />
              <I d={icon.chat} />
            </span>
          </header>
          <nav className={styles.fbTabs} aria-hidden="true">
            <I d={icon.home} className={styles.on} />
            <I d={icon.video} />
            <I d={icon.bag} />
            <I d={icon.bell} />
            <I d={icon.menu} />
          </nav>
          <article className={styles.post}>
            <div className={styles.postHead}>
              <Avatar />
              <div>
                <b>ZNIQA</b>
                <small>
                  {t.sponsored} · <I d={icon.globe} className={styles.tiny} />
                </small>
              </div>
              <I d={icon.more} className={styles.more} />
            </div>
            <p className={styles.fbText}>{t.fbText}</p>
            <Pic src="/images/zniqa/zniqa-pile" alt="" width={1136} height={1408} sizes="390px" className={styles.fbPhoto} priority />
            <div className={styles.link}>
              <div>
                <small>{t.linkSite}</small>
                <b>{t.linkTitle}</b>
              </div>
              <span>{t.order}</span>
            </div>
            <div className={styles.counts}>
              <span>
                <i className={styles.likeDot}>
                  <I d={icon.like} />
                </i>
                <i className={styles.heartDot}>
                  <I d={icon.heart} />
                </i>
                <span className="ltr">{t.reactions}</span>
              </span>
              <span>{t.comments}</span>
            </div>
            <div className={styles.actions}>
              <span>
                <I d={icon.like} />
                {t.like}
              </span>
              <span>
                <I d={icon.chat} />
                {t.comment}
              </span>
              <span>
                <I d={icon.share} />
                {t.share}
              </span>
            </div>
          </article>
        </>
      ) : (
        <>
          <header className={styles.igTop}>
            <I d={icon.plus} />
            <span className={styles.igIcons}>
              <I d={icon.heart} />
              <I d={icon.send} />
            </span>
          </header>
          <article className={styles.post}>
            <div className={styles.postHead}>
              <span className={styles.ring}>
                <Avatar />
              </span>
              <div>
                <b>zniqa.dz</b>
                <small>{t.sponsored}</small>
              </div>
              <I d={icon.more} className={styles.more} />
            </div>
            <Pic src="/images/zniqa/zniqa-olive" alt="" width={1136} height={1408} sizes="390px" className={styles.igPhoto} priority />
            <div className={styles.igCta}>
              <span>{t.igCta}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </div>
            <div className={styles.igActions}>
              <I d={icon.heart} className={styles.liked} />
              <I d={icon.chat} />
              <I d={icon.send} />
              <I d={icon.save} className={styles.save} />
            </div>
            <p className={styles.igLikes}>
              <span className="ltr">2 418</span> {t.igLikes}
            </p>
            <p className={styles.igCaption}>
              <b>zniqa.dz</b> {t.igCaption}
            </p>
            <p className={styles.igMuted}>{t.seeAll}</p>
          </article>
          <nav className={styles.igNav} aria-hidden="true">
            <I d={icon.home} />
            <I d={icon.search} />
            <I d={icon.plus} />
            <I d={icon.video} />
            <I d={icon.user} />
          </nav>
        </>
      )}
    </div>
  );
}
