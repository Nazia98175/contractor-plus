"use client";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import { sponsorLogo } from "../common/Helper";
import { CustomSliderIcon } from "../common/Icons";
import SponsorCard from "./SponsorsCard";

const Sponsors = ({ eventDetail, eventList }: any) => {
  const [firstVisible, setFirstVisible] = useState<number>(0);
  const [lastVisible, setLastVisible] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const updateVisibleSlides = (swiper: SwiperType) => {
    const start = swiper.activeIndex;
    const end =
      start +
      (typeof swiper.params.slidesPerView === "number"
        ? swiper.params.slidesPerView
        : 1) -
      1;
    setFirstVisible(start);
    setLastVisible(end);
  };

  return (
    <section className="px-2 py-8">
      <div className="flex justify-between sm:hidden">
        <Copy delay={0.1}>
          <h4 className="event-card-tittle">
            {`${eventDetail?.eventName}`} Sponsors
          </h4>
        </Copy>
      </div>
      <div className="main-container flex flex-col-reverse gap-6 sm:flex-col sm:gap-0">
        <div className="custom-pagination-2 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Copy delay={0.1}>
            <h4 className="event-card-tittle !hidden sm:!block">
              {`${eventDetail?.eventName}`} Sponsors
            </h4>
          </Copy>
          <div className="mx-auto flex w-fit items-center justify-between gap-5 sm:mx-0">
            <div className="relative flex items-center gap-2">
              <CardReveal delay={0.1} distance={50}>
                <button className="sponsor-button-prev relative flex h-6 w-6 rotate-180 items-center justify-center opacity-100 disabled:opacity-40">
                  <CustomSliderIcon />
                </button>
              </CardReveal>
              <CardReveal delay={0.2} distance={50}>
                <div className="swiper-pagination-sponsor swiper-pagination-real-time-4 relative left-0 flex items-center justify-center gap-1" />
              </CardReveal>
              <CardReveal delay={0.3} distance={50}>
                <button className="sponsor-button-next relative flex h-6 w-6 items-center justify-center opacity-100 disabled:opacity-40">
                  <CustomSliderIcon />
                </button>
              </CardReveal>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full overflow-hidden py-10">
          <CardReveal delay={0.4} distance={50}>
            <Swiper
              className="border-lightBlack w-full border"
              modules={[Pagination, Navigation]}
              pagination={{
                el: ".swiper-pagination-sponsor",
                clickable: true,
                dynamicBullets: true,
              }}
              speed={600}
              navigation={{
                nextEl: ".sponsor-button-next",
                prevEl: ".sponsor-button-prev",
              }}
              spaceBetween={7}
              slidesPerView={2}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                updateVisibleSlides(swiper);
              }}
              onSlideChange={updateVisibleSlides}
              onResize={(swiper) => updateVisibleSlides(swiper)}
              breakpoints={{
                500: { slidesPerView: 4, spaceBetween: 7 },
                765: { slidesPerView: 5, spaceBetween: 10 },
                870: { slidesPerView: 5, spaceBetween: 15 },
                1024: { slidesPerView: 6, spaceBetween: 14 },
                1124: { slidesPerView: 7, spaceBetween: 15 },
              }}
            >
              {eventDetail?.sponsors &&
                eventDetail?.sponsors.map(
                  (
                    member: {
                      id: number;
                      name: string;
                      url: string;
                      classname: string;
                      image: { url: string };
                    },
                    index: number,
                  ) => (
                    <SwiperSlide key={member.id}>
                      <SponsorCard
                        image={member.image?.url ?? ""}
                        index={index}
                        link={member?.url ?? "#"}
                        isFirstVisible={index === firstVisible}
                        isLastVisible={index === lastVisible}
                        isLastCard={index === sponsorLogo.length - 1}
                        invert={member}
                      />
                    </SwiperSlide>
                  ),
                )}
            </Swiper>
          </CardReveal>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
