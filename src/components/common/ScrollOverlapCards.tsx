"use client";
import React, { useEffect, useRef, useState } from "react";
import { fieldServiceData } from "../common/Helper";
import FieldServiceCard from "../crmbussiness/FieldServiceCard";
import { themeClassMap } from "@/utils/getVariants";
import { useGSAPDynamic } from "@/hooks/useGSAPDynamic";

interface ScrollOverlapCardsProps {
  fieldService: any;
  slug: string;
  theme: "light" | "dark" | "estimateTheme";
  curved?: boolean;
  apiData?: boolean;
  getHeadingClass?: () => string;
}

const ScrollOverlapCards: React.FC<ScrollOverlapCardsProps> = ({
  fieldService,
  slug,
  theme,
  apiData = true,
  getHeadingClass,
}) => {
  const { gsapInstance, isLoaded, registerCleanup } = useGSAPDynamic();
  const [animationReady, setAnimationReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<any>(null); // Store timeline reference

  // Initialize animations when GSAP is loaded
  useEffect(() => {
    if (!isLoaded || !gsapInstance || animationReady) return;

    const { gsap, ScrollTrigger } = gsapInstance;

    // Wait a bit for DOM to be ready
    const timer = setTimeout(() => {
      if (typeof window === "undefined") return;

      const cards = document.querySelectorAll(".crm-cards");
      const totalCards = cards.length;

      if (totalCards === 0) return;

      // Clear only field-service ScrollTriggers
      ScrollTrigger.getAll().forEach((st: any) => {
        if (st.trigger && st.trigger.id === "crm-cards-wrapper") {
          st.kill();
        }
      });

      // Initialize card positions
      gsap.set(cards[0], { y: "0%", scale: 1, rotate: 0 });
      for (let i = 1; i < totalCards; i++) {
        gsap.set(cards[i], {
          y: "100%",
          scale: 1,
          rotation: 0,
        });
      }

      // Create scroll timeline and store reference
      timelineRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#crm-cards-wrapper",
          start: "top 5%",
          end: `+=${(window.innerHeight / 100) * 90 * (totalCards - 1)}`,
          pin: true,
          scrub: 1,
          id: "field-service-cards", // Unique ID
        },
      });

      // Animate cards
      for (let i = 0; i < totalCards; i++) {
        const currentCard = cards[i];
        const nextCard = cards[i + 1];
        const position = i;
        const rotation = i % 2 ? -5 : 5;

        timelineRef.current.to(
          currentCard,
          {
            scale: 0.8,
            duration: 1,
            rotation: rotation,
            ease: "none",
          },
          position,
        );

        if (nextCard) {
          timelineRef.current.to(
            nextCard,
            {
              y: "0%",
              duration: 1,
              ease: "none",
            },
            position,
          );
        }
      }

      setAnimationReady(true);

      // Register targeted cleanup function
      registerCleanup(() => {
        // Only kill field-service related ScrollTriggers
        ScrollTrigger.getAll().forEach((st: any) => {
          if (st.vars && st.vars.id === "field-service-cards") {
            st.kill();
          }
        });

        // Kill the timeline if it exists
        if (timelineRef.current) {
          timelineRef.current.kill();
          timelineRef.current = null;
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [isLoaded, gsapInstance, animationReady, registerCleanup]);

  const className = themeClassMap[theme] || "wanting-more-bg";

  // Show loading state while GSAP loads
  if (!isLoaded) {
    return (
      <div className="min-h-[108dvh] animate-pulse">
        <div className="mx-auto mt-[60px] h-12 max-w-[813px] rounded bg-gray-200"></div>
        <div className="mt-10 space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="mx-auto h-64 max-w-[1272px] rounded-xl bg-gray-200"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      id="crm-cards-wrapper"
      className="relative z-10 min-h-[108dvh] overflow-hidden sm:min-h-dvh lg:px-2 xl:h-fit"
    >
      <h2
        className={`${getHeadingClass ? getHeadingClass() : ""} 3xl:block mx-auto mt-[60px] hidden pb-10 text-center text-4xl font-semibold -tracking-[0.72px]`}
      >
        {fieldService?.title}
      </h2>

      {fieldService?.cardsDetail?.map((service: any, index: any) => (
        <div
          key={index}
          className={`z-${
            index + 1
          } crm-cards absolute top-10 left-[50%] flex w-full translate-x-[-50%] items-center justify-center sm:top-10 sm:h-[90vh] xl:top-0 xl:h-screen`}
        >
          <div
            className={`${className} h-fit w-full max-w-[1272px] rounded-[14px] p-2.5 lg:p-6 xl:rounded-[40px] xl:p-8`}
          >
            <FieldServiceCard
              slug={slug}
              idx={index}
              service={service}
              theme={theme}
              apiData={apiData}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollOverlapCards;
