"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import FreeAccountButton from "../common/FreeAccountButton";
import { RedClipIcon, RedClipIconMobile, StartIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import Link from "next/link";
import AnimatedShape from "./AnimatedShape";
interface TheHeroProps {
  hero: any;
}
const CrmHero: React.FC<TheHeroProps> = ({ hero }) => {
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
  return (
    <section className="relative z-10 pt-[46px] sm:pt-20 lg:pt-[139px] xl:pt-[154px]">
      <div className="bg-kuroiBlack absolute bottom-[-10px] left-0 z-40 hidden h-[100px] w-full blur-[30px] md:block"></div>
      <RedClipIcon className="pointer-events-none absolute top-[112px] right-[-194px] hidden w-full max-w-[993px] md:top-[-202px] md:right-0 md:block" />
      <RedClipIconMobile className="pointer-events-none absolute top-0 right-0 block w-full md:hidden" />
      <div className="via-athenaBlue pointer-events-none absolute top-0 left-[70px] hidden h-[500px] w-full max-w-[90px] rotate-[-45deg] rounded-[10px] bg-gradient-to-r from-transparent to-transparent opacity-15 mix-blend-plus-lighter blur-[48px] lg:block"></div>
      <div
        ref={wrapperRef}
        id="hero"
        className="mx-auto flex w-full max-w-[1050px] flex-col-reverse opacity-0 md:flex-col"
      >
        <div>
          <div className="px-2 pt-8 md:pt-0">
            <TextAnimation delay={0.2} animateOnScroll={false}>
              <h2 className="gradient-2 main-heading mb-2 w-fit text-start sm:mx-auto md:mb-4 md:text-center lg:mb-[26px]">
                {hero?.heroTitle}
              </h2>
            </TextAnimation>
            <TextAnimation delay={0.4} animateOnScroll={false}>
              <p className="text-decemberSky mx-auto mb-4 max-w-[826px] text-start text-xs font-semibold sm:text-center sm:text-sm md:text-base md:font-medium lg:mb-[26px] lg:text-lg">
                {hero?.heroDescription}
              </p>
            </TextAnimation>
          </div>
          <div className="flex w-full flex-wrap-reverse items-center justify-center gap-4 sm:gap-5">
            <CardReveal
              staggerDelay={0.4}
              animationDuration={0.6}
              distance={50}
              delay={0.6}
              animateOnScroll={false}
            >
              <Link
                href=""
                className="mt-4 flex flex-col-reverse gap-1 sm:flex-col md:mt-0"
              >
                <Image
                  src="/images/webp/play-google.webp"
                  alt="google icon"
                  width={144}
                  height={36}
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
            <CardReveal
              staggerDelay={0.5}
              animationDuration={0.6}
              distance={50}
              delay={0.8}
              animateOnScroll={false}
            >
              <Link
                href=""
                className="mt-4 flex flex-col-reverse gap-1 sm:flex-col md:mt-0"
              >
                <Image
                  src="/images/svg/Apple-Icon.svg"
                  alt="google icon"
                  width={144}
                  height={36}
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
            <CardReveal
              staggerDelay={0.6}
              animationDuration={0.6}
              distance={50}
              delay={1.0}
              animateOnScroll={false}
              className="w-full sm:w-fit"
            >
              <div className="flex w-full flex-col items-center justify-center gap-1.5 px-2 sm:w-fit">
                <FreeAccountButton
                  className="!hidden sm:!flex"
                  text={hero?.createBtn}
                  showIcon={false}
                />
                <FreeAccountButton
                  showIcon={false}
                  className="!flex w-full sm:!hidden"
                  text={hero?.mobileBtn}
                />
                <CardRequiredButton
                  className="text-wallStreet sm:text-secondary"
                  text={hero?.ncc_txt}
                />
              </div>
            </CardReveal>
          </div>
        </div>
        <CardReveal
          staggerDelay={1}
          animationDuration={0.6}
          distance={50}
          delay={0.9}
          animateOnScroll={false}
        >
          <div className="relative mx-auto w-fit overflow-hidden px-5 pt-5">
            <div className="relative overflow-hidden">
              <div className="z-30 mx-auto mt-9 block max-w-[900px] overflow-hidden rounded-[25px] border-4 border-[#D7D7D7] p-1 md:rounded-[55px] md:p-4">
                <Image
                  className="h-full w-full rounded-[20px] object-cover md:rounded-[45px]"
                  src="/images/webp/crm-hero.webp"
                  width={900}
                  height={616}
                  alt="crm-hero"
                />
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
