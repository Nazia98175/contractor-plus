"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

interface CustomSliderProps {
  children: React.ReactNode[];
  pagination?: boolean;
  autoplay?: boolean;
  breakpoints?: {
    [width: number]: {
      slidesPerView?: number;
      spaceBetween?: number;
    };
  };
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  children,
  pagination = false,
  autoplay = false,
  breakpoints,
}) => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={pagination ? { clickable: true } : undefined}
        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : undefined
        }
        slidesPerView={2}
        spaceBetween={8}
        loop={true}
        breakpoints={
          breakpoints || {
            640: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
          }
        }
        className="mySwiper"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSlider;
