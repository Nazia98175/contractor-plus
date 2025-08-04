"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { featureContentss } from "../common/Helper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnimation from "./LottieAnimation";
import Copy from "../common/Copy";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the LottieAnimationRef type
type LottieAnimationRef = {
  play: () => void;
  stop: () => void;
  pause: () => void;
  // Add other methods your Lottie component might have
};

type FeatureContent = {
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
};

type Props = {
  featureContents: FeatureContent[];
  contentRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
};

const FeatureContent = ({ featureContents, contentRefs }: Props) => {
  const lottieRefs = useRef<(LottieAnimationRef | null)[]>([]);

  // Function to set lottie ref
  const setLottieRef = useCallback(
    (index: number) => (el: LottieAnimationRef | null) => {
      lottieRefs.current[index] = el;
    },
    [],
  );
  console.log(lottieRefs.current);
  useEffect(() => {
    featureContents
      ?.slice(0, featureContents?.length - 1)
      ?.forEach((_, index) => {
        const element = contentRefs.current[index];
        if (element) {
          ScrollTrigger.create({
            trigger: element,
            start: "bottom 100%", // Animation starts when top of element is 80% down the viewport
            end: "top 0%", // Animation area ends when bottom of element is 20% down the viewport
            onEnter: () => {
              // Play animation when entering viewport
              if (lottieRefs.current[index]) {
                lottieRefs.current[index]?.play();
              }
            },
            onEnterBack: () => {
              // Play animation when scrolling back into viewport
              if (lottieRefs.current[index]) {
                lottieRefs.current[index]?.play();
              }
            },
          });
        }
      });
  }, [featureContents, contentRefs]);

  return (
    <>
      {featureContents
        ?.slice(0, featureContents?.length - 1)
        ?.map((content: any, index: any) => (
          <div
            key={index}
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className="bg-doctor w-full scroll-mt-8 space-y-2.5 rounded-2xl p-3.5 md:scroll-mt-12 md:space-y-3 lg:scroll-mt-16 lg:space-y-[18px] xl:scroll-mt-24"
          >
            <Copy delay={0.2}>
              <h4 className="text-wallStreet text-start text-lg font-bold sm:text-xl md:text-2xl">
                {content?.subTitle ?? ""}
              </h4>
            </Copy>
            <div className="relative w-full overflow-hidden">
              <LottieAnimation
                ref={setLottieRef(index)}
                loop={false} // Changed to false since we'll control playback
                autoplay={false} // Changed to false since we'll control playback
                animationData={featureContentss?.[index]?.titleImg}
              />
            </div>
            <Copy delay={0.2}>
              <p className="text-wallStreet space-y-2 text-sm font-medium sm:text-base lg:max-w-[615px] lg:text-lg">
                {content.description}
              </p>
            </Copy>
          </div>
        ))}
    </>
  );
};

export default FeatureContent;
