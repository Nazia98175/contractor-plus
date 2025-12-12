"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";
import Copy from "../common/Copy";
import { AnimatedLineIcon, LogoIcon } from "../common/Icons";
import LazyYouTubeEmbed from "./LazyYouTubeEmbed";

interface WhyContractorHeroProps {
  pageContent: any;
}

const WhyContractorHero: React.FC<WhyContractorHeroProps> = ({
  pageContent,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

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
          <h1 className="main-heading why-contractor-hero white-gray-gradient mb-2 text-center !font-extralight max-sm:mx-auto sm:mb-4">
            {pageContent?.hero?.title}
          </h1>
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
          {/* LEFT BLUR IMAGE - OPTIMIZED */}
          <div className="absolute top-1/2 left-0 h-auto w-full max-w-[274px] translate-y-[-50%] blur-[12px]">
            <Image
              className="w-full"
              src="/images/webp/why-contactor-hero-img-1.webp"
              height={274}
              width={274}
              alt="Decorative background element"
              priority
              quality={60}
              loading="lazy"
              sizes="(max-width: 768px) 200px, 274px"
            />
          </div>

          {/* RIGHT BLUR IMAGE - OPTIMIZED */}
          <div className="absolute top-1/2 right-0 h-auto w-full max-w-[274px] translate-y-[-50%] blur-[12px]">
            <Image
              className="w-full"
              src="/images/webp/why-contactor-hero-img-2.webp"
              height={274}
              width={274}
              alt="Decorative background element"
              priority
              quality={60}
              loading="lazy"
              sizes="(max-width: 768px) 200px, 274px"
            />
          </div>

          {/* VIDEO CONTAINER */}
          <div className="group bg-rgba12 relative mx-auto max-w-[526px] overflow-hidden rounded-lg max-sm:h-full max-sm:min-h-[233px] max-sm:w-full sm:h-[306px]">
            {/* LAZY LOADED YOUTUBE VIDEO */}
            <LazyYouTubeEmbed
              videoUrl={pageContent?.hero?.videoUrl}
              thumbnailUrl={pageContent?.hero?.thumbnailUrl}
              onStateChange={setIsPlaying}
            />

            {/* VIDEO INFO OVERLAY */}
            <div className="bg-rgba14 absolute right-0 bottom-0 left-0 p-2 backdrop-blur-[42px]">
              <div className="flex items-center justify-between">
                <h3 className="font-myriad text-lg font-semibold tracking-normal text-white xl:text-xl">
                  {pageContent?.hero?.userName}
                </h3>
                <div className="hidden items-center gap-2 text-xs tracking-normal text-white sm:flex sm:text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold">→</span>
                    <span className="max-w-20">
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
