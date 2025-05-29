"use client";
import React, { RefObject, useEffect, useRef } from "react";
import { ExternalLink, Pathbg } from "../common/Icons";

type Props = {
  features: string[];
  featureBtn: string[];
  activeFeature: number;
  onFeatureClick: (index: number) => void;
  featuresRef: React.RefObject<HTMLDivElement | null>;
  indicatorRef: React.RefObject<HTMLButtonElement | null>;
  isMobile?: boolean;
  featureButtonsRef: RefObject<(HTMLButtonElement | null)[]>;
};

const FeatureNavigation = ({
  features,
  featureBtn,
  activeFeature,
  onFeatureClick,
  featuresRef,
  indicatorRef,
  isMobile = false,
}: Props) => {
  // Store button refs to scroll active into view
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (isMobile && buttonRefs.current[activeFeature]) {
      buttonRefs.current[activeFeature]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeFeature, isMobile]);

  return (
    <div
      className="relative flex w-full gap-1.5 lg:w-fit lg:self-start"
      ref={featuresRef}
    >
      <div className="relative mt-1 hidden w-fit items-center justify-center px-1 lg:flex">
        <button
          ref={indicatorRef}
          className="absolute top-2.5 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-black"
        />
        <Pathbg />
      </div>

      <div className="font-jakarta no-scrollbar relative z-40 flex w-full flex-row justify-between gap-[22px] overflow-x-auto bg-white py-2 whitespace-nowrap lg:flex-col lg:overflow-visible lg:py-0">
        {features.map((feature, index) => (
          <button
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            onClick={() => onFeatureClick(index)}
            key={feature}
            className={`feature-btn ${
              isMobile ? "text-sm" : ""
            } cursor-pointer ${
              index === activeFeature
                ? "text-winterWay font-bold"
                : "text-secondary"
            }`}
          >
            {feature}
          </button>
        ))}
        <button className="group feature-btn text-lightishBlue flex w-full cursor-pointer items-center gap-1 whitespace-nowrap">
          {featureBtn}
          <span className="flex w-5 duration-300 group-hover:-translate-y-1">
            <ExternalLink />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FeatureNavigation;
