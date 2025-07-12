"use client";
import CardReveal from "@/components/common/CardReveal";
import SliderLayout from "@/components/common/SliderLayout";
import PlatformCard from "@/components/homepage/PlatformCard";
import { Platform } from "@/types";
import React from "react";

interface TrustBarProps {
  platforms: Platform[];
  showTrustedSection?: boolean;
  className?: string;
  trustBarImages?: any;
}

const TrustBarHvca: React.FC<TrustBarProps> = ({
  platforms,
  showTrustedSection,
  className,
  trustBarImages,
}) => {
  return (
    <section className={`relative mx-auto w-full max-w-[889px] ${className}`}>
      {showTrustedSection && (
        <h2 className="section-heading crm-gradient text-center !font-black lg:!font-semibold">
          Trusted by over <strong>50,000</strong> build and service contractors
        </h2>
      )}
      <CardReveal
        distance={50}
        className="hidden flex-wrap items-center justify-center gap-9 lg:flex lg:flex-nowrap"
      >
        {trustBarImages !== null || trustBarImages?.length > 0
          ? trustBarImages?.map((item: any, index: number) => (
              <div key={index} className="flex items-center justify-center">
                <PlatformCard platform={item} className="h-28 md:h-36" />
              </div>
            ))
          : platforms.map((platform, index) => (
              <div key={index} className="flex items-center justify-center">
                <PlatformCard platform={platform} />
              </div>
            ))}
      </CardReveal>

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
          {trustBarImages !== null || trustBarImages?.length > 0
            ? trustBarImages?.map((item: any, index: number) => (
                <div key={index} className="flex items-center justify-center">
                  <PlatformCard platform={item} className="h-28 md:h-36" />
                </div>
              ))
            : platforms.map((platform, index) => (
                <div key={index} className="flex items-center justify-center">
                  <PlatformCard platform={platform} />
                </div>
              ))}
        </SliderLayout>
      </div>
    </section>
  );
};

export default TrustBarHvca;
