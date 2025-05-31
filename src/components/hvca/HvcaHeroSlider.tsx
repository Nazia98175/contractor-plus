"use client";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Feature {
  title: string;
  description: string;
}

interface HvcaHeroSliderProps {
  features: Feature[];
}

const HvcaHeroSlider: React.FC<HvcaHeroSliderProps> = ({ features }) => {
  return (
    <Swiper
      direction="vertical"
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      spaceBetween={16}
      slidesPerView={2.5}
      loop={true}
    >
      {features.map((feature, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-[20px] bg-green-900 p-5">
            <div className="mb-5 max-h-[50px]">
              <img
                src="/images/webp/hero-video-ovelay.webp"
                alt={`icon-${feature.title}`}
                width={50}
                height={50}
              />
            </div>
            <h3 className="mb-[14px] font-[Poppins] text-[18px] font-medium text-red-900 sm:text-[20px]">
              {feature.title}
            </h3>
            <p className="text-[14px] text-[#9E9EBC]">{feature.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HvcaHeroSlider;
