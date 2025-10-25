"use client";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import Image from "next/image";
import AppsRating from "../common/AppsRating";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import FreeTrialButton from "../common/FreeTrialButton";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import StatisticCard from "./StatisticCard";
export interface EstimateHeroItem {
  title: string;
  subTitle: string;
}
interface EstimaticHeroProps {
  hero: {
    estimaticTag?: string;
    estimaticTagTitle?: string;
    subTitle?: string;
    hero?: { subTitle?: string; title?: string };
  };
  createBtn?: string;
  createMobileBtn?: string;
  nccTxt?: string;
  heroImg?: any;
  estimateHeroData?: EstimateHeroItem[];
}

const EstimaticHero: React.FC<EstimaticHeroProps> = ({
  hero,
  createBtn = "Get started FREE",
  createMobileBtn = "Download FREE App",
  nccTxt = "No credit card required",
  estimateHeroData = [],
  heroImg,
}) => {
  const { estimaticTag, estimaticTagTitle, hero: heroSection } = hero || {};

  useGsapFadeIn(["#common-homepage-wrapper", "#home-page-view-port-screen"]);
  console.log(estimateHeroData, "stimate");

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
              {estimaticTag || "AI Estimating Software"}
            </h5>
          </Copy>
          <AdaptiveHeroTitle
            title={
              heroSection?.title || "The first AI estimator worth trusting"
            }
            className="gradient-2 text-center leading-[128%] font-extrabold xl:text-left"
            minFontSize={25}
            maxLines={2}
            maxFontSize={52}
            textAnimation="home-page-view-port-screen-estimatic-ai"
          />
          <Copy animateOnScroll={false} delay={1.2}>
            <p className="text-secondary sm:text-decemberSky mx-auto mt-2.5 mb-4 text-center text-xs font-semibold sm:my-4 sm:text-sm md:text-base md:font-medium lg:my-[26px] lg:text-lg xl:text-left">
              {heroSection?.subTitle ||
                "Estimatic references your costbook, live supplier pricing, and local labor rates to build estimates the same way you do. Just 100x faster."}
            </p>
          </Copy>

          {/* Buttons */}
          <div className="flex w-full flex-wrap-reverse items-center gap-4 sm:gap-5">
            {/* Free Account Buttons */}
            <CardReveal distance={50} className="w-full xl:w-fit" delay={1.3}>
              <div className="flex w-full flex-col items-center justify-center gap-1.5 px-2 xl:w-fit">
                <FreeTrialButton
                  className="!hidden sm:!flex"
                  text={createBtn}
                  showIcon={false}
                />
                <FreeTrialButton
                  className="!flex w-full sm:!hidden"
                  text={createMobileBtn}
                  showIcon={false}
                />
                <CardRequiredButton
                  className="text-wallStreet sm:text-secondary"
                  text={nccTxt}
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
            {estimaticTagTitle}
          </div>
          <div className="relative overflow-hidden pb-10">
            <Image
              width={730}
              height={410}
              className="object-cover"
              src={heroImg || "/images/webp/estimatic-ai-hero.webp"}
              alt="Estimatic AI software interface mockup"
            />
            <div className="ai-blur absolute bottom-[-30%] left-0 h-[80%] w-full"></div>
          </div>
        </CardReveal>
      </div>

      {/* Stats Cards */}
      <div className="main-container relative z-30 mt-12 grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
        {estimateHeroData.map((obj, index) => (
          <CardReveal key={index} distance={50} delay={1 + index * 0.1}>
            <StatisticCard obj={obj} />
          </CardReveal>
        ))}
      </div>
    </section>
  );
};

export default EstimaticHero;
