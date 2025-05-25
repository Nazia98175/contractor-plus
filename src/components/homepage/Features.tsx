"use client";
import React from "react";
import FeatureCard from "./FeatureCard";
import SliderLayout from "../common/SliderLayout";
import { useTranslations } from "next-intl";
import CardReveal from "../common/CardReveal";
import { featureKeys } from "../common/Helper";
type HeroProps = {
  features: any; // Replace `any` with the actual type if available
};
const Features = ({ features }: { features: any }) => {
  const t = useTranslations("feature");
  const featureData = featureKeys.map((item, index) => ({
    title: features?.[index]?.title,
    desc: features?.[index]?.description,
    img: item.img,
  }));

  return (
    <section className="bg-white sm:px-2 xl:pt-[45px] pt-11 lg:pb-[46px] pb-6 relative z-20">
      <div className="main-container sm:!px-2 !px-0">
        <div className=" bg-doctor lg:rounded-[32px] sm:rounded-4xl xl:p-9 lg:py-8 md:py-6 py-4">
          <CardReveal
            staggerDelay={0.15}
            animationDuration={0.8}
            distance={50}
            className="hidden lg:grid lg:grid-cols-3 gap-6"
          >
            {featureData.map((obj, index) => (
              <FeatureCard obj={obj} key={index} />
            ))}
          </CardReveal>
          <div className="lg:hidden">
            <SliderLayout
              autoplay
              pagination
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 12 },
                520: { slidesPerView: 1.5, spaceBetween: 12 },
                640: { slidesPerView: 2, spaceBetween: 14 },
                768: { slidesPerView: 2.6, spaceBetween: 16 },
              }}
            >
              {featureData.map((obj, index) => (
                <FeatureCard obj={obj} key={index} />
              ))}
            </SliderLayout>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
