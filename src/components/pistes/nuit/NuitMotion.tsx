"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * One authored moment per scene. Hero: the sentence comes out of the dark,
 * the receipt prints, then scrolling brings the till flat to face you while
 * the phone, nearer, moves faster. Service: the page pins and a focus ring
 * walks down the order form, step by step, lighting the matching line.
 * Without JS or under reduced motion everything is visible and lit.
 */
export function NuitMotion() {
  useEffect(() => {
    const service = document.querySelector<HTMLElement>("[data-service]");
    const setStep = (i: number) => service?.setAttribute("data-active", String(i));
    setStep(2);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      service?.setAttribute("data-static", "");
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-reveal]", { opacity: 0, y: 28, filter: "blur(14px)", duration: 1.4, stagger: 0.16 })
        .from("[data-fade]", { opacity: 0, y: 16, duration: 1, stagger: 0.1 }, 0.5)
        .from("[data-stage]", { opacity: 0, y: 90, duration: 1.6 }, 0.35)
        .from("[data-receipt]", { clipPath: "inset(0 0 100% 0)", duration: 1.4, ease: "power2.inOut" }, 1.1);

      // Scrolling brings the till flat to face the visitor; the phone is nearer, so it travels further.
      gsap.fromTo(
        "[data-tilt]",
        { rotateX: 16, scale: 0.94 },
        { rotateX: 0, scale: 1, ease: "none", scrollTrigger: { trigger: "[data-stage]", start: "top 85%", end: "top 15%", scrub: 0.6 } },
      );
      gsap.to("[data-stage] > div:nth-child(2)", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: { trigger: "[data-stage]", start: "top 85%", end: "bottom top", scrub: 0.6 },
      });

      // The service pins; five steps share its scroll length.
      if (service && window.matchMedia("(min-width: 1024px)").matches) {
        ScrollTrigger.create({
          trigger: service,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => setStep(Math.min(4, Math.floor(self.progress * 5))),
        });
      } else {
        service?.setAttribute("data-static", "");
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
