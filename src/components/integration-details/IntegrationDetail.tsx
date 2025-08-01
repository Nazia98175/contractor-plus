"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import AdvertisementCard from "../blogdetails/AdvertisementCard";
import TableOfContent from "../blogdetails/TableOfContent";
import IntegrationContent from "./IntegrationContent";

gsap.registerPlugin(ScrollTrigger);

const IntegrationDetail = () => {
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
          <IntegrationContent />
        </div>
        {/* RIGHT SIDE CONTENT  */}
        <div className="relative w-full lg:min-w-[336px]">
          <div ref={rightRef} className="w-full space-y-8">
            <div className="flex flex-col justify-between gap-8 sm:flex-row-reverse lg:flex-col">
              <TableOfContent />
              <div className="top-0 basis-[60%] lg:sticky">
                <AdvertisementCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationDetail;
