"use client";
import React from "react";
import { CheckIcon, FinallyDesktopBg } from "../common/Icons";
import Marquee from "react-fast-marquee";

const features = [
  "Timeline of every job, message, and update",
  "All docs, permits, and photos in one place",
  "Log emails using property-specific CC addresses",
  "Add live camera feeds to any property",
];

const FeatureItem = ({ text }: { text: string }) => (
  <article className="p-3 rounded bg-doctor2 flex text-nowrap font-semibold items-center gap-2.5 text-lg text-lightblack ma-w-[500px] w-full mx-2">
    <CheckIcon width={25} height={25} className="min-w-5" />
    {text}
  </article>
);

const TrackProperties = () => {
  return (
    <section className="py-20 bg-white relative">
      <FinallyDesktopBg className="absolute w-[100%] h-full z-0 left-0 md:-top-[25%] md:block hidden" />
      {/* Device Images */}

      <div className="flex relative pb-24 xl:pb-0  justify-center items-center">
        <div className="bg-white-linear absolute left-0 z-20 -bottom-20 h-[267px] w-full blur-[6px]"></div>
        <img
          src="/images/webp/mobile.webp"
          className="-mr-[17%] max-w-[28%] xl:-mr-16 z-0 xl:max-w-[262px] -mt-[20%] xl:-mt-0"
          alt=""
        />
        <img
          src="/images/webp/crm-ipad.webp"
          className="max-w-[76%] xl:max-w-[660px] w-full z-10 xl:drop-shadow-[-21px_-16px_85.2px_rgba(0,0,0,0.85)]"
          alt=""
        />
        <img
          src="/images/webp/mobile-2.webp"
          className="max-w-[26%] xl:max-w-[250px] -mb-[20%] xl:mb-0 z-20 xl:z-0 -ml-[14%] xl:-ml-12"
          alt=""
        />
      </div>

      {/* Heading + Paragraph */}
      <div className=" relative z-30 -mt-3 px-2">
        <h2 className="section-heading gradient-text-2 w-fit mx-auto">
          Track properties like you do your clients
        </h2>
        <p className="max-w-[885px] mx-auto paragraph">
          Contractor+ is the first CRM to offer property profiles — so you can
          see what’s been done, what’s next, and who did it.
        </p>

        <div className="w-full mt-8">
          <Marquee speed={30} direction="right" className="py-5" pauseOnHover>
            {features.map((text, index) => (
              <FeatureItem key={index} text={text} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrackProperties;
