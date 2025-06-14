"use client";

import { useState, useRef } from "react";
import { LogoIcon } from "../common/Icons";
import Image from "next/image";

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
    <section className="pt-[88px] pb-14 sm:pt-[127px] sm:pb-20">
      <div className="mx-auto max-w-[830px] px-2">
        <h2 className="main-heading mb-2 bg-[linear-gradient(180deg,_#FFFFFF_25%,_#0C1711_177.29%)] bg-clip-text text-center !font-extralight text-transparent sm:mb-4">
          You can't scale a contracting business built on bottlenecks
        </h2>
        <p className="hero-description mb-8 text-center !text-[#8A8E91] sm:mb-[42px]">
          Hard work got you here. But it's not enough to get you{" "}
          <span className="text-decemberSky italic">where you want to go.</span>
        </p>
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
          <div className="relative mx-auto h-[306px] max-w-[526px] overflow-hidden rounded-lg bg-[#00000033]">
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
            >
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
                <h3 className="text-lg font-semibold text-white xl:text-xl">
                  Chad Cranfill
                </h3>
                <div className="hidden items-center gap-2 text-xs text-white sm:flex sm:text-sm">
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
              <p className="text-superSilver text-xs max-sm:my-2 sm:mt-2 sm:text-sm">
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
