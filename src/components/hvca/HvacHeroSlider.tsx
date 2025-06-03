"use client";

import Image from "next/image";
import { JSX } from "react/jsx-runtime";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroSliderIcon1, HeroSliderIcon2 } from "../common/Icons";

interface Feature {
  id: number;
  title: string;
  icon: JSX.Element;
  backgroundIcon: JSX.Element;
  heading: string;
  percentage: number;
  description: string;
}

interface HvacHeroSliderProps {
  features: Feature[];
}

const HvacHeroSlider: React.FC<HvacHeroSliderProps> = ({ features }) => {
  return (
    <Swiper
      effect="fade"
      direction="vertical"
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      spaceBetween={16}
      slidesPerView={3}
      centeredSlides={true}
      speed={700}
      loop={true}
      className="custom-active-slider relative"
    >
      {features.map((feature, index) => (
        <SwiperSlide key={index}>
          <div className="custom-gradient-border hero-slider overflow-hidden rounded-3xl p-4 backdrop-blur-[26px] transition-opacity duration-500 xl:p-6">
            <div className="pointer-events-none absolute right-0 -z-40">
              {feature.backgroundIcon}
            </div>
            <div className="mb-6 flex items-center gap-2 xl:mt-2">
              {feature.icon}
              <p className="font-grotesk text-base text-white capitalize">
                {feature.heading}
              </p>
            </div>
            <h3 className="font-Poppins text-doctor mb-1 text-start text-lg font-medium lg:text-xl xl:text-2xl">
              {feature.title}
            </h3>
            <div className="font-grotesk flex capitalize">
              <span className="text-monstrousGreen mr-1 text-sm leading-[110%]">
                {feature.percentage}%
              </span>
              <p className="text-lightBlackGrey text-xs">
                {feature.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HvacHeroSlider;
