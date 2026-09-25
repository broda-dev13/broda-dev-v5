import { Pic } from "@/components/Pic";
import { Contact } from "@/components/home/Contact";
import { Arrow, pill } from "@/components/ui/ui";
import { whatsapp } from "@/lib/contact";
import type { Lang } from "@/content/site";
import { PAGES } from "@/content/pages";
import { PageHero } from "./PageHero";
import { JumpKeys } from "./JumpKeys";
import { ScreenSwitcher } from "./ScreenSwitcher";
import styles from "./LogicielsPage.module.css";

/**
 * Logiciels: the three programs in depth. POS-MINI MARKET at the counter (the real
 * screens rebuilt in HD, laid on Canva counter photos), G-Stock with the real
 * screens of the restaurant Lamssat, Budget Employé with its demonstration
 * screens. Then how an installation goes, the questions shop owners ask, and
 * the contact.
 */
export function LogicielsPage({ lang }: { lang: Lang }) {
  const t = PAGES[lang].logiciels;
  const sp = t.superpos;
  const gs = t.gstock;
  const be = t.budget;

  const posScreens = sp.screens.map((s) => ({
    ...s,
    src: `/images/renders/superpos-${s.id === "caisse" ? "caisse" : s.id}-${lang}`,
    width: 2880,
    height: 1800,
    widths: [1136, 1600, 2880],
  }));
  const gstockScreens = gs.screens.map((s) => ({
    ...s,
    src: `/images/gstock/gstock-${s.id}`,
    width: s.id === "facture-achat" ? 1240 : 1600,
    height: s.id === "facture-achat" ? 760 : 940,
    widths: s.id === "facture-achat" ? [1136, 1240] : [1136, 1600],
  }));
  const budgetScreens = be.screens.map((s) => ({
    ...s,
    src: `/images/budget/budget-${s.id}-${lang}`,
    width: 1600,
    height: 1000,
    widths: [1136, 1600],
  }));

  const features = (list: { t: string; d: string }[]) => (
    <ul className={styles.features}>
      {list.map((f) => (
        <li key={f.t}>
          <i aria-hidden="true" />
          <b>{f.t}</b>
          <span>{f.d}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <PageHero title={t.title} lead={t.lead}>
        <JumpKeys
          label={t.jumpLabel}
          keys={[
            { id: "pos-minimarket", title: sp.name, sub: sp.what },
            { id: "gstock", title: gs.name, sub: gs.what },
            { id: "budget", title: be.name, sub: be.what },
          ]}
        />
      </PageHero>

      <section className={styles.program} id="pos-minimarket" aria-labelledby="pos-minimarket-title">
        <figure className={styles.scene} data-reveal>
          <Pic
            src={`/images/renders/scene-superette-${lang}`}
            alt={sp.sceneAlt}
            width={1920}
            height={1080}
            widths={[560, 1136, 1600, 1920]}
            sizes="(min-width: 1024px) 94vw, 100vw"
          />
          <figcaption>{sp.sceneNote}</figcaption>
        </figure>
        <div className={styles.split}>
          <div className={styles.text} data-reveal>
            <h2 id="pos-minimarket-title" className={styles.name}>
              {sp.name}
            </h2>
            <p className={styles.what}>{sp.what}</p>
            {features(sp.features)}
            <a className={pill.ink} href={whatsapp(sp.wa)}>
              {sp.cta}
              <Arrow />
            </a>
            <p className={styles.proof}>{sp.proof}</p>
          </div>
          <div data-reveal>
            <ScreenSwitcher label={t.screensLabel} device="pos" screens={posScreens} sizes="(min-width: 1024px) 50vw, 92vw" lang={lang} />
          </div>
        </div>
        <figure className={styles.cafe} data-reveal>
          <Pic
            src={`/images/renders/scene-cafe-${lang}`}
            alt={sp.cafeAlt}
            width={1920}
            height={1080}
            widths={[560, 1136, 1600, 1920]}
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
          <figcaption>{sp.cafeNote}</figcaption>
        </figure>
      </section>

      <section className={styles.program} id="gstock" data-tone="ink" aria-labelledby="gstock-title">
        <div className={styles.split} data-flip>
          <div className={styles.text} data-reveal>
            <h2 id="gstock-title" className={styles.name}>
              {gs.name}
            </h2>
            <p className={styles.what}>{gs.what}</p>
            <p className={styles.where}>{gs.where}</p>
            {features(gs.features)}
            <a className={`${pill.ink} ${styles.yellow}`} href={whatsapp(gs.wa)}>
              {gs.cta}
              <Arrow />
            </a>
            <p className={styles.proof}>{gs.proof}</p>
          </div>
          <div data-reveal>
            <ScreenSwitcher label={t.screensLabel} device="monitor" ratio={1600 / 940} screens={gstockScreens} sizes="(min-width: 1024px) 54vw, 92vw" lang={lang} />
          </div>
        </div>
      </section>

      <section className={styles.program} id="budget" data-tone="bone" aria-labelledby="budget-title">
        <div className={styles.split}>
          <div className={styles.text} data-reveal>
            <h2 id="budget-title" className={styles.name}>
              {be.name}
            </h2>
            <p className={styles.what}>{be.what}</p>
            {features(be.features)}
            <a className={pill.ink} href={whatsapp(be.wa)}>
              {be.cta}
              <Arrow />
            </a>
            <p className={styles.proof}>{be.proof}</p>
          </div>
          <div data-reveal>
            <ScreenSwitcher label={t.screensLabel} device="laptop" screens={budgetScreens} sizes="(min-width: 1024px) 54vw, 92vw" lang={lang} />
          </div>
        </div>
      </section>

      <section className={styles.steps} aria-labelledby="steps-title">
        <h2 id="steps-title" className={styles.sectionTitle}>
          {t.steps.title}
        </h2>
        <ol data-reveal>
          {t.steps.items.map((s, i) => (
            <li key={s.t}>
              <span className="ltr">{i + 1}</span>
              <b>{s.t}</b>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <h2 id="faq-title" className={styles.sectionTitle}>
          {t.faq.title}
        </h2>
        <div className={styles.questions} data-reveal>
          {t.faq.items.map((q) => (
            <details key={q.q}>
              <summary>
                {q.q}
                <i aria-hidden="true" />
              </summary>
              <p>{q.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Contact lang={lang} />
    </>
  );
}
