"use client";

import { useState, useRef } from "react";
import { LogoIcon } from "../common/Icons";
import Image from "next/image";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
import TextAnimation from "../common/TextAnimation";

const WhyContractorHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="pt-[70px] pb-14 sm:pt-[127px] sm:pb-20">
      <div className="mx-auto max-w-[830px] px-3 relative">
        <div className="max-w-[840px] w-full mx-auto absolute top-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 841 1247"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-2.18557e-08"
              x2="0.500039"
              y2="900"
              stroke="url(#paint0_linear_4001_1722)"
            />
            <line
              x1="0.5"
              y1="404"
              x2="0.499996"
              y2="496"
              stroke="url(#paint1_linear_4001_1722)"
            />
            <line
              x1="0.5"
              y1="721"
              x2="0.499996"
              y2="813"
              stroke="url(#paint2_radial_4001_1722)"
            />
            <line
              x1="168.5"
              y1="-2.18557e-08"
              x2="168.5"
              y2="900"
              stroke="url(#paint3_linear_4001_1722)"
            />
            <line
              x1="168.5"
              y1="557"
              x2="168.5"
              y2="649"
              stroke="url(#paint4_linear_4001_1722)"
            />
            <line
              x1="336.5"
              y1="-2.18557e-08"
              x2="336.5"
              y2="900"
              stroke="url(#paint5_linear_4001_1722)"
            />
            <line
              x1="336.5"
              y1="489"
              x2="336.5"
              y2="581"
              stroke="url(#paint6_linear_4001_1722)"
            />
            <line
              x1="504.5"
              y1="-2.18557e-08"
              x2="504.5"
              y2="900"
              stroke="url(#paint7_linear_4001_1722)"
            />
            <line
              x1="504.5"
              y1="508"
              x2="504.5"
              y2="600"
              stroke="url(#paint8_linear_4001_1722)"
            />
            <line
              x1="672.5"
              y1="-2.18557e-08"
              x2="672.5"
              y2="900"
              stroke="url(#paint9_linear_4001_1722)"
            />
            <line
              x1="672.5"
              y1="534"
              x2="672.5"
              y2="626"
              stroke="url(#paint10_linear_4001_1722)"
            />
            <line
              x1="840.5"
              y1="-2.18557e-08"
              x2="840.5"
              y2="900"
              stroke="url(#paint11_linear_4001_1722)"
            />
            <line
              x1="840.5"
              y1="662"
              x2="840.5"
              y2="754"
              stroke="url(#paint12_linear_4001_1722)"
            />
            <line
              x1="0.5"
              y1="347"
              x2="0.500039"
              y2="1247"
              stroke="url(#paint13_linear_4001_1722)"
            />
            <line
              x1="0.5"
              y1="751"
              x2="0.499996"
              y2="843"
              stroke="url(#paint14_radial_4001_1722)"
            />
            <line
              x1="0.5"
              y1="1068"
              x2="0.499996"
              y2="1160"
              stroke="url(#paint15_radial_4001_1722)"
            />
            <line
              x1="168.5"
              y1="347"
              x2="168.5"
              y2="1247"
              stroke="url(#paint16_linear_4001_1722)"
            />
            <line
              x1="168.5"
              y1="904"
              x2="168.5"
              y2="996"
              stroke="url(#paint17_radial_4001_1722)"
            />
            <line
              x1="336.5"
              y1="347"
              x2="336.5"
              y2="1247"
              stroke="url(#paint18_linear_4001_1722)"
            />
            <line
              x1="336.5"
              y1="836"
              x2="336.5"
              y2="928"
              stroke="url(#paint19_radial_4001_1722)"
            />
            <line
              x1="504.5"
              y1="347"
              x2="504.5"
              y2="1247"
              stroke="url(#paint20_linear_4001_1722)"
            />
            <line
              x1="504.5"
              y1="855"
              x2="504.5"
              y2="947"
              stroke="url(#paint21_radial_4001_1722)"
            />
            <line
              x1="672.5"
              y1="347"
              x2="672.5"
              y2="1247"
              stroke="url(#paint22_linear_4001_1722)"
            />
            <line
              x1="672.5"
              y1="881"
              x2="672.5"
              y2="973"
              stroke="url(#paint23_radial_4001_1722)"
            />
            <line
              x1="840.5"
              y1="347"
              x2="840.5"
              y2="1247"
              stroke="url(#paint24_linear_4001_1722)"
            />
            <line
              x1="840.5"
              y1="1009"
              x2="840.5"
              y2="1101"
              stroke="url(#paint25_linear_4001_1722)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4001_1722"
                x1="-1.02321"
                y1="841.5"
                x2="-1.02321"
                y2="-25.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="0.823742" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_4001_1722"
                x1="-1.00005"
                y1="404"
                x2="-1.00005"
                y2="464"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF9999" stopOpacity="0" />
                <stop offset="0.53" stopColor="#FF9999" stopOpacity="0.41" />
                <stop offset="1" stopColor="#FF9999" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint2_radial_4001_1722"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-0.5 721) rotate(-180) scale(0.483333 20.4388)"
              >
                <stop stopColor="#FF9999" />
                <stop offset="1" stopColor="#0F0C11" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_4001_1722"
                x1="168"
                y1="639.5"
                x2="168"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="0.63" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_4001_1722"
                x1="167"
                y1="557"
                x2="167"
                y2="617"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF9999" stopOpacity="0" />
                <stop offset="0.53" stopColor="#FF9999" stopOpacity="0.41" />
                <stop offset="1" stopColor="#FF9999" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_4001_1722"
                x1="336"
                y1="565"
                x2="336"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="0.41" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_4001_1722"
                x1="335"
                y1="489"
                x2="335"
                y2="549"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF9999" stopOpacity="0" />
                <stop offset="0.53" stopColor="#FF9999" stopOpacity="0.41" />
                <stop offset="1" stopColor="#FF9999" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_4001_1722"
                x1="504"
                y1="558"
                x2="504"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="0.445" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_4001_1722"
                x1="503"
                y1="508"
                x2="503"
                y2="568"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF9999" stopOpacity="0" />
                <stop offset="0.53" stopColor="#FF9999" stopOpacity="0.41" />
                <stop offset="1" stopColor="#FF9999" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_4001_1722"
                x1="671.029"
                y1="632.5"
                x2="671.029"
                y2="129.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="1" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_4001_1722"
                x1="671"
                y1="534"
                x2="671"
                y2="594"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF9999" stopOpacity="0" />
                <stop offset="0.53" stopColor="#FF9999" stopOpacity="0.41" />
                <stop offset="1" stopColor="#FF9999" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_4001_1722"
                x1="838.993"
                y1="803"
                x2="838.993"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="1" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_4001_1722"
                x1="839"
                y1="662"
                x2="839"
                y2="722"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF9999" stopOpacity="0" />
                <stop offset="0.53" stopColor="#FF9999" stopOpacity="0.41" />
                <stop offset="1" stopColor="#FF9999" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_4001_1722"
                x1="-1.02321"
                y1="1188.5"
                x2="-1.02321"
                y2="321.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="0.823742" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint14_radial_4001_1722"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1.00004 803) rotate(-90) scale(40 1691.49)"
              >
                <stop stopColor="#FF9999" />
                <stop offset="1" stopColor="#0F0C11" />
              </radialGradient>
              <radialGradient
                id="paint15_radial_4001_1722"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1.00004 1120) rotate(-90) scale(40 1691.49)"
              >
                <stop stopColor="#FF9999" />
                <stop offset="1" stopColor="#0F0C11" />
              </radialGradient>
              <linearGradient
                id="paint16_linear_4001_1722"
                x1="168"
                y1="986.5"
                x2="168"
                y2="347"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="0.63" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint17_radial_4001_1722"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(169 956) rotate(-90) scale(40 1691.49)"
              >
                <stop stopColor="#FF9999" />
                <stop offset="1" stopColor="#0F0C11" />
              </radialGradient>
              <linearGradient
                id="paint18_linear_4001_1722"
                x1="336"
                y1="912"
                x2="336"
                y2="347"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="0.41" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint19_radial_4001_1722"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(337 888) rotate(-90) scale(40 1691.49)"
              >
                <stop stopColor="#FF9999" />
                <stop offset="1" stopColor="#0F0C11" />
              </radialGradient>
              <linearGradient
                id="paint20_linear_4001_1722"
                x1="504"
                y1="905"
                x2="504"
                y2="347"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="0.445" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint21_radial_4001_1722"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(505 907) rotate(-90) scale(40 1691.49)"
              >
                <stop stopColor="#FF9999" />
                <stop offset="1" stopColor="#0F0C11" />
              </radialGradient>
              <linearGradient
                id="paint22_linear_4001_1722"
                x1="671.029"
                y1="979.5"
                x2="671.029"
                y2="476.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="1" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint23_radial_4001_1722"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(673 933) rotate(-90) scale(40 1691.49)"
              >
                <stop stopColor="#FF9999" />
                <stop offset="1" stopColor="#0F0C11" />
              </radialGradient>
              <linearGradient
                id="paint24_linear_4001_1722"
                x1="838.993"
                y1="1150"
                x2="838.993"
                y2="368"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E2E2E" />
                <stop offset="1" stopColor="#2E2E2E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint25_linear_4001_1722"
                x1="839"
                y1="1009"
                x2="839"
                y2="1069"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF9999" stopOpacity="0" />
                <stop offset="0.53" stopColor="#FF9999" stopOpacity="0.41" />
                <stop offset="1" stopColor="#FF9999" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <TextAnimation animateOnScroll={false} delay={0}>
          <h2 className="main-heading mb-2 bg-[linear-gradient(180deg,_#FFFFFF_25%,_#0C1711_177.29%)] bg-clip-text text-center !font-extralight text-transparent max-sm:mx-auto sm:mb-4">
            You can't scale a contracting business built on bottlenecks
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={false} delay={0.4}>
          <p className="hero-description mb-8 text-center !text-[#8A8E91] sm:mb-[42px]">
            Hard work got you here. But it's not enough to get you{" "}
            <span className="text-decemberSky italic">
              where you want to go.
            </span>
          </p>
        </TextAnimation>
        <div className="relative">
          <div className="absolute top-1/2 left-0 h-auto w-full max-w-[274px] translate-y-[-50%] blur-[12px]">
            <Image
              className="w-full"
              src={"/images/png/why-contactor-hero-img-1.png"}
              height={100}
              width={100}
              alt="WhyContractorHeroImg"
            />
          </div>
          <div className="absolute top-1/2 right-0 h-auto w-full max-w-[274px] translate-y-[-50%] blur-[12px]">
            <Image
              className="w-full"
              src={"/images/png/why-contactor-hero-img-2.png"}
              height={100}
              width={100}
              alt="WhyContractorHeroImg"
            />
          </div>
          <div className="relative mx-auto max-w-[526px] overflow-hidden rounded-lg bg-[#00000033] max-sm:h-full max-sm:min-h-[233px] max-sm:w-full sm:h-[306px]">
            <video
              ref={videoRef}
              className="block h-full w-full object-cover"
              onEnded={() => setIsPlaying(false)}
              playsInline
            >
              <source src="/video/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/30 duration-300 ${
                isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
              onClick={handlePlayPause}
            ></div>
            <div className="absolute top-[50px] left-1/2 -translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2">
              {" "}
              <button
                className="flex size-[60px] items-center justify-center rounded-full bg-[#FFFFFF1F] backdrop-blur-[24px] transition-transform hover:scale-110"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <svg
                    className="h-8 w-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg
                    className="ps-1"
                    width="22"
                    height="26"
                    viewBox="0 0 22 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64417 25.6281C2.95692 26.0824 2.26142 26.109 1.55768 25.7078C0.853933 25.3066 0.501375 24.686 0.5 23.8459V2.14511C0.5 1.30643 0.852559 0.685805 1.55768 0.283239C2.2628 -0.119328 2.9583 -0.0927691 3.64417 0.362913L20.4475 11.2133C21.066 11.6327 21.3753 12.2267 21.3753 12.9955C21.3753 13.7643 21.066 14.3584 20.4475 14.7777L3.64417 25.6281Z"
                      fill="white"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="absolute right-0 bottom-0 left-0 bg-[#00000052] p-2 backdrop-blur-[42px]">
              <div className="flex items-center justify-between">
                <h3 className="font-myriad text-lg font-semibold tracking-normal text-white xl:text-xl">
                  Chad Cranfill
                </h3>
                <div className="hidden items-center gap-2 text-xs tracking-normal text-white sm:flex sm:text-sm">
                  <span className="font-myriad opacity-[32%]">
                    Switched From JobTer
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold">→</span>
                    <span className="max-w-20">
                      {" "}
                      <LogoIcon />
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-superSilver font-myriad text-xs tracking-[0.5px] max-sm:my-1.5 sm:mt-1.5 sm:text-sm">
                Owner, Cranfill Construction
              </p>
              <div className="flex items-center gap-2 text-xs text-white sm:hidden sm:text-sm">
                <span className="opacity-[32%]">Switched From JobTer</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold">→</span>
                  <span className="max-w-20">
                    {" "}
                    <LogoIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyContractorHero;
