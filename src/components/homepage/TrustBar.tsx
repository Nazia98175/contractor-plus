"use client";
import React from "react";
import CardReveal from "../common/CardReveal";
import PlatformCard from "./PlatformCard";
import { Platform } from "@/types";

interface TrustBarProps {
  platforms: Platform[];
  showTrustedSection?: boolean;
  className?: string;
}

const TrustBar: React.FC<TrustBarProps> = ({
  platforms,
  showTrustedSection,
  className,
}) => {
  return (
    <section className={`relative ${className}`}>
      {showTrustedSection && (
        <h2 className="section-heading crm-gradient mx-auto max-w-[80%] text-center font-bold sm:max-w-full sm:font-semibold">
          Trusted by over <strong> 50,000</strong> build and service contractors
        </h2>
      )}
      <CardReveal
        staggerDelay={0.4}
        animationDuration={0.8}
        distance={50}
        className="flex flex-wrap items-center justify-center gap-x-2 gap-y-5 md:gap-6 lg:flex-nowrap"
      >
        {platforms.map((platform, index) => (
          <PlatformCard platform={platform} key={index} />
        ))}
      </CardReveal>
    </section>
  );
};

export default TrustBar;
