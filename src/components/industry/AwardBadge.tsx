"use client";
import AwardsTagsImg from "@/components/common/AwardsTagsImg";
import CardRequiredButton from "@/components/common/CardRequiredButton";
import SoftwareUsed from "@/components/common/SoftwareUsed";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import FreeTrialButton from "../common/FreeTrialButton";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
interface AwardBadgesProps {
  buttonInfo: any;
  teamsUsingContractor: any;
  customIconsMap: any;
}
// Define the LottieAnimationRef type
type LottieAnimationRef = {
  play: () => void;
  stop: () => void;
  pause: () => void;
  // Add other methods your Lottie component might have
};
export default function AwardBadges({
  buttonInfo,
  teamsUsingContractor,
  customIconsMap,
}: AwardBadgesProps) {
  const pathname = usePathname();
  const lottieRefs = useRef<(LottieAnimationRef | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
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

  useEffect(() => {
    if (teamsUsingContractor?.cards) return;

    // Clean up existing lottie triggers
    scrollTriggersRef.current.forEach((trigger) => {
      if (trigger && typeof trigger.kill === "function") {
        trigger.kill();
      }
    });

    scrollTriggersRef.current = [];

    teamsUsingContractor?.cards.forEach((_: any, index: number) => {
      const element = contentRefs.current[index];

      if (element) {
        const trigger = ScrollTrigger.create({
          trigger: element,
          start: `bottom 100%`,
          end: `top 0%`,
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
          markers: false,
          id: `items-awards`,
        });

        scrollTriggersRef.current.push(trigger);
      }
    });

    return () => {
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && typeof trigger.kill === "function") {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];
    };
  }, [teamsUsingContractor?.cards]);

  return (
    <section className="no-scrollbar relative w-full">
      <div className="absolute -top-0.5 left-0 h-1.5 w-full bg-white"></div>
      <Image
        // sizes="(max-width: 768px) 100vw, min(768px, 100vw)"
        width={1920}
        height={500}
        src="/images/webp/red-linear-bg.webp"
        className="absolute -top-0 left-0 -z-[3] hidden h-[124%] w-full bg-cover md:block"
        alt="Red Lineaar background"
        priority
      />
      <Image
        // sizes="(max-width: 768px) 100vw, min(768px, 100vw)"
        width={1920}
        height={500}
        src="/images/webp/red-linear-mobile.webp"
        className="absolute top-0 left-0 -z-[5] block h-[110%] w-full bg-top md:hidden"
        alt="Red Lineaar background"
        priority
      />
      <div className="main-container relative z-20 flex flex-wrap items-center justify-center gap-3.5 pt-[100px] sm:gap-6 md:justify-between md:pt-0">
        {teamsUsingContractor?.cards?.map((item: any, index: number) => (
          <div
            className="sm:w-[48%] md:w-fit"
            key={index}
            ref={(el) => {
              if (contentRefs.current) {
                contentRefs.current[index] = el;
              }
            }}
          >
            <SoftwareUsed
              key={index}
              item={item}
              icon={customIconsMap[index]}
              setLottieRef={setLottieRef}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 hidden flex-col items-center gap-2 px-2 text-center md:flex">
        <FreeTrialButton text={buttonInfo?.getStartedFreeBtn} />
        <CardRequiredButton
          className="text-winterWay"
          text={buttonInfo?.nccTxt}
        />
      </div>
      <AwardsTagsImg images={teamsUsingContractor?.images} />
    </section>
  );
}
