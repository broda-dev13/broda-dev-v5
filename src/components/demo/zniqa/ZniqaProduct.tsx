"use client";

// ZNIQA's own faces (the demo brand, not Broda Dev): Big Shoulders Display, Figtree, Cairo.
import "@fontsource-variable/big-shoulders-display/wght";
import "@fontsource-variable/figtree/wght.css";
import "@fontsource-variable/cairo/wght.css";
import { useMemo, useRef, useState } from "react";
import { Pic } from "@/components/Pic";
import { WILAYAS, TARIFS_PAR_WILAYA } from "@/data/wilayas";
import { khatamPath } from "@/lib/khatam";
import { COLORS, COPY, OLD_PRICE, PRICE, SIZES, type ColorId } from "./copy";
import styles from "./ZniqaProduct.module.css";

type Lang = "fr" | "ar";
type Delivery = "desk" | "home";

/**
 * Capture modes (used by scripts/render.mjs for the Broda Dev visuals):
 *   capture=1     hides the demo banner
 *   capture=form  hides the banner and fills the order form, phone field in focus
 * With no capture parameter the demo banner always shows.
 */
export function ZniqaProduct({ lang, capture }: { lang: Lang; capture?: string }) {
  const t = COPY[lang];
  const filled = capture === "form";

  const [color, setColor] = useState<ColorId>("noir");
  const [view, setView] = useState(0);
  const [size, setSize] = useState<string>("L");
  const [qty, setQty] = useState(1);
  const [name, setName] = useState(filled ? (lang === "ar" ? "ياسين بلقاسم" : "Yacine Belkacem") : "");
  const [phone, setPhone] = useState("");
  const [wilaya, setWilaya] = useState(filled ? "13" : "");
  const [commune, setCommune] = useState(filled ? (lang === "ar" ? "منصورة" : "Mansourah") : "");
  const [delivery, setDelivery] = useState<Delivery>("desk");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const gallery = useMemo(
    () => [
      { src: `/images/zniqa/zniqa-${color}`, alt: t.alt[color] },
      { src: "/images/zniqa/zniqa-porte", alt: t.alt.porte },
      { src: "/images/zniqa/zniqa-detail", alt: t.alt.detail },
      { src: "/images/zniqa/zniqa-pile", alt: t.alt.pile },
    ],
    [color, t],
  );

  const rates = wilaya ? TARIFS_PAR_WILAYA[wilaya] : undefined;
  const shipping = rates ? rates[delivery === "desk" ? 0 : 1] : 0;
  const subtotal = PRICE * qty;
  const total = subtotal + shipping;

  const fmt = (n: number) => n.toLocaleString("fr-FR").replace(/ | /g, " ");
  const money = (n: number) => (
    <>
      <span className="ltr">{fmt(n)}</span> {t.currency}
    </>
  );

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = t.required;
    const digits = phone.replace(/\D/g, "");
    if (!digits) next.phone = t.required;
    else if (!/^0[567]\d{8}$/.test(digits)) next.phone = t.phoneInvalid;
    if (!wilaya) next.wilaya = t.required;
    if (!commune.trim()) next.commune = t.required;
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
    else formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
  }

  return (
    <div className={styles.page} dir={lang === "ar" ? "rtl" : "ltr"} data-lang={lang}>
      {!capture && (
        <div className={styles.demo}>
          <span>{t.banner}</span>
          <a href={`/${lang}`}>{t.bannerBack}</a>
        </div>
      )}
      <p className={styles.announce}>{t.announce}</p>

      <header className={styles.header}>
        <a className={styles.logo} href="#" aria-label="ZNIQA">
          <Star className={styles.logoStar} />
          <span>ZNIQA</span>
        </a>
        <nav className={styles.nav} aria-label="ZNIQA">
          {t.nav.map((n, i) => (
            <a key={n} href="#" aria-current={i === 1 ? "page" : undefined}>
              {n}
            </a>
          ))}
        </nav>
        <div className={styles.tools}>
          <button type="button" aria-label={t.search}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
          </button>
          <button type="button" aria-label={t.bag} className={styles.bag}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 8h14l-1 12H6L5 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            <span>1</span>
          </button>
        </div>
      </header>

      <main className={styles.product}>
        <nav className={styles.crumbs} aria-label="Fil d'Ariane">
          {t.crumbs.map((c) => (
            <span key={c}>
              <a href="#">{c}</a>
              <i aria-hidden="true">/</i>
            </span>
          ))}
          <span aria-current="page">{t.title}</span>
        </nav>

        <section className={styles.gallery} aria-label={t.title}>
          <div className={styles.thumbs}>
            {gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                className={styles.thumb}
                aria-pressed={view === i}
                aria-label={g.alt}
                onClick={() => setView(i)}
              >
                <Pic src={g.src} alt="" width={1136} height={1408} widths={[560]} sizes="96px" />
              </button>
            ))}
          </div>
          <div className={styles.main}>
            <Pic
              src={gallery[view].src}
              alt={gallery[view].alt}
              width={1136}
              height={1408}
              sizes="(min-width: 1024px) 46vw, 100vw"
              priority
            />
            <span className={`${styles.badge} ltr`}>{t.save}</span>
            <span className={styles.dots} aria-hidden="true">
              {gallery.map((g, i) => (
                <i key={g.src} data-on={view === i || undefined} />
              ))}
            </span>
          </div>
        </section>

        <section className={styles.info}>
          <p className={styles.kicker}>{t.kicker}</p>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.prices}>
            <strong>{money(PRICE)}</strong>
            <s>{money(OLD_PRICE)}</s>
            <span className={`${styles.save} ltr`}>{t.save}</span>
          </p>

          <fieldset className={styles.field}>
            <legend>
              {t.colorLabel} : <b>{t.colors[color]}</b>
            </legend>
            <div className={styles.swatches}>
              {COLORS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={color === c.id}
                  aria-label={t.colors[c.id]}
                  style={{ "--sw": c.swatch } as React.CSSProperties}
                  onClick={() => {
                    setColor(c.id);
                    setView(0);
                  }}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className={styles.field}>
            <legend className={styles.legendRow}>
              <span>
                {t.sizeLabel} : <b>{size}</b>
              </span>
              <a href="#">{t.sizeGuide}</a>
            </legend>
            <div className={styles.sizes}>
              {SIZES.map((s) => (
                <button key={s} type="button" aria-pressed={size === s} onClick={() => setSize(s)}>
                  {s}
                </button>
              ))}
            </div>
            <p className={styles.stock}>
              <i aria-hidden="true" />
              {t.stock}
            </p>
          </fieldset>

          <div className={styles.qtyRow}>
            <span>{t.qtyLabel}</span>
            <div className={styles.qty}>
              <button type="button" aria-label={t.less} onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </button>
              <output aria-live="polite">{qty}</output>
              <button type="button" aria-label={t.more} onClick={() => setQty((q) => Math.min(9, q + 1))}>
                +
              </button>
            </div>
          </div>

          <form ref={formRef} id="commande" className={styles.order} onSubmit={submit} noValidate>
            <div className={styles.orderHead}>
              <h2>{t.formTitle}</h2>
              <span>{t.formSub}</span>
            </div>

            {done ? (
              <div className={styles.done} role="status">
                <Star className={styles.doneStar} />
                <h3>{t.doneTitle}</h3>
                <p>{t.doneBody}</p>
                <button type="button" onClick={() => setDone(false)}>
                  {t.doneAgain}
                </button>
              </div>
            ) : (
              <>
                <label className={styles.input} data-error={errors.name ? true : undefined}>
                  <span>{t.name}</span>
                  <input name="name" autoComplete="name" value={name} placeholder={t.namePh} onChange={(e) => setName(e.target.value)} />
                  {errors.name && <em>{errors.name}</em>}
                </label>
                <label className={styles.input} data-error={errors.phone ? true : undefined} data-focus={filled || undefined}>
                  <span>{t.phone}</span>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    dir="ltr"
                    value={phone}
                    placeholder={t.phonePh}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && <em>{errors.phone}</em>}
                </label>
                <div className={styles.pair}>
                  <label className={styles.input} data-error={errors.wilaya ? true : undefined}>
                    <span>{t.wilaya}</span>
                    <select name="wilaya" value={wilaya} onChange={(e) => setWilaya(e.target.value)}>
                      <option value="">{t.wilayaPh}</option>
                      {WILAYAS.map(([code, fr, ar]) => (
                        <option key={code} value={String(code)}>
                          {String(code).padStart(2, "0")} · {lang === "ar" ? ar : fr}
                        </option>
                      ))}
                    </select>
                    {errors.wilaya && <em>{errors.wilaya}</em>}
                  </label>
                  <label className={styles.input} data-error={errors.commune ? true : undefined}>
                    <span>{t.commune}</span>
                    <input name="commune" value={commune} placeholder={t.communePh} onChange={(e) => setCommune(e.target.value)} />
                    {errors.commune && <em>{errors.commune}</em>}
                  </label>
                </div>

                <fieldset className={styles.delivery}>
                  <legend>{t.delivery}</legend>
                  {(
                    [
                      ["desk", t.deskTitle, t.deskSub, rates?.[0]],
                      ["home", t.homeTitle, t.homeSub, rates?.[1]],
                    ] as const
                  ).map(([id, title, sub, price]) => (
                    <label key={id} className={styles.option} data-on={delivery === id || undefined}>
                      <input type="radio" name="delivery" value={id} checked={delivery === id} onChange={() => setDelivery(id)} />
                      <span className={styles.optionText}>
                        <b>{title}</b>
                        <small>{sub}</small>
                      </span>
                      <span className={styles.optionPrice}>{price ? money(price) : <small>{t.pickWilaya}</small>}</span>
                    </label>
                  ))}
                </fieldset>

                <dl className={styles.summary}>
                  <div>
                    <dt>
                      {t.sumPrice} <span className="ltr">× {qty}</span>
                    </dt>
                    <dd>{money(subtotal)}</dd>
                  </div>
                  <div>
                    <dt>{t.sumDelivery}</dt>
                    <dd>{shipping ? money(shipping) : "—"}</dd>
                  </div>
                  <div className={styles.total}>
                    <dt>{t.sumTotal}</dt>
                    <dd>{money(total)}</dd>
                  </div>
                </dl>

                <button type="submit" className={styles.submit}>
                  <span>{t.order}</span>
                  <b>{money(total)}</b>
                </button>
                <p className={styles.payNote}>{t.payNote}</p>
              </>
            )}
          </form>

          <ul className={styles.trust}>
            {t.trust.map((item, i) => (
              <li key={item}>
                <TrustIcon kind={i} />
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.desc}>
            <h2>{t.descTitle}</h2>
            <p>{t.desc}</p>
            <ul>
              {t.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

/** ZNIQA's mark: the outline of an eight-pointed star (two squares, one turned 45°). */
const STAR = khatamPath(12, 12, 7.2);
function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={STAR} />
    </svg>
  );
}

function TrustIcon({ kind }: { kind: number }) {
  const paths = [
    "M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-.01M17 19a2 2 0 1 0 0-.01",
    "M4 12a8 8 0 0 1 14-5.3M20 4v4h-4M20 12a8 8 0 0 1-14 5.3M4 20v-4h4",
    "M3 7h18v10H3zM3 11h18M7 15h3",
  ];
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[kind]} />
    </svg>
  );
}
