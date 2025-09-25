"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slidericon } from "../common/Icons";
import { Navigation, Pagination, Controller, Autoplay } from "swiper/modules";
import LottieAnimation from "../common/LottieAnimation";
import Social_cross from "../../../public/lotties/social-cross-posting.json";
import Review_reply from "../../../public/lotties/review-replies.json";
import Review_Request from "../../../public/lotties/review-requests.json";
import optimization from "../../../public/lotties/photo-optimization.json";
import Auto_position from "../../../public/lotties/Auto-Posting.json";
import citation_sync from "../../../public/lotties/citation_sync-2.json";
import auto_video from "../../../public/lotties/auto-video.json";
import high_end from "../../../public/lotties/high-end.json";
import answer from "../../../public/lotties/answer.json";
import citation_sync_logo from "../../../public/lotties/Citation-Sync-logos.json";
import Profile_optimization from "../../../public/lotties/Profile-Optimization.json";
import account_manager from "../../../public/lotties/ai-account-manager.json";
import ranking_heatmaps from "../../../public/lotties/ranking-heatmaps.json";
interface SliderItem {
  text?: string;
  desc?: string;
  lottieJson?: any;
  image?: string;
}

interface Props {
  solutionsList: SliderItem[];
}

const CombinesPowerfulAiSlider = ({ solutionsList }: Props) => {
  const [topSwiper, setTopSwiper] = useState<any>(null);
  const [bottomSwiper, setBottomSwiper] = useState<any>(null);

  console.log(solutionsList, "slider");

  useEffect(() => {
    if (topSwiper && bottomSwiper) {
      topSwiper.controller.control = bottomSwiper;
      bottomSwiper.controller.control = topSwiper;
    }
  }, [topSwiper, bottomSwiper]);

  // 👇 Classes by index
  const slideClasses: string[] = [
    "max-w-[1100px]",
    "max-w-[305px]",
    "max-w-[596px]",
    "max-w-[730px] pb-[57px]",
    "max-w-[452px] pb-[98px]",
    "max-w-[596px]",
    "max-w-[200px]",
    "max-w-[536px]",
    "max-w-[500px]",
    "max-w-[600px]",
    "max-w-[515px]",
    "max-w-[871px]",
    "max-w-[713px]",
  ];

  return (
    <div className="custom-pagination custom-active-slider relative z-50 mx-auto w-full max-w-[1920px] px-2">
      {/* Top Slider (Animations) */}
      <Swiper
        centeredSlides
        modules={[Controller, Autoplay]}
        speed={600}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSwiper={setTopSwiper}
        slidesPerView={1}
      >
        {solutionsList?.map((item, i) => (
          <SwiperSlide
            key={i}
            className="relative !flex !h-auto flex-col items-center justify-center"
          >
            {item.image && (
              <div className="absolute top-[-20%] z-10 h-[30%] w-full bg-white blur-[20px]"></div>
            )}

            {item.image && (
              <Image
                src={"/images/webp/sync-weather.webp"}
                alt="bg"
                width={1920}
                height={1200}
                className="absolute top-0 left-0 h-full w-full object-fill"
              />
            )}
            <div className={`mx-auto w-full ${slideClasses[i] || ""} relative`}>
              {i === 3 && (
                <>
                  <div className="pointer-events-none absolute top-[-13%] left-[-10%] z-50 h-[30%] w-[120%] bg-white blur-[20px]"></div>
                  <div className="pointer-events-none absolute top-0 right-[-10%] z-50 h-full w-full max-w-[20%] bg-white blur-[20px]"></div>
                  <div className="pointer-events-none absolute top-0 left-[-10%] z-50 h-full w-full max-w-[20%] bg-white blur-[20px]"></div>
                </>
              )}
              {i === 11 && (
                <div className="absolute right-[0px] bottom-[-5%] z-50 h-[20%] w-full bg-white blur-[4px]"></div>
              )}
              <LottieAnimation
                className="mx-auto h-full w-full"
                loop={true}
                animationData={item.lottieJson}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Slider (Text) */}
      <div className="slider-img-gradient relative z-20">
        <Swiper
          modules={[Navigation, Pagination, Controller]}
          onSwiper={setBottomSwiper}
          slidesPerView={3}
          speed={600}
          spaceBetween={36}
          centeredSlides
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
          {solutionsList.map((item, i) => (
            <SwiperSlide
              key={i}
              className="bg-rgba1 relative z-30 p-[14px] text-center backdrop:blur-sm sm:backdrop-blur-[11px]"
            >
              <b className="text-lightBlack z-20 text-lg lg:text-xl">
                {item.text}
              </b>
              <p className="text-secondary mt-3 text-sm font-medium">
                {item.desc}
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

export default CombinesPowerfulAiSlider;
