"use client";
import React from "react";
import Button from "../common/Button";

const InvestorHero = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        className="absolute top-0 left-0 z-[-2] h-full w-full object-cover"
        src="/images/webp/Grid-layers.png"
        alt=""
      />
      <img
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/images/webp/invers-hero-bg.webp"
        alt=""
      />
      <div className="relative mx-auto max-w-[958px] px-3 pt-[240px] pb-[120px]">
        <span className="absolute top-[5%] left-1/2 z-[-1] -translate-x-1/2 transform">
          <svg
            width="600"
            height="600"
            viewBox="0 0 706 706"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_6766_496)">
              <circle
                cx="353"
                cy="353"
                r="323"
                fill="url(#paint0_linear_6766_496)"
                fill-opacity="0.4"
              />
              <circle
                cx="353"
                cy="353"
                r="308.107"
                stroke="url(#paint1_linear_6766_496)"
                stroke-opacity="0.2"
                stroke-width="29.7857"
              />
            </g>
            <circle
              cx="353"
              cy="353"
              r="161.5"
              fill="url(#paint2_radial_6766_496)"
            />
            <circle
              opacity="0.2"
              cx="353"
              cy="353"
              r="143.957"
              stroke="#696969"
              stroke-width="2.12755"
            />
            <defs>
              <filter
                id="filter0_f_6766_496"
                x="0.299999"
                y="0.299999"
                width="705.4"
                height="705.4"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="14.85"
                  result="effect1_foregroundBlur_6766_496"
                />
              </filter>
              <linearGradient
                id="paint0_linear_6766_496"
                x1="353"
                y1="30"
                x2="353"
                y2="676"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#313131" />
                <stop offset="1" stop-color="#333333" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_6766_496"
                x1="353"
                y1="30"
                x2="353"
                y2="626.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EE1E25" />
                <stop offset="1" stop-color="#0C0D11" />
              </linearGradient>
              <radialGradient
                id="paint2_radial_6766_496"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(353 353) scale(162)"
              >
                <stop stop-color="#460002" />
                <stop offset="1" stop-color="#250001" />
              </radialGradient>
            </defs>
          </svg>
        </span>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-sm font-bold text-[#808080]">
            Investment Opportunity{" "}
          </p>
          <h2 className="invester-gradient-text main-heading pt-6 text-center">
            The first Operating System for build & service contractors
          </h2>
          <p className="pt-6 text-center text-xs font-medium text-[#808080] sm:text-base md:text-lg">
            Contractor+ is the category disruptor the $1T field service market
            has needed. We’ve built what Jobber, Housecall Pro, and ServiceTitan
            couldn’t: a platform contractors actually love.{" "}
          </p>
          <p className="py-6 text-center text-xs font-extrabold text-[#808080] sm:text-base md:text-lg">
            And we’ve done it without a cent from VC’s.
          </p>
          <Button className="w-full max-w-[204px]">Book investor call</Button>
        </div>
        <div className="relative flex w-full items-center justify-center pt-[150px]">
          <div className="invester-image-gradient absolute bottom-[-15%] z-10 h-[300px] w-[90%] object-cover sm:-bottom-[15%]"></div>
          <div className="relative mx-auto max-w-[500px]">
            <img
              className="absolute top-[20%] right-[-80%] z-[-1] w-full max-w-[272px] rotate-[15deg]"
              src="/images/webp/iphone-1.png"
              alt=""
            />
            <img
              className="h-full w-full max-w-[296px] lg:max-w-[335px]"
              src="/images/webp/iphone-3.png"
              alt=""
            />
            <img
              className="absolute top-[20%] left-[-80%] z-[-1] w-full max-w-[272px] rotate-[-15deg]"
              src="/images/webp/iphone-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;
