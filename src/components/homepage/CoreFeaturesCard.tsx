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
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLButtonElement | null>(null);
  const mobileIndicatorRef = useRef<HTMLButtonElement | null>(null);
  const contentContainerRef = useRef<HTMLDivElement | null>(null);

  const buttonPositionsRef = useRef<number[]>([]);
  const scrollTriggersRef = useRef<any[]>([]);
  const navHeightRef = useRef<number>(0);

  const t = useTranslations("corefeature");
  const features: string[] = t.raw("features") || [];
  const featureBtn: string[] = [t.raw("featureBtn") || "Learn More"];
  const featureContents = t.raw("featureContents") as {
    title: string;
    mainDesc?: string;
    description: string;
    titleImg: string;
  }[];

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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

  // Properly fix pin spacers
  const fixPinSpacer = useCallback(() => {
    const pinSpacers = document.querySelectorAll(".pin-spacer");
    pinSpacers.forEach((spacer) => {
      const el = spacer as HTMLElement;
      if (window.innerWidth >= 1024) {
        // Desktop pin spacer
        el.style.overflow = "visible";
        el.style.height = "auto";
        el.style.zIndex = "10";
        el.style.position = "relative";
      } else {
        // Mobile pin spacer - fixed height to prevent jumps
        if (
          navContainerRef.current &&
          navContainerRef.current.parentElement === el
        ) {
          el.style.overflow = "visible";
          el.style.paddingTop = "0"; // Important for smooth animation
          el.style.paddingBottom = "0"; // Important for smooth animation
          el.style.zIndex = "30";
          el.style.position = "relative";
        }
      }
    });
  }, []);

  // Create a stable scroll setup with better pin management
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      // Save scroll position before refresh
      const scrollY = window.scrollY;

      // Kill previous triggers
      scrollTriggersRef.current.forEach((trigger) => trigger?.kill?.());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Clear transforms that might be left behind
      if (navContainerRef.current) {
        navContainerRef.current.style.transform = "";
      }

      // Update measurements
      calculateButtonPositions();

      if (navContainerRef.current) {
        navHeightRef.current = navContainerRef.current.offsetHeight;
      }

      // Setup new triggers with delay to ensure DOM is ready
      setTimeout(() => {
        setupScrollTriggers();
        moveIndicator(activeFeature);

        // Restore scroll position after refresh
        window.scrollTo(0, scrollY);
      }, 50);
    };

    const setupScrollTriggers = () => {
      const container = containerRef.current;
      const featuresElement = navContainerRef.current;

      if (!container || !featuresElement) return;

      // Fix parent overflow
      let parent = container.parentElement;
      while (parent) {
        if (window.getComputedStyle(parent).overflow === "hidden") {
          parent.style.overflow = "visible";
        }
        parent = parent.parentElement;
      }

      // Store nav height for calculations
      navHeightRef.current = featuresElement.offsetHeight;

      // Initial indicator position
      if (indicatorRef.current) {
        gsap.set(indicatorRef.current, {
          top: buttonPositionsRef.current[0] + 6,
        });
      }

      const allTriggers: any[] = [];

      // Different pinning strategy based on viewport
      if (window.innerWidth >= 1024) {
        // Desktop: Pin features navigation on the side
        allTriggers.push(
          ScrollTrigger.create({
            trigger: container,
            start: "top 10%",
            end: "bottom bottom",
            pin: featuresElement,
            pinSpacing: true,
            refreshPriority: 1, // Higher priority for smoother updates
            onUpdate: (self) => {
              setProgressValue(self.progress);
              if (self.progress > 0 && self.progress < 1) {
                fixPinSpacer();
              }
            },
          })
        );
      } else {
        // Prepare element for mobile pinning
        if (featuresElement.parentElement) {
          // Make sure there's no leftover transforms
          featuresElement.style.transform = "";
        }

        // Mobile: Pin with better settings to avoid jerkiness
        allTriggers.push(
          ScrollTrigger.create({
            trigger: container,
            start: "top 10%", // Start a bit before top to make transition smoother
            endTrigger: container, // Use the container as end trigger
            end: `bottom-=${navHeightRef.current * 2}px bottom`, // End earlier to prevent jumps
            pin: featuresElement,
            pinReparent: true, // Helps prevent layout shifts
            pinSpacing: false,
            anticipatePin: 1, // Pre-pin to avoid jerky start
            refreshPriority: 1, // Higher priority for smoother updates
            onEnter: () => {
              // Add a tiny delay for smoother entrance
              gsap.to(featuresElement, {
                duration: 0.1,
                ease: "power1.out",
                onComplete: fixPinSpacer,
              });
            },
            onUpdate: (self) => {
              setProgressValue(self.progress);
              fixPinSpacer();
            },
          })
        );
      }

      // Create scroll triggers for content sections
      features.forEach((_, index) => {
        const el = contentRefs.current[index];
        if (!el) return;
        allTriggers.push(
          ScrollTrigger.create({
            trigger: el,
            start:
              window.innerWidth >= 1024
                ? "top 40%"
                : `top+=${navHeightRef.current}px 60%`,
            end:
              window.innerWidth >= 1024
                ? "bottom 40%"
                : `bottom+=${navHeightRef.current}px 60%`,
            onEnter: () => setActiveFeature(index),
            onEnterBack: () => setActiveFeature(index),
          })
        );
      });

      scrollTriggersRef.current = allTriggers;
      ScrollTrigger.refresh(true); // Force true for complete refresh
    };

    // Clean everything before setup
    const cleanup = () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      scrollTriggersRef.current.forEach((trigger) => trigger?.kill?.());
    };

    cleanup();

    // Use RAF for smoother initialization
    requestAnimationFrame(() => {
      window.addEventListener("resize", handleResize);
      setupScrollTriggers();

      // Delay indicator movement to ensure proper positioning
      const timeoutId = setTimeout(() => moveIndicator(activeFeature), 150);

      return () => {
        clearTimeout(timeoutId);
        cleanup();
      };
    });
  }, [
    calculateButtonPositions,
    moveIndicator,
    activeFeature,
    fixPinSpacer,
    features.length,
  ]);

  return (
    <section
      className="lg:p-6 md:px-3 flex lg:flex-row flex-col gap-9 relative overflow-visible mt-7"
      ref={containerRef}
    >
      {/* Navigation wrapper with dedicated ref for pinning */}
      <div
        ref={navContainerRef}
        className={`${
          isMobile
            ? "w-full bg-white z-30 px-2 shadow-c2 transition-all duration-200"
            : ""
        }`}
        style={{
          willChange: isMobile ? "transform" : "auto", // Optimize for animation
        }}
      >
        <FeatureNavigation
          features={features}
          featureBtn={featureBtn}
          activeFeature={activeFeature}
          onFeatureClick={(index) => {
            setActiveFeature(index);
            // Smoother scrolling to element
            if (contentRefs.current[index]) {
              const yOffset = isMobile ? -navHeightRef.current - 20 : 0;
              const y =
                contentRefs.current[index]?.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

              window.scrollTo({
                top: y,
                behavior: "smooth",
              });
            }
          }}
          indicatorRef={indicatorRef}
          featuresRef={featuresRef}
          isMobile={isMobile}
        />
      </div>
      <div
        className={`space-y-12 xl:space-y-16 overflow-visible lg:max-w-[639px] w-full ${
          isMobile ? "" : ""
        }`}
        ref={contentContainerRef}
      >
        <FeatureContent
          featureContents={featureContents}
          contentRefs={contentRefs}
        />
      </div>
    </section>
  );
};

export default CoreFeaturesCard;
