"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import FieldServiceCard from "../crmbussiness/FieldServiceCard";
import { themeClassMap } from "@/utils/getVariants";
import { useGSAPDynamic } from "@/hooks/useGSAPDynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollOverlapCardsProps {
  fieldService: any;
  slug: string;
  theme: "light" | "dark" | "estimateTheme";
  curved?: boolean;
  apiData?: boolean;
}

// Define the LottieAnimationRef type
type LottieAnimationRef = {
  play: () => void;
  stop: () => void;
  pause: () => void;
  // Add other methods your Lottie component might have
};

const ScrollOverlapCards: React.FC<ScrollOverlapCardsProps> = ({
  fieldService,
  slug,
  theme,
  apiData = true,
}) => {
  // Always call hooks in the same order
  const { gsapInstance, isLoaded, registerCleanup } = useGSAPDynamic();
  const lottieRefs = useRef<(LottieAnimationRef | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<any>(null);
  const scrollTriggersRef = useRef<any[]>([]);

  // Memoize setLottieRef to prevent recreating on every render
  const setLottieRef = useCallback(
    (index: number) => (el: LottieAnimationRef | null) => {
      if (lottieRefs.current) {
        lottieRefs.current[index] = el;
      }
    },
    [],
  );

  // Initialize main GSAP animations
  useEffect(() => {
    if (!isLoaded || !fieldService?.cardsDetail) return;

    const timer = setTimeout(() => {
      if (typeof window === "undefined") return;

      const cards = document.querySelectorAll(".crm-cards");
      const totalCards = cards.length;

      if (totalCards === 0) return;

      // Initialize card positions
      gsap.set(cards[0], { y: "0%", scale: 1, rotate: 0 });
      for (let i = 1; i < totalCards; i++) {
        gsap.set(cards[i], {
          y: "100%",
          scale: 1,
          rotation: 0,
        });
      }

      // Create scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#crm-cards-wrapper",
          start: "top 5%",
          end: `bottom bottom`,
          scrub: 2,
          markers: false,
          id: "field-service-cards",
        },
      });

      // Animate cards
      for (let i = 0; i < totalCards; i++) {
        const currentCard = cards[i];
        const nextCard = cards[i + 1];
        const position = i;
        const rotation = i % 2 ? -5 : 5;

        tl.to(
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
          tl.to(
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

      timelineRef.current = tl;
    }, 2000);

    return () => {
      clearTimeout(timer);
      // Clean up main timeline on unmount
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [isLoaded, fieldService?.cardsDetail, registerCleanup]);

  // Setup lottie animations
  useEffect(() => {
    if (!fieldService?.cardsDetail) return;

    const lottieTimer = setTimeout(() => {
      // Clean up existing lottie triggers
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && typeof trigger.kill === "function") {
          trigger.kill();
        }
      });

      scrollTriggersRef.current = [];

      fieldService.cardsDetail.forEach((_: any, index: number) => {
        const minusIndex = fieldService.cardsDetail.length - index;
        const top =
          window.innerHeight * index -
          minusIndex * ((window.innerHeight / 100) * 4);
        const bottom = window.innerHeight * (index + 1);

        const trigger = ScrollTrigger.create({
          trigger: `#crm-cards-wrapper`,
          start: `${top} top`,
          end: `${bottom} bottom`,
          markers: false,
          invalidateOnRefresh: true,
          onEnter: () => {
            if (lottieRefs.current[index]) {
              lottieRefs.current[index]?.play();
            }
          },
          onEnterBack: () => {
            if (lottieRefs.current[index]) {
              lottieRefs.current[index]?.play();
            }
          },
          id: `animation-${index + 1}`,
        });

        scrollTriggersRef.current.push(trigger);
      });
    }, 3000);

    return () => {
      clearTimeout(lottieTimer);
      // Clean up lottie ScrollTriggers on unmount
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && typeof trigger.kill === "function") {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];
    };
  }, [fieldService?.cardsDetail]);

  // Component unmount cleanup
  useEffect(() => {
    return () => {
      // Kill all ScrollTriggers created by this component
      ScrollTrigger.getById("field-service-cards")?.kill();

      // Kill animation-specific triggers
      if (fieldService?.cardsDetail) {
        fieldService.cardsDetail.forEach((_: any, index: number) => {
          ScrollTrigger.getById(`animation-${index + 1}`)?.kill();
        });
      }

      // Clean up timeline
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      // Clean up any remaining ScrollTriggers
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && typeof trigger.kill === "function") {
          trigger.kill();
        }
      });
    };
  }, [fieldService?.cardsDetail]);

  const className = themeClassMap?.[theme] || "wanting-more-bg";

  // Early return with loading state
  if (!isLoaded) {
    return (
      <div className="min-h-[100vh] animate-pulse">
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

  // Early return if no data
  if (!fieldService?.cardsDetail || !Array.isArray(fieldService.cardsDetail)) {
    return (
      <div className="flex min-h-[100vh] items-center justify-center">
        <div className="text-center">
          <p>No field service data available</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      id="crm-cards-wrapper"
      style={{ height: 100 * fieldService?.cardsDetail?.length + "vh" }}
      className="relative z-10 lg:px-2 xl:h-fit"
    >
      <div className="sticky top-0 left-0 h-screen w-full">
        {fieldService.cardsDetail.map((service: any, index: number) => (
          <div
            key={index}
            id={`crm-cards-${index}`}
            ref={(el) => {
              if (contentRefs.current) {
                contentRefs.current[index] = el;
              }
            }}
            style={{ zIndex: index + 1 }}
            className={`crm-cards absolute top-10 left-[50%] flex w-full translate-x-[-50%] items-center justify-center pt-[5%] sm:top-10 sm:h-[90vh] xl:top-0 xl:h-screen`}
          >
            <div
              className={`${className} crm-cards-inner h-fit w-full max-w-[1272px] rounded-[14px] p-2.5 lg:p-6 xl:rounded-[40px] xl:p-8`}
            >
              <FieldServiceCard
                slug={slug}
                idx={index}
                setLottieRef={setLottieRef}
                service={service}
                theme={theme}
                apiData={apiData}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollOverlapCards;
