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
  mobileIndicatorRef: React.RefObject<HTMLButtonElement | null>;
};

const FeatureNavigation = ({
  features,
  featureBtn,
  activeFeature,
  onFeatureClick,
  indicatorRef,
  featuresRef,
  mobileIndicatorRef,
}: Props) => {
  return (
    <div
      className="flex gap-1.5 lg:self-start z-20 lg:w-fit"
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
      <div className="flex flex-row lg:flex-col gap-[22px] font-jakarta lg:overflow-visible no-scrollbar overflow-auto whitespace-nowrap relative ">
        {features.map((feature, index) => (
          <button
            // onClick={() => onFeatureClick(index)}
            key={feature}
            className={`feature-btn cursor-default ${
              index === activeFeature
                ? " text-winterWay font-bold"
                : "text-secondary font-normal"
            }`}
          >
            {feature}
          </button>
        ))}
        <button className="flex group justify-between feature-btn w-full text-lightishBlue gap-1 items-center">
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
