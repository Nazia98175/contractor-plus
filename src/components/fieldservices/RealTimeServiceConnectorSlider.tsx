"use client";
import React, { useEffect, useState } from "react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DownloadIcon, Slidericon } from "../common/Icons";
import Image from "next/image";
import LottieAnimation from "../common/LottieAnimation";
import Ai_Call from "../../../public/lotties/AI-Call-Attendant.json";
import Live_dispatch from "../../../public/lotties/Live-dispatch.json";
import Field_Updates from "../../../public/lotties/Field-Updates.json";
import Crew_efficiency from "../../../public/lotties/Crew-efficiency.json";
import tab_animation from "../../../public/lotties/tab-animation.json";
interface SliderItem {
  title: string;
  description: string;
  content: { desc: string }[];
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
      <Swiper
        centeredSlides={true}
        modules={[Controller, Autoplay]}
        speed={600}
        // autoplay={{
        //   delay: 6000,
        //   disableOnInteraction: false,
        // }}
        onSwiper={setTopSwiper}
        slidesPerView={1}
      >
        <SwiperSlide className="relative pt-8 sm:h-[625px] sm:pt-14 md:pt-16 xl:pt-[72px]">
          <div className="absolute top-[70%] bottom-[-36px] h-[100px] w-[120%] max-w-full bg-white blur-[9px] sm:top-[67%] sm:h-[200px] sm:w-full lg:bottom-[74px] lg:h-[281px] lg:blur-[40px] xl:top-[60%]"></div>
          <div className="h-full px-2">
            <div className="border-silverMedal mx-auto w-full max-w-[871px] rounded-4xl border-4 bg-black p-[8px] sm:w-[80%] md:p-[14px] xl:rounded-[55px]">
              <Image
                unoptimized
                width={871}
                height={625}
                sizes="(max-width: 768px) 835px, (min-width: 769px) 50vw"
                src={"/images/webp/real-slider-card-1.webp"}
                alt="Slide Image"
                className="shadow-c3 rounded-3xl object-cover xl:rounded-[45px]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pt-[72px] sm:!min-h-[400px]">
          <div className="relative mx-auto min-h-full w-full max-w-[668px] overflow-hidden object-cover sm:w-fit">
            <LottieAnimation
              className="h-full w-full"
              loop={true}
              animationData={Live_dispatch}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative pt-8 sm:h-[625px] sm:pt-14 md:pt-16 xl:pt-[72px]">
          <div className="absolute top-[70%] bottom-[-36px] h-[100px] w-[120%] max-w-full bg-white blur-[9px] sm:top-[67%] sm:h-[200px] sm:w-full lg:bottom-[74px] lg:h-[281px] lg:blur-[40px] xl:top-[60%]"></div>
          <div className="h-full px-2">
            <div className="border-silverMedal mx-auto w-full max-w-[871px] rounded-4xl border-4 bg-black p-[8px] sm:w-[80%] md:p-[14px] xl:rounded-[55px]">
              <Image
                priority
                sizes="(max-width: 768px) 835px, (min-width: 769px) 50vw"
                width={835}
                height={624}
                src={"/images/webp/real-slider-card-3.webp"}
                alt="Slide Image"
                className="shadow-c3 mx-auto rounded-3xl object-cover xl:rounded-[45px]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mx-auto !flex min-h-[200px] pt-5 sm:!h-[400px] sm:pt-14 md:pt-16 xl:pt-[72px]">
          <LottieAnimation
            className="mx-auto h-full w-full max-w-[660px]"
            loop={true}
            animationData={Field_Updates}
          />
        </SwiperSlide>
        <SwiperSlide className="relative sm:h-[537px]">
          <div className="relative mx-auto overflow-hidden">
            <LottieAnimation
              className="mx-auto h-full w-full max-w-[660px]"
              loop={true}
              animationData={Crew_efficiency}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex h-[300px] items-end pt-12 md:!h-[400px] md:pt-4 lg:pt-[72px]">
          <div className="relative mx-auto flex h-full w-fit max-w-[992px] items-center justify-center overflow-hidden">
            <LottieAnimation
              className="mx-auto h-full w-full max-w-[660px]"
              loop={true}
              animationData={Ai_Call}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-[448px]">
          <div className="relative mx-auto w-fit max-w-[400px] overflow-hidden lg:max-w-[500px]">
            <Image
              unoptimized
              sizes="(max-width: 768px) 500px, (min-width: 769px) 500px"
              width={500}
              height={432}
              priority
              src={"/images/webp/real-slider-card-7.webp"}
              alt="Slide Image"
              className="mx-auto w-full max-w-[771px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative pt-6 sm:pt-10 md:h-[625px]">
          <div className="absolute top-[70%] bottom-[-36px] h-[100px] w-full max-w-full bg-white blur-[9px] sm:top-[67%] sm:h-[200px] lg:top-[58%] lg:bottom-[74px] lg:h-[281px] lg:blur-[40px]"></div>
          <div className="px-2">
            <div className="mx-auto">
              <LottieAnimation
                className="mx-auto h-full w-full max-w-[900px]"
                loop={true}
                animationData={tab_animation}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative pt-12 sm:pt-10 md:!h-[660px]">
          <div className="relative mx-auto">
            <div className="absolute top-[-87px] right-[20%] h-[120px] w-full max-w-[200px] bg-white blur-[40px] sm:top-[-149px] sm:right-[32%] sm:max-w-[400px] md:h-[200px] lg:h-[250px]"></div>
            <div className="absolute right-[18%] bottom-[-50px] h-[120px] w-full max-w-[200px] bg-white blur-[40px] sm:right-[35%] sm:h-[200px] sm:max-w-[400px] md:bottom-[-149px] lg:h-[251px]"></div>
            <Image
              unoptimized
              sizes="(max-width: 768px) 900px, (min-width: 769px) 900px"
              width={900}
              height={382}
              priority
              src={"/images/webp/real-slider-card-11.webp"}
              alt="Slide Image"
              className="mx-auto w-full max-w-[850px] object-cover xl:max-w-[900px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="slider-img-gradient relative z-20 -mt-[200px] lg:-mt-[252px]">
        <div className="absolute -bottom-[15%] left-1/2 h-[200px] w-[130%] -translate-x-1/2 rotate-180 bg-white blur-xl sm:-top-[40%] sm:h-[292px]"></div>
        <div
          style={{
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 79.73%)",
          }}
          className="absolute right-0 bottom-0 hidden h-24 w-[406px] xl:block"
        ></div>
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
          // autoplay={{
          //   delay: 6000,
          //   disableOnInteraction: false,
          // }}
          className="real-time-active-slider"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 36 },
          }}
        >
          {sliderData?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-rgba1 relative z-30 p-[14px] text-center backdrop:blur-sm sm:backdrop-blur-[11px]"
            >
              <b className="text-lightBlack z-20 text-lg lg:text-xl">
                {item.title}
              </b>
              <p className="text-secondary mt-3 text-sm font-medium">
                {item?.description}
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
