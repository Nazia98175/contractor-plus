"use client";
import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pathbg } from "../common/Icons";
import { useTranslations } from "next-intl";

// Register ScrollTrigger plugin with GSAP
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

  // Store position calculations for buttons
  const buttonPositionsRef = useRef<number[]>([]);

  // Store ScrollTrigger instances for cleanup
  const scrollTriggersRef = useRef<any[]>([]);

  // Get translations
  const t = useTranslations("corefeature");

  // Get feature names and content from translations
  const features: string[] = t.raw("features") || [];
  const featureContents = t.raw("featureContents") as {
    title: string;
    mainDesc?: string;
    description: string;
  }[];

  // Calculate button positions for each feature - memoized with useCallback
  const calculateButtonPositions = useCallback(() => {
    if (!featuresRef.current) return [0, 0, 0, 0, 0, 0];

    // Try to select buttons with feature-btn class, fall back to all buttons if none found
    let featureButtons =
      featuresRef.current.querySelectorAll("button.feature-btn");

    // If no buttons with feature-btn class, select all buttons
    if (featureButtons.length === 0) {
      featureButtons = featuresRef.current.querySelectorAll("button");
    }

    const positions: number[] = [];

    featureButtons.forEach((button, index) => {
      if (index === 0) {
        positions.push(0); // First button starts at 0
      } else {
        // For vertical layout (desktop)
        if (window.innerWidth >= 1024) {
          positions.push(
            (button as HTMLElement).offsetTop -
              (featureButtons[0] as HTMLElement).offsetTop
          );
        }
        // For horizontal layout (mobile)
        else {
          positions.push(
            (button as HTMLElement).offsetLeft -
              (featureButtons[0] as HTMLElement).offsetLeft
          );
        }
      }
    });

    buttonPositionsRef.current = positions;
    return positions;
  }, []);

  // Move indicator to active feature position
  const moveIndicator = useCallback(
    (index: number) => {
      if (!indicatorRef.current || !featuresRef.current) return;

      // Recalculate positions to ensure accuracy
      const positions = calculateButtonPositions();
      const position = positions[index];

      // For desktop (vertical layout)
      if (window.innerWidth >= 1024) {
        gsap.to(indicatorRef.current, {
          top: `${position + 6}px`, // 6px offset to align with text
          duration: 0.3,
          ease: "power2.out",
        });
      }
      // For mobile (horizontal layout) - move the dedicated mobile indicator
      else if (mobileIndicatorRef.current) {
        gsap.to(mobileIndicatorRef.current, {
          left: position,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    [calculateButtonPositions]
  );

  // Update indicator position when active feature changes
  useEffect(() => {
    moveIndicator(activeFeature);
    setProgressValue(activeFeature / (features.length - 1));
  }, [activeFeature, moveIndicator, features.length]);

  // Set up ScrollTrigger - using a layout effect to ensure DOM is ready
  useEffect(() => {
    // Return early if not in browser environment
    if (typeof window === "undefined") return;

    // Define handleResize first
    const handleResize = () => {
      calculateButtonPositions();
      moveIndicator(activeFeature);

      // Important: Refresh ScrollTrigger on resize
      ScrollTrigger.refresh();
    };

    // Ensure proper cleanup
    const cleanup = () => {
      // Remove all event listeners
      window.removeEventListener("resize", handleResize);

      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Also kill any stored triggers
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && typeof trigger.kill === "function") {
          trigger.kill();
        }
      });
    };

    // Clean up any existing instances first
    cleanup();

    // Wait for next frame to ensure DOM is ready
    requestAnimationFrame(() => {
      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Get container reference
      const container = containerRef.current;
      const featuresElement = featuresRef.current;
      const contentContainer = contentContainerRef.current;

      if (!container || !featuresElement) {
        cleanup();
        return;
      }

      // Force any parent with overflow hidden to be visible
      let parent = container.parentElement;
      while (parent) {
        const style = window.getComputedStyle(parent);
        if (style.overflow === "hidden") {
          parent.style.overflow = "visible";
        }
        parent = parent.parentElement;
      }

      // Initialize positions
      calculateButtonPositions();

      // Set initial position of indicator
      if (indicatorRef.current) {
        gsap.set(indicatorRef.current, {
          top: buttonPositionsRef.current[0] + 6,
        });
      }

      // Store all triggers for proper cleanup
      const allTriggers: any[] = [];

      // Fix for pin-spacer styling
      const fixPinSpacer = () => {
        // Find pin-spacer elements (created by GSAP)
        const pinSpacers = document.querySelectorAll(".pin-spacer");
        pinSpacers.forEach((spacer: Element) => {
          // Fix common pin-spacer styling issues
          const spacerEl = spacer as HTMLElement;
          spacerEl.style.overflow = "visible";
          spacerEl.style.height = "auto";
          spacerEl.style.zIndex = "10";
          spacerEl.style.position = "relative";
        });
      };

      // Desktop setup
      if (window.innerWidth >= 1024) {
        // Main scroll trigger for pinning and progress
        const pinTrigger = ScrollTrigger.create({
          trigger: container,
          start: "top 20%",
          end: "bottom bottom",
          pin: featuresElement,
          pinSpacing: true,
          onUpdate: (self) => {
            // Update overall scroll progress for SVG fill
            setProgressValue(self.progress);

            // Fix any pin-spacer styling issues
            if (self.progress > 0 && self.progress < 1) {
              fixPinSpacer();
            }
          },
        });

        allTriggers.push(pinTrigger);

        // Create scroll triggers for each section
        features.forEach((_, index) => {
          const contentElement = contentRefs.current[index];
          if (!contentElement) return;

          const sectionTrigger = ScrollTrigger.create({
            trigger: contentElement,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => setActiveFeature(index),
            onEnterBack: () => setActiveFeature(index),
          });

          allTriggers.push(sectionTrigger);
        });
      }
      // Mobile setup
      else {
        // For mobile we don't pin, but still track active section
        features.forEach((_, index) => {
          const contentElement = contentRefs.current[index];
          if (!contentElement) return;

          const sectionTrigger = ScrollTrigger.create({
            trigger: contentElement,
            start: "top 60%",
            end: "bottom 60%",
            onEnter: () => setActiveFeature(index),
            onEnterBack: () => setActiveFeature(index),
          });

          allTriggers.push(sectionTrigger);
        });
      }

      // Store for cleanup
      scrollTriggersRef.current = allTriggers;

      // Finally, refresh ScrollTrigger to ensure everything is calculated correctly
      ScrollTrigger.refresh();

      // Position indicator manually after a short delay
      const timeoutId = setTimeout(() => {
        moveIndicator(activeFeature);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        cleanup();
      };
    });
  }, []); // Empty dependency array - only run once

  return (
    <div
      className="lg:p-6 px-3 flex lg:flex-row flex-col gap-9 relative overflow-visible mt-7 lg:mt-11"
      ref={containerRef}
    >
      {/* Navigation Column */}
      <div
        className="flex gap-1.5 lg:self-start z-20 lg:w-[187px] "
        ref={featuresRef}
        style={{ overflow: "visible" }}
      >
        <div className="px-1 hidden lg:flex relative w-fit justify-center items-center mt-1">
          {/* Button that moves with scroll */}
          <button
            ref={indicatorRef}
            className="w-3 h-3 rounded-full absolute top-2.5 bg-black left-1/2 -translate-x-1/2 z-10"
          ></button>
          {/* Using Pathbg component */}
          <Pathbg />
        </div>
        <div className="flex flex-row lg:flex-col gap-[22px] font-sans lg:overflow-visible no-scrollbar overflow-auto whitespace-nowrap relative ">
          {/* Mobile indicator (visible on small screens) */}

          {features.map((feature, index) => (
            <button
              onClick={() => {
                setActiveFeature(index);
                // Smooth scroll to the content
                contentRefs.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              key={feature}
              className={`feature-btn lg:truncate text-base md:text-xl py-1 px-0.5 leading-[100%] text-start transition-colors duration-300 lg:min-w-[165px] lg:max-w-[165px] w-fit font-jakarta ${
                index === activeFeature
                  ? " text-winterWay font-bold"
                  : "text-secondary font-normal"
              }`}
            >
              {feature}
            </button>
          ))}
        </div>
      </div>

      {/* Feature Content Sections */}
      <div
        className=" space-y-12 md:space-y-32 overflow-visible lg:max-w-[639px] w-full"
        ref={contentContainerRef}
      >
        {featureContents.map((content, index) => (
          <div
            key={index}
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className="p-3.5 bg-gray-100 rounded-2xl w-full space-y-[18px] scroll-mt-24 "
          >
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-wallStreet leading-[100%] font-jakarta">
              {content.title}
            </h4>
            <div className="bg-white py-4 px-5 h-[276px] lg:h-[245px] w-full relative rounded-lg shadow-sm">
              <div className="absolute inset-0 flex items-center justify-center text-lg text-gray-400">
                {features[index]} {t("visualization")}
              </div>
            </div>
            <p className="text-base md:text-lg font-medium text-secondary max-w-[615px] font-jakarta">
              {content.mainDesc && (
                <span className="text-wallStreet inline-block">
                  {content.mainDesc}
                </span>
              )}
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeaturesCard;
