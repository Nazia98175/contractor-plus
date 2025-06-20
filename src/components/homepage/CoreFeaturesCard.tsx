"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import FeatureNavigation from "./FeatureNavigation";
import FeatureContent from "./FeatureContent";

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
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  const t = useTranslations("corefeature");
  const features: string[] = t.raw("features") || [];
  const featureBtn: string[] = [t.raw("featureBtn") || "Learn More"];

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
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
    setProgressValue(activeFeature / (features.length - 1));

    if (isMobile && featureButtonsRef.current[activeFeature]) {
      featureButtonsRef.current[activeFeature]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeFeature, features.length, isMobile]);

  // Optimized scroll handling
  useEffect(() => {
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
      if (isMobile) {
        const shouldBeSticky = scrollY > containerTop - 40;
        if (isSticky !== shouldBeSticky) {
          setIsSticky(shouldBeSticky);
        }
      }

      // Find active feature based on scroll position
      const windowHeight = window.innerHeight;
      const offset = isMobile ? navHeightRef.current : 0;
      let newActiveFeature = lastActiveFeature.current;

      for (let i = contentRefs.current.length - 1; i >= 0; i--) {
        const ref = contentRefs.current[i];
        if (!ref) continue;

        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top - offset;
        const center = windowHeight / 2;

        if (elementTop < center) {
          newActiveFeature = i;
          break;
        }
      }

      // Only update if changed
      if (newActiveFeature !== lastActiveFeature.current) {
        lastActiveFeature.current = newActiveFeature;
        setActiveFeature(newActiveFeature);
      }

      // Update progress for mobile
      if (isMobile && containerEl) {
        const totalScroll = containerEl.offsetHeight - windowHeight;
        const currentScroll = scrollY - containerTop;
        const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
        setProgressValue(progress);
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
  }, [isMobile, isSticky]);

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
        }, 800); // Slightly longer timeout for smoother experience
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

  return (
    <section
      ref={containerRef}
      className="relative mt-7 flex flex-col justify-between gap-9 overflow-visible lg:flex-row lg:px-3 xl:p-6"
    >
      <div
        ref={navContainerRef}
        className={`left-0 z-20 w-fit ${
          isMobile
            ? `w-full ${isSticky ? "sticky top-20 right-0 left-0" : "relative"}`
            : "lg:sticky lg:top-28 lg:self-start"
        }`}
        style={{
          willChange: isMobile ? "transform" : "auto",
        }}
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

      <div className="w-full space-y-4 overflow-visible lg:w-[80%] lg:space-y-8">
        <FeatureContent
          featureContents={featuresList}
          contentRefs={contentRefs}
        />
      </div>
    </section>
  );
};

export default CoreFeaturesCard;
