"use client";
import Image from "next/image";
import Link from "next/link";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import FreeAccountButton from "../common/FreeAccountButton";
import { StartIcon } from "../common/Icons";
import StatisticCard from "./StatisticCard";
import Copy from "../common/Copy";
import { estimateHeroData } from "../common/Utils";
import { useEffect } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useOneLinkRedirect } from "@/app/lib/handleOneLinkRedirect";
import AppsRating from "../common/AppsRating";
import FreeTrialButton from "../common/FreeTrialButton";

const EstimaticHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-estimatic-ai", {
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
    <section className="bg-cover pb-8 text-white md:pb-14 xl:bg-[url('/images/webp/estimatic-hero-bg.webp')]">
      <div className="main-container flex justify-center pt-[126px] pb-1.5 xl:justify-between">
        {/* Left Content */}
        <div className="1xl:max-w-[621px] w-full md:max-w-[600px] md:pt-8">
          <Image
            src="/images/svg/estimatic.svg"
            width={160}
            height={24}
            className="mx-auto mb-[51px] xl:hidden"
            alt="Estimatic logo"
          />

          <Copy animateOnScroll={false} delay={1}>
            <h5 className="text-wallStreet mb-[10px] text-center text-xs font-semibold tracking-[-0.24px] lg:mb-0 xl:text-left">
              AI Estimating Software
            </h5>
          </Copy>

          <Copy animateOnScroll={false} delay={1.1}>
            <h2 className="gradient-text main-heading text-center xl:text-left">
              The first AI estimator worth trusting
            </h2>
          </Copy>

          <Copy animateOnScroll={false} delay={1.2}>
            <p className="text-secondary sm:text-decemberSky mx-auto mt-2.5 mb-4 text-center text-xs font-semibold sm:my-4 sm:text-sm md:text-base md:font-medium lg:my-[26px] lg:text-lg xl:text-left">
              Estimatic references your costbook, live supplier pricing, and
              local labor rates to build estimates the same way you do. Just
              100x faster.
            </p>
          </Copy>

          {/* Buttons */}
          <div className="flex w-full flex-wrap-reverse items-center gap-4 sm:gap-5">
            {/* Free Account Buttons */}
            <CardReveal distance={50} className="w-full xl:w-fit" delay={1.3}>
              <div className="flex w-full flex-col items-center justify-center gap-1.5 px-2 xl:w-fit">
                <FreeTrialButton
                  className="!hidden sm:!flex"
                  text="Get started FREE"
                  showIcon={false}
                />
                <FreeTrialButton
                  className="!flex w-full sm:!hidden"
                  text="Download FREE App"
                  showIcon={false}
                />
                <CardRequiredButton
                  className="text-wallStreet sm:text-secondary"
                  text="No credit card required"
                />
              </div>
            </CardReveal>
            <AppsRating
              className="hidden xl:block"
              className2="hidden xl:block"
              delayGoogle={1.4}
              delayApple={1.5}
            />
          </div>
        </div>

        {/* Right Content: Mock AI Message + Image */}
        <CardReveal
          distance={50}
          delay={1.2}
          className="1xl:-mr-40 hidden flex-col xl:-mr-24 xl:flex"
        >
          <div className="1xl:text-base border-dimGray bg-direWolf mb-6 ml-4 flex w-full max-w-[615px] items-center gap-2.5 rounded-full border px-5 py-1.5 text-sm font-medium">
            <Image
              width={19}
              height={19}
              src="/images/webp/estimatic-ai.webp"
              alt="AI Assistant Icon"
            />
            I need a quote for a 140' x 5' black metal fence install including
            labor and materials, with 2 gates & solar fence post caps as an
            optional add on
          </div>
          <Image
            width={730}
            height={410}
            src="/images/webp/estimatic-hero.webp"
            alt="Estimatic AI software interface mockup"
          />
        </CardReveal>
      </div>

      {/* Stats Cards */}
      <div className="main-container relative z-30 mt-8 grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 xl:gap-8">
        {estimateHeroData.map((obj, index) => (
          <CardReveal key={index} distance={150} delay={1 + index * 0.1}>
            <StatisticCard obj={obj} />
          </CardReveal>
        ))}
      </div>
    </section>
  );
};

export default EstimaticHero;
