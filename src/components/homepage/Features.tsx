"use client";
import React from "react";
import FeatureCard from "./FeatureCard";
import CustomSlider from "../common/CustomSlider";
import { useTranslations } from "next-intl";
import CardReveal from "../common/CardReveal";
import { featureKeys } from "../common/Helper";

const Features = () => {
  const t = useTranslations("feature");
  const featureData = featureKeys.map((item) => ({
    title: t(item.titleKey),
    desc: t(item.descKey),
    img: item.img,
  }));
  return (
    <section className="bg-white sm:px-2 xl:pt-[78px] pt-11 lg:pb-[37px] pb-6 relative z-20">
      <div className="main-container sm:!px-2 !px-0">
        <div className=" bg-doctor lg:rounded-[32px] sm:rounded-4xl lg:px-8 md:px-6 px-4 xl:py-12 lg:py-10 md:py-8 sm:py-6 pt-6 pb-3">
          <CardReveal
            staggerDelay={0.15}
            animationDuration={0.8}
            distance={50}
            className="hidden lg:grid lg:grid-cols-3 gap-12"
          >
            {featureData.map((obj, index) => (
              <FeatureCard obj={obj} key={index} />
            ))}
          </CardReveal>
          <div className="lg:hidden">
            <CustomSlider
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
            </CustomSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
