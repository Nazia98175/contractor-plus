import Image from "next/image";
import Link from "next/link";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import FreeAccountButton from "../common/FreeAccountButton";
import { StartIcon } from "../common/Icons";
import StatisticCard from "./StatisticCard";

const EstimaticHero = () => {
  const estimateHeroData = [
    {
      title: "<9",
      desc: "Minutes spent on an estimate",
    },
    {
      title: "$100k+",
      desc: "More in annual profit from fewer underbids",
    },
    {
      title: "2x",
      desc: "Higher close rate for estimates sent same-day",
    },
    {
      title: "30%",
      desc: "Reduction in material cost errors",
    },
  ];
  return (
    <section className="bg-cover bg-fixed pb-[117px] text-white xl:bg-[url('/images/webp/estimatic-hero-bg.webp')]">
      <div className="main-container flex justify-center pt-[164px] pb-4 xl:justify-between">
        <div className="1xl:max-w-[621px] w-full md:max-w-[600px]">
          <Image
            src="/images/svg/estimatic.svg"
            width={160}
            height={24}
            className="mx-auto mb-12 xl:hidden"
            alt="Estimatic Logo"
          />
          <h5 className="text-wallStreet mb-[10px] text-center text-xs font-semibold tracking-[-0.24px] lg:mb-0 xl:text-left">
            AI Estimating Software
          </h5>
          <h2 className="gradient-text main-heading text-center xl:text-left">
            The first AI estimator worth trusting
          </h2>
          <p className="text-secondary sm:text-decemberSky mx-auto mt-2.5 mb-4 text-center text-xs font-semibold sm:my-4 sm:text-sm md:text-base md:font-medium lg:my-[26px] lg:text-lg xl:text-left">
            Estimatic references your costbook, live supplier pricing, and local
            labor rates to build estimates the same way you do. Just 100x
            faster.
          </p>
          <div className="flex w-full flex-wrap-reverse items-center gap-4 sm:gap-5">
            <CardReveal distance={50} className="w-full xl:w-fit" delay={0.6}>
              <div className="flex w-full flex-col items-center justify-center gap-1.5 px-2 xl:w-fit">
                <FreeAccountButton
                  className="!hidden sm:!flex"
                  text="Get started FREE"
                  showIcon={false}
                />
                <FreeAccountButton
                  showIcon={false}
                  className="!flex w-full sm:!hidden"
                  text="Download FREE App"
                />
                <CardRequiredButton
                  className="text-wallStreet sm:text-secondary"
                  text="No credit card required"
                />
              </div>
            </CardReveal>
            <CardReveal distance={50} delay={0.8} className="hidden xl:block">
              <Link
                href=""
                className="mt-4flex flex-col-reverse gap-1 sm:flex-col md:mt-0"
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
            <CardReveal distance={50} delay={1.0} className="hidden xl:block">
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
          </div>
        </div>
        <div className="1xl:-mr-40 hidden flex-col xl:-mr-24 xl:flex">
          <div className="1xl:text-base mb-6 ml-4 flex w-full max-w-[615px] items-center gap-2.5 rounded-full border border-[#686868] bg-[#272727] px-5 py-1.5 text-sm font-medium">
            <Image
              width={19}
              height={19}
              src="/images/webp/estimatic-ai.webp"
              alt=""
            />
            I need a quote for a 140' x 5' black metal fence install including
            labor and materials, with 2 gates & solar fence post caps as an
            optional add on
          </div>
          <Image
            width={730}
            height={410}
            src="/images/webp/estimatic-hero.webp"
            alt=""
          />
        </div>
      </div>

      <div className="main-container grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
        {estimateHeroData.map((obj, index) => (
          <StatisticCard key={index} obj={obj} />
        ))}
      </div>
    </section>
  );
};

export default EstimaticHero;
