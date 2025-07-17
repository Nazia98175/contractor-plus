"use client";
import dynamic from "next/dynamic";
import { getMediaUrl } from "@/utils/getMediaUrl";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import FreeAccountButton from "../common/FreeAccountButton";
import { RedClipIcon, RedClipIconMobile, StartIcon } from "../common/Icons";
import Copy from "../common/Copy";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import { usePathname } from "next/navigation";
import { useOneLinkRedirect } from "@/app/lib/handleOneLinkRedirect";
const AnimatedShape = dynamic(() => import("./AnimatedShape"), { ssr: false });

// import AnimatedShape from "./AnimatedShape";
export interface TheHeroProps {
  hero: any;
  slug?: string;
  heroImg?: any;
  homeCard?: any;
  commonData?: any;
  featureTag?: string;
}
const CrmHero: React.FC<TheHeroProps> = ({
  hero,
  slug,
  heroImg,
  commonData,
  featureTag,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.to(wrapperRef.current, {
      opacity: 1,
      duration: 0.1,
      delay: 0.1,
      ease: "elastic.in",
      once: true,
    });
  }, []);

  const imageUrl = typeof heroImg === "string" ? heroImg : getMediaUrl(heroImg);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-fetures", {
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
  const pathname = usePathname();
  const { loading, handleRedirect } = useOneLinkRedirect();

  const handleClick = () => {
    handleRedirect({ pathname, email: "user@example.com" });
  };
  return (
    <section
      ref={wrapperRef}
      className="relative z-10 pt-[46px] pb-10 opacity-0 sm:pt-20 md:pb-0 lg:pt-[139px] xl:pt-[154px]"
    >
      <div className="bg-kuroiBlack absolute bottom-[-10px] left-0 z-40 hidden h-[100px] w-full blur-[30px] md:block"></div>
      <RedClipIcon className="pointer-events-none absolute top-[112px] right-[-194px] hidden w-full max-w-[993px] md:top-[-202px] md:right-0 md:block" />
      <RedClipIconMobile className="pointer-events-none absolute top-0 right-0 block w-full md:hidden" />
      <div className="via-athenaBlue pointer-events-none absolute top-0 left-[70px] hidden h-[500px] w-full max-w-[90px] rotate-[-45deg] rounded-[10px] bg-gradient-to-r from-transparent to-transparent opacity-15 mix-blend-plus-lighter blur-[48px] lg:block"></div>
      <CardReveal distance={30} delay={0.1}>
        <div className="hidden items-center justify-center pb-1 md:flex">
          <span className="bg-darkKnight text-wallStreet rounded-[6px] px-3 py-1 text-xs font-semibold">
            {featureTag || "Feature Highlight"}
          </span>
        </div>
      </CardReveal>
      <div
        id="hero"
        className="mx-auto flex w-full max-w-[1050px] flex-col-reverse md:flex-col"
      >
        <div>
          <div className="px-2 pt-8 md:pt-0">
            {/* <Copy delay={0.2} animateOnScroll={false}> */}
            {/* <h2
                className={`${
                  slug === "estimate"
                    ? "xs:max-w-[78%] max-w-[88%] sm:max-w-[698px]"
                    : "xs:max-w-[78%] max-w-[88%] sm:max-w-[927px]"
                } `}
              >
                {hero?.heroTitle}
              </h2> */}
            <AdaptiveHeroTitle
              // title={`Property Maintenance`}
              title={hero?.heroTitle || ""}
              className="gradient-2 xs:text-[28px] mb-2 w-fit text-start text-[26px] leading-[127%] font-extrabold sm:mx-auto sm:text-4xl md:mb-4 md:text-center lg:mb-[26px] lg:text-5xl"
              minFontSize={16}
              maxFontSize={48}
            />
            {/* </Copy> */}
            <Copy delay={0.4} animateOnScroll={false}>
              <p
                className={`${slug === "estimate" ? "max-w-[465px]" : "max-w-[826px]"} text-decemberSky mx-auto mb-4 text-start text-xs font-semibold sm:text-center sm:text-sm md:text-base md:font-medium lg:mb-[26px] lg:text-lg`}
              >
                {hero?.heroDescription}
              </p>
            </Copy>
          </div>
          <div className="flex w-full flex-wrap-reverse items-center justify-center gap-4 sm:gap-5">
            <CardReveal distance={50} delay={0.5}>
              <Link
                href="#"
                className="mt-4 flex flex-col-reverse gap-1 sm:flex-col md:mt-0"
              >
                <Image
                  src="/images/webp/play-google.webp"
                  alt="google icon"
                  width={144}
                  height={36}
                  sizes="(max-width: 768px) 100px, 144px"
                  priority
                />
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="max-w-7 md:max-w-5">
                      <StartIcon key={i} />
                    </span>
                  ))}
                </div>
              </Link>
            </CardReveal>
            <CardReveal distance={50} delay={0.6} className="">
              <Link
                href=""
                className="mt-4 flex flex-col-reverse gap-1 sm:flex-col md:mt-0"
              >
                <Image
                  src="/images/svg/Apple-Icon.svg"
                  alt="google icon"
                  width={144}
                  height={36}
                  sizes="(max-width: 768px) 100px, 144px"
                  priority
                />
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="max-w-7 md:max-w-5">
                      <StartIcon />
                    </span>
                  ))}
                </div>
              </Link>
            </CardReveal>
            <CardReveal distance={50} delay={0.8} className="w-full sm:w-fit">
              <div className="flex w-full flex-col items-center justify-center gap-1.5 px-2 sm:w-fit">
                <FreeAccountButton
                  className="!hidden sm:!flex"
                  text={commonData?.getStartedFreeBtn}
                  showIcon={false}
                  onClick={handleClick}
                  loading={loading}
                  disabled={loading}
                />
                <FreeAccountButton
                  showIcon={false}
                  className="!flex w-full sm:!hidden"
                  text={commonData?.mobileBtn}
                  onClick={handleClick}
                  loading={loading}
                  disabled={loading}
                />
                <CardRequiredButton
                  className="text-wallStreet sm:text-secondary"
                  text={commonData?.nccTxt}
                />
              </div>
            </CardReveal>
          </div>
        </div>
        <CardReveal distance={50} delay={0.9}>
          <div className="relative mx-auto w-fit overflow-hidden px-5 pt-5">
            <div className="relative overflow-hidden">
              <div className="z-30 mx-auto mt-9 block max-w-[900px] overflow-hidden rounded-t-[25px] border-4 border-[#D7D7D7] p-1 md:rounded-[55px] md:p-4">
                {imageUrl && (
                  <Image
                    className="h-full w-full rounded-t-[20px] object-cover md:rounded-[45px]"
                    src={imageUrl}
                    width={900}
                    height={616}
                    alt="crm-hero"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                    priority
                  />
                )}
                <AnimatedShape />
              </div>
            </div>
          </div>
        </CardReveal>
      </div>
    </section>
  );
};
export default CrmHero;
