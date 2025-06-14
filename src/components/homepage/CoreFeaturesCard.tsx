"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useMediaQuery } from "usehooks-ts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import FeatureNavigation from "./FeatureNavigation";
import FeatureContent from "./FeatureContent";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureItem {
  id: number;
  title: string;
  cardQuote: string | null;
  userName: string | null;
  cardImg: any | null;
  content: {
    id: number;
    title: string;
    desc: string;
  }[];
}
interface Props {
  featuresList: FeatureItem[];
}

const CoreFeaturesCard: React.FC<Props> = ({ featuresList }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Replace manual mobile detection with useMediaQuery
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLButtonElement | null>(null);
  const featureButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollTriggersRef = useRef<any[]>([]);
  const navHeightRef = useRef<number>(0);
  const isScrollingProgrammatically = useRef(false);
  const initTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const t = useTranslations("corefeature");
  const features: string[] = t.raw("features") || [];
  const featureBtn: string[] = [t.raw("featureBtn") || "Learn More"];

  const calculateButtonPositions = useCallback(() => {
    if (!featuresRef.current) return [];
    const featureButtons =
      featuresRef.current.querySelectorAll("button.feature-btn");
    const positions: number[] = [];

    featureButtons.forEach((button, index) => {
      const rect = (button as HTMLElement).getBoundingClientRect();
      const base = (featureButtons[0] as HTMLElement).getBoundingClientRect();
      positions.push(!isMobile ? rect.top - base.top : rect.left - base.left);
    });

    return positions;
  }, [isMobile]);

  const moveIndicator = useCallback(
    (index: number) => {
      const positions = calculateButtonPositions();
      const position = positions[index] || 0;
      const target = indicatorRef.current;

      if (target) {
        gsap.to(target, {
          [!isMobile ? "top" : "left"]: `${position + 6}px`,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    [calculateButtonPositions, isMobile],
  );
  const cleanup = useCallback(() => {
    // Clear any pending timeouts
    if (initTimeoutRef.current) {
      clearTimeout(initTimeoutRef.current);
      initTimeoutRef.current = null;
    }
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = null;
    }

    // Reset nav element styles (especially important for desktop)
    const navEl = navContainerRef.current;
    if (navEl && !isMobile) {
      gsap.set(navEl, {
        position: "relative",
        top: "auto",
        left: "auto",
        right: "auto",
        width: "auto",
        zIndex: "auto",
        transform: "none",
      });
    }

    // Kill all ScrollTriggers
    scrollTriggersRef.current.forEach((trigger) => {
      if (trigger && typeof trigger.kill === "function") {
        trigger.kill();
      }
    });
    scrollTriggersRef.current = [];

    // Kill all ScrollTriggers globally (safety net)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Force refresh ScrollTrigger
    ScrollTrigger.refresh();

    setIsInitialized(false);
  }, [isMobile]);

  useEffect(() => {
    moveIndicator(activeFeature);
    setProgressValue(activeFeature / (features.length - 1));

    // Scroll the active feature button into view (mobile only)
    if (isMobile && featureButtonsRef.current[activeFeature]) {
      featureButtonsRef.current[activeFeature]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeFeature, moveIndicator, features.length, isMobile]);

  useGSAP(() => {
    if (typeof window === "undefined") return;

    const cleanup = () => {
      scrollTriggersRef.current.forEach((trigger) => trigger.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    const initialize = () => {
      const navEl = navContainerRef.current;
      const container = containerRef.current;
      navHeightRef.current = navEl?.offsetHeight || 0;

      const triggers: any[] = [];

      if (!isMobile && navEl && container) {
        triggers.push(
          ScrollTrigger.create({
            trigger: container,
            start: "top 10%",
            end: "bottom bottom",
            pin: navEl,
            pinSpacing: false,
            id: "desktop-pin",
            onEnter: () => {
              gsap.to(navEl, {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            },
            onLeaveBack: () => {
              gsap.to(navEl, {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            },
          }),
        );
      }

      if (isMobile && navEl && container) {
        triggers.push(
          ScrollTrigger.create({
            trigger: container,
            start: "top 10%",
            end: "bottom bottom",
            pin: navEl,
            id: "mobile-pin",
            onUpdate: (self) => setProgressValue(self.progress),
          }),
        );
      }

      features.forEach((_, index) => {
        const el = contentRefs.current[index];
        if (!el) return;

        triggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: !isMobile
              ? "top center"
              : `top+=${navHeightRef.current}px center`,
            end: !isMobile
              ? "bottom center"
              : `bottom+=${navHeightRef.current}px center`,
            onEnter: () => {
              if (!isScrollingProgrammatically.current) {
                setActiveFeature(index);
              }
            },
            onEnterBack: () => {
              if (!isScrollingProgrammatically.current) {
                setActiveFeature(index);
              }
            },
          }),
        );
      });

      scrollTriggersRef.current = triggers;
      ScrollTrigger.refresh();
    };

    const safeInitialize = () => {
      cleanup();
      setTimeout(() => {
        initialize();
      }, 3000);
    };

    // Wait for full window load (all images/resources loaded)
    if (document.readyState === "complete") {
      requestAnimationFrame(() => {
        safeInitialize();
      });
    } else {
      window.addEventListener("load", () => {
        requestAnimationFrame(() => {
          safeInitialize();
        });
      });
    }

    const handleResize = () => {
      cleanup();
      initialize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cleanup();
    };
  }, [features.length, calculateButtonPositions, isMobile]);
  const titles: string[] = featuresList?.slice(0, -1).map((item) => item.title); // all except last
  const featureBtnC = featuresList?.[featuresList?.length - 1]?.title ?? "";

  return (
    <section
      ref={containerRef}
      className="relative mt-7 flex flex-col justify-between gap-9 overflow-visible md:px-3 lg:flex-row xl:p-6"
    >
      <div
        ref={navContainerRef}
        className={`${
          isMobile
            ? "shadow-c2 z-30 w-full min-w-[340px] bg-white px-2 transition-all duration-200"
            : ""
        }`}
        style={{ willChange: isMobile ? "transform" : "auto" }}
      >
        <FeatureNavigation
          // features={features}
          features={titles}
          featureBtn={[featureBtnC]}
          activeFeature={activeFeature}
          onFeatureClick={(index) => {
            setActiveFeature(index);

            if (contentRefs.current[index]) {
              const yOffset = isMobile ? -navHeightRef.current - 20 : 0;
              const y =
                contentRefs.current[index]?.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

              isScrollingProgrammatically.current = true;
              window.scrollTo({ top: y, behavior: "smooth" });
              setTimeout(() => {
                isScrollingProgrammatically.current = false;
              }, 600);
            }

            if (isMobile && featureButtonsRef.current[index]) {
              featureButtonsRef.current[index]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
              });
            }
          }}
          indicatorRef={indicatorRef}
          featuresRef={featuresRef}
          featureButtonsRef={featureButtonsRef}
          isMobile={isMobile}
        />
      </div>

      <div className="w-full space-y-4 overflow-visible lg:max-w-[65%] lg:space-y-8 xl:max-w-[639px]">
        <FeatureContent
          // featureContents={featureContents}
          featureContents={featuresList}
          contentRefs={contentRefs}
        />
      </div>
    </section>
  );
};

export default CoreFeaturesCard;
