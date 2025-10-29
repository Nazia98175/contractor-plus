"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { featureContentss } from "../common/Helper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnimation from "./LottieAnimation";
import Copy from "../common/Copy";

gsap.registerPlugin(ScrollTrigger);

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
  useEffect(() => {
    featureContents
      ?.slice(0, featureContents?.length - 1)
      ?.forEach((_, index) => {
        const element = contentRefs.current[index];
        if (element) {
          ScrollTrigger.create({
            trigger: element,
            start: "bottom 100%",
            end: "top 0%",
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
            markers: false,
          });
        }
      });
  }, [featureContents, contentRefs]);

  function toCamelCase(str: string): string {
    return str
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+(.)/g, (_, char) => char.toUpperCase())
      .replace(/\s+/g, "");
  }
  console.log(featureContents);
  return (
    <>
      {featureContents
        ?.slice(0, featureContents?.length - 1)
        ?.map((content: any, index: any) => (
          <div
            key={index}
            id={`${toCamelCase(content?.title)}`}
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className="bg-doctor w-full scroll-mt-8 space-y-3.5 rounded-2xl p-3.5 md:scroll-mt-12 md:space-y-3 lg:scroll-mt-16 lg:space-y-[18px] xl:scroll-mt-24"
          >
            <Copy delay={0.2}>
              <h4 className="text-wallStreet text-start text-lg font-bold sm:text-xl md:text-2xl">
                {content?.subTitle ?? ""}
              </h4>
            </Copy>
            <div className="relative w-full overflow-hidden">
              <LottieAnimation
                ref={setLottieRef(index)}
                loop={false}
                autoplay={false}
                animationData={featureContentss?.[index]?.titleImg}
              />
            </div>
            <Copy delay={0.2}>
              <p className="text-wallStreet space-y-2 text-start text-sm font-medium sm:text-base lg:max-w-[615px] lg:text-lg">
                {content.description}
              </p>
            </Copy>
          </div>
        ))}
    </>
  );
};

export default FeatureContent;
