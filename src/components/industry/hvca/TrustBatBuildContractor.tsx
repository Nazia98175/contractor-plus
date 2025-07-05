"use client";
import React from "react";

import PlatformCard from "@/components/homepage/PlatformCard";
import SliderLayout from "@/components/common/SliderLayout";
import { Platform } from "@/types";
import CardReveal from "@/components/common/CardReveal";

interface TrustBarProps {
  platforms: Platform[];
  showTrustedSection?: boolean;
  className?: string;
  trustedCompanies?: any;
}

const TrustBatBuildContractor: React.FC<TrustBarProps> = ({
  trustedCompanies,
  platforms,
  showTrustedSection,
  className,
}) => {
 
  return (
    <section className={`relative mx-auto w-full max-w-[889px] ${className}`}>
      {showTrustedSection && (
        <h2 className="section-heading crm-gradient xs:max-w-[70%] relative z-50 mx-auto mb-4.5 max-w-[250px] text-center font-bold sm:mb-8 md:mb-10 lg:mb-12 lg:!font-semibold xl:max-w-full">
         {trustedCompanies?.title?.split("50,000")?.[0]
         }<strong>50,000</strong>{trustedCompanies?.title?.split("50,000")?.[1]}
       
        </h2>
      )}
      <CardReveal
        distance={50}
        className="hidden flex-wrap items-center justify-center gap-9 lg:flex lg:flex-nowrap"
      >
        {platforms.map((platform, index) => (
          <PlatformCard platform={platform} key={index} />
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

export default TrustBatBuildContractor;
