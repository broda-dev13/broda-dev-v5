import { Browser, Laptop, Monitor } from "@/components/frames/Devices";
import { Pic } from "@/components/Pic";
import { Process } from "@/components/home/Process";
import { Contact } from "@/components/home/Contact";
import { Arrow, pill } from "@/components/ui/ui";
import { whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import { PAGES } from "@/content/pages";
import { PageHero } from "./PageHero";
import { JumpKeys } from "./JumpKeys";
import styles from "./ServicesPage.module.css";

type Id = keyof (typeof PAGES)["fr"]["services"]["items"];

/**
 * Services: the services one after the other, each with what the client
 * receives, who it is for, one visual of the work (a real screen, a coded
 * mockup or a composite on a Canva photo, always labelled), a quote on
 * WhatsApp and a way to see more. The seventh, hosting & maintenance, is a
 * short card with no visual. The process and the contact close the page.
 */
export function ServicesPage({ lang }: { lang: Lang }) {
  const site = SITE[lang];
  const t = PAGES[lang].services;
  const total = String(site.services.length).padStart(2, "0");
  const number = (s: { id: string }) => (
    <>
      {String(site.services.findIndex((x) => x.id === s.id) + 1).padStart(2, "0")} <span>/ {total}</span>
    </>
  );
  const hosting = site.services.find((s) => s.compact);

  const links: Record<Id, string> = {
    logiciels: `/${lang}/logiciels`,
    caisses: `/${lang}/logiciels#pos-minimarket`,
    sites: `/${lang}/demo/zniqa/offre`,
    shopify: `/${lang}/demo/zniqa`,
    publicite: `/${lang}/realisations#publicite`,
    logos: `/${lang}/realisations#logos`,
  };

  const visual = (id: Id, alt: string) => {
    switch (id) {
      case "logiciels":
        return (
          <div className={styles.board}>
            <Monitor
              className={styles.device}
              ratio={1600 / 940}
              screen={{ src: "/images/gstock/gstock-tableau-de-bord", alt, width: 1600, height: 940, sizes: "(min-width: 1024px) 50vw, 92vw" }}
            />
          </div>
        );
      case "caisses":
        return (
          <Pic
            className={styles.photo}
            src={`/images/renders/scene-superette-${lang}`}
            alt={alt}
            width={1920}
            height={1080}
            sizes="(min-width: 1024px) 56vw, 100vw"
          />
        );
      case "sites":
        return (
          <div className={styles.board}>
            <Browser
              className={styles.device}
              url="minimarket-tlemcen.dz"
              screen={{ src: `/images/renders/site-minimarket-${lang}`, alt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 50vw, 92vw" }}
            />
          </div>
        );
      case "shopify":
        return (
          <div className={styles.board}>
            <Laptop
              className={styles.device}
              screen={{ src: "/images/renders/shopify-admin-fr", alt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 50vw, 92vw" }}
            />
          </div>
        );
      case "publicite":
        return (
          <div className={styles.board}>
            <Laptop
              className={styles.device}
              tone="graphite"
              screen={{ src: `/images/renders/pubs-tableau-${lang}`, alt, width: 2880, height: 1800, sizes: "(min-width: 1024px) 50vw, 92vw" }}
            />
          </div>
        );
      case "logos":
        return (
          <Pic
            className={styles.photo}
            src="/images/scenes/minimarket-devanture"
            alt={alt}
            width={1264}
            height={843}
            sizes="(min-width: 1024px) 56vw, 100vw"
          />
        );
    }
  };

  return (
    <>
      <PageHero title={t.title} lead={t.lead}>
        <JumpKeys label={t.indexLabel} keys={site.services.map((s) => ({ id: s.id, title: s.title, sub: s.sub }))} />
      </PageHero>

      {site.services.filter((s) => !s.compact).map((s, i) => {
        const item = t.items[s.id as Id];
        return (
          <section key={s.id} id={s.id} className={styles.service} data-flip={i % 2 === 1 || undefined} data-tone={s.id === "caisses" ? "ink" : undefined} aria-labelledby={`${s.id}-title`}>
            <div className={styles.text} data-reveal>
              <p className={`${styles.no} ltr`}>{number(s)}</p>
              <h2 id={`${s.id}-title`} className={styles.title}>
                {s.long}
              </h2>
              <p className={styles.lead}>{item.lead}</p>
              <h3 className={styles.label}>{t.receive}</h3>
              <ul className={styles.list}>
                {item.receive.map((r) => (
                  <li key={r}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
              <p className={styles.audience}>
                <b>{t.audience}</b> {item.audience}
              </p>
              <div className={styles.actions}>
                <a className={`${pill.ink} ${styles.quote}`} href={whatsapp(item.wa)}>
                  {t.quote}
                  <Arrow />
                </a>
                <a className={styles.more} href={links[s.id as Id]}>
                  {item.link}
                  <Arrow />
                </a>
              </div>
            </div>
            <figure className={styles.figure} data-reveal>
              {visual(s.id as Id, item.alt)}
              <figcaption>{item.proof}</figcaption>
            </figure>
          </section>
        );
      })}

      {hosting && (
        <section id={hosting.id} className={styles.hosting} aria-labelledby={`${hosting.id}-title`}>
          <div className={styles.hostingCard} data-reveal>
            <div>
              <p className={`${styles.no} ltr`}>{number(hosting)}</p>
              <h2 id={`${hosting.id}-title`} className={styles.title}>
                {hosting.long}
              </h2>
              <p className={styles.lead}>{t.hosting.lead}</p>
            </div>
            <div>
              <h3 className={styles.label}>{t.receive}</h3>
              <ul className={styles.list}>
                {t.hosting.receive.map((r) => (
                  <li key={r}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
              <p className={styles.audience}>
                <b>{t.audience}</b> {t.hosting.audience}
              </p>
              <div className={styles.actions}>
                <a className={`${pill.ink} ${styles.quote}`} href={whatsapp(t.hosting.wa)}>
                  {t.quote}
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <Process lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
