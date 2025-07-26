import { PlansProps } from "@/types";
import Image from "next/image";
import React, { useEffect } from "react";
import CloudsAnimation from "../common/CloudsAnimation";
import CommonFormField from "../common/CommonFormField";
import Copy from "../common/Copy";
import { DownScrollIcon } from "../common/Icons";
import gsap from "gsap";

const PricingHero: React.FC<PlansProps> = ({ onScroll }) => {
  useEffect(() => {
    setTimeout(() => {
      gsap.to("#pricing-page-view-port-screen", {
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
    }, 500);
  }, []);

  return (
    <section
      id="pricing-page-view-port-screen"
      className="font-jakarta relative px-2 pt-[110px] pb-[150px] sm:pt-[137px] xl:pb-24"
    >
      <div className="xs:-bottom-[12%] absolute -bottom-[10%] left-1/2 z-10 h-16 w-[110%] -translate-x-1/2 bg-white blur-lg md:-bottom-[11%]"></div>
      <CloudsAnimation className="-bottom-[4%] !-z-0" />
      <Image
        src="/images/webp/pricing.webp"
        alt="Pricing Hero"
        height={1000}
        width={200}
        priority
        className="absolute top-0 right-0 -z-10 hidden h-full w-full max-w-[200px] object-contain xl:block"
      />
      <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
        Plans and Pricing
      </h4>
      <div className="relative mx-auto w-full max-w-[740px]">
        <Copy delay={0.2}>
          <h2 className="xs:text-[28px] gradient-white font-jakarta mb-4 text-center text-[26px] leading-[127%] font-extralight text-transparent sm:text-4xl lg:text-5xl xl:text-[52px]">
            Free to start, free to stay. <br /> Level up when you’re ready.
          </h2>
        </Copy>

        <Copy delay={0.3}>
          <p className="hero-description !text-trolleyGrey text-center">
            What the other guys charge extra for, Contractor+ offers without
            hidden charges. Upgrade when you need more firepower to grow.
          </p>
        </Copy>
        <div className="pt-5 xl:pt-7">
          <CommonFormField
            title=""
            subTitle=""
            ncc="No credit card required"
            placeholder="Your email"
            createBtn="Get started FREE"
            mobileBtn="Download FREE App"
            showTitle={false}
            variant="secondary"
            showDescription={false}
          />
        </div>

        <button
          onClick={onScroll}
          className="text-pantone mx-auto mt-12 hidden w-fit duration-300 hover:text-white xl:flex"
        >
          <DownScrollIcon />
        </button>
      </div>
    </section>
  );
};

export default PricingHero;
