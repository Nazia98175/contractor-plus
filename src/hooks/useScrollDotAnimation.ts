"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Options = {
  start?: string;
  end?: string;
  scrub?: number | boolean;
  delay?: number;
};

export function useScrollDotAnimation({
  start = "-12% 40%",
  end = "bottom center",
  scrub = 1,
  delay = 0,
}: Options = {}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !dotRef.current) return;

      const sectionEl = sectionRef.current;
      const dotEl = dotRef.current;

      const run = () => {
        const sectionHeight = sectionEl.getBoundingClientRect().height;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start,
            end,
            scrub,
            markers: false,
          },
        });

        tl.set(dotEl, { opacity: 1 });
        tl.to(dotEl, {
          y: sectionHeight,
          ease: "none",
        });

        ScrollTrigger.refresh();
      };

      if (delay) {
        setTimeout(run, delay * 1000);
      } else {
        run();
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [start, end, scrub, delay]);

  return { sectionRef, dotRef };
}
