"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,

      // Specifically exclude dropdown containers from Lenis scrolling
      eventsTarget: document.documentElement,
    });

    document
      .querySelectorAll(".overflow-auto, [data-lenis-prevent]")
      .forEach((el) => {
        el.addEventListener("wheel", (e) => e.stopPropagation());
      });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
