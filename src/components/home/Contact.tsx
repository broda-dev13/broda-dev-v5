"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Arrow, pill } from "@/components/ui/ui";
import { CONTACT, whatsapp } from "@/lib/contact";
import { SITE, type Lang } from "@/content/site";
import styles from "./Contact.module.css";

/**
 * The close: the offer said once more, the ways to reach Broda Dev, and a
 * short form that writes the WhatsApp message for the visitor. The site
 * posts nothing anywhere: the button only opens WhatsApp with the text.
 */
export function Contact({ lang }: { lang: Lang }) {
  const site = SITE[lang];
  const t = site.contact;
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError(true);
      return;
    }
    setError(false);
    const serviceName = site.services.find((s) => s.id === service)?.long;
    const lines = [
      t.form.intro,
      "",
      `${t.form.labels.name} : ${name.trim()}`,
      ...(business.trim() ? [`${t.form.labels.business} : ${business.trim()}`] : []),
      ...(serviceName ? [`${t.form.labels.service} : ${serviceName}`] : []),
      "",
      message.trim(),
    ];
    window.open(whatsapp(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.text}>
        <h2 id="contact-title" className={styles.title}>
          {t.title}
        </h2>
        <p className={styles.lead}>{t.lead}</p>
        <a className={`${pill.ink} ${styles.bigWa}`} href={whatsapp(site.waMessage)}>
          <WhatsAppIcon className={styles.waIcon} />
          <span className="ltr">{CONTACT.phone}</span>
        </a>
        <dl className={styles.details}>
          <div>
            <dt>{t.phoneLabel}</dt>
            <dd>
              <a className="ltr" href={`tel:${CONTACT.tel}`}>
                {CONTACT.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt>{t.emailLabel}</dt>
            <dd>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </dd>
          </div>
          <div>
            <dt>{t.addressLabel}</dt>
            <dd>{t.address}</dd>
          </div>
        </dl>
      </div>

      <form className={styles.form} onSubmit={send} noValidate>
        <div className={styles.pair}>
          <label className={styles.field}>
            <span>{t.form.name}</span>
            <input id="contact-name" name="name" autoComplete="name" value={name} placeholder={t.form.namePh} onChange={(e) => setName(e.target.value)} aria-invalid={error && !name.trim()} />
          </label>
          <label className={styles.field}>
            <span>{t.form.business}</span>
            <input id="contact-business" name="business" value={business} placeholder={t.form.businessPh} onChange={(e) => setBusiness(e.target.value)} />
          </label>
        </div>
        <label className={styles.field}>
          <span>{t.form.service}</span>
          <select id="contact-service" name="service" value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">{t.form.servicePh}</option>
            {site.services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.long}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span>{t.form.message}</span>
          <textarea id="contact-message" name="message" rows={4} value={message} placeholder={t.form.messagePh} onChange={(e) => setMessage(e.target.value)} aria-invalid={error && !message.trim()} />
        </label>
        {error && (
          <p className={styles.error} role="alert">
            {t.form.required}
          </p>
        )}
        <button type="submit" className={`${pill.ink} ${styles.send}`}>
          {t.form.send}
          <Arrow />
        </button>
        <p className={styles.note}>{t.form.note}</p>
      </form>
    </section>
  );
}
