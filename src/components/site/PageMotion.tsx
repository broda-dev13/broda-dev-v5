"use client";

import { useEffect } from "react";

/**
 * Blocks marked `data-reveal` rise into place the first time they reach the
 * viewport. Armed only when motion is allowed: without this script, or with
 * reduced motion, every block is simply there (globals.css). The process
 * steps light up once in view, as on the home (HomeMotion).
 */
export function PageMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const observers: IntersectionObserver[] = [];

    const steps = document.querySelector<HTMLElement>("[data-steps]");
    if (steps) {
      const run = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            steps.setAttribute("data-run", "");
            run.disconnect();
          }
        },
        { threshold: 0.45 },
      );
      run.observe(steps);
      observers.push(run);
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const blocks = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
      // Blocks already on screen stay put; only the ones below wait for their turn.
      for (const el of blocks) if (el.getBoundingClientRect().top < window.innerHeight) el.dataset.in = "";
      root.dataset.motion = "";
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            (entry.target as HTMLElement).dataset.in = "";
            io.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -12% 0px" },
      );
      for (const el of blocks) if (!("in" in el.dataset)) io.observe(el);
      observers.push(io);
    }

    return () => {
      observers.forEach((o) => o.disconnect());
      delete root.dataset.motion;
    };
  }, []);
  return null;
}
