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
  }, [sectionRef.current, headingRef.current]);

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
  console.log(fieldService, "data");
  useEffect(() => {
    if (maxHeight && headingHeight) {
      const isSticky =
        window.innerHeight / 2 - maxHeight / 2 - 90 > headingHeight;
      const headingFromTop = window.innerHeight / 2 - maxHeight / 2 - 90;
      const bottomVal =
        100 - (headingFromTop + headingHeight) / (window.innerHeight / 100);
      if (!isSticky) return;
      setTimeout(() => {
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
      }, 2000);
    }
  }, [headingHeight, maxHeight]);
  return (
    <section
      ref={sectionRef}
      className="relative z-30 px-2 pt-14 sm:pt-20 lg:pt-2"
    >
      <div
        ref={headingRef}
        style={{
          top:
            window.innerHeight / 2 - maxHeight / 2 - 90 > headingHeight
              ? window.innerHeight / 2 - maxHeight / 2 - 90 + "px"
              : "unset",
          position:
            window.innerHeight / 2 - maxHeight / 2 - 90 > headingHeight
              ? "sticky"
              : "relative",
        }}
        className="w-full justify-center"
      >
        <AdaptiveHeroTitle
          title={fieldService?.title}
          className={`gradient-text mx-auto block text-center leading-relaxed font-semibold -tracking-[0.72px] ${mainClassName || "max-w-[813px]"}`}
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
