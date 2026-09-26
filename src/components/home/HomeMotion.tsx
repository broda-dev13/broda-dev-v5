"use client";

import { useEffect } from "react";
import { onFirstInput } from "@/lib/first-input";

/**
 * The home's navigation state and its one scroll effect.
 * - Load: the hero's entrance is pure CSS (Hero.module.css), so it starts
 *   with the first paint; the devices are there from the first frame (the
 *   till's screen is the page's largest paint).
 * - Services: the keys slide in under the bar while a service section is on
 *   screen, a light runs along them the first time, and the key of the
 *   section in view stays lit.
 * - Scroll: the devices drift up a little. GSAP is fetched after the page
 *   is up, so it never weighs on the first paint.
 * Content is visible without JS and under reduced motion; only the keys'
 * slide and lit state run there (they are navigation, not decoration).
 */
export function HomeMotion() {
  useEffect(() => {
    const keysNav = document.querySelector<HTMLElement>("[data-keys]");
    const keys = [...document.querySelectorAll<HTMLElement>("[data-key]")];
    const sections = [...document.querySelectorAll<HTMLElement>("[data-section]")];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let chased = reduced;
    const chase = () => {
      chased = true;
      keys.forEach((k, i) => {
        window.setTimeout(() => k.setAttribute("data-chase", ""), 120 + i * 90);
        window.setTimeout(() => k.removeAttribute("data-chase"), 120 + i * 90 + 200);
      });
    };

    // Which sections are on screen right now, and which one sits mid-screen.
    const onScreen = new Set<number>();
    const visibility = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = Number((e.target as HTMLElement).dataset.section);
          if (e.isIntersecting) onScreen.add(i);
          else onScreen.delete(i);
        }
        const shown = onScreen.size > 0;
        keysNav?.toggleAttribute("data-shown", shown);
        if (shown && !chased) chase();
        onScroll();
      },
      { rootMargin: "-20% 0px -30% 0px" },
    );
    sections.forEach((s) => visibility.observe(s));

    // The key that stays lit is the section the visitor is reading: the one
    // under a line just below the bar and the keys, where a section lands
    // when its key is clicked. Measured on every scroll, once per frame.
    const bar = document.querySelector<HTMLElement>("[data-bar]");
    let lit = -1;
    let frame = 0;
    const spy = () => {
      frame = 0;
      const top = keysNav?.hasAttribute("data-shown") ? keysNav.getBoundingClientRect().bottom : (bar?.getBoundingClientRect().bottom ?? 0);
      const line = top + 24;
      const at = sections.findIndex((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= line && r.bottom > line;
      });
      const next = at < 0 ? -1 : Number(sections[at].dataset.section);
      if (next === lit) return;
      lit = next;
      keys.forEach((k, j) => k.toggleAttribute("aria-current", j === lit));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(spy);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    spy();

    // The process lights come on once, when the step row is well on screen.
    const steps = document.querySelector<HTMLElement>("[data-steps]");
    const run = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          steps?.setAttribute("data-run", "");
          run.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    if (steps) run.observe(steps);

    const cleanup = () => {
      visibility.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      run.disconnect();
    };
    if (reduced) return cleanup;

    let ctx: { revert: () => void } | undefined;
    let gone = false;
    const wait = onFirstInput(() =>
      Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
        if (gone) return;
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          gsap.to("[data-stage]", {
            yPercent: -8,
            ease: "none",
            scrollTrigger: { trigger: "[data-stage]", start: "top 60%", end: "bottom top", scrub: true },
          });
        });
      }),
    );

    return () => {
      gone = true;
      wait();
      cleanup();
      ctx?.revert();
    };
  }, []);

  return null;
}
