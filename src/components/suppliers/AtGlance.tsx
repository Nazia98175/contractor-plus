import React from "react";
import {
  AppearIcon,
  AudienceReachIcon,
  DataIcon,
  HighCostIcon,
  OrderRouteIcon,
  PoorCommunicationIcon,
  RegionsIcon,
  ReportIcon2,
  WastedIcon,
} from "../common/Icons";
import { glanceList } from "../common/Helper";
import Copy from "../common/Copy";

const AtGlance = () => {
  return (
    <section className="mx-auto w-full max-w-[1224px] px-2 py-8">
      <Copy animateOnScroll={true}>
        <h3 className="text-mana section-heading text-center">At‑a‑glance</h3>
      </Copy>
      <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        {glanceList.map((item) => (
          <article
            key={item.id}
            className="relative flex flex-col items-center justify-center gap-3 p-2 md:p-5"
          >
            <span>{item.icon}</span>
            <h3 className="problem-text text-base leading-normal font-bold md:text-[22px] lg:text-3xl">
              {item.title}
            </h3>
            <p className="text-stratoSphere w-full max-w-[324px] text-center text-base font-semibold">
              {item.description}
            </p>
            {item.hasDivider && (
              <span className="absolute top-[46%] right-[50%] hidden h-full rotate-90 lg:top-0 lg:right-0 lg:block lg:rotate-none">
                <svg
                  width="1"
                  height="100%"
                  viewBox="0 0 1 122"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="122"
                    stroke="url(#paint0_radial_6727_9878)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_6727_9878"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(-0.499998 61) scale(80.5 61)"
                    >
                      <stop stopColor="#999999" />
                      <stop offset="1" stopColor="#0C0D11" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default AtGlance;
