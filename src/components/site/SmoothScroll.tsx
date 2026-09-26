"use client";

import { useEffect } from "react";
import { onFirstInput } from "@/lib/first-input";

/**
 * Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger scenes stay
 * in step with it. Skipped entirely under reduced motion. Anchor links land
 * below the sticky bar. Both libraries are fetched at the visitor's first
 * gesture, so they never weigh on the first paint.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let stop: (() => void) | undefined;
    let gone = false;
    const wait = onFirstInput(async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([import("lenis"), import("gsap"), import("gsap/ScrollTrigger")]);
      if (gone) return;
      gsap.registerPlugin(ScrollTrigger);
      const bar = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const lenis = new Lenis({ autoRaf: false, lerp: 0.085, anchors: { offset: -bar } });
      lenis.on("scroll", ScrollTrigger.update);

      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      stop = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });

    return () => {
      gone = true;
      wait();
      stop?.();
    };
  }, []);

  return null;
}
