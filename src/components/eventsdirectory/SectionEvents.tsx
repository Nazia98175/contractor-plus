"use client";
import CardReveal from "@/components/common/CardReveal";
import EventsCard from "@/components/common/EventsCard";
import { CustomSliderIcon } from "@/components/common/Icons";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

const SectionEvents = ({ params, events }: { params: string; events: any }) => {
  const sectionId = params as string;
  const router = useRouter();

  const sectionHeading = useMemo(() => {
    switch (sectionId) {
      case "conference-events":
        return "Must-Attend Conference & Expo’s";
      case "upcoming-events":
        return "All Upcoming Events";
      case "past-events":
        return "All Past Events";
      default:
        return "Events";
    }
  }, [sectionId]);

  const filteredEvents = useMemo(() => {
    if (sectionId === "past-events") {
      return events.filter(
        (event: any) => new Date(event.startDate) < new Date(),
      );
    } else if (sectionId === "upcoming-events") {
      return events.filter(
        (event: any) => new Date(event.startDate) > new Date(),
      );
    } else if (sectionId === "conference-events") {
      return events.filter((event: any) => event.isFeatured === true);
    } else {
      return events;
    }
  }, [sectionId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-events-all", {
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

  function handleEvent(slug: string) {
    router.push(`/events/${slug}`);
  }
  return (
    <section id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-events-all"
        className="mt-12 mb-10 opacity-0 sm:mt-20 md:mt-[100px] md:mb-16 lg:mt-[120px] lg:mb-20 xl:mt-[152px] xl:mb-[94px]"
      >
        <div className="main-container relative">
          <div className="mb-[30px] flex items-center gap-2.5">
            <CardReveal delay={0.1} distance={50}>
              <button
                className="flex items-center gap-2"
                onClick={() => router.back()}
              >
                <span className="w-fit rotate-180">
                  <CustomSliderIcon />
                </span>
                <h4 className="event-card-tittle">{sectionHeading}</h4>
              </button>
            </CardReveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event: any) => (
                <EventsCard
                  key={event.id}
                  Item={event}
                  onClick={() => handleEvent(event.eventUrl)}
                />
              ))
            ) : (
              <div className="flex items-center justify-center">
                <p className="text-lightBlackGrey">No events found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEvents;
