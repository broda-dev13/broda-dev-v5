import styles from "./AdsDashboard.module.css";

/**
 * An ads-manager dashboard for the example campaign of the invented brand
 * ZNIQA. Every figure is an example and the screen says so in its header.
 * The figures add up: three campaigns make the totals, fourteen days make
 * the 312 orders. Captured at 1440 x 900 @2x by scripts/render.mjs.
 */
type Lang = "fr" | "ar";

const DAYS = [12, 14, 15, 17, 18, 20, 21, 22, 24, 25, 26, 28, 34, 36];

const T = {
  fr: {
    app: "Gestionnaire de publicités",
    account: "ZNIQA · compte publicitaire",
    range: "1 – 14 septembre 2026",
    example: "Données d'exemple",
    nav: ["Vue d'ensemble", "Campagnes", "Ensembles de pubs", "Publicités", "Audiences", "Rapports"],
    kpis: [
      ["Dépensé", "48 500", "DA"],
      ["Commandes", "312", ""],
      ["Coût par commande", "155", "DA"],
      ["Personnes touchées", "184 200", ""],
    ],
    chart: "Commandes par jour",
    split: "Commandes par plateforme",
    campaigns: "Campagnes",
    cols: ["Campagne", "Plateforme", "Statut", "Budget / jour", "Dépensé", "Commandes", "Coût / commande"],
    active: "Active",
    rows: [
      ["Étoile · nouvelle collection", "Facebook", "1 600 DA", "22 000 DA", "138", "159 DA"],
      ["Étoile · vidéo", "TikTok", "1 200 DA", "16 500 DA", "112", "147 DA"],
      ["Étoile · relance", "Instagram", "700 DA", "10 000 DA", "62", "161 DA"],
    ],
    day: "sept.",
  },
  ar: {
    app: "مدير الإعلانات",
    account: "ZNIQA · الحساب الإعلاني",
    range: "1 – 14 سبتمبر 2026",
    example: "بيانات للعرض",
    nav: ["نظرة عامة", "الحملات", "مجموعات الإعلانات", "الإعلانات", "الجماهير", "التقارير"],
    kpis: [
      ["المبلغ المصروف", "48 500", "دج"],
      ["الطلبيات", "312", ""],
      ["تكلفة الطلبية", "155", "دج"],
      ["الأشخاص الذين تم الوصول إليهم", "184 200", ""],
    ],
    chart: "الطلبيات في اليوم",
    split: "الطلبيات حسب المنصة",
    campaigns: "الحملات",
    cols: ["الحملة", "المنصة", "الحالة", "الميزانية / يوم", "المصروف", "الطلبيات", "تكلفة الطلبية"],
    active: "نشطة",
    rows: [
      ["النجمة · تشكيلة جديدة", "Facebook", "1 600 دج", "22 000 دج", "138", "159 دج"],
      ["النجمة · فيديو", "TikTok", "1 200 دج", "16 500 دج", "112", "147 دج"],
      ["النجمة · إعادة استهداف", "Instagram", "700 دج", "10 000 دج", "62", "161 دج"],
    ],
    day: "سبت",
  },
};

const SPLIT: [string, number][] = [
  ["Facebook", 138],
  ["TikTok", 112],
  ["Instagram", 62],
];

/** "22 000 DA" -> the number kept left-to-right, then the currency. */
function Money({ v }: { v: string }) {
  const i = v.lastIndexOf(" ");
  return (
    <>
      <span className="ltr">{v.slice(0, i)}</span> {v.slice(i + 1)}
    </>
  );
}

export function AdsDashboard({ lang }: { lang: Lang }) {
  const t = T[lang];
  const max = 40;
  return (
    <div className={styles.app} dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <header className={styles.bar}>
        <span className={styles.brand}>
          <i aria-hidden="true" />
          {t.app}
        </span>
        <span className={styles.account}>{t.account}</span>
        <span className={styles.range}>{t.range}</span>
        <span className={styles.example}>{t.example}</span>
      </header>

      <nav className={styles.side} aria-hidden="true">
        {t.nav.map((n, i) => (
          <span key={n} data-on={i === 1 || undefined}>
            {n}
          </span>
        ))}
      </nav>

      <main className={styles.main}>
        <section className={styles.kpis}>
          {t.kpis.map(([label, value, unit]) => (
            <div key={label}>
              <small>{label}</small>
              <b>
                <span className="ltr">{value}</span> {unit && <em>{unit}</em>}
              </b>
            </div>
          ))}
        </section>

        <section className={styles.chartCard}>
          <h2>{t.chart}</h2>
          <div className={styles.chart} dir="ltr">
            <div className={styles.grid} aria-hidden="true">
              {[40, 30, 20, 10, 0].map((v) => (
                <span key={v}>
                  <small className="ltr">{v}</small>
                </span>
              ))}
            </div>
            <div className={styles.bars}>
              {DAYS.map((v, i) => (
                <div key={i} className={styles.barCol}>
                  <span className={styles.value}>{i === DAYS.length - 1 ? v : ""}</span>
                  <i style={{ height: `${(v / max) * 100}%` }} data-last={i === DAYS.length - 1 || undefined} />
                  <small className="ltr">{i + 1}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.splitCard}>
          <h2>{t.split}</h2>
          <ul>
            {SPLIT.map(([name, v]) => (
              <li key={name}>
                <span className={styles.splitName}>{name}</span>
                <span className={styles.track}>
                  <i style={{ width: `${(v / 138) * 100}%` }} />
                </span>
                <b className="ltr">{v}</b>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.table}>
          <h2>{t.campaigns}</h2>
          <table>
            <thead>
              <tr>
                {t.cols.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.rows.map(([name, platform, budget, spent, orders, cpo]) => (
                <tr key={name}>
                  <td>
                    <b>{name}</b>
                  </td>
                  <td>{platform}</td>
                  <td>
                    <span className={styles.pill}>
                      <i aria-hidden="true" />
                      {t.active}
                    </span>
                  </td>
                  <td>
                    <Money v={budget} />
                  </td>
                  <td>
                    <Money v={spent} />
                  </td>
                  <td className="ltr">{orders}</td>
                  <td>
                    <Money v={cpo} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
