"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import FeatureNavigation from "./FeatureNavigation";
import FeatureContent from "./FeatureContent";
import { featureContents } from "../common/Helper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CoreFeaturesCard = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLButtonElement | null>(null);
  const mobileIndicatorRef = useRef<HTMLButtonElement | null>(null);
  const scrollTriggersRef = useRef<any[]>([]);
  const navHeightRef = useRef<number>(0);

  const t = useTranslations("corefeature");
  const features: string[] = t.raw("features") || [];
  const featureBtn: string[] = [t.raw("featureBtn") || "Learn More"];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const calculateButtonPositions = useCallback(() => {
    if (!featuresRef.current) return [];
    const featureButtons =
      featuresRef.current.querySelectorAll("button.feature-btn");
    const positions: number[] = [];

    featureButtons.forEach((button, index) => {
      const rect = (button as HTMLElement).getBoundingClientRect();
      const base = (featureButtons[0] as HTMLElement).getBoundingClientRect();
      positions.push(
        window.innerWidth >= 1024 ? rect.top - base.top : rect.left - base.left
      );
    });

    return positions;
  }, []);

  const moveIndicator = useCallback(
    (index: number) => {
      const positions = calculateButtonPositions();
      const position = positions[index] || 0;
      const target =
        window.innerWidth >= 1024
          ? indicatorRef.current
          : mobileIndicatorRef.current;

      if (target) {
        gsap.to(target, {
          [window.innerWidth >= 1024 ? "top" : "left"]: `${position + 6}px`,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    [calculateButtonPositions]
  );

  useEffect(() => {
    moveIndicator(activeFeature);
    setProgressValue(activeFeature / (features.length - 1));
  }, [activeFeature, moveIndicator, features.length]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cleanup = () => {
      scrollTriggersRef.current.forEach((trigger) => trigger.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    const setupScrollTriggers = () => {
      const triggers: any[] = [];
      const navEl = navContainerRef.current;
      const container = containerRef.current;
      navHeightRef.current = navEl?.offsetHeight || 0;

      // ✅ Desktop Pin from top 20%
      if (window.innerWidth >= 1024 && navEl && container) {
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
          })
        );
      }

      // ✅ Simplified Mobile Pin (no pinReparent, better stability)
      if (window.innerWidth < 1024 && navEl && container) {
        triggers.push(
          ScrollTrigger.create({
            trigger: container,
            start: "top 10%",
            end: "bottom bottom",
            pin: navEl,
            id: "mobile-pin",
            onUpdate: (self) => setProgressValue(self.progress),
          })
        );
      }

      // 🎯 Feature scroll detection
      features.forEach((_, index) => {
        const el = contentRefs.current[index];
        if (!el) return;

        triggers.push(
          ScrollTrigger.create({
            trigger: el,
            start:
              window.innerWidth >= 1024
                ? "top center"
                : `top+=${navHeightRef.current}px center`,
            end:
              window.innerWidth >= 1024
                ? "bottom center"
                : `bottom+=${navHeightRef.current}px center`,
            onEnter: () => setActiveFeature(index),
            onEnterBack: () => setActiveFeature(index),
          })
        );
      });

      scrollTriggersRef.current = triggers;
      ScrollTrigger.refresh();
    };

    const handleResize = () => {
      cleanup();
      setupScrollTriggers();
    };

    requestAnimationFrame(() => {
      cleanup();
      setupScrollTriggers();
      setTimeout(() => ScrollTrigger.refresh(), 200); // Ensure proper recalculation
    });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cleanup();
    };
  }, [features.length, calculateButtonPositions]);

  return (
    <section
      ref={containerRef}
      className="lg:p-6 md:px-3 flex lg:flex-row flex-col gap-9 relative overflow-visible mt-7"
    >
      <div
        ref={navContainerRef}
        className={`${
          isMobile
            ? "w-full bg-white z-30 px-2 shadow-c2 transition-all duration-200"
            : ""
        }`}
        style={{ willChange: isMobile ? "transform" : "auto" }}
      >
        <FeatureNavigation
          features={features}
          featureBtn={featureBtn}
          activeFeature={activeFeature}
          onFeatureClick={(index) => {
            setActiveFeature(index);
            if (contentRefs.current[index]) {
              const yOffset = isMobile ? -navHeightRef.current - 20 : 0;
              const y =
                contentRefs.current[index]?.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          indicatorRef={indicatorRef}
          featuresRef={featuresRef}
          isMobile={isMobile}
        />
      </div>
      <div className="space-y-4 lg:space-y-8 overflow-visible lg:max-w-[639px] w-full">
        <FeatureContent
          featureContents={featureContents}
          contentRefs={contentRefs}
        />
      </div>
    </section>
  );
};

export default CoreFeaturesCard;
