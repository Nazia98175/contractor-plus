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
  featureButtonsRef,
}: Props) => {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isMobile && featureButtonsRef.current[activeFeature]) {
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Add delay to ensure DOM is ready and avoid conflicts
      scrollTimeoutRef.current = setTimeout(() => {
        const activeButton = featureButtonsRef.current[activeFeature];
        if (activeButton) {
          activeButton.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
      }, 150);
    }

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeFeature, isMobile, featureButtonsRef]);

  return (
    <div
      className="shadow-c2 relative flex w-full gap-1.5 overflow-auto bg-white px-2 sm:shadow-none lg:self-start"
      ref={featuresRef}
      style={{
        contain: "layout",
      }}
    >
      <div className="relative hidden w-fit min-w-[9px] items-center justify-center px-1 lg:flex">
        <button
          ref={indicatorRef}
          className="absolute top-0 left-1/2 z-10 h-3 w-3 rounded-full bg-black"
          style={{
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: "translate(-50%, 6px)",
            willChange: "transform",
          }}
        />
        <Pathbg />
      </div>

      <div
        className="no-scrollbar relative z-[99] flex flex-row gap-[22px] overflow-auto bg-white py-2 whitespace-nowrap lg:flex-col lg:py-0"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {features?.map((feature, index) => (
          <button
            ref={(el) => {
              if (featureButtonsRef.current) {
                featureButtonsRef.current[index] = el;
              }
            }}
            onClick={() => onFeatureClick(index)}
            key={`${feature}-${index}`} // More stable key
            className={`feature-btn w-full lg:w-[180px] lg:truncate ${
              isMobile ? "text-sm" : ""
            } cursor-pointer transition-colors duration-200 ${
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
