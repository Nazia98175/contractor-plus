"use client";
import React from "react";
import { ExternalLink, Pathbg } from "../common/Icons";

type Props = {
  features: string[];
  featureBtn: string[];
  activeFeature: number;
  onFeatureClick: (index: number) => void;
  featuresRef: React.RefObject<HTMLDivElement | null>;
  indicatorRef: React.RefObject<HTMLButtonElement | null>;
  mobileIndicatorRef?: React.RefObject<HTMLButtonElement | null>;
  isMobile?: boolean;
};

const FeatureNavigation = ({
  features,
  featureBtn,
  activeFeature,
  onFeatureClick,
  featuresRef,
  indicatorRef,
  mobileIndicatorRef,
  isMobile = false,
}: Props) => {
  return (
    <div
      className={`flex gap-1.5 ${
        isMobile ? "w-full" : "lg:self-start"
      } z-20 lg:w-fit`}
      ref={featuresRef}
    >
      <div className="px-1 hidden lg:flex relative w-fit justify-center items-center mt-1">
        <button
          ref={indicatorRef}
          className="w-3 h-3 rounded-full absolute top-2.5 bg-black left-1/2 -translate-x-1/2 z-10"
        />
        <Pathbg />
      </div>

      <div
        className={`flex flex-row lg:flex-col gap-[22px] font-jakarta no-scrollbar ${
          isMobile
            ? "w-full justify-between overflow-x-auto py-2"
            : "lg:overflow-visible"
        } whitespace-nowrap relative`}
      >
        {features.map((feature, index) => (
          <button
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
        <button className="flex group feature-btn whitespace-nowrap w-full text-lightishBlue gap-1 items-center cursor-pointer">
          {featureBtn}
          <span className="w-5 flex group-hover:-translate-y-1 duration-300">
            <ExternalLink />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FeatureNavigation;
