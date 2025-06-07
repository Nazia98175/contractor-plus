"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slidericon } from "../common/Icons";
interface SliderItem {
  title: string;
  description: string;
}

interface RealTimeServiceConnectorSliderProps {
  sliderData: SliderItem[];
}

const RealTimeServiceConnectorSlider: React.FC<
  RealTimeServiceConnectorSliderProps
> = ({ sliderData }) => {
  return (
    <div className="1xl:px-0 custom-pagination relative z-50 mx-auto w-full max-w-[1414px] sm:px-2">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination-real-time",
          clickable: true,
        }}
        spaceBetween={36}
        centeredSlides={true}
        modules={[Navigation, Pagination]}
        className="mySwiper real-time-active-slider"
        slidesPerView={3}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 36,
          },
        }}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-rgba1 p-[14px] text-center backdrop:blur-sm sm:backdrop-blur-[11px]"
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
  );
};

export default RealTimeServiceConnectorSlider;
