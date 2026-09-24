"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The home's one authored moment and its navigation state.
 * - Load: the poster lines rise out of their masks, the stickers snap on,
 *   the devices settle.
 * - Services: the keys slide in under the bar while a service section is on
 *   screen, a light runs along them the first time, and the key of the
 *   section in view stays lit.
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
      },
      { rootMargin: "-20% 0px -30% 0px" },
    );
    const current = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = Number((e.target as HTMLElement).dataset.section);
          if (e.isIntersecting) keys.forEach((k, j) => k.toggleAttribute("aria-current", j === i));
        }
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );
    sections.forEach((s) => {
      visibility.observe(s);
      current.observe(s);
    });

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
      current.disconnect();
      run.disconnect();
    };
    if (reduced) return cleanup;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-line]", { yPercent: 105, duration: 1.1, stagger: 0.085 })
        .from("[data-pill]", { scale: 0.3, rotate: -12, opacity: 0, duration: 0.7, ease: "back.out(2.2)", stagger: 0.12 }, 0.45)
        .from("[data-stage]", { y: 70, rotate: 2.5, opacity: 0, duration: 1.3 }, 0.2);

      gsap.to("[data-stage]", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: "[data-stage]", start: "top 60%", end: "bottom top", scrub: true },
      });
    });

    return () => {
      cleanup();
      ctx.revert();
    };
  }, []);

  return null;
}
