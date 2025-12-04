// hooks/useScrollAnimation.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationStyles {
  scrollActive: string;
}

export const useScrollAnimation = (styles: UseScrollAnimationStyles) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const hasAnimatedOnMobile = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onEnter: () => {
        if (isMobile && hasAnimatedOnMobile.current) {
          return;
        }

        sectionRef.current?.classList.add(styles.scrollActive);

        if (isMobile) {
          hasAnimatedOnMobile.current = true;
        }
      },
      onLeaveBack: () => {
        if (!isMobile) {
          sectionRef.current?.classList.remove(styles.scrollActive);
        }
      },
      onEnterBack: () => {
        if (!isMobile) {
          sectionRef.current?.classList.add(styles.scrollActive);
        }
      },
      onLeave: () => {},
    });

    return () => {
      trigger.kill();
    };
  }, [isMobile, styles.scrollActive]);

  return sectionRef;
};