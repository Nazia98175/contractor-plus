"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import FeatureNavigation from "./FeatureNavigation";
import FeatureContent from "./FeatureContent";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface FeatureItem {
  id: number;
  title: string;
  cardQuote: string | null;
  userName: string | null;
  cardImg: any | null;
  imgSrc: string;
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
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLButtonElement | null>(null);
  const featureButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const navHeightRef = useRef<number>(0);
  const isScrollingProgrammatically = useRef(false);
  const lastActiveFeature = useRef(0);
  const rafId = useRef<number | null>(null);
  const scrollTriggerInstance = useRef<ScrollTrigger | null>(null);

  const t = useTranslations("corefeature");
  const features: string[] = t.raw("features") || [];

  // Mobile detection with resize listener
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1023;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Update nav height
  useEffect(() => {
    if (navContainerRef.current) {
      navHeightRef.current = navContainerRef.current.offsetHeight;
    }
  }, [isMobile]);

  // Update progress value and scroll active button into view
  useEffect(() => {
    if (isMobile && featureButtonsRef.current[activeFeature]) {
      featureButtonsRef.current[activeFeature]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeFeature, features.length, isMobile]);

  // Optimized scroll handling - ONLY for mobile sticky and active feature detection
  useEffect(() => {
    if (isMobile) {
      let ticking = false;

      const processScroll = () => {
        if (isScrollingProgrammatically.current) {
          ticking = false;
          return;
        }

        const containerEl = containerRef.current;
        const navEl = navContainerRef.current;

        if (!containerEl || !navEl) {
          ticking = false;
          return;
        }

        const scrollY = window.scrollY;
        const containerTop = containerEl.offsetTop;

        // Check if navigation should be sticky (mobile only)
        const shouldBeSticky = scrollY > containerTop - 40;
        if (isSticky !== shouldBeSticky) {
          setIsSticky(shouldBeSticky);
        }

        // Find active feature based on which Lottie animation should be playing
        const windowHeight = window.innerHeight;
        const offset = navHeightRef.current;
        let newActiveFeature = lastActiveFeature.current;

        // Use the same logic as Lottie's play zone (30% from top, 70% from top)
        const playZoneStart = windowHeight * 0.3;
        const playZoneEnd = windowHeight * 0.7;

        for (let i = 0; i < contentRefs.current.length; i++) {
          const ref = contentRefs.current[i];
          if (!ref) continue;

          const rect = ref.getBoundingClientRect();
          const elementCenter = rect.top + (rect.height / 2);

          // Check if element center is in the play zone
          if (elementCenter >= playZoneStart && elementCenter <= playZoneEnd) {
            newActiveFeature = i;
            break;
          }
        }

        // Only update if changed
        if (newActiveFeature !== lastActiveFeature.current) {
          lastActiveFeature.current = newActiveFeature;
          setActiveFeature(newActiveFeature);
        }

        ticking = false;
      };

      const handleScroll = () => {
        if (!ticking) {
          if (rafId.current) {
            cancelAnimationFrame(rafId.current);
          }
          rafId.current = requestAnimationFrame(processScroll);
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial check

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }
      };
    }
  }, [isSticky, isMobile]);

  // Desktop ScrollTrigger setup - ONLY for desktop
  useEffect(() => {
    if (!isMobile) {
      // Wait for DOM to be ready
      const timer = setTimeout(() => {
        const container = containerRef.current;
        const navContainer = navContainerRef.current;
        const content = contentRef.current;

        if (!container || !navContainer || !content) return;

        // Kill existing ScrollTrigger
        if (scrollTriggerInstance.current) {
          scrollTriggerInstance.current.kill();
        }

        // Create new ScrollTrigger for pinning the navigation
        scrollTriggerInstance.current = ScrollTrigger.create({
          trigger: container,
          start: "top 90px",
          end: () => `+=${content.offsetHeight - navContainer.offsetHeight}`,
          pin: navContainer,
          pinSpacing: false,
          invalidateOnRefresh: true,
          markers: false,
          onUpdate: (self) => {
            // Find active feature based on which Lottie animation is playing
            if (!isScrollingProgrammatically.current) {
              let newActiveFeature = lastActiveFeature.current;
              
              // Check each content section to see which one is in the "play zone"
              const windowHeight = window.innerHeight;
              const playZoneStart = windowHeight * 0.3; // 30% from top
              const playZoneEnd = windowHeight * 0.7; // 70% from top

              for (let i = 0; i < contentRefs.current.length; i++) {
                const ref = contentRefs.current[i];
                if (!ref) continue;

                const rect = ref.getBoundingClientRect();
                const elementCenter = rect.top + (rect.height / 2);

                // Check if element center is in the play zone
                if (elementCenter >= playZoneStart && elementCenter <= playZoneEnd) {
                  newActiveFeature = i;
                  break;
                }
              }
              
              if (newActiveFeature !== lastActiveFeature.current) {
                lastActiveFeature.current = newActiveFeature;
                setActiveFeature(newActiveFeature);
              }
            }
          },
        });
      }, 100);

      return () => {
        clearTimeout(timer);
        if (scrollTriggerInstance.current) {
          scrollTriggerInstance.current.kill();
          scrollTriggerInstance.current = null;
        }
      };
    }
  }, [isMobile]);

  // Move indicator - debounced to prevent shaking
  const moveIndicator = useCallback(
    (index: number) => {
      if (!indicatorRef.current || !featuresRef.current) return;

      requestAnimationFrame(() => {
        const buttons =
          featuresRef.current?.querySelectorAll("button.feature-btn");
        if (!buttons || buttons.length === 0) return;

        const firstButton = buttons[0] as HTMLElement;
        const targetButton = buttons[index] as HTMLElement;

        if (!firstButton || !targetButton) return;

        const firstRect = firstButton.getBoundingClientRect();
        const targetRect = targetButton.getBoundingClientRect();

        const offset = !isMobile
          ? targetRect.top - firstRect.top
          : targetRect.left - firstRect.left;

        if (indicatorRef.current) {
          indicatorRef.current.style.transform = !isMobile
            ? `translate(-50%, ${offset + 6}px)`
            : `translate(${offset + 6}px, -50%)`;
        }
      });
    },
    [isMobile],
  );

  // Update indicator position when active feature changes
  useEffect(() => {
    moveIndicator(activeFeature);
  }, [activeFeature, moveIndicator]);

  // Handle feature click - FIXED SCROLL OFFSET
  const handleFeatureClick = useCallback(
    (index: number) => {
      setActiveFeature(index);
      lastActiveFeature.current = index;

      if (contentRefs.current[index]) {
        const element = contentRefs.current[index];

        // Calculate the proper offset
        let yOffset = 0;

        if (isMobile) {
          // For mobile: account for sticky nav (80px from top-20) plus some padding
          yOffset = -80 - navHeightRef.current - 20;
        } else {
          // For desktop: account for sticky nav (112px from top-28) plus some padding
          yOffset = -112 - 20;
        }

        // Get element position
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;

        // Calculate final scroll position
        const scrollTo = absoluteElementTop + yOffset;

        isScrollingProgrammatically.current = true;
        window.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });

        setTimeout(() => {
          isScrollingProgrammatically.current = false;
        }, 800);
      }

      if (isMobile && featureButtonsRef.current[index]) {
        featureButtonsRef.current[index]?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    },
    [isMobile],
  );

  const titles: string[] = featuresList?.slice(0, -1).map((item) => item.title);
  const featureBtnC = featuresList?.[featuresList?.length - 1]?.title ?? "";

  useEffect(() => {
    setTimeout(() => {
      const container = containerRef.current;
      const navContainer = navContainerRef.current;
      const content = contentRef.current;

      if (!container || !navContainer || !content) return;
      console.log(content.offsetHeight);

      // Create ScrollTrigger for pinning the navigation
      const pinTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top 90px",
        end: () => `+=${content.offsetHeight - navContainer.offsetHeight}`,
        pin: navContainer,
        pinSpacing: false,
        invalidateOnRefresh: true,
        // Optional: Add some debugging
        markers: false, // Set to true for debugging
      });

      // Cleanup function
      return () => {
        pinTrigger.kill();
      };
    }, 2500);
  }, []);

  // Optional: Refresh ScrollTrigger on window resize
  // Refresh ScrollTrigger on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollTriggerInstance.current) {
        scrollTriggerInstance.current.kill();
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // const titles: string[] = featuresList?.slice(0, -1).map((item) => item.title);
  // const featureBtnC = featuresList?.[featuresList?.length - 1]?.title ?? "";

  return (
    <section
      ref={containerRef}
      className="relative mt-7 flex flex-col gap-9 overflow-visible lg:flex-row lg:px-3 xl:p-6"
    >
      <div className="relative z-20 h-full lg:w-fit">
        <div
          ref={navContainerRef}
          className={`z-20 w-full lg:w-fit lg:self-start ${
            isMobile && isSticky
              ? "fixed top-20 left-0 right-0 bg-white shadow-md"
              : ""
          }`}
        >
          <FeatureNavigation
            features={titles}
            featureBtn={[featureBtnC]}
            activeFeature={activeFeature}
            onFeatureClick={handleFeatureClick}
            indicatorRef={indicatorRef}
            featuresRef={featuresRef}
            featureButtonsRef={featureButtonsRef}
            isMobile={isMobile}
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className={`w-full space-y-4 overflow-visible lg:w-[80%] lg:space-y-8 ${
          isMobile && isSticky ? "pt-16" : ""
        }`}
      >
        <FeatureContent
          featureContents={featuresList}
          contentRefs={contentRefs}
        />
      </div>
    </section>
  );
};

export default CoreFeaturesCard;