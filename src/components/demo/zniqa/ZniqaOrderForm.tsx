"use client";

import { khatamPath } from "@/lib/khatam";
import { CodOrderForm } from "../CodOrderForm";
import { COPY, PRICE } from "./copy";
import styles from "./ZniqaProduct.module.css";

type Lang = "fr" | "ar";

/** ZNIQA's mark: the outline of an eight-pointed star (two squares, one turned 45°). */
const STAR = khatamPath(12, 12, 7.2);
export function ZniqaStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={STAR} />
    </svg>
  );
}

/** The cash-on-delivery form in ZNIQA's colours, shared by its product and landing pages. */
export function ZniqaOrderForm({ lang, qty, filled }: { lang: Lang; qty: number; filled?: boolean }) {
  return (
    <CodOrderForm
      lang={lang}
      t={COPY[lang]}
      price={PRICE}
      qty={qty}
      styles={styles}
      mark={<ZniqaStar className={styles.doneStar} />}
      filled={filled ? { name: lang === "ar" ? "ياسين بلقاسم" : "Yacine Belkacem", wilaya: "13", commune: lang === "ar" ? "منصورة" : "Mansourah" } : undefined}
    />
  );
}
