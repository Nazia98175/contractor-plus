"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EventsCard from "../common/EventsCard";
import { CustomSliderIcon } from "../common/Icons";
import { Key } from "react";
import Link from "next/link";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";

interface ConferenceCardProps {
  sectionHeading: string;
  EventCardItem: any;
  swiperId: string;
}

const ConferenceCard = ({
  sectionHeading,
  EventCardItem,
  swiperId,
}: ConferenceCardProps) => {
  return (
    <>
      <div className="flex justify-between sm:hidden">
        <Copy delay={0.1}>
          <h4 className="event-card-tittle">{sectionHeading}</h4>
        </Copy>
        <Copy delay={0.1}>
          <Link
            className="font-montserrat text-sm leading-[142.857%] font-medium tracking-[0.1px] whitespace-nowrap text-white"
            href="/"
          >
            View All
          </Link>
        </Copy>
      </div>
      <section className="main-container flex flex-col-reverse gap-6 sm:flex-col sm:gap-0">
        <div className="custom-pagination-2 mb-[33px] flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Copy delay={0.1}>
            <h4 className="event-card-tittle !hidden sm:!block">
              {sectionHeading}
            </h4>
          </Copy>
          <div className="mx-auto flex w-fit items-center justify-between gap-5 sm:mx-0">
            <div className="relative flex items-center gap-2">
              <CardReveal delay={0.1} distance={50}>
                <button
                  className={`swiper-button-prev-${swiperId} relative flex h-6 w-6 rotate-180 items-center justify-center opacity-100 disabled:opacity-40`}
                >
                  <CustomSliderIcon />
                </button>
              </CardReveal>
              <CardReveal delay={0.2} distance={50}>
                <div
                  className={`swiper-pagination-${swiperId} swiper-pagination-real-time-4 relative left-0 flex items-center justify-center gap-1`}
                />
              </CardReveal>
              <CardReveal delay={0.3} distance={50}>
                <button
                  className={`swiper-button-next-${swiperId} relative flex h-6 w-6 items-center justify-center opacity-100 disabled:opacity-40`}
                >
                  <CustomSliderIcon />
                </button>
              </CardReveal>
            </div>
            <Copy delay={0.4}>
              <Link
                className="font-montserrat hidden text-sm leading-[142.857%] font-medium tracking-[0.1px] text-white sm:flex"
                href="/"
              >
                View All
              </Link>
            </Copy>
          </div>
        </div>
        <div className="gap-8">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              el: `.swiper-pagination-${swiperId}`,
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: `.swiper-button-next-${swiperId}`,
              prevEl: `.swiper-button-prev-${swiperId}`,
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
            {EventCardItem.map((Item: any, index: Key | null | undefined) => (
              <SwiperSlide key={index}>
                <EventsCard Item={Item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ConferenceCard;
