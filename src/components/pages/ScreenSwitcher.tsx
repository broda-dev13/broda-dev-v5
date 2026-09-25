"use client";

import { useRef, useState } from "react";
import { Laptop, Monitor, PosTerminal } from "@/components/frames/Devices";
import { Pic } from "@/components/Pic";
import styles from "./ScreenSwitcher.module.css";

export type SwitchScreen = { id: string; label: string; alt: string; src: string; width: number; height: number; widths?: number[] };

/**
 * One device and the real screens of a program: a key per screen, the chosen
 * one cross-fading in the same frame. The first screen is the device's own;
 * the others are layers over it. The panel is named after the screen shown.
 */
export function ScreenSwitcher({
  label,
  device,
  screens,
  ratio,
  sizes,
  lang,
}: {
  label: string;
  device: "pos" | "monitor" | "laptop";
  screens: SwitchScreen[];
  ratio?: number;
  sizes: string;
  lang: "fr" | "ar";
}) {
  const [active, setActive] = useState(0);
  const keys = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = screens[0].id;

  function onKey(e: React.KeyboardEvent, i: number) {
    const forward = lang === "ar" ? "ArrowLeft" : "ArrowRight";
    const back = lang === "ar" ? "ArrowRight" : "ArrowLeft";
    let next = i;
    if (e.key === forward) next = (i + 1) % screens.length;
    else if (e.key === back) next = (i - 1 + screens.length) % screens.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = screens.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    keys.current[next]?.focus();
  }

  const base = { src: screens[0].src, alt: "", width: screens[0].width, height: screens[0].height, widths: screens[0].widths, sizes };
  const layers = screens.slice(1).map((s, i) => (
    <div key={s.id} className={styles.layer} data-on={active === i + 1 || undefined}>
      <Pic src={s.src} alt="" width={s.width} height={s.height} widths={s.widths ?? [1136, 1600]} sizes={sizes} />
    </div>
  ));

  return (
    <div className={styles.switcher}>
      <div className={styles.keys} role="tablist" aria-label={label}>
        {screens.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              keys.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`screen-${uid}-${i}`}
            aria-selected={active === i}
            aria-controls={`screens-${uid}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className={styles.stage} role="tabpanel" id={`screens-${uid}`} aria-labelledby={`screen-${uid}-${active}`}>
        <p className="sr-only" aria-live="polite">
          {screens[active].alt}
        </p>
        {device === "pos" && (
          <PosTerminal className={styles.pos} screen={{ ...base, widths: base.widths ?? [1136, 1600, 2880] }}>
            {layers}
          </PosTerminal>
        )}
        {device === "monitor" && (
          <Monitor className={styles.monitor} ratio={ratio} screen={base}>
            {layers}
          </Monitor>
        )}
        {device === "laptop" && (
          <Laptop className={styles.laptop} screen={base}>
            {layers}
          </Laptop>
        )}
      </div>
    </div>
  );
}
