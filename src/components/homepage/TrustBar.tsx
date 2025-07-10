"use client";
import React, { useEffect } from "react";
import CardReveal from "../common/CardReveal";
import PlatformCard from "./PlatformCard";
import { Platform } from "@/types";
import SliderLayout from "../common/SliderLayout";
import gsap from "gsap";

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
  useEffect(() => {
    gsap.set(".plateform-cards", {
      y: 100,
      scale: 0.96,
      opacity: 0,
    });

    gsap.to(".plateform-cards", {
      y: 0,
      scale: 1,
      opacity: 1,
      stagger: 0.05,
      delay: 1.4,
    });
  }, []);
  return (
    <section className={`relative z-20 ${className}`}>
      {showTrustedSection && (
        <h2 className="section-heading crm-gradient mx-auto text-center">
          Trusted by over <strong> 50,000</strong> build and service contractors
        </h2>
      )}
      <div className="hidden flex-wrap items-center justify-center gap-9 lg:flex lg:flex-nowrap">
        {platforms.map((platform, index) => (
          <PlatformCard platform={platform} key={index} />
        ))}
      </div>
      <div className="relative z-50 px-4 lg:hidden">
        <SliderLayout
          spaceBetween={9}
          slidesPerView={2}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 8 },
            500: { slidesPerView: 3, spaceBetween: 8 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          autoplay={true}
        >
          {platforms.map((platform, index) => (
            <div key={index} className="flex items-center justify-center">
              <PlatformCard platform={platform} />
            </div>
          ))}
        </SliderLayout>
      </div>
    </section>
  );
};

export default TrustBar;
