import { Arrow } from "@/components/ui/ui";
import { SITE, type Lang } from "@/content/site";
import styles from "./HostingLine.module.css";

/** One line under the Sites web and Shopify sections: what happens after launch, the seventh service. */
export function HostingLine({ lang }: { lang: Lang }) {
  const t = SITE[lang].hosting;
  return (
    <p className={styles.line}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </svg>
      <span>
        <b>{t.lead}</b> {t.line}{" "}
        <a href={`/${lang}/services#hebergement`}>
          {t.link}
          <Arrow />
        </a>
      </span>
    </p>
  );
}
