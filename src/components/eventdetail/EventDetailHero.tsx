"use client";
import gsap from "gsap";
import { useEffect } from "react";
import EventdetailHeroCard from "./EventdetailHeroCard";

const EventDetailHero = () => {
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
      id: 1,
      logoUrl: "/images/svg/car-brand-logo.svg",
      imgUrl: "/images/webp/event-detail-hero.webp",
      heading: "Autodesk University 2025",
      place: "September 15 – 18, 2025 • Nashville, TN",
      description: "Autodesk University 2025",
      button: "Event Details",
      tag: "Must Attend",
      label: "• Nashville, TN •",
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
      <h3 className="mx-auto mt-[52px] max-w-[1147px] px-4 text-center text-base text-[#8D8D8D] md:mt-[100px] md:text-lg">
        Autodesk’s 2025 construction conference will bring together over 10,000
        professionals from industries such as construction, manufacturing,
        architecture, product design, engineering, and media and entertainment.
        This four-day event offers opportunities for learning, networking, and
        knowledge sharing.
      </h3>
    </section>
  );
};

export default EventDetailHero;
