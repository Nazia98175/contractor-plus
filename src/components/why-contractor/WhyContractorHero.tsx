"use client";

import { useState, useRef } from "react";
import {
  AnimatedLineIcon,
  LogoIcon,
  VideoPauseIcon,
  VideoPlayIcon,
} from "../common/Icons";
import Image from "next/image";
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
    <section className="px-3 pt-[70px] pb-14 sm:pt-[127px] sm:pb-20">
      <div className="relative mx-auto max-w-[830px]">
        <div className="pointer-events-none absolute top-[40%] left-0 mx-auto w-full max-w-[600px] sm:top-0 lg:max-w-[840px]">
          <AnimatedLineIcon />
        </div>
        <TextAnimation animateOnScroll={false} delay={0}>
          <h2 className="main-heading mb-2 bg-[linear-gradient(180deg,_#FFFFFF_25%,_#0C1711_177.29%)] bg-clip-text text-center !font-extralight text-transparent max-sm:mx-auto sm:mb-4">
            You can't scale a contracting business built on bottlenecks
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={false} delay={0.4}>
          <p className="hero-description !text-cyanBlue mb-8 text-center sm:mb-[42px]">
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
          <div className="group relative mx-auto max-w-[526px] overflow-hidden rounded-lg bg-[#00000033] max-sm:h-full max-sm:min-h-[233px] max-sm:w-full sm:h-[306px]">
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
            <div
              className={`absolute top-[50px] left-1/2 -translate-x-1/2 group-hover:!opacity-100 sm:top-1/2 sm:-translate-y-1/2 ${
                isPlaying ? "opacity-0" : ""
              }`}
            >
              {" "}
              <button
                className="flex size-[60px] items-center justify-center rounded-full bg-[#FFFFFF1F] backdrop-blur-[24px] transition-transform hover:scale-110"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                onClick={handlePlayPause}
              >
                {isPlaying ? <VideoPauseIcon /> : <VideoPlayIcon />}
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
