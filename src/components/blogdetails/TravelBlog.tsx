"use client";
import React, { useEffect, useRef } from "react";
import BlogDetailContent from "./BlogDetailContent";
import TableOfContent from "./TableOfContent";
import PostCard from "./PostCard";
import AdvertisementCard from "./AdvertisementCard";
import VideoSection from "./VideoSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TravelBlog = () => {
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rightEl = rightRef.current;

    if (!rightEl || window.innerWidth < 1024) return;

    ScrollTrigger.create({
      trigger: rightEl,
      start: "top 15%", // start when the top of the element hits the top of viewport
      end: () => `+=${rightEl.scrollHeight}`, // adjust as needed
      pin: true,
      pinSpacing: true,
      scrub: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="main-container 1xl:space-y-20 1xl:pb-20 space-y-12 pt-8 pb-12 md:space-y-12 md:pb-14 lg:space-y-14 lg:pb-16">
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div className="grow">
          <BlogDetailContent />
        </div>
        {/* RIGHT SIDE CONTENT  */}
        <div className="relative w-full lg:min-w-[336px]">
          <div ref={rightRef} className="w-full space-y-8">
            <VideoSection />
            <div className="flex flex-col justify-between gap-8 sm:flex-row-reverse lg:flex-col">
              <TableOfContent />
              <div className="top-0 basis-[60%] lg:sticky">
                <AdvertisementCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostCard />
    </section>
  );
};

export default TravelBlog;
