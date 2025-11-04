"use client";
import gsap from "gsap";
import { useEffect } from "react";
import EventdetailHeroCard from "./EventdetailHeroCard";
import { formatDateRange } from "@/lib/date";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { CustomSliderIcon } from "../common/Icons";

const EventDetailHero = ({ eventDetail }: any) => {
  console.log(eventDetail, "eventDetail");
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
      logoUrl: eventDetail?.logoImg?.url ?? null,
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
  console.log(eventdetailitem, "itmr");

  return (
    <section
      id="home-page-view-port-screen-events-detail"
      className="relative mt-[90px] opacity-0"
    >
      {eventDetail && (
        <div className="mx-auto w-full max-w-[1309px] px-4 xl:px-0">
          <EventdetailHeroCard item={eventdetailitem[0]} />
        </div>
      )}
      {eventDetail?.description && (
        <h3 className="text-than mx-auto mt-[52px] max-w-[1147px] px-4 text-center text-base md:mt-[100px] md:text-lg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="mt-8 text-3xl font-bold" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="mt-6 text-2xl font-semibold" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="mt-4 text-xl font-semibold" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="mt-3 leading-7" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="mt-3 ml-6 list-disc" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="mt-3 ml-6 list-decimal" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-blue-600 underline" {...props} />
              ),
            }}
          >
            {eventDetail?.description}
          </ReactMarkdown>
        </h3>
      )}
    </section>
  );
};

export default EventDetailHero;
