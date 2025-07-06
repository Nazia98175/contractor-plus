"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../common/Button";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import {
  ArrowIcon,
  HeroAppStoreIcon,
  HeroPlayStoreIcon,
} from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import FieldServiceMap from "./FieldServiceMap";

interface GeolocationData {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}
interface heroProps {
  heroTitle: string;
  heroTitle1: string;
  heroDescription: string;
  nccTxt: string;
  mobileBtn: string;
  createBtn: string;
}
interface Props {
  hero: heroProps;
}

const FieldServicesHero: React.FC<Props> = ({ hero }) => {
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".main-loader", {
        opacity: 0,
      });
    }, 3000);
  }, []);
  return (
    <section className="relative overflow-visible">
      <div className="bg-black-fade-new lg:border-kuroiBlack absolute top-0 left-0 z-10 h-full w-full bg-cover lg:top-1/2 lg:left-1/2 lg:h-[150%] lg:w-[120%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[1631px] lg:border-[236px] lg:bg-none lg:blur-[25px]"></div>

      <FieldServiceMap />
      {/* Gradient overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0"></div>

      {/* Content overlay */}
      <div className="main-container relative z-20 flex flex-col-reverse items-center justify-between gap-[30px] pt-[60px] pb-10 sm:pb-16 md:pb-20 lg:flex-row lg:pt-[138px] lg:pb-[100px] xl:pb-[171px] 2xl:pt-[150px] 2xl:pb-[190px]">
        <div className="w-full lg:max-w-[732px]">
          <TextAnimation animateOnScroll={false} delay={0}>
            <div className="field-service text-secondary flex w-full items-center justify-center rounded-md px-3 py-1 text-xs leading-[125%] font-semibold -tracking-[0.24px] sm:w-fit">
              {hero?.heroTitle1}
            </div>
          </TextAnimation>
          <TextAnimation animateOnScroll={false} delay={0.2}>
            <h3 className="main-heading gradient-text mt-1.5 sm:max-w-[470px] lg:hidden">
              {hero?.heroTitle}
            </h3>
          </TextAnimation>
          <TextAnimation animateOnScroll={false} delay={0.3}>
            <h3 className="main-heading hidden text-white lg:block">
              {hero?.heroTitle}
            </h3>
          </TextAnimation>
          <p className="hero-description !text-secondary md:!text-decemberSky mt-[6px] mb-4 sm:my-[26px] sm:max-w-[470px] lg:max-w-[532px]">
            {hero?.heroDescription}
          </p>
          <CardReveal
            distance={50}
            delay={0.6}
            className="flex w-full flex-col-reverse items-center gap-5 sm:flex-row md:gap-2.5"
          >
            <div className="flex items-center gap-2.5">
              <button>
                <HeroPlayStoreIcon />
              </button>
              <button>
                <HeroAppStoreIcon />
              </button>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-[6px] sm:w-fit">
              <Button variant="primary">
                <span className="hidden sm:flex">{hero?.createBtn}</span>
                <span className="flex sm:hidden">{hero?.mobileBtn}</span>
                <ArrowIcon fill="white" className="hidden sm:block" />
              </Button>
              <CardRequiredButton
                text={hero?.nccTxt}
                className="text-secondary hidden sm:flex"
              />
            </div>
          </CardReveal>
        </div>
        <Image
          className="w-full max-w-[355px] object-cover"
          src="/images/webp/group-with-location.webp"
          width={355}
          height={355}
          alt="location"
          sizes="(max-width: 768px) 100vw, 355px"
          unoptimized
        />
      </div>
    </section>
  );
};

export default FieldServicesHero;
