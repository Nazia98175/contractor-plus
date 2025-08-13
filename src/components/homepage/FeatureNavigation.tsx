"use client";
import React, { RefObject, useEffect, useRef } from "react";
import { ExternalLink, Pathbg } from "../common/Icons";
import Link from "next/link";

type Props = {
  features: string[];
  featureBtn: string[];
  activeSection: string;
  activeLinkRef: any;
  isMobile: any;
};

const FeatureNavigation = ({
  features,
  featureBtn,
  activeSection,
  activeLinkRef,
  isMobile,
}: Props) => {
  const navRef = useRef<HTMLDivElement>(null);
  function toCamelCase(str: string): string {
    return str
      .trim() // Remove leading/trailing whitespace
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters except spaces
      .replace(/\s+(.)/g, (_, char) => char.toUpperCase()) // Convert first letter after space to uppercase
      .replace(/\s+/g, ""); // Remove all spaces
  }
  const handleLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Center the active link when it changes
  useEffect(() => {
    if (activeLinkRef.current && navRef.current) {
      const activeLink = activeLinkRef.current;
      const nav = navRef.current;

      const scrollLeft =
        activeLink.offsetLeft -
        nav.offsetWidth / 2 +
        activeLink.offsetWidth / 2;
      console.log(scrollLeft);
      nav.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeSection]);
  return (
    <div className="flex w-full gap-1.5 overflow-auto bg-white px-2 lg:relative lg:self-start">
      <div className="relative hidden w-fit min-w-[9px] items-center justify-center px-1 lg:flex">
        <button
          className="absolute top-0 left-1/2 z-10 h-3 w-3 rounded-full bg-black duration-200"
          style={{
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: "translate(-50%, 6px)",
            willChange: "transform",
          }}
        />
        <Pathbg />
      </div>

      <div
        className="no-scrollbar relative z-[99] flex flex-row gap-[22px] overflow-auto py-2 whitespace-nowrap lg:flex-col lg:py-0"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        ref={navRef}
      >
        {features?.map((feature, index) => (
          <button
            style={{ willChange: "color, font-weight" }}
            key={`${feature}-${index}`} // More stable key
            ref={activeSection === toCamelCase(feature) ? activeLinkRef : null}
            onClick={() => handleLinkClick(toCamelCase(feature))}
            className={`feature-btn w-full lg:w-[180px] lg:truncate ${
              isMobile ? "text-sm" : ""
            } cursor-pointer transition-colors duration-200 ${
              activeSection === toCamelCase(feature)
                ? "text-winterWay font-bold"
                : "text-secondary"
            }`}
          >
            {feature}
          </button>
        ))}
        <Link
          href={"/all-features"}
          className="group feature-btn text-lightishBlue flex w-full cursor-pointer items-center gap-1 whitespace-nowrap"
        >
          {featureBtn}
          <span className="flex w-5 duration-300 group-hover:-translate-y-1">
            <ExternalLink />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FeatureNavigation;
