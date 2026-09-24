"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The window is laid like a tile wall: green tiles lift away from the centre
 * outwards to show the work, while the text rises. In the service, the
 * numbered stars turn into place as the panel arrives. Under reduced motion
 * or without JS the tiles are already gone and everything is in place.
 */
export function ZelligeMotion() {
  useEffect(() => {
    const tiles = document.querySelector<HTMLElement>("[data-tiles]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      tiles?.setAttribute("data-done", "");
      return;
    }
    tiles?.setAttribute("data-play", "");

    const ctx = gsap.context(() => {
      gsap.from("[data-rise]", { y: 26, opacity: 0, duration: 1.1, ease: "expo.out", stagger: 0.09, delay: 0.1 });
      gsap.from("[data-panel]", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-service]", start: "top 70%" },
      });
      gsap.from("[data-marker]", {
        scale: 0,
        rotate: -45,
        duration: 0.7,
        ease: "back.out(2)",
        stagger: 0.09,
        scrollTrigger: { trigger: "[data-service]", start: "top 45%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return null;
}
