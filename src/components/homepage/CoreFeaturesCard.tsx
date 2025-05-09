"use client";
import React, { useState } from "react";
import { Pathbg } from "../common/Icons";

const CoreFeaturesCard = () => {
  const [isShow, setIsShow] = useState("");
  const features = [
    "CRM",
    "Live Scheduling",
    "Internal Job Chat",
    "Estimate Builder",
    "Property Profiles",
    "Big Chief AI",
  ];
  console.log(setIsShow);

  return (
    <div className="p-6 flex lg:flex-row flex-col gap-9">
      <div className="flex gap-1.5">
        <div className="px-1 hidden lg:flex relative w-fit justify-center items-center">
          <button className="w-3 h-3 rounded-full absolute top-1.5 bg-lightBlack left-1/2 -translate-x-1/2"></button>
          <Pathbg />
        </div>
        <div className="flex flex-row lg:flex-col gap-[22px] font-jakarta overflow-auto no-scrollbar whitespace-nowrap">
          {features.map((feature, index) => (
            <button
              // onClick={() => setIsShow(true)}
              key={feature}
              className={`text-base md:text-xl py-1 px-0.5 leading-[100%] ${
                index === 0 ? "font-bold text-winterWay" : "text-secondary"
              }`}
            >
              {feature}
            </button>
          ))}
        </div>
      </div>
      {/* CRM-CONTENT */}
      <div className="p-3.5 bg-doctor rounded-2xl w-full space-y-[18px]">
        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-wallStreet font-jakarta leading-[100%]">
          The first CRM that thinks like a contractor
        </h4>
        <div className="bg-white py-4 px-5 h-[276px] lg:h-[245px] w-full"></div>
        <p className="paragraph-text font-medium text-wallStreet max-w-[620px] font-jakarta">
          Most “contractor CRMs” are just contact pages with a few job links.{" "}
          <span className="text-secondary">
            Contractor+ brings the full picture: timelines, call transcripts, AI
            sentiment tracking, and role-specific contacts.
          </span>
        </p>
      </div>
      {/* OTHER-CONTENT */}
      <div className="p-3.5 bg-doctor rounded-2xl w-full space-y-[18px]">
        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-wallStreet font-jakarta leading-[100%]">
          The first CRM that thinks like a contractor
        </h4>
        <div className="bg-white py-4 px-5 h-[276px] lg:h-[245px] w-full"></div>
        <p className="paragraph-text font-medium text-wallStreet max-w-[620px] font-jakarta">
          Most “contractor CRMs” are just contact pages with a few job links.{" "}
          <span className="text-secondary">
            Contractor+ brings the full picture: timelines, call transcripts, AI
            sentiment tracking, and role-specific contacts.
          </span>
        </p>
      </div>
    </div>
  );
};

export default CoreFeaturesCard;
