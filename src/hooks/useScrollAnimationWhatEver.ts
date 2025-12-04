import { useEffect, RefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface useScrollAnimationWhatEverProps {
  sectionRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  centerRef: RefObject<HTMLDivElement | null>;
  left1Ref: RefObject<HTMLDivElement | null>;
  left2Ref: RefObject<HTMLDivElement | null>;
  left3Ref: RefObject<HTMLDivElement | null>;
  right1Ref: RefObject<HTMLDivElement | null>;
  right2Ref: RefObject<HTMLDivElement | null>;
  right3Ref: RefObject<HTMLDivElement | null>;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useScrollAnimationWhatEver = ({
  sectionRef,
  containerRef,
  centerRef,
  left1Ref,
  left2Ref,
  left3Ref,
  right1Ref,
  right2Ref,
  right3Ref,
  isMobile,
  isTablet,
  isDesktop,
}: useScrollAnimationWhatEverProps) => {
  const waitUntilFullyLoaded = (): Promise<void> => {
    return new Promise((resolve) => {
      if (document.readyState === "complete") {
        requestAnimationFrame(() => resolve());
      } else {
        window.addEventListener("load", () => {
          requestAnimationFrame(() => resolve());
        });
      }
    });
  };

  useEffect(() => {
    const setupAnimation = () => {
      if (
        !sectionRef.current ||
        !containerRef.current ||
        !left1Ref.current ||
        !left2Ref.current ||
        !left3Ref.current ||
        !right1Ref.current ||
        !right2Ref.current ||
        !right3Ref.current ||
        !centerRef.current
      ) {
        return;
      }

      // Optional: Only kill triggers created by this component, not global ones
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill();
      });

      gsap.killTweensOf([
        left1Ref.current,
        left2Ref.current,
        left3Ref.current,
        right1Ref.current,
        right2Ref.current,
        right3Ref.current,
        centerRef.current,
      ]);

      const getInitial = (val: number) => {
        if (isMobile) return val * 0.6;
        if (isTablet) return val * 0.8;
        return val;
      };

      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1,
      };

      const animate = (
        el: HTMLDivElement | null,
        finalX: string,
        finalY: string,
        initialX: number,
        initialY: number,
      ) => {
        if (!el) return;
        gsap.set(el, {
          position: "absolute",
          left: finalX,
          top: finalY,
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
          scale: 0.2,

          x: getInitial(initialX),
          y: getInitial(initialY),
        });

        gsap.to(el, {
          x: 0,
          y: 0,
          opacity: 1, // Always fade to full opacity for boxes
          scale: 1,
          ease: "power2.out",
          scrollTrigger,
        });
      };

      animate(left1Ref.current, "47%", "25%", -150, -80);
      animate(left2Ref.current, "18%", "70%", -150, 80);
      animate(left3Ref.current, "81%", "75%", -150, 80);
      animate(right1Ref.current, "26%", "30%", 150, -80);
      animate(right2Ref.current, "79%", "70%", 150, 80);
      animate(right3Ref.current, "28%", "75%", 150, 80);

      gsap.set(centerRef.current, {
        y: 80,
        scale: 0.3,
        opacity: 0,
      });
      gsap.to(centerRef.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger,
      });
    };

    waitUntilFullyLoaded().then(setupAnimation);

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill();
      });
    };
  }, [
    sectionRef,
    containerRef,
    centerRef,
    left1Ref,
    left2Ref,
    left3Ref,
    right1Ref,
    right2Ref,
    right3Ref,
    isMobile,
    isTablet,
    isDesktop,
  ]);
};
