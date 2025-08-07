"use client";
import { IntegrationItem } from "@/types";
import Image from "next/image";
import { ResizeIcon, UnionIcon } from "../common/Icons";
import { useEffect } from "react";
import gsap from "gsap";

interface IntegrationDetailHeroProps {
  user: IntegrationItem;
}
const IntegrationDetailHero: React.FC<IntegrationDetailHeroProps> = ({
  user,
}) => {
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
      className="relative flex h-full flex-col items-center justify-center pt-28 md:pt-[144px] md:pb-8 2xl:pt-[178px]"
    >
      <div className="mb-6 flex items-center justify-center gap-5 px-2 sm:gap-7 md:gap-12">
        <div className="integration-detail-bg integration-logo-bg">
          <div className="absolute -top-2 left-1/2 z-10 h-full w-[110%] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/70 to-transparent blur-[30px]"></div>
          <Image
            className="h-12 w-auto object-center md:h-[72px]"
            src="/images/png/center-icon.png"
            width={72}
            height={72}
            alt={user.name}
          />
        </div>
        <span className="h-16 w-16 md:h-[92px] md:w-[92px]">
          <UnionIcon />
        </span>
        <div className="integration-detail-bg integration-logo-bg">
          <div className="absolute -top-2 left-1/2 z-10 h-full w-[110%] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/70 to-transparent blur-[30px]"></div>
          <Image
            src={user.logo}
            width={72}
            height={72}
            alt={user.name}
            className="h-12 w-auto object-center md:h-[72px]"
          />
        </div>
      </div>

      <div className="relative mx-auto flex w-full flex-col items-center justify-center px-4">
        <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
          Contractor + {user.name}
        </h4>
        <h1 className="main-heading text-gradient-effect max-w-[840px] text-center">
          Unlocking Financial Simplicity With Paypal
        </h1>
        <p className="hero-description !text-ashGray mx-auto mt-3 max-w-[739px] text-center">
          Contractor+ proudly announces its collaboration with PayPal, a global
          icon in digital payments.
        </p>
      </div>

      <button className="text-lightGrey my-5 duration-300 hover:text-white sm:my-8 md:my-12">
        <ResizeIcon />
      </button>
    </section>
  );
};

export default IntegrationDetailHero;
