"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import late_fees from "../../../public/lotties/late-fees.json";
import online_payment from "../../../public/lotties/online-payment.json";
import esign_change from "../../../public/lotties/esign-on-change.json";
import progress_billing from "../../../public/lotties/progress-billing.json";
import recurring_bill from "../../../public/lotties/recurring-bill.json";
import smart_change from "../../../public/lotties/smart-changes.json";
import unnotice_item from "../../../public/lotties/uninvoiced-items.json";
import { Slidericon } from "../common/Icons";
import LottieAnimation from "../common/LottieAnimation";

interface SliderItem {
  title: string;
  description: string;
  content: { desc: string }[];
}

interface Props {
  sliderData: SliderItem[];
}

const InvoiceSlider: React.FC<Props> = ({ sliderData }) => {
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
        <SwiperSlide className="pt-12 sm:!min-h-[400px] md:pt-[72px]">
          <div className="relative mx-auto min-h-full w-full overflow-hidden sm:w-fit">
            <Image
              unoptimized
              sizes="(max-width: 768px) 668px, (min-width: 769px) 50vw"
              width={668}
              height={300}
              priority
              src={"/images/webp/invoice-slider-1.webp"}
              alt="Slide Image"
              className="mx-auto w-full max-w-[780px] object-cover"
            />
            <div className="slider-cutom-gradient absolute top-0 right-[0px] h-full w-full max-w-[119px]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative pt-8 sm:pt-14 md:pt-16 xl:pt-[72px]">
          <div className="h-full px-2">
            <LottieAnimation
              className="mx-auto h-full w-full max-w-[450px]"
              loop={true}
              animationData={unnotice_item}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pt-14 sm:pt-0">
          <div className="flex h-full items-center justify-center px-2 sm:min-h-[450px]">
            <LottieAnimation
              className="mx-auto w-full max-w-[485px]"
              loop={true}
              animationData={smart_change}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative pt-14 sm:pt-0">
          <div className="flex h-full items-center justify-center px-2 sm:min-h-[450px]">
            <LottieAnimation
              className="mx-auto w-full max-w-[485px]"
              loop={true}
              animationData={recurring_bill}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative pt-14 sm:pt-0">
          <div className="flex h-full items-center justify-center px-2 sm:min-h-[450px]">
            <LottieAnimation
              className="mx-auto w-full max-w-[685px]"
              loop={true}
              animationData={progress_billing}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full items-center justify-center pt-16 sm:pt-12 lg:min-h-[500px]">
            <LottieAnimation
              className="mx-auto w-full max-w-[1285px]"
              loop={true}
              animationData={online_payment}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pt-12 sm:!min-h-[400px] sm:pt-0">
          <div className="flex h-full items-center justify-center px-2 sm:min-h-[400px]">
            <LottieAnimation
              className="mx-auto w-full max-w-[500px]"
              loop={true}
              animationData={late_fees}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative pt-12 sm:pt-14 xl:!h-[660px]">
          <div className="h-full px-2 sm:min-h-[300px]">
            <LottieAnimation
              className="mx-auto w-full max-w-[500px]"
              loop={true}
              animationData={esign_change}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="slider-img-gradient relative z-20 -mt-[100px] lg:-mt-[252px]">
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

export default InvoiceSlider;
