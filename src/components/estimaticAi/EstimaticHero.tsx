import React from "react";
import CardReveal from "../common/CardReveal";
import Link from "next/link";
import Image from "next/image";
import { StartIcon } from "../common/Icons";
import FreeAccountButton from "../common/FreeAccountButton";
import CardRequiredButton from "../common/CardRequiredButton";

const EstimaticHero = () => {
  return (
    <section className="main-container flex justify-between pt-[164px] text-white">
      <div>
        <h5 className="text-wallStreet text-xs font-semibold tracking-[-0.24px]">
          AI Estimating Software
        </h5>
        <h2 className="gradient-text main-heading">
          The first AI estimator worth trusting
        </h2>
        <p className="text-decemberSky mx-auto my-4 text-xs font-semibold sm:text-sm md:text-base md:font-medium lg:my-[26px] lg:text-lg">
          Estimatic references your costbook, live supplier pricing, and local
          labor rates to build estimates the same way you do. Just 100x faster.
        </p>
        <div className="flex w-full flex-wrap-reverse items-center gap-4 sm:gap-5">
          <CardReveal distance={50} className="w-full sm:w-fit" delay={0.6}>
            <div className="flex w-full flex-col items-center justify-center gap-1.5 px-2 sm:w-fit">
              <FreeAccountButton
                className="!hidden sm:!flex"
                text="Get started FREE"
                showIcon={false}
              />
              <FreeAccountButton
                showIcon={false}
                className="!flex w-full sm:!hidden"
                text="Download free app"
              />
              <CardRequiredButton
                className="text-wallStreet sm:text-secondary"
                text="No credit card required"
              />
            </div>
          </CardReveal>
          <CardReveal distance={50} delay={0.8}>
            <Link
              href=""
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
          <CardReveal distance={50} delay={1.0}>
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
      <div>
        <div className="flex items-center gap-2.5 rounded-full border border-[#686868] bg-[#272727] px-5 py-1.5">
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
        <Image src="" alt="" />
      </div>
    </section>
  );
};

export default EstimaticHero;
