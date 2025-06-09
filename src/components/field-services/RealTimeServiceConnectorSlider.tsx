"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DownloadIcon, Slidericon } from "../common/Icons";

interface SliderItem {
  title: string;
  description: string;
}

interface Props {
  sliderData: SliderItem[];
}

const RealTimeServiceConnectorSlider: React.FC<Props> = ({ sliderData }) => {
  const [topSwiper, setTopSwiper] = useState<any>(null);
  const [bottomSwiper, setBottomSwiper] = useState<any>(null);

  // UseEffect to set controller after both swipers are ready
  useEffect(() => {
    if (topSwiper && bottomSwiper) {
      topSwiper.controller.control = bottomSwiper;
      bottomSwiper.controller.control = topSwiper;
    }
  }, [topSwiper, bottomSwiper]);

  return (
    <div className="custom-pagination custom-active-slider relative z-50 mx-auto w-full max-w-[1414px]">
      {/* Top Image Slider */}
      <Swiper modules={[Controller]} onSwiper={setTopSwiper} slidesPerView={1}>
        <SwiperSlide className="h-[625px] border pt-[72px]">
          <div className="mx-auto w-fit rounded-[55px] border-4 border-[#D7D7D7] bg-black p-[14px]">
            <img
              src={"/images/webp/real-slider-card-1.webp"}
              alt="Slide Image"
              className="shadow-c3 mx-auto w-full max-w-[871px] rounded-[45px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[400px] border pt-[72px]">
          <div className="relative mx-auto w-fit overflow-hidden">
            <img
              src={"/images/webp/real-slider-card-2.webp"}
              alt="Slide Image"
              className="mx-auto w-full max-w-[771px] object-cover"
            />
            <div className="slider-img-gradient absolute top-0 right-0 h-full w-full max-w-[119px]"></div>
            <div className="slider-img-gradient absolute top-0 left-0 h-full w-full max-w-[119px] opacity-75"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[625px] border pt-[72px]">
          <div className="mx-auto w-fit rounded-[55px] border-4 border-[#D7D7D7] bg-black p-[14px]">
            <img
              src={"/images/webp/real-slider-card-3.webp"}
              alt="Slide Image"
              className="shadow-c3 mx-auto w-full max-w-[871px] rounded-[45px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[200px] border pt-[72px]">
          <div className="mx-auto flex w-full max-w-[550px] items-center gap-6">
            <img
              src={"/images/webp/real-slider-group-1.webp"}
              alt="Slide Image"
              className="h mx-auto w-full max-w-[112px] rounded-md object-cover"
            />
            <div className="">
              <img
                src={"/images/webp/real-slider-group-2.webp"}
                alt="Slide Image"
                className="h mx-auto mb-[5px] w-full max-w-[112px] rounded-md object-cover"
              />
              <DownloadIcon />
            </div>
            <img
              src={"/images/webp/real-slider-group-3.webp"}
              alt="Slide Image"
              className="h mx-auto w-full max-w-[112px] rounded-md object-cover"
            />
            <img
              src={"/images/webp/real-slider-group-4.webp"}
              alt="Slide Image"
              className="h mx-auto w-full max-w-[112px] rounded-md object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[537px] border pt-[72px]">
          <div className="relative mx-auto max-h-[537px] w-full max-w-[752px] overflow-hidden">
            <img
              src={"/images/webp/real-slider-card-5.webp"}
              alt="Slide Image"
              className="mx-auto w-full object-cover"
            />
            <div className="slider-img-gradient absolute top-0 right-0 h-full w-full max-w-[250px] rotate-180"></div>
            <div className="slider-img-gradient absolute top-0 left-0 h-full w-full max-w-[250px]"></div>
            <div className="slider-img-gradient absolute top-0 h-[152px] w-full max-w-full rotate-180"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[339px] border pt-[72px]">
          <div className="relative mx-auto w-fit max-w-[992px] overflow-hidden">
            <img
              src={"/images/webp/real-slider-card-6.webp"}
              alt="Slide Image"
              className="mx-auto w-full max-w-[771px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[448px] border pt-[72px]">
          <div className="relative mx-auto w-fit max-w-[400px] overflow-hidden">
            <img
              src={"/images/webp/real-slider-card-7.webp"}
              alt="Slide Image"
              className="mx-auto w-full max-w-[771px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[660px] border pt-[72px]">
          <div className="mx-auto w-fit rounded-[55px] border-4 border-[#D7D7D7] bg-black p-[14px]">
            <img
              src={"/images/webp/real-slider-card-8.webp"}
              alt="Slide Image"
              className="shadow-c3 mx-auto w-full max-w-[871px] rounded-[45px] object-cover"
            />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="h-[414px] border pt-[72px]">
          <div className="mx-auto w-fit rounded-[55px] border-4 border-[#D7D7D7] bg-black p-[14px]">
            <img
              src={"/images/webp/real-slider-card-9.webp"}
              alt="Slide Image"
              className="shadow-c3 mx-auto w-full max-w-[871px] rounded-[45px] object-cover"
            />
          </div>
        </SwiperSlide> */}
      </Swiper>

      <div className="slider-img-gradient relative z-20 -mt-[292px]">
        <Swiper
          modules={[Navigation, Pagination, Controller]}
          onSwiper={setBottomSwiper}
          slidesPerView={3}
          spaceBetween={36}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination-real-time",
            clickable: true,
          }}
          className="real-time-active-slider"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 36 },
          }}
        >
          {sliderData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-rgba1 p-[14px] text-center backdrop:blur-sm sm:backdrop-blur-[11px] md:px-2"
            >
              <b className="font-jakarta text-lightBlack text-base lg:text-xl">
                {item.title}
              </b>
              <p className="font-jakarta text-secondary mt-3 text-sm font-medium">
                {item.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation + Pagination */}
        <div className="relative mx-auto flex w-fit items-center justify-between gap-3">
          <div className="swiper-button-prev !relative !right-0 !bottom-0 !left-0 !m-0 h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 after:hidden">
            <Slidericon />
          </div>

          <div className="swiper-pagination-real-time relative left-0 flex translate-x-0 items-center justify-center gap-1" />

          <div className="swiper-button-next !relative !right-0 !bottom-0 !left-0 !m-0 h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 rotate-180 after:hidden">
            <Slidericon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeServiceConnectorSlider;
