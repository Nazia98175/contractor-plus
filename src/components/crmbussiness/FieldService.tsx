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

  const updateMaxHeight = () => {
    setTimeout(() => {
      const cards = document.querySelectorAll(".crm-cards .crm-cards-inner");
      let currentMaxHeight = 0;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardHeight = cardElement.getBoundingClientRect().height;
        if (cardHeight > currentMaxHeight) {
          currentMaxHeight = cardHeight;
        }
      });
      console.log(currentMaxHeight);
      setMaxHeight(currentMaxHeight);
    }, 1000);
  };

  const updateHeadingHeight = () => {
    if (headingRef.current) {
      const height = headingRef.current.getBoundingClientRect().height;
      setHeadingHeight(height);
    }
  };

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    updateMaxHeight();
    updateHeadingHeight();

    const cards = document.querySelectorAll(".crm-cards");
    const totalCards = cards.length;

    if (maxHeight > 0 && headingHeight > 0) {
      const startScreen = (window.innerHeight - maxHeight) / 2 - 100 + "px";
      const isVisible =
        (window.innerHeight - maxHeight) / 2 - 60 > headingHeight;

      if (!isVisible) return;
      // ScrollTrigger.getAll().forEach((st) => st.kill());
      const pinTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top ${startScreen}`, // Start pinning when section top reaches 90px from viewport top
        end: `+=${window.innerHeight * (totalCards * 1.034) + 80}`,
        pin: headingRef.current,
        pinSpacing: false, // Prevents extra spacing
        scrub: false,
        invalidateOnRefresh: true,
        markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(headingRef.current, {
            opacity: 1 - progress * 0.3,
            duration: 0.1,
          });
        },
      });

      // Cleanup function
      return () => {
        pinTrigger.kill();
      };
    }
  }, [maxHeight, headingHeight]);

  // Update heading height on window resize
  useEffect(() => {
    const handleResize = () => {
      updateHeadingHeight();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 px-2 pt-14 sm:pt-20 lg:pt-2"
    >
      <div
        ref={headingRef}
        style={{
          position: "relative",
          zIndex: 20,
          top: 0,
        }}
      >
        <AdaptiveHeroTitle
          title={fieldService?.title}
          className={`gradient-text mx-auto block pb-10 text-center leading-relaxed font-semibold -tracking-[0.72px] ${mainClassName || "max-w-[813px]"}`}
          minFontSize={24}
          maxLines={2}
          maxFontSize={42}
        />
      </div>
      <ScrollOverlapCards
        theme={theme}
        slug={slug || ""}
        fieldService={fieldService}
        apiData={apiData}
      />
    </section>
  );
};

export default FieldService;
