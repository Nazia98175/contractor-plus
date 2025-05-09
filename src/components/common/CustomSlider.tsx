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
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  children,
  pagination,
  autoplay,
}) => {
  return (
    <div className="relative w-full my-6">
      <Swiper
        pagination={pagination ? { clickable: true } : false}
        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : false
        }
        modules={[Pagination, Autoplay]}
        slidesPerView={2}
        spaceBetween={8}
        breakpoints={{
          640: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {/* Map each child to its own SwiperSlide */}
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSlider;
