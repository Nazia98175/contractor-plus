"use client";
import React, { useEffect } from "react";
import Button from "../common/Button";
import gsap from "gsap";

const InvestorHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen", {
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
    }, 1000);
  }, []);
  return (
    <section className="relative overflow-hidden">
      <img
        className="absolute -top-13 left-0 z-[-2] block object-cover md:hidden"
        src="/images/webp/invester-mobile-bg.webp"
        alt="mobile bg"
      />
      <img
        className="absolute top-0 left-0 z-[-2] hidden h-full w-full object-cover md:block"
        src="/images/webp/Grid-layers.png"
        alt="grid layers"
      />
      <img
        className="absolute top-0 left-0 hidden h-full w-full object-cover md:block"
        src="/images/webp/invers-hero-bg.webp"
        alt="invers hero bg"
      />
      <div className="relative mx-auto max-w-[958px] pt-[100px] pb-[120px] sm:pt-[150px] md:pt-[200px] lg:pt-[240px]">
        <span className="absolute top-[5%] left-1/2 z-[-1] hidden -translate-x-1/2 transform md:block">
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
                fillOpacity="0.4"
              />
              <circle
                cx="353"
                cy="353"
                r="308.107"
                stroke="url(#paint1_linear_6766_496)"
                fillOpacity="0.2"
                strokeWidth="29.7857"
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
              strokeWidth="2.12755"
            />
            <defs>
              <filter
                id="filter0_f_6766_496"
                x="0.299999"
                y="0.299999"
                width="705.4"
                height="705.4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <stop stopColor="#313131" />
                <stop offset="1" stopColor="#333333" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_6766_496"
                x1="353"
                y1="30"
                x2="353"
                y2="626.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EE1E25" />
                <stop offset="1" stopColor="#0C0D11" />
              </linearGradient>
              <radialGradient
                id="paint2_radial_6766_496"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(353 353) scale(162)"
              >
                <stop stopColor="#460002" />
                <stop offset="1" stopColor="#250001" />
              </radialGradient>
            </defs>
          </svg>
        </span>
        <div className="flex flex-col items-center justify-center px-2">
          <p className="w-full rounded-[6px] bg-[rgba(63,70,75,0.10)] py-1 text-center text-sm font-bold text-[#808080] md:bg-transparent">
            Investment Opportunity{" "}
          </p>
          <h2 className="invester-gradient-text main-heading pt-2 text-center sm:pt-4 md:pt-6">
            The first Operating System for build & service contractors
          </h2>
          <p className="pt-2 text-center text-xs font-medium text-[#808080] sm:pt-4 sm:text-base md:pt-6 md:text-lg">
            Contractor+ is the category disruptor the $1T field service market
            has needed. We’ve built what Jobber, Housecall Pro, and ServiceTitan
            couldn’t: a platform contractors actually love.{" "}
          </p>
          <p className="py-2 text-center text-xs font-extrabold text-[#808080] sm:pt-4 sm:text-base md:py-6 md:text-lg">
            And we’ve done it without a cent from VC’s.
          </p>
          <Button className="w-full sm:max-w-[204px]">
            Book investor call
          </Button>
        </div>
        <div className="relative flex w-full items-center justify-center pt-[124px] md:pt-[150px]">
          <div className="invester-image-gradient absolute bottom-[-15%] z-10 h-[300px] w-full object-cover sm:-bottom-[8%] lg:w-[90%]"></div>
          <div className="relative mx-auto max-w-[500px]">
            <img
              className="absolute top-[20%] right-[-80%] z-[-1] w-full max-w-[169px] rotate-[15deg] sm:max-w-[272px]"
              src="/images/webp/iphone-1.png"
              alt="iphone"
            />
            <img
              className="h-full w-full max-w-[188px] sm:max-w-[296px] lg:max-w-[335px]"
              src="/images/webp/iphone-3.png"
              alt="iphone"
            />
            <img
              className="absolute top-[20%] left-[-80%] z-[-1] w-full max-w-[169px] rotate-[-15deg] sm:max-w-[272px]"
              src="/images/webp/iphone-2.png"
              alt="iphone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;
