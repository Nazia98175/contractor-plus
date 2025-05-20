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

  isMobile?: boolean;
};

const FeatureNavigation = ({
  features,
  featureBtn,
  activeFeature,
  onFeatureClick,
  indicatorRef,
  featuresRef,

  isMobile = false,
}: Props) => {
  return (
    <div
      className={`flex gap-1.5 ${
        isMobile ? "w-full" : "lg:self-start"
      } z-20 lg:w-fit`}
      ref={featuresRef}
      style={{ overflow: "visible" }}
    >
      <div className="px-1 hidden lg:flex relative w-fit justify-center items-center mt-1">
        <button
          ref={indicatorRef}
          className="w-3 h-3 rounded-full absolute top-2.5 bg-black left-1/2 -translate-x-1/2 z-10"
        ></button>
        <Pathbg />
      </div>
      <div
        className={`
        flex flex-row lg:flex-col gap-[22px] font-jakarta no-scrollbar
        ${
          isMobile
            ? "w-full justify-between overflow-x-auto py-2"
            : "lg:overflow-visible no-scrollbar overflow-auto"
        } 
        whitespace-nowrap relative`}
      >
        {/* Feature buttons */}
        {features.map((feature, index) => (
          <button
            onClick={() => onFeatureClick(index)}
            key={feature}
            className={`feature-btn ${isMobile ? "text-sm" : ""} ${
              index === activeFeature
                ? "text-winterWay font-bold"
                : "text-secondary font-normal"
            }`}
          >
            {feature}
          </button>
        ))}

        {/* External link button */}
        <button className="flex group justify-between feature-btn whitespace-nowrap w-full text-lightishBlue gap-1 items-center cursor-pointer">
          {featureBtn}
          <span className="w-5 flex justify-center items-center group-hover:-translate-y-1 duration-300">
            <ExternalLink />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FeatureNavigation;
