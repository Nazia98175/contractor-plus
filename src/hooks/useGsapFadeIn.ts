// hooks/useGsapFadeIn.ts
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function useGsapFadeIn(
  selectors: string[] = [], // selectors array
  delay: number = 700,
  duration: number = 1,
) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      selectors.forEach((selector) => {
        gsap.to(selector, {
          opacity: 1,
          duration,
        });
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [selectors, delay, duration]);
}
