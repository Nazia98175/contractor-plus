"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Button from "../common/Button";
import { SideIcon } from "../common/Icons";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import { supplierslogo } from "../common/Helper";

const SuppliersHero = () => {
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

  return (
    <section
      id="home-page-view-port-screen-fetures"
      className="relative mx-auto max-w-[1920px] pt-[115px]"
    >
      <div className="relative z-40 mx-auto flex max-w-[933px] flex-col items-center justify-center px-4">
        <CardReveal distance={30} delay={0.1}>
          <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
            Supply Partners
          </h4>
        </CardReveal>
        <Copy delay={0.2} animateOnScroll={false}>
          <h1 className="main-heading text-gradient-effect text-center">
            Put your catalog where purchasing decisions actually happen
          </h1>
        </Copy>
        <Copy delay={0.3} animateOnScroll={false}>
          <p className="hero-description !text-ashGray mt-3 text-center">
            Get discovered by 50,000+ high‑intent contractors right inside the
            OS they use to estimate, order, and build.
          </p>
        </Copy>
        <CardReveal distance={30} delay={0.6}>
          <Button className="mt-4 w-full sm:max-w-[204px]">
            Get in touch <SideIcon />
          </Button>
        </CardReveal>
      </div>
      <div className="mx-auto mt-4 w-full max-w-[1440px]">
        <Marquee direction="right" speed={50}>
          {supplierslogo.slice(0, 11).map((item, index) => (
            <div
              key={index}
              className="bg-blackRussian mr-6 w-10 min-w-10 rounded-full p-2 sm:mr-10 sm:w-[60px] sm:min-w-[60px] lg:p-3 xl:mr-14 xl:w-[88px] xl:min-w-[88px] xl:p-4"
            >
              <Image
                className="w-full rounded-lg object-cover"
                width={52}
                height={52}
                unoptimized
                src={item.Url}
                alt={item.Url}
              />
            </div>
          ))}
        </Marquee>
        <Marquee direction="left" speed={50}>
          {supplierslogo.slice(11).map((item, index) => (
            <div
              key={index}
              className="bg-blackRussian mr-6 w-10 min-w-10 rounded-full p-2 sm:mr-10 sm:w-[60px] sm:min-w-[60px] lg:p-3 xl:mr-14 xl:w-[88px] xl:min-w-[88px] xl:p-4"
            >
              <Image
                className="w-full rounded-lg object-cover"
                width={52}
                height={52}
                unoptimized
                src={item.Url}
                alt={item.Url}
              />
            </div>
          ))}
        </Marquee>
        <div className="bg-kuroiBlack pointer-events-none absolute top-0 left-[-80px] z-10 h-full w-full max-w-[120px] blur-[20px]"></div>
        <div className="bg-kuroiBlack pointer-events-none absolute top-0 right-[-80px] z-10 h-full w-full max-w-[120px] blur-[20px]"></div>
        <Image
          fill
          className="3xl:!top-[5%] 900:!top-[12%] mix-b pointer-events-none absolute !top-[8%] left-[0%] z-10 object-cover blur-[14.05px] sm:!top-[7%] lg:!top-[64px] 2xl:!top-[5%]"
          src="/images/webp/blur.webp"
          alt="blur-ellipse"
        />
      </div>
    </section>
  );
};

export default SuppliersHero;
