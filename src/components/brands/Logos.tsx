import { khatamPath } from "@/lib/khatam";

/**
 * Logos of the invented demo brands (Broda Dev examples, labelled as such
 * wherever they appear). Each is drawn as SVG so it stays sharp at any size.
 * Faces: Big Shoulders Display (ZNIQA), Figtree and Cairo (LEMMA), Archivo
 * narrow (NOUARA), Figtree (MINI MARKET).
 */

type Props = { className?: string; tone?: "light" | "dark" };

const STAR = khatamPath(40, 40, 22);

/** ZNIQA, streetwear: the eight-pointed star and a condensed wordmark. */
export function LogoZniqa({ className, tone = "dark" }: Props) {
  const ink = tone === "dark" ? "#121212" : "#f3f1ed";
  return (
    <svg className={className} viewBox="0 0 320 80" direction="ltr" role="img" aria-label="ZNIQA">
      <path d={STAR} fill="none" stroke={ink} strokeWidth="6" strokeLinejoin="round" />
      <text x="84" y="63" fill={ink} fontFamily="'Big Shoulders Display Variable', sans-serif" fontWeight="900" fontSize="70" letterSpacing="3">
        ZNIQA
      </text>
    </svg>
  );
}

/** LEMMA, a neighbourhood café: a cup with a rising steam curl, the name in Latin and Arabic. */
export function LogoLemma({ className, tone = "light" }: Props) {
  const ink = tone === "light" ? "#f3e6d3" : "#2b1a12";
  const accent = "#e0673a";
  return (
    <svg className={className} viewBox="0 0 300 110" direction="ltr" role="img" aria-label="LEMMA, café">
      <g fill="none" stroke={ink} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 48h52v20a26 26 0 0 1-52 0V48Z" />
        <path d="M66 54h7a11 11 0 0 1 0 22h-8" />
        <path d="M32 38c-6-7 6-12 0-20" stroke={accent} />
        <path d="M48 38c-6-7 6-12 0-20" stroke={accent} />
      </g>
      <text x="102" y="70" fill={ink} fontFamily="'Figtree Variable', sans-serif" fontWeight="800" fontSize="54" letterSpacing="-1.5">
        lemma
      </text>
      <text x="104" y="100" fill={accent} fontFamily="'Cairo Variable', sans-serif" fontWeight="700" fontSize="22">
        لمّة · café
      </text>
    </svg>
  );
}

/** NOUARA, handbags: a five-petal flower in one line, a light spaced wordmark. */
export function LogoNouara({ className, tone = "dark" }: Props) {
  const ink = tone === "dark" ? "#6b3b20" : "#f6efe6";
  const petals = Array.from({ length: 5 }, (_, i) => i * 72);
  return (
    <svg className={className} viewBox="0 0 340 120" direction="ltr" role="img" aria-label="NOUARA">
      <g transform="translate(170 36)" fill="none" stroke={ink} strokeWidth="2.4">
        {petals.map((a) => (
          <ellipse key={a} cx="0" cy="-13" rx="8.5" ry="14" transform={`rotate(${a})`} />
        ))}
        <circle r="4.5" fill={ink} stroke="none" />
      </g>
      <text
        x="170"
        y="100"
        textAnchor="middle"
        fill={ink}
        fontFamily="'Archivo Variable', sans-serif"
        fontStretch="62%"
        fontWeight="300"
        fontSize="30"
        letterSpacing="11"
      >
        NOUARA
      </text>
    </svg>
  );
}

/**
 * MINI MARKET, a supérette: the lettering of its lit sign (the storefront
 * photo supplied by the owner), a cart with three red speed lines, the name
 * in rounded capitals and a red stroke under it. "light" is the sign's own
 * cream on charcoal; "dark" sets it in charcoal on paper.
 */
export function LogoMiniMarket({ className, tone = "light" }: Props) {
  const ink = tone === "light" ? "#fbf4ee" : "#1d1c1f";
  return (
    <svg className={className} viewBox="0 0 360 96" direction="ltr" role="img" aria-label="MINI MARKET">
      <CartMark ink={ink} />
      <text x="122" y="58" fill={ink} fontFamily="'Figtree Variable', sans-serif" fontWeight="800" fontSize="34" letterSpacing="0.5">
        MINI MARKET
      </text>
      <path d="M190 76c44-6 104-8 156-3" fill="none" stroke={MINI_MARKET_RED} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/** MINI MARKET's cart alone, where the name is set beside it (the POS bar). */
export function LogoMiniMarketMark({ className, tone = "light" }: Props) {
  return (
    <svg className={className} viewBox="0 0 112 88" direction="ltr" aria-hidden="true">
      <CartMark ink={tone === "light" ? "#fbf4ee" : "#1d1c1f"} />
    </svg>
  );
}

const MINI_MARKET_RED = "#e3262b";

/** The cart with its three red speed lines, in a 112 × 88 box. */
function CartMark({ ink }: { ink: string }) {
  return (
    <>
      <path d="M8 27l15 6M4 45h17M8 63l15-6" fill="none" stroke={MINI_MARKET_RED} strokeWidth="6" strokeLinecap="round" />
      <path d="M30 18h12l10 42h46l8-30H46" fill="none" stroke={ink} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="58" cy="76" r="6.5" fill={ink} />
      <circle cx="92" cy="76" r="6.5" fill={ink} />
    </>
  );
}
