"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CustomSliderIcon } from "../common/Icons";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import SpeakerCard from "./SpeakerCard";
import PricingCard from "./PricingCard";
import { Description } from "@headlessui/react";
import { eventPricingDetail } from "../common/Helper";

const EventPricing = () => {
  return (
    <section className="px-2 py-10">
      <div className="flex justify-between sm:hidden">
        <Copy delay={0.1}>
          <h4 className="event-card-tittle"> {`{EventName} Pricing`}</h4>
        </Copy>
      </div>
      <div className="main-container flex flex-col-reverse gap-6 sm:flex-col sm:gap-0">
        <div className="custom-pagination-2 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Copy delay={0.1}>
            <h4 className="event-card-tittle !hidden sm:!block">
              {`{EventName} Pricing`}
            </h4>
          </Copy>
          <div className="mx-auto flex w-fit items-center justify-between gap-5 sm:mx-0">
            <div className="relative flex items-center gap-2">
              <CardReveal delay={0.1} distance={50}>
                <button className="pricing-button-prev relative flex h-6 w-6 rotate-180 items-center justify-center opacity-100 disabled:opacity-40">
                  <CustomSliderIcon />
                </button>
              </CardReveal>
              <CardReveal delay={0.2} distance={50}>
                <div className="swiper-pagination-pricing swiper-pagination-real-time-4 relative left-0 flex items-center justify-center gap-1" />
              </CardReveal>
              <CardReveal delay={0.3} distance={50}>
                <button className="pricing-button-next relative flex h-6 w-6 items-center justify-center opacity-100 disabled:opacity-40">
                  <CustomSliderIcon />
                </button>
              </CardReveal>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full overflow-hidden py-10">
          <div className="bg-kuroiBlack pointer-events-none absolute bottom-[-6%] left-[-28px] z-10 hidden h-[103%] w-[115px] blur-[9px] sm:blur-[15px] md:block md:w-[130px] lg:left-[-32px]"></div>
          <div className="bg-kuroiBlack pointer-events-none absolute right-[-28px] bottom-[-6%] z-10 hidden h-[103%] w-[115px] blur-[9px] sm:blur-[15px] md:block md:w-[130px] lg:right-[-32px]"></div>
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              el: ".swiper-pagination-pricing",
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".pricing-button-prev",
              prevEl: ".pricing-button-next",
            }}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            {eventPricingDetail.map((pricing, index) => (
              <SwiperSlide key={index}>
                <PricingCard pricing={pricing} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EventPricing;
