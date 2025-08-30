"use client";
import { formatDateRange } from "@/lib/date";
import gsap from "gsap";
import { useEffect } from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Directory from "../common/Directory";
import { CustomSliderIcon } from "../common/Icons";

const EventsDirectoryHero = ({ events }: any) => {
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
      imgUrl: "/images/webp/snow.webp",
      heading: "Autodesk University 2025",
      place: "September 15 – 18, 2025 • Nashville, TN",
      description: "Autodesk University 2025",
      button: "Event Details",
    },
  ];

  const heroItems =
    events && events.length > 0
      ? events.map((item: any) => ({
          id: item?.id,
          url: item?.eventUrl ?? "",
          imgUrl: item?.eventImages
            ? item?.eventImages[0]?.url
            : "/images/webp/snow.webp",
          heading: item?.eventName ?? "",
          place: `${formatDateRange(item?.startDate, item?.endDate) + " • " + item?.location}`,
          description: item?.location ?? "",
          button: item?.eventBtn ?? "",
        }))
      : mainItem;

  return (
    <section
      id="home-page-view-port-screen-events"
      className="relative mt-[90px] opacity-0"
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between sm:px-4 xl:px-0">
        {events && events.length > 1 && (
          <button className="event-hero-navigation-prev hidden rotate-180 sm:flex">
            <CustomSliderIcon />
          </button>
        )}
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          effect={"fade"}
          navigation={{
            nextEl: `.event-hero-navigation-next`,
            prevEl: `.event-hero-navigation-prev`,
          }}
          speed={600}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {heroItems.map((item: any) => (
            <SwiperSlide className="pb-[30px]">
              <Directory item={item} key={item.id} />
            </SwiperSlide>
          ))}
        </Swiper>
        {events && events.length > 1 && (
          <button className="event-hero-navigation-next hidden sm:flex">
            <CustomSliderIcon />
          </button>
        )}
      </div>
    </section>
  );
};

export default EventsDirectoryHero;
