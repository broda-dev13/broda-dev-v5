"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The poster lands in one authored moment: the four lines rise out of their
 * masks, the two stickers snap on, the devices settle, then a light runs
 * along the six service keys once. Afterwards the key of the section in view
 * stays lit. Everything is already visible without JS or under reduced motion.
 */
export function AfficheMotion() {
  useEffect(() => {
    const keys = [...document.querySelectorAll<HTMLElement>("[data-key]")];
    const sections = [...document.querySelectorAll<HTMLElement>("[data-section]")];

    // The lit key follows the section on screen (works with reduced motion too).
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = Number((e.target as HTMLElement).dataset.section);
          keys.forEach((k, j) => k.toggleAttribute("aria-current", e.isIntersecting && j === i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((s) => io.observe(s));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => io.disconnect();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-line]", { yPercent: 105, duration: 1.1, stagger: 0.085 })
        .from("[data-pill]", { scale: 0.3, rotate: -12, opacity: 0, duration: 0.7, ease: "back.out(2.2)", stagger: 0.12 }, 0.45)
        .from("[data-stage]", { y: 70, rotate: 2.5, opacity: 0, duration: 1.3 }, 0.2)
        .from("[data-keys] li", { y: 24, opacity: 0, duration: 0.8, stagger: 0.05 }, 0.55);

      // One pass of the chase light along the keys.
      keys.forEach((k, i) => {
        tl.call(() => k.setAttribute("data-chase", ""), [], 1.05 + i * 0.11);
        tl.call(() => k.removeAttribute("data-chase"), [], 1.05 + i * 0.11 + 0.22);
      });

      gsap.to("[data-stage]", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: "[data-stage]", start: "top 60%", end: "bottom top", scrub: true },
      });
    });

    return () => {
      io.disconnect();
      ctx.revert();
    };
  }, []);

  return null;
}
