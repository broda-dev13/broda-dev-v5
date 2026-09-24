"use client";

import { useRef, useState } from "react";
import { WILAYAS, TARIFS_PAR_WILAYA } from "@/data/wilayas";
import { khatamPath } from "@/lib/khatam";
import { COPY, PRICE } from "./copy";
import styles from "./ZniqaProduct.module.css";

type Lang = "fr" | "ar";
type Delivery = "desk" | "home";

/** ZNIQA's mark: the outline of an eight-pointed star (two squares, one turned 45°). */
const STAR = khatamPath(12, 12, 7.2);
export function ZniqaStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={STAR} />
    </svg>
  );
}

/**
 * The Algerian cash-on-delivery order form: name, phone, wilaya, commune,
 * stop desk or home (the price follows the wilaya's zone), live total.
 * Shared by the ZNIQA product page and landing page. Nothing is sent: the
 * demo confirms on screen. `filled` pre-fills it for renders.
 */
export function ZniqaOrderForm({ lang, qty, filled }: { lang: Lang; qty: number; filled?: boolean }) {
  const t = COPY[lang];
  const [name, setName] = useState(filled ? (lang === "ar" ? "ياسين بلقاسم" : "Yacine Belkacem") : "");
  const [phone, setPhone] = useState("");
  const [wilaya, setWilaya] = useState(filled ? "13" : "");
  const [commune, setCommune] = useState(filled ? (lang === "ar" ? "منصورة" : "Mansourah") : "");
  const [delivery, setDelivery] = useState<Delivery>("desk");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
    <form ref={formRef} id="commande" className={styles.order} onSubmit={submit} noValidate>
      <div className={styles.orderHead}>
        <h2>{t.formTitle}</h2>
        <span>{t.formSub}</span>
      </div>

      {done ? (
        <div className={styles.done} role="status">
          <ZniqaStar className={styles.doneStar} />
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
            <input name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" value={phone} placeholder={t.phonePh} onChange={(e) => setPhone(e.target.value)} />
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
  );
}
