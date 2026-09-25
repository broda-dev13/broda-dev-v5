import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import styles from "./WhatsAppFloat.module.css";

/** WhatsApp, always within reach, opening a chat with the quote request already typed. */
export function WhatsAppFloat({ lang }: { lang: Lang }) {
  const t = SITE[lang];
  return (
    <a className={styles.wa} href={whatsapp(t.waMessage)} aria-label={t.whatsappLabel} data-float>
      <WhatsAppIcon />
    </a>
  );
}
