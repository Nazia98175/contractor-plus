"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import ScrollOverlapCards from "../common/ScrollOverlapCards";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export interface TheServiceProps {
  fieldService: any;
  slug?: string;
  theme: "light" | "dark" | "estimateTheme";
  apiData?: boolean;
  mainClassName?: string;
}

const FieldService: React.FC<TheServiceProps> = ({
  fieldService,
  slug,
  theme,
  apiData = true,
  mainClassName,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [headingHeight, setHeadingHeight] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  // Initialize window height on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const updateMaxHeight = () => {
    // Check if document is available
    if (typeof document === "undefined") return;

    setTimeout(() => {
      try {
        const cards = document.querySelectorAll(".crm-cards .crm-cards-inner");

        // Check if cards exist
        if (!cards || cards.length === 0) {
          console.warn("No cards found for height calculation");
          return;
        }

        let currentMaxHeight = 0;

        cards.forEach((card) => {
          const cardElement = card as HTMLElement;
          if (cardElement) {
            const cardHeight = cardElement.getBoundingClientRect()?.height || 0;
            if (cardHeight > currentMaxHeight) {
              currentMaxHeight = cardHeight;
            }
          }
        });

        setMaxHeight(currentMaxHeight);
      } catch (error) {
        console.error("Error updating max height:", error);
      }
    }, 1000);
  };

  const updateHeadingHeight = () => {
    if (headingRef.current) {
      try {
        const height = headingRef.current.getBoundingClientRect()?.height || 0;
        setHeadingHeight(height);
      } catch (error) {
        console.error("Error updating heading height:", error);
      }
    }
  };

  useEffect(() => {
    // Check refs exist before proceeding
    if (!sectionRef.current || !headingRef.current) {
      console.warn("Refs not ready, skipping height calculations");
      return;
    }

    updateMaxHeight();
    updateHeadingHeight();
  }, [sectionRef.current, headingRef.current]);

  // Update heading height on window resize
  useEffect(() => {
    // Check if window is available
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      updateHeadingHeight();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Debug logging with null check
  useEffect(() => {
    if (fieldService) {
    } else {
      console.warn("No field service data provided");
    }
  }, [fieldService]);

  useEffect(() => {
    // Check all required values exist
    if (!maxHeight || !headingHeight || !windowHeight) {
      console.log("Waiting for measurements:", {
        maxHeight,
        headingHeight,
        windowHeight,
      });
      return;
    }

    // Check if refs are still valid
    if (!sectionRef.current || !headingRef.current) {
      console.warn("Refs lost during animation setup");
      return;
    }

    const headingFromTop = windowHeight / 2 - maxHeight / 2 - 90;
    const isSticky = headingFromTop > headingHeight;

    if (!isSticky) {
      console.log("Not sticky, skipping animation");
      return;
    }

    const bottomVal =
      100 - (headingFromTop + headingHeight) / (windowHeight / 100);

    // Validate bottomVal
    if (isNaN(bottomVal) || !isFinite(bottomVal)) {
      console.error("Invalid bottomVal calculation:", bottomVal);
      return;
    }

    setTimeout(() => {
      try {
        // Check if GSAP and ScrollTrigger are available
        if (
          typeof gsap === "undefined" ||
          typeof ScrollTrigger === "undefined"
        ) {
          console.error("GSAP or ScrollTrigger not available");
          return;
        }

        // Final check that refs still exist
        if (!sectionRef.current || !headingRef.current) {
          console.warn("Refs lost before animation creation");
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom bottom",
            end: `bottom ${bottomVal}%`,
            scrub: 2,
            markers: false,
            id: "field-service-heading",
            invalidateOnRefresh: true,
          },
        });

        tl.to(headingRef.current, {
          y: -(headingFromTop + headingHeight),
          ease: "none",
        });
      } catch (error) {
        console.error("Error setting up GSAP animation:", error);
      }
    }, 2000);

    // Cleanup function
    return () => {
      // Kill specific ScrollTrigger instance if it exists
      try {
        ScrollTrigger.getById("field-service-heading")?.kill();
      } catch (error) {
        console.error("Error cleaning up ScrollTrigger:", error);
      }
    };
  }, [headingHeight, maxHeight, windowHeight]);

  // Calculate sticky position with safety checks
  const calculateStickyPosition = () => {
    if (!windowHeight || !maxHeight || !headingHeight) {
      return { top: "unset", position: "relative" as const };
    }

    const headingFromTop = windowHeight / 2 - maxHeight / 2 - 90;
    const isSticky = headingFromTop > headingHeight;

    return {
      top: isSticky ? `${headingFromTop}px` : "unset",
      position: isSticky ? ("sticky" as const) : ("relative" as const),
    };
  };

  // Check if required props exist
  if (!fieldService) {
    console.error("FieldService component: fieldService prop is required");
    return (
      <div className="py-10 text-center">
        <p>No service data available</p>
      </div>
    );
  }

  if (!theme) {
    console.warn(
      "FieldService component: theme prop is missing, defaulting to 'light'",
    );
  }

  const stickyStyles = calculateStickyPosition();

  return (
    <section
      ref={sectionRef}
      className="relative z-30 px-2 pt-14 sm:pt-20 lg:pt-2"
    >
      <div
        ref={headingRef}
        style={stickyStyles}
        className="w-full justify-center"
      >
        {fieldService?.title ? (
          <AdaptiveHeroTitle
            title={fieldService.title}
            className={`gradient-text mx-auto block text-center leading-relaxed font-semibold -tracking-[0.72px] ${
              mainClassName || "max-w-[813px]"
            }`}
            minFontSize={24}
            maxLines={2}
            maxFontSize={42}
          />
        ) : (
          <div className="py-4 text-center">
            <p>No title available</p>
          </div>
        )}
      </div>
      <ScrollOverlapCards
        theme={theme || "light"}
        slug={slug || ""}
        fieldService={fieldService}
        apiData={apiData}
      />
    </section>
  );
};

export default FieldService;
