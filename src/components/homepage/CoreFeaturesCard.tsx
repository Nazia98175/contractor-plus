"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import FeatureNavigation from "./FeatureNavigation";
import FeatureContent from "./FeatureContent";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CoreFeaturesCard = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLButtonElement | null>(null);
  const mobileIndicatorRef = useRef<HTMLButtonElement | null>(null);
  const contentContainerRef = useRef<HTMLDivElement | null>(null);

  const buttonPositionsRef = useRef<number[]>([]);
  const scrollTriggersRef = useRef<any[]>([]);

  const t = useTranslations("corefeature");
  const features: string[] = t.raw("features") || [];
  const featureContents = t.raw("featureContents") as {
    title: string;
    mainDesc?: string;
    description: string;
  }[];

  const calculateButtonPositions = useCallback(() => {
    if (!featuresRef.current) return [0, 0, 0, 0, 0, 0];
    let featureButtons =
      featuresRef.current.querySelectorAll("button.feature-btn") ||
      featuresRef.current.querySelectorAll("button");

    const positions: number[] = [];
    featureButtons.forEach((button, index) => {
      if (index === 0) {
        positions.push(0);
      } else {
        positions.push(
          window.innerWidth >= 1024
            ? (button as HTMLElement).offsetTop -
                (featureButtons[0] as HTMLElement).offsetTop
            : (button as HTMLElement).offsetLeft -
                (featureButtons[0] as HTMLElement).offsetLeft
        );
      }
    });

    buttonPositionsRef.current = positions;
    return positions;
  }, []);

  const moveIndicator = useCallback(
    (index: number) => {
      if (!indicatorRef.current || !featuresRef.current) return;
      const positions = calculateButtonPositions();
      const position = positions[index];
      const target =
        window.innerWidth >= 1024
          ? indicatorRef.current
          : mobileIndicatorRef.current;
      if (target) {
        gsap.to(target, {
          [window.innerWidth >= 1024 ? "top" : "left"]: `${
            position + (window.innerWidth >= 1024 ? 6 : 0)
          }px`,
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

    const handleResize = () => {
      calculateButtonPositions();
      moveIndicator(activeFeature);
      ScrollTrigger.refresh();
    };

    const cleanup = () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      scrollTriggersRef.current.forEach((trigger) => trigger?.kill?.());
    };

    cleanup();

    requestAnimationFrame(() => {
      window.addEventListener("resize", handleResize);
      const container = containerRef.current;
      const featuresElement = featuresRef.current;

      if (!container || !featuresElement) {
        cleanup();
        return;
      }

      let parent = container.parentElement;
      while (parent) {
        if (window.getComputedStyle(parent).overflow === "hidden") {
          parent.style.overflow = "visible";
        }
        parent = parent.parentElement;
      }

      calculateButtonPositions();

      gsap.set(indicatorRef.current, {
        top: buttonPositionsRef.current[0] + 6,
      });

      const allTriggers: any[] = [];

      const fixPinSpacer = () => {
        const pinSpacers = document.querySelectorAll(".pin-spacer");
        pinSpacers.forEach((spacer) => {
          const el = spacer as HTMLElement;
          el.style.overflow = "visible";
          el.style.height = "auto";
          el.style.zIndex = "10";
          el.style.position = "relative";
        });
      };

      if (window.innerWidth >= 1024) {
        allTriggers.push(
          ScrollTrigger.create({
            trigger: container,
            start: "top 20%",
            end: "bottom bottom",
            pin: featuresElement,
            pinSpacing: true,
            onUpdate: (self) => {
              setProgressValue(self.progress);
              if (self.progress > 0 && self.progress < 1) fixPinSpacer();
            },
          })
        );
      }

      features.forEach((_, index) => {
        const el = contentRefs.current[index];
        if (!el) return;
        allTriggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: window.innerWidth >= 1024 ? "top 40%" : "top 60%",
            end: window.innerWidth >= 1024 ? "bottom 40%" : "bottom 60%",
            onEnter: () => setActiveFeature(index),
            onEnterBack: () => setActiveFeature(index),
          })
        );
      });

      scrollTriggersRef.current = allTriggers;
      ScrollTrigger.refresh();

      const timeoutId = setTimeout(() => moveIndicator(activeFeature), 100);

      return () => {
        clearTimeout(timeoutId);
        cleanup();
      };
    });
  }, []);

  return (
    <section
      className="lg:p-6 md:px-3 flex lg:flex-row flex-col gap-9 relative overflow-visible mt-7"
      ref={containerRef}
    >
      <FeatureNavigation
        features={features}
        activeFeature={activeFeature}
        onFeatureClick={(index) => {
          setActiveFeature(index);
          contentRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
        indicatorRef={indicatorRef}
        featuresRef={featuresRef}
        mobileIndicatorRef={mobileIndicatorRef}
      />
      <div
        className="space-y-12 xl:space-y-16 overflow-visible lg:max-w-[639px] w-full"
        ref={contentContainerRef}
      >
        <FeatureContent
          features={features}
          featureContents={featureContents}
          contentRefs={contentRefs}
          t={t}
        />
      </div>
    </section>
  );
};

export default CoreFeaturesCard;
