import { pill } from "@/components/ui/ui";
import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import styles from "./TrialButton.module.css";

/**
 * The free trial of POS-MINI MARKET (30 days, the owner's offer of
 * 2026-09-25): opens WhatsApp with the request typed. `tone="dark"` outlines
 * it in yellow for the ink sections. Tracked as a trial click (data-track).
 */
export function TrialButton({ lang, service, tone = "light" }: { lang: Lang; service: string; tone?: "light" | "dark" }) {
  const t = SITE[lang].trial;
  return (
    <a className={`${pill.line} ${styles.trial}`} data-tone={tone} href={whatsapp(t.wa)} data-track="trial" data-service={service}>
      {t.label}
      <small className={styles.days}>{t.days}</small>
    </a>
  );
}
