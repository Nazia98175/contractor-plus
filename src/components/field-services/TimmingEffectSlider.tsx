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
  imgPath: string;
  job: string;
  name: string;
  distance: string;
}

interface TimmingEffectSliderProps {
  sliderData: SliderItem[];
}

const TimmingEffectSlider: React.FC<TimmingEffectSliderProps> = ({
  sliderData,
}) => {
  return (
    <div className="1xl:px-0 custom-pagination-timming-section relative z-50 mx-auto w-full max-w-[1414px] sm:px-2">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination-timming-section",
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
            className="bg-rgba1 flex items-center justify-between p-[14px] backdrop:blur-sm sm:backdrop-blur-[11px]"
          >
            <div></div>
            <div className="flex items-center gap-2.5 p-[6px]">
              <img src={item.imgPath} alt="" />
              <div>
                <p>{item.job}</p>
                <h5>{item.name}</h5>
                <h6>{item.distance}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative z-50 mx-auto flex w-full max-w-[158px] items-center justify-between gap-3">
        <div className="swiper-button-prev !relative !right-0 !bottom-0 !m-0 h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 after:hidden">
          <Slidericon />
        </div>

        <div className="swiper-pagination-timming-section relative left-0 flex translate-x-0 items-center justify-center gap-1" />

        <div className="swiper-button-next !relative !bottom-0 !left-0 !m-0 h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 rotate-180 after:hidden">
          <Slidericon />
        </div>
      </div>
    </div>
  );
};

export default TimmingEffectSlider;
