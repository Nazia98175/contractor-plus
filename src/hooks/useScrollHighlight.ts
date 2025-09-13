"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Options = {
  refs: React.RefObject<HTMLDivElement | null>[]; // fix: allow null
  start?: string;
  end?: string;
  activeClass?: string;
  delay?: number;
};

export function useScrollHighlight({
  refs,
  start = "-200px 40%",
  end = "bottom center",
  activeClass = "scroll-active-2",
  delay = 0,
}: Options) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeout = setTimeout(() => {
      refs.forEach((ref) => {
        if (!ref.current) return;

        ScrollTrigger.create({
          trigger: ref.current,
          start,
          end,
          scrub: 2,
          markers: false,
          onEnter: () => {
            ref.current?.classList.add(activeClass);
          },
          onLeaveBack: () => {
            if (window.innerWidth >= 768) {
              ref.current?.classList.remove(activeClass);
            }
          },
        });
      });

      ScrollTrigger.refresh();
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [refs, start, end, activeClass, delay]);
}
