"use client";

// The demo brands' own faces, for their logos.
import "@fontsource-variable/big-shoulders-display/wght";
import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/cairo/wght.css";
import { useEffect, useState } from "react";
import { Browser, Laptop, Monitor, Phone } from "@/components/frames/Devices";
import { Pic } from "@/components/Pic";
import { LogoHanout, LogoLemma, LogoNouara, LogoZniqa } from "@/components/brands/Logos";
import { Arrow } from "@/components/ui/ui";
import type { Lang } from "@/content/site";
import { PAGES } from "@/content/pages";
import styles from "./RealisationsPage.module.css";

type Filter = "all" | "demos" | "logiciels" | "sites" | "publicite" | "logos";
type ItemId = keyof (typeof PAGES)["fr"]["realisations"]["items"];
type Kind = "live" | "real" | "example";

type Item = { id: ItemId; size: "l" | "m" | "s"; kind: Kind; filters: Filter[]; href?: string; board: string };

/**
 * Réalisations: the work as a board of pieces of different sizes, filtered by
 * trade. Each piece says what it is (a live demo, a real screen, or an
 * example with an invented brand) and, when there is more, where to see it.
 * A hash (#publicite, #logos, #demos…) opens the board on that filter.
 */
export function RealisationsPage({ lang }: { lang: Lang }) {
  const t = PAGES[lang].realisations;
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    const hash = window.location.hash.slice(1) as Filter;
    if (hash && hash in t.filters) {
      // Read once, after hydration: the server has no hash to render with.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFilter(hash);
      document.getElementById("travaux")?.scrollIntoView();
    }
  }, [t.filters]);

  const items: Item[] = [
    { id: "zniqaProduct", size: "l", kind: "live", filters: ["demos", "sites"], href: `/${lang}/demo/zniqa`, board: "yellow" },
    { id: "zniqaLanding", size: "s", kind: "live", filters: ["demos", "sites"], href: `/${lang}/demo/zniqa/offre`, board: "ink" },
    { id: "nouara", size: "m", kind: "live", filters: ["demos", "sites"], href: `/${lang}/demo/nouara`, board: "cream" },
    { id: "gstock", size: "m", kind: "real", filters: ["logiciels"], href: `/${lang}/logiciels#gstock`, board: "ink" },
    { id: "superpos", size: "m", kind: "example", filters: ["logiciels"], href: `/${lang}/logiciels#superpos`, board: "photo" },
    { id: "superposCafe", size: "m", kind: "example", filters: ["logiciels"], href: `/${lang}/logiciels#superpos`, board: "photo" },
    { id: "hanoutSite", size: "m", kind: "example", filters: ["sites"], board: "green" },
    { id: "shopify", size: "m", kind: "example", filters: ["sites"], href: `/${lang}/services#shopify`, board: "yellow" },
    { id: "campagne", size: "l", kind: "example", filters: ["publicite"], href: `/${lang}/services#publicite`, board: "bone" },
    { id: "tableau", size: "s", kind: "example", filters: ["publicite"], board: "yellow" },
    { id: "logos", size: "m", kind: "example", filters: ["logos"], href: `/${lang}/services#logos`, board: "bone" },
    { id: "enseigne", size: "m", kind: "example", filters: ["logos"], board: "photo" },
  ];

  const shown = items.filter((i) => filter === "all" || i.filters.includes(filter));
  const tag = (k: Kind) => (k === "live" ? t.tags.live : k === "real" ? t.tags.real : t.tags.example);

  const visual = (item: Item) => {
    const c = t.items[item.id];
    const alt = "alt" in c ? c.alt : "";
    switch (item.id) {
      case "zniqaProduct":
        return <Laptop className={styles.laptop} screen={{ src: `/images/renders/zniqa-bureau-${lang}`, alt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 50vw, 90vw" }} />;
      case "zniqaLanding":
        return <Phone className={styles.phone} bare screen={{ src: `/images/renders/zniqa-offre-mobile-${lang}`, alt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 14vw, 40vw" }} />;
      case "nouara":
        return <Laptop className={styles.laptop} screen={{ src: `/images/renders/nouara-bureau-${lang}`, alt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 40vw, 90vw" }} />;
      case "gstock":
        return (
          <Monitor
            className={styles.monitor}
            ratio={1600 / 940}
            screen={{ src: "/images/gstock/gstock-tableau-de-bord", alt, width: 1600, height: 940, sizes: "(min-width: 1024px) 40vw, 90vw" }}
          />
        );
      case "superpos":
      case "superposCafe":
        return (
          <Pic
            className={styles.photo}
            src={`/images/renders/scene-${item.id === "superpos" ? "superette" : "cafe"}-${lang}`}
            alt={alt}
            width={1920}
            height={1080}
            widths={[560, 1136, 1600]}
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        );
      case "hanoutSite":
        return <Browser className={styles.browser} url="hanout13.dz" screen={{ src: `/images/renders/site-hanout-${lang}`, alt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 40vw, 90vw" }} />;
      case "shopify":
        return <Laptop className={styles.laptop} screen={{ src: "/images/renders/shopify-admin-fr", alt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 40vw, 90vw" }} />;
      case "campagne":
        return (
          <div className={styles.fan} role="img" aria-label={alt}>
            {["facebook", "instagram", "tiktok"].map((p) => (
              <Phone key={p} className={styles.fanPhone} bare screen={{ src: `/images/renders/${p}-zniqa-${lang}`, alt: "", width: 1170, height: 2532, sizes: "(min-width: 1024px) 14vw, 30vw" }} />
            ))}
          </div>
        );
      case "tableau":
        return <Laptop className={styles.laptop} tone="graphite" screen={{ src: `/images/renders/pubs-tableau-${lang}`, alt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 26vw, 90vw" }} />;
      case "logos":
        return (
          <ul className={styles.logos}>
            <li data-brand="lemma">
              <LogoLemma />
            </li>
            <li data-brand="nouara">
              <LogoNouara />
            </li>
            <li data-brand="hanout">
              <LogoHanout />
            </li>
            <li data-brand="zniqa">
              <LogoZniqa />
            </li>
          </ul>
        );
      case "enseigne":
        return (
          <Pic
            className={`${styles.photo} ${styles.sign}`}
            src="/images/renders/hanout-enseigne-fr"
            alt={alt}
            width={1600}
            height={1200}
            widths={[560, 1136, 1600]}
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        );
    }
  };

  return (
    <section className={styles.work} id="travaux" aria-label={t.title}>
      <div className={styles.filters} role="group" aria-label={t.filtersLabel}>
        {(Object.keys(t.filters) as Filter[]).map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {t.filters[f]}
          </button>
        ))}
      </div>

      <ul className={styles.grid}>
        {shown.map((item) => {
          const c = t.items[item.id];
          return (
            <li key={item.id} className={styles.item} data-size={item.size}>
              <figure className={styles.figure} data-board={item.board}>
                {visual(item)}
              </figure>
              <div className={styles.meta}>
                <span className={styles.tag} data-kind={item.kind}>
                  {tag(item.kind)}
                </span>
                <h2>{c.title}</h2>
                <p>{c.line}</p>
                {item.href && (
                  <a className={styles.link} href={item.href}>
                    {item.kind === "live" ? t.open : t.more}
                    <Arrow />
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <p className={styles.note}>{t.note}</p>
    </section>
  );
}
