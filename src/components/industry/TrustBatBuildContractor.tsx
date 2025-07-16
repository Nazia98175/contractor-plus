"use client";
import React from "react";
import PlatformCard from "@/components/homepage/PlatformCard";
import SliderLayout from "@/components/common/SliderLayout";
import { Platform } from "@/types";
import CardReveal from "@/components/common/CardReveal";
import Copy from "../common/Copy";

interface TrustBarProps {
  platforms: Platform[];
  showTrustedSection?: boolean;
  className?: string;
  trustedCompanies?: any;
  trustBarImages?: any;
}

const TrustBatBuildContractor: React.FC<TrustBarProps> = ({
  trustedCompanies,
  platforms,
  showTrustedSection,
  className,
  trustBarImages,
}) => {
  const renderTitleWithHighlightedNumbers = (title: string) => {
    if (!title) return null;

    // Regular expression to find numbers with optional commas and decimal points
    const numberRegex = /(\d{1,3}(?:,\d{3})*(?:\.\d+)?)/g;

    // Split the title by numbers while keeping the numbers in the result
    const parts = title.split(numberRegex);

    return parts.map((part, index) => {
      // Check if this part matches our number pattern
      if (numberRegex.test(part) || /^\d/.test(part)) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <section className={`relative mx-auto w-full max-w-[889px] ${className}`}>
      {showTrustedSection && (
        <h2 className="section-heading crm-gradient xs:max-w-[70%] relative z-50 mx-auto mb-4.5 max-w-[250px] text-center font-bold sm:mb-8 md:mb-10 lg:mb-12 lg:!font-semibold xl:max-w-full">
          {renderTitleWithHighlightedNumbers(trustedCompanies?.title)}
        </h2>
      )}
      <CardReveal
        distance={50}
        className="hidden flex-wrap items-center justify-center gap-9 lg:flex lg:flex-nowrap"
      >
        {trustBarImages?.length > 0
          ? trustBarImages?.map((platform: any, index: number) => (
              <PlatformCard
                platform={platform}
                key={index}
                apiData={true}
                className={`${className}`}
              />
            ))
          : platforms.map((platform, index) => (
              <PlatformCard
                platform={platform}
                key={index}
                className={`${className}`}
              />
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
          {trustBarImages?.length > 0
            ? trustBarImages?.map((platform: any, index: number) => (
                <div key={index} className="flex items-center justify-center">
                  <PlatformCard
                    platform={platform}
                    apiData={true}
                    className={`${className}`}
                  />
                </div>
              ))
            : platforms?.map((platform, index) => (
                <div key={index} className="flex items-center justify-center">
                  <PlatformCard
                    platform={platform}
                    className={`${className}`}
                  />
                </div>
              ))}
        </SliderLayout>
      </div>
    </section>
  );
};

export default TrustBatBuildContractor;
