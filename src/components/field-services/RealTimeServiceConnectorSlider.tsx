"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slidericon } from "../common/Icons";
const RealTimeServiceConnectorSlider = () => {
  const sliderData = [
    {
      title: "Smart Schedule",
      description:
        "See every crew, job, and asset in one screen. Drag and drop booking makes scheduling simple.",
    },
    {
      title: "Real-Time Updates",
      description:
        "Get live updates from field workers and sync your team's progress instantly.",
    },
    {
      title: "Asset Tracking",
      description:
        "Track the location and status of your tools, vehicles, and resources in real time.",
    },
    {
      title: "Smart Schedule",
      description:
        "See every crew, job, and asset in one screen. Drag and drop booking makes scheduling simple.",
    },
    {
      title: "Real-Time Updates",
      description:
        "Get live updates from field workers and sync your team's progress instantly.",
    },
    {
      title: "Asset Tracking",
      description:
        "Track the location and status of your tools, vehicles, and resources in real time.",
    },
  ];

  return (
    <div className="1xl:px-0 custom-pagination relative z-50 mx-auto w-full max-w-[1414px] px-2">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination-real-time",
          clickable: true,
        }}
        centeredSlides={true}
        modules={[Navigation, Pagination]}
        className="mySwiper real-time-active-slider"
        slidesPerView={3}
        loop={true}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index} className="p-[14px]">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative mx-auto flex w-full max-w-[158px] items-center justify-between gap-3">
        <div className="swiper-button-prev !relative !right-0 !bottom-0 !m-0 h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 after:hidden">
          <Slidericon />
        </div>

        <div className="swiper-pagination-real-time relative left-0 flex translate-x-0 items-center justify-center gap-1" />

        <div className="swiper-button-next !relative !bottom-0 !left-0 !m-0 h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 rotate-180 after:hidden">
          <Slidericon />
        </div>
      </div>
    </div>
  );
};

export default RealTimeServiceConnectorSlider;
