import styles from "./HanoutFacade.module.css";

/**
 * The HANOUT 13 sign painted on the blank board of a storefront photo
 * (assets/canva/scenes/hanout-facade.png, Canva AI). The board is measured on
 * that photo: 931 × 247 px at (339, 31) in 1600 × 1200. The lettering is the
 * brand's own: the striped awning, the wide wordmark, the yellow 13, and the
 * trade in both languages. Captured at 1600 × 1200 by scripts/render.mjs.
 */
export function HanoutFacade() {
  const scallops = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className={styles.scene}>
      {/* eslint-disable-next-line @next/next/no-img-element -- a capture surface, not a page */}
      <img className={styles.photo} src="/images/scenes/hanout-facade-1600.webp" alt="" width={1600} height={1200} />
      <svg className={styles.sign} viewBox="0 0 931 247" direction="ltr" aria-label="HANOUT 13">
        <defs>
          <clipPath id="facade-awning">
            <path d={`M0 0H931V34${scallops.map((i) => `A${931 / 24} ${931 / 24} 0 0 1 ${931 - (i + 1) * (931 / 12)} 34`).join("")}Z`} />
          </clipPath>
          <filter id="facade-paint" x="-5%" y="-5%" width="110%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.6" floodColor="#0b2a18" floodOpacity="0.45" />
          </filter>
        </defs>
        <g clipPath="url(#facade-awning)" opacity="0.94">
          {Array.from({ length: 12 }, (_, i) => (
            <rect key={i} x={i * (931 / 12)} y="0" width={931 / 24} height="80" fill="#f7f3e8" />
          ))}
        </g>
        <g filter="url(#facade-paint)">
          <text className={styles.word} x="100" y="170" fill="#f7f3e8">
            HANOUT
          </text>
          <circle cx="790" cy="136" r="50" fill="#ffd23f" />
          <text className={styles.number} x="790" y="154" textAnchor="middle" fill="#1d6b40">
            13
          </text>
          <text className={styles.trade} x="103" y="222" fill="#f7f3e8">
            SUPÉRETTE
          </text>
          <text className={styles.tradeAr} x="840" y="222" textAnchor="end" fill="#f7f3e8">
            بقالة
          </text>
        </g>
      </svg>
      <span className={styles.light} aria-hidden="true" />
    </div>
  );
}
