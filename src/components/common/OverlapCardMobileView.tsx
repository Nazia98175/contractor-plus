"use client";
import React, { useCallback, useEffect, useRef } from "react";
import FieldServiceCard from "../crmbussiness/FieldServiceCard";
import { themeClassMap } from "@/utils/getVariants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
type LottieAnimationRef = {
  play: () => void;
  stop: () => void;
  pause: () => void;
};

interface OverlapCardMobileViewProps {
  fieldService: any;
  slug: string;
  theme: "light" | "dark" | "estimateTheme";
  curved?: boolean;
  apiData?: boolean;
}

const OverlapCardMobileView: React.FC<OverlapCardMobileViewProps> = ({
  fieldService,
  slug,
  theme,
  apiData = true,
}) => {
  const lottieRefs = useRef<(LottieAnimationRef | null)[]>([]);

  const setLottieRef = useCallback(
    (index: number) => (el: LottieAnimationRef | null) => {
      if (lottieRefs.current) {
        lottieRefs.current[index] = el;
      }
    },
    [],
  );

  const className = themeClassMap?.[theme] || "wanting-more-bg";

  if (!fieldService?.cardsDetail || !Array.isArray(fieldService.cardsDetail)) {
    return (
      <div className="flex min-h-[100vh] items-center justify-center">
        <div className="text-center">
          <p>No field service data available</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    // Ensure GSAP and ScrollTrigger are available
    if (typeof window === "undefined") return;

    setTimeout(() => {
      if (fieldService.cardsDetail.length > 0) {
        const scrollTriggers: any = []; // Array to store ScrollTrigger instances for cleanup
        console.log(lottieRefs);
        for (let index = 0; index < fieldService.cardsDetail.length; index++) {
          const trigger_element = document.querySelector(
            `#field-service-mobile-card-${index}`,
          );

          const anim_element = document.querySelector(
            `#field-service-mobile-inner-card-${index}`,
          );

          // Check if both elements exist before creating animation
          if (trigger_element && anim_element) {
            // Kill any existing tweens on this element
            gsap.killTweensOf(anim_element);

            // Set initial state
            gsap.set(anim_element, {
              y: 40,
              // opacity: 0,
              filter: "blur(10px)",
              scale: 0.9,
            });

            // Create ScrollTrigger animation
            const st = ScrollTrigger.create({
              trigger: trigger_element,
              start: "top 75%",
              end: "bottom 15%",
              invalidateOnRefresh: true,
              markers: false,
              onEnter: () => {
                gsap.to(anim_element, {
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  duration: 0.8,
                  ease: "power2.out",
                });
              },
              onLeave: () => {
                gsap.to(anim_element, {
                  y: -40,
                  scale: 0.95,
                  filter: "blur(10px)",
                  duration: 0.5,
                  ease: "power2.in",
                });
              },
              onEnterBack: () => {
                gsap.to(anim_element, {
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  duration: 0.6,
                  ease: "power2.out",
                });
              },
              onLeaveBack: () => {
                gsap.to(anim_element, {
                  y: 40,
                  scale: 0.9,
                  filter: "blur(10px)",
                  duration: 0.5,
                  ease: "power2.in",
                });
              },
            });
            const st2 = ScrollTrigger.create({
              trigger: trigger_element,
              start: "top 65%",
              end: "bottom 15%",
              invalidateOnRefresh: true,
              markers: true,
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
            });
            // Store ScrollTrigger instance for cleanup

            scrollTriggers.push(st2);
            scrollTriggers.push(st);
          }
        }

        // Cleanup function
        return () => {
          // Kill all ScrollTrigger instances created in this effect
          scrollTriggers.forEach((st: any) => st.kill());

          // Kill any remaining tweens on all animated elements
          for (
            let index = 0;
            index < fieldService.cardsDetail.length;
            index++
          ) {
            const anim_element = document.querySelector(
              `#field-service-mobile-inner-card-${index}`,
            );
            if (anim_element) {
              gsap.killTweensOf(anim_element);
            }
          }
        };
      }
    }, 20);
  }, [fieldService.cardsDetail]);

  return (
    <div className="relative z-10 space-y-6 lg:px-2">
      {fieldService.cardsDetail.map((service: any, index: number) => (
        <div
          key={index}
          id={`field-service-mobile-card-${index}`}
          className="flex w-full items-center justify-center"
        >
          <div
            id={`field-service-mobile-inner-card-${index}`}
            className={`${className} w-full max-w-[1272px] rounded-[14px] p-2.5 will-change-transform lg:p-6 xl:rounded-[40px] xl:p-8`}
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
  );
};

export default OverlapCardMobileView;
