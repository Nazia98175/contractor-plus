"use client";
import React from "react";
import CardReveal from "../common/CardReveal";
import { Platform } from "@/types";
import PlatformCard from "../homepage/PlatformCard";
import SliderLayout from "../common/SliderLayout";

interface TrustBarProps {
  platforms: Platform[];
  showTrustedSection?: boolean;
  className?: string;
}

const TrustBarHvca: React.FC<TrustBarProps> = ({
  platforms,
  showTrustedSection,
  className,
}) => {
  return (
    <section className={`relative ${className}`}>
      {showTrustedSection && (
        <h2 className="section-heading crm-gradient text-center !font-black lg:!font-semibold">
          Trusted by over <strong>50,000</strong> build and service contractors
        </h2>
      )}
      <CardReveal
        staggerDelay={0.4}
        animationDuration={0.8}
        distance={50}
        className="hidden flex-wrap items-center justify-center gap-9 lg:flex lg:flex-nowrap"
      >
        {platforms.map((platform, index) => (
          <PlatformCard platform={platform} key={index} />
        ))}
      </CardReveal>

      <div className="relative z-50 lg:hidden">
        <SliderLayout autoplay={true}>
          {platforms.map((platform, index) => (
            <PlatformCard platform={platform} key={index} />
          ))}
        </SliderLayout>
      </div>
    </section>
  );
};

export default TrustBarHvca;
