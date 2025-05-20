"use client";
import React from "react";
import { CheckIcon } from "../common/Icons";
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
      {/* Device Images */}
      <div className="flex relative justify-center items-center">
        <img
          src="/images/webp/mobile.webp"
          className="-mr-16 z-0 max-w-[262px]"
          alt=""
        />
        <img
          src="/images/webp/crm-ipad.webp"
          className="max-w-[660px] z-10 drop-shadow-[-21px_-16px_85.2px_rgba(0,0,0,0.85)]"
          alt=""
        />
        <img
          src="/images/webp/mobile-2.webp"
          className="max-w-[255px] -ml-12"
          alt=""
        />
        <div className="linear-bg w-full left-0 -bottom-24 absolute h-[250px] z-20"></div>
      </div>

      {/* Heading + Paragraph */}
      <div className="bg-white relative z-30 -mt-3">
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
