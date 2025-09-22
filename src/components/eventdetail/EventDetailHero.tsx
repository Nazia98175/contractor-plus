"use client";
import gsap from "gsap";
import { useEffect } from "react";
import EventdetailHeroCard from "./EventdetailHeroCard";
import { formatDateRange } from "@/lib/date";

const EventDetailHero = ({ eventDetail }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-events-detail", {
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
  const eventdetailitem = [
    {
      id: eventDetail?.id ?? 1,
      logoUrl: "/images/svg/car-brand-logo.svg",
      imgUrl: eventDetail?.eventImages
        ? eventDetail?.eventImages[0]?.url
        : "/images/webp/event-detail-hero.webp",
      heading: eventDetail?.eventName ?? "",
      place: `${formatDateRange(eventDetail?.startDate, eventDetail?.endDate) + " • " + eventDetail?.location}`,
      description: `${eventDetail?.location}`,
      button: "Event Details",
      tag: eventDetail?.mustAttend ? "Must Attend" : "",
      label: `• ${eventDetail?.location} •`,
    },
  ];
  return (
    <section
      id="home-page-view-port-screen-events-detail"
      className="relative mt-[90px] opacity-0"
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between sm:px-4 xl:px-0">
        <EventdetailHeroCard item={eventdetailitem[0]} />
      </div>
      <h3 className="text-than mx-auto mt-[52px] max-w-[1147px] px-4 text-center text-base md:mt-[100px] md:text-lg">
        {eventDetail?.description ?? ""}
      </h3>
    </section>
  );
};

export default EventDetailHero;
