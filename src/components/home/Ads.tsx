import { Laptop, Phone } from "@/components/frames/Devices";
import { PlatformMark, platformName } from "@/components/brands/Platforms";
import { Arrow, pill } from "@/components/ui/ui";
import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import styles from "./Ads.module.css";

/**
 * Sponsored advertising: one example campaign (for the invented brand ZNIQA)
 * seen on three phones, a page post, a photo post and a short video, fanned
 * in front of the laptop that tracks it. Every ad and figure is labelled as
 * an example.
 */
export function Ads({ lang, index }: { lang: Lang; index: number }) {
  const t = SITE[lang].publicite;
  const r = (name: string) => `/images/renders/${name}-${lang}`;
  const phone = (name: string, alt: string) => ({ src: r(name), alt, width: 1170, height: 2532, sizes: "(min-width: 1024px) 15vw, 30vw" });

  return (
    <section className={styles.ads} id="publicite" data-section={index} aria-labelledby="ads-title">
      <figure className={styles.board}>
        <Laptop
          className={styles.laptop}
          screen={{ src: r("pubs-tableau"), alt: t.dashAlt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 44vw, 90vw" }}
        />
        <div className={styles.phones}>
          <Phone className={styles.p1} bare screen={phone("facebook-zniqa", t.fbAlt)} />
          <Phone className={styles.p2} bare screen={phone("instagram-zniqa", t.igAlt)} />
          <Phone className={styles.p3} bare screen={phone("tiktok-zniqa", t.ttAlt)} />
        </div>
      </figure>

      <div className={styles.text}>
        <ul className={styles.platforms}>
          {(["facebook", "instagram", "tiktok"] as const).map((p) => (
            <li key={p}>
              <PlatformMark platform={p} className={styles.mark} />
              {platformName(p)}
            </li>
          ))}
        </ul>
        <h2 id="ads-title" className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.lead}>{t.lead}</p>
        <p className={styles.body}>{t.body}</p>
        <ul className={styles.features}>
          {t.features.map((f) => (
            <li key={f}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <a className={pill.ink} href={whatsapp(t.wa)}>
          {t.cta}
          <Arrow />
        </a>
        <p className={styles.example}>{t.label}</p>
      </div>
    </section>
  );
}
