import { khatamPath } from "@/lib/khatam";

/**
 * Logos of the invented demo brands (Broda Dev examples, labelled as such
 * wherever they appear). Each is drawn as SVG so it stays sharp at any size.
 * Faces: Big Shoulders Display (ZNIQA), Figtree and Cairo (LEMMA), Archivo
 * narrow (NOUARA), Archivo wide and Noto Kufi Arabic (HANOUT 13).
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

/** HANOUT 13, a supérette: a green shop sign with a striped awning, the name and its number. */
export function LogoHanout({ className }: Props) {
  const green = "#0f7a4f";
  return (
    <svg className={className} viewBox="0 0 320 150" direction="ltr" role="img" aria-label="HANOUT 13">
      <defs>
        <clipPath id="hanout-awning">
          <path d="M10 10h300v26a15 15 0 0 1-30 0 15 15 0 0 1-30 0 15 15 0 0 1-30 0 15 15 0 0 1-30 0 15 15 0 0 1-30 0 15 15 0 0 1-30 0 15 15 0 0 1-30 0 15 15 0 0 1-30 0 15 15 0 0 1-30 0 15 15 0 0 1-30 0Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#hanout-awning)">
        <rect x="10" y="10" width="300" height="42" fill={green} />
        {Array.from({ length: 10 }, (_, i) => (
          <rect key={i} x={10 + i * 30} y="10" width="15" height="42" fill="#ffffff" />
        ))}
      </g>
      <rect x="10" y="60" width="300" height="80" rx="12" fill={green} />
      <text x="26" y="115" fill="#ffffff" fontFamily="'Archivo Variable', sans-serif" fontStretch="112%" fontWeight="900" fontSize="38" letterSpacing="-1.5">
        HANOUT
      </text>
      <circle cx="274" cy="100" r="26" fill="#ffd23f" />
      <text x="274" y="111" textAnchor="middle" fill={green} fontFamily="'Archivo Variable', sans-serif" fontStretch="100%" fontWeight="900" fontSize="31">
        13
      </text>
    </svg>
  );
}
