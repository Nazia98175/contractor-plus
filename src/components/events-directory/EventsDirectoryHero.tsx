"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import Button from "../common/Button";
import Image from "next/image";
import FreeAccountButton from "../common/FreeAccountButton";
import { EventDetailIcon, EventHeroIcon } from "../common/Icons";
import SliderLayout from "../common/SliderLayout";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Directory from "../common/Directory";

const EventsDirectoryHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-events", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 700);
  }, []);
  const mainItem = [
    {
      id: 1,
      imgUrl: "/images/webp/event-hero.webp",
      heading: "Autodesk University 2025",
      place: "September 15 – 18, 2025 • Nashville, TN",
      description: "Autodesk University 2025",
      button: "Event Details",
    },
    {
      id: 2,
      imgUrl: "/images/webp/event-hero.webp",
      heading: "Autodesk University 2025",
      place: "September 15 – 18, 2025 • Nashville, TN",
      description: "Autodesk University 2025",
      button: "Event Details",
    },
  ];
  return (
    <section
      id="home-page-view-port-screen-events"
      className="relative mt-[90px] opacity-0"
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between sm:px-4 xl:px-0">
        <button className="event-hero-navigation-prev hidden rotate-180 sm:flex">
          <EventHeroIcon />
        </button>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          effect={"fade"}
          navigation={{
            nextEl: `.event-hero-navigation-next`,
            prevEl: `.event-hero-navigation-prev`,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {mainItem.map((item, index) => (
            <SwiperSlide className="pb-[30px]">
              <Directory item={item} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="event-hero-navigation-next hidden sm:flex">
          <EventHeroIcon />
        </button>
      </div>
    </section>
  );
};

export default EventsDirectoryHero;
