"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatedLineIcon,
  LogoIcon,
  VideoPauseIcon,
  VideoPlayIcon,
} from "../common/Icons";
import Copy from "../common/Copy";
import gsap from "gsap";

interface WhyContractorHeroProps {
  pageContent: any;
}

const WhyContractorHero: React.FC<WhyContractorHeroProps> = ({
  pageContent,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Listen for messages from YouTube iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;

      try {
        const data = JSON.parse(event.data);
        // Check if it's a player state change event
        if (
          data.event === "infoDelivery" &&
          data.info &&
          data.info.playerState !== undefined
        ) {
          // 1 = playing, 2 = paused, 0 = ended
          if (data.info.playerState === 1) {
            setIsPlaying(true);
          } else if (
            data.info.playerState === 2 ||
            data.info.playerState === 0
          ) {
            setIsPlaying(false);
          }
        }
      } catch (e) {
        // Ignore non-JSON messages
      }
    };

    window.addEventListener("message", handleMessage);

    // Request player state updates
    const interval = setInterval(() => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"listening","id":1,"channel":"widget"}',
          "*",
        );
      }
    }, 100);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearInterval(interval);
    };
  }, []);

  const handlePlayPause = () => {
    if (iframeRef.current) {
      if (isPlaying) {
        // Pause YouTube video
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*",
        );
      } else {
        // Play YouTube video
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*",
        );
      }
      setIsPlaying(!isPlaying);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-why-contractor", {
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
    }, 700);
  }, []);

  return (
    <section
      className="px-3 pt-[70px] pb-14 opacity-0 sm:pt-[127px] sm:pb-20"
      id="why-contractor-hero-section"
    >
      <div className="relative mx-auto max-w-[830px]">
        <div className="pointer-events-none absolute top-[40%] left-0 mx-auto w-full max-w-[600px] sm:top-0 lg:max-w-[840px]">
          <AnimatedLineIcon />
        </div>
        <Copy animateOnScroll={false} delay={0}>
          <h2 className="main-heading why-contractor-hero white-gray-gradient mb-2 text-center !font-extralight max-sm:mx-auto sm:mb-4">
            {pageContent?.hero?.title}
          </h2>
        </Copy>
        <Copy animateOnScroll={false} delay={0.4}>
          <p className="hero-description !text-cyanBlue mb-8 text-center sm:mb-[42px]">
            {pageContent?.hero?.subTitle}{" "}
            <span className="text-decemberSky italic">
              {pageContent?.hero?.subTitleItalic}
            </span>
          </p>
        </Copy>
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
          <div className="group bg-rgba12 relative mx-auto max-w-[526px] overflow-hidden rounded-lg max-sm:h-full max-sm:min-h-[233px] max-sm:w-full sm:h-[306px]">
            <div className="relative h-full w-full">
              <iframe
                ref={iframeRef}
                className="absolute inset-0 h-full w-full"
                src={pageContent?.hero?.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/30 duration-300 ${
                  isPlaying ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
                onClick={handlePlayPause}
              ></div>
            </div>
            <div
              className={`absolute top-[50px] left-1/2 -translate-x-1/2 group-hover:!opacity-100 sm:top-1/2 sm:-translate-y-1/2 ${
                isPlaying ? "opacity-0" : ""
              }`}
            >
              <button
                className="bg-rgba13 flex size-[60px] items-center justify-center rounded-full backdrop-blur-[24px] transition-transform hover:scale-110"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                onClick={handlePlayPause}
              >
                {isPlaying ? <VideoPauseIcon /> : <VideoPlayIcon />}
              </button>
            </div>
            <div className="bg-rgba14 absolute right-0 bottom-0 left-0 p-2 backdrop-blur-[42px]">
              <div className="flex items-center justify-between">
                <h3 className="font-myriad text-lg font-semibold tracking-normal text-white xl:text-xl">
                  {pageContent?.hero?.userName}
                </h3>
                <div className="hidden items-center gap-2 text-xs tracking-normal text-white sm:flex sm:text-sm">
                  <span className="font-myriad opacity-[32%]">
                    {pageContent?.hero?.switchFrom}
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
                {pageContent?.hero?.userRole}
              </p>
              <div className="flex items-center gap-2 text-xs text-white sm:hidden sm:text-sm">
                <span className="opacity-[32%]">
                  {pageContent?.hero?.switchFrom}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyContractorHero;
