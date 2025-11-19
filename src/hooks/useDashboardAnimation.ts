// hooks/useDashboardAnimation.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useDashboardAnimation = (animationOrder: number[]) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Set initial state for all items
    itemRefs.current.forEach((ref) => {
      if (!ref) return;
      const tickPath = ref.querySelector(".tick-icon path");
      const tickWrapper = ref.querySelector(".tick-icon");
      const title = ref.querySelector(".dashboard-title");

      gsap.set(tickPath, { fill: "#ADB1B5" });
      gsap.set(tickWrapper, {
        scale: 1,
        filter: "drop-shadow(0 0 0px transparent)",
      });
      gsap.set(title, { opacity: 0.6, scale: 1 });
    });

    // Create individual ScrollTriggers for each item
    animationOrder.forEach((itemIndex, orderIndex) => {
      const ref = itemRefs.current[itemIndex];
      if (!ref) return;

      ScrollTrigger.create({
        trigger: ref,
        start: window.innerWidth < 768 ? "top 10%" : "top center",
        end: "bottom 40%",
        markers: false,
        onEnter: () => {
          const tickPath = ref.querySelector(".tick-icon path");
          const tickWrapper = ref.querySelector(".tick-icon");
          const title = ref.querySelector(".dashboard-title");
          const glowSvg = ref.querySelector(".glow-svg");

          const delay = orderIndex * 0.1;

          gsap.to(tickPath, {
            fill: "#5ED5A8",
            duration: 0.5,
            delay: delay,
            ease: "power2.out",
          });

          gsap.to(tickWrapper, {
            scale: 1.05,
            filter: "drop-shadow(0 0 40px #5ED5A8)",
            duration: 0.5,
            delay: delay,
            ease: "power2.out",
          });

          gsap.to(title, {
            opacity: 1,
            scale: 1.02,
            duration: 0.5,
            delay: delay,
            ease: "power2.out",
          });

          gsap.to(glowSvg, {
            opacity: 1,
            scale: 1.1,
            duration: 0.6,
            delay: delay,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          const tickPath = ref.querySelector(".tick-icon path");
          const tickWrapper = ref.querySelector(".tick-icon");
          const title = ref.querySelector(".dashboard-title");
          const glowSvg = ref.querySelector(".glow-svg");

          gsap.to(tickPath, {
            fill: "#ADB1B5",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(tickWrapper, {
            scale: 1,
            filter: "drop-shadow(0 0 0px transparent)",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(title, {
            opacity: 0.6,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(glowSvg, {
            opacity: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animationOrder]);

  return { sectionRef, itemRefs };
};
