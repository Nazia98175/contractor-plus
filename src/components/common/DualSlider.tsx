"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slidericon } from "../common/Icons";
import scanning_json from "../../../public/lotties/scanning.json";
import LottieAnimation from "./LottieAnimation";

interface SliderItem {
  id: number;
  title: string;
  description: string;
}

interface Props {
  sliderData: SliderItem[];
}

const DualSlider: React.FC<Props> = ({ sliderData }) => {
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
    <section>
      <h3 className="gradient-text xs:max-w-[75%] mx-auto max-w-[99%] text-center text-xl font-semibold tracking-[-0.72px] sm:max-w-[813px] sm:text-2xl md:text-3xl lg:text-4xl">
        <span className="line">
          A tool tracking system that syncs with the rest of your operation
        </span>
      </h3>
      <div className="custom-pagination custom-active-slider relative mx-auto w-full max-w-[1414px]">
        {/* Top Image Slider */}
        <Swiper
          centeredSlides={true}
          modules={[Controller, Autoplay]}
          // autoplay={{
          //   delay: 10000,
          //   disableOnInteraction: false,
          // }}
          onSwiper={setTopSwiper}
          slidesPerView={1}
          speed={600}
        >
          <SwiperSlide className="relative !flex !h-auto !items-center !justify-center">
            <Image
              unoptimized
              className="mx-auto h-fit w-full max-w-[885px] object-cover"
              src={"/images/webp/library-1.webp"}
              alt="library"
              width={885}
              height={260}
            />
            {/* <LottieAnimation
              className="mx-auto h-full w-full max-w-[660px]"
              loop={true}
              animationData={Field_Updates}
            /> */}
          </SwiperSlide>
          <SwiperSlide className="relative !flex !h-auto !items-center !justify-center">
            <LottieAnimation
              className="mx-auto w-full max-w-[258px] object-cover"
              loop={true}
              animationData={scanning_json}
            />
          </SwiperSlide>
          <SwiperSlide className="relative !flex !h-auto !items-center !justify-center">
            <Image
              unoptimized
              className="mx-auto w-full max-w-[885px] object-cover"
              src={"/images/webp/library-3.webp"}
              alt="library"
              width={885}
              height={190}
            />
          </SwiperSlide>
          <SwiperSlide className="relative !flex !h-auto !items-center !justify-center">
            <Image
              unoptimized
              className="mx-auto w-full max-w-[199px] object-cover"
              src={"/images/webp/library-4.webp"}
              alt="library"
              width={199}
              height={257}
            />
          </SwiperSlide>
          <SwiperSlide className="relative !flex !h-auto !items-center !justify-center">
            <Image
              unoptimized
              className="mx-auto w-full max-w-[651px] object-cover"
              src={"/images/webp/library-5.webp"}
              alt="library"
              width={651}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide className="relative !flex !h-auto !items-center !justify-center">
            <div className="relative">
              <div className="slider-layer pointer-events-none absolute bottom-[-17%] h-[60%] w-full rotate-180"></div>
              <Image
                unoptimized
                className="mx-auto w-full max-w-[638px] object-cover"
                src={"/images/webp/library-6.webp"}
                alt="library"
                width={638}
                height={100}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative !flex !h-auto !items-center !justify-center">
            <div className="relative">
              <Image
                unoptimized
                className="mx-auto w-full max-w-[400px] object-cover"
                src={"/images/webp/library-v1-6.webp"}
                alt="library"
                width={166}
                height={200}
              />
              <Image
                unoptimized
                className="mx-auto mt-3 w-full max-w-[400px] object-cover"
                src={"/images/webp/library-v2-6.webp"}
                alt="library"
                width={166}
                height={200}
              />
              <div className="slider-layer pointer-events-none absolute bottom-[-17%] h-[60%] w-full rotate-180"></div>{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative !flex !h-auto !items-center !justify-center">
            <div>
              <Image
                unoptimized
                className="mx-auto w-full max-w-[395px] rounded-xl object-cover"
                src={"/images/webp/library-7.webp"}
                alt="library"
                width={395}
                height={344}
              />
              <div className="slider-layer pointer-events-none absolute bottom-[-17%] h-[60%] w-full rotate-180"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative !flex !h-auto !items-center !justify-center">
            <div className="relative">
              <Image
                unoptimized
                className="mx-auto w-full max-w-[575px] object-cover"
                src={"/images/webp/library-8.webp"}
                alt="library"
                width={575}
                height={326}
              />
              <div className="slider-layer pointer-events-none absolute bottom-[-17%] h-[60%] w-full rotate-180"></div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="relative z-20">
          <div className="relative overflow-hidden">
            <div className="slider-layer-2 pointer-events-none absolute right-0 bottom-0 z-20 h-full w-full max-w-[30%]"></div>
            <div className="slider-layer-2 pointer-events-none absolute bottom-0 left-0 z-20 h-full w-full max-w-[30%] rotate-[180deg]"></div>
            <Swiper
              modules={[Navigation, Pagination, Controller, Autoplay]}
              onSwiper={setBottomSwiper}
              slidesPerView={3}
              speed={600}
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
              //   autoplay={{
              //     delay: 6000,
              //     disableOnInteraction: false,
              //   }}
              className="real-time-active-slider"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 36 },
              }}
            >
              {sliderData?.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="relative z-30 p-[14px] text-center backdrop:blur-sm sm:backdrop-blur-[11px]"
                >
                  <b className="z-20 text-lg text-white lg:text-xl">
                    {item.title}
                  </b>
                  <p className="text-secondary mt-3 text-sm font-medium">
                    {item?.description}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

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
    </section>
  );
};

export default DualSlider;
