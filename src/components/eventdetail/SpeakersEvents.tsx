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

const SpeakersEvents = () => {
  const teamMembers = [
    {
      name: "Mark Jerry",
      role: "CEO Of Global Innovations",
      image: "/images/webp/speaker-card-1.webp",
    },
    {
      name: "Nelson Mendala",
      role: "CEO Of Mendala Mechanical LLC",
      image: "/images/webp/speaker-card-2.webp",
    },
    {
      name: "Mark Jerry",
      role: "CEO Of Retail Construction LLC",
      image: "/images/webp/speaker-card-3.webp",
    },
    {
      name: "Mark Jerry",
      role: "CEO Of Global Innovations",
      image: "/images/webp/speaker-card-1.webp",
    },
    {
      name: "Nelson Mendala",
      role: "CEO Of Mendala Mechanical LLC",
      image: "/images/webp/speaker-card-2.webp",
    },
    {
      name: "Mark Jerry",
      role: "CEO Of Retail Construction LLC",
      image: "/images/webp/speaker-card-3.webp",
    },
  ];
  return (
    <section className="px-2 py-8">
      <div className="flex justify-between sm:hidden">
        <Copy delay={0.1}>
          <h4 className="event-card-tittle"> {`Speakers at {EventName}`}</h4>
        </Copy>
      </div>
      <div className="main-container flex flex-col-reverse gap-6 sm:flex-col sm:gap-0">
        <div className="custom-pagination-2 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Copy delay={0.1}>
            <h4 className="event-card-tittle !hidden sm:!block">
              {`Speakers at {EventName}`}
            </h4>
          </Copy>
          <div className="mx-auto flex w-fit items-center justify-between gap-5 sm:mx-0">
            <div className="relative flex items-center gap-2">
              <CardReveal delay={0.1} distance={50}>
                <button className="speaker-button-prev relative flex h-6 w-6 rotate-180 items-center justify-center opacity-100 disabled:opacity-40">
                  <CustomSliderIcon />
                </button>
              </CardReveal>
              <CardReveal delay={0.2} distance={50}>
                <div className="swiper-pagination-speaker swiper-pagination-real-time-4 relative left-0 flex items-center justify-center gap-1" />
              </CardReveal>
              <CardReveal delay={0.3} distance={50}>
                <button className="speaker-button-next relative flex h-6 w-6 items-center justify-center opacity-100 disabled:opacity-40">
                  <CustomSliderIcon />
                </button>
              </CardReveal>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full py-10">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              el: ".swiper-pagination-speaker",
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".speaker-button-prev",
              prevEl: ".speaker-button-next",
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
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <SpeakerCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SpeakersEvents;
