import React from "react";
import TextAnimation from "../common/TextAnimation";
import CommonFormField from "../common/CommonFormField";
import CloudsAnimation from "../common/CloudsAnimation";

const PricingHero = () => {
  return (
    <section className="relative px-2 pt-[110px] pb-[150px] sm:pt-[137px] sm:pb-[200px]">
      <div className="absolute -bottom-[12%] left-1/2 z-10 h-16 w-[110%] -translate-x-1/2 bg-white blur-lg md:-bottom-[11%] lg:-bottom-[8%]"></div>
      <CloudsAnimation className="-bottom-[4%] !-z-0" />
      <img
        src="/images/webp/pricing.webp"
        alt=""
        className="absolute top-0 right-0 -z-10 hidden h-full w-full max-w-[200px] xl:block"
      />
      <div className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
        Plans and Pricing
      </div>
      <div className="relative mx-auto w-full max-w-[700px]">
        <TextAnimation animateOnScroll={false} delay={0}>
          <h2 className="main-heading mb-4 hidden bg-[linear-gradient(180deg,_#FFFFFF_25%,_#0C1711_177.29%)] bg-clip-text text-center !font-extralight text-transparent max-sm:mx-auto sm:block md:mt-0">
            Free to start, free to stay. Level up when you’re ready.
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={false} delay={0}>
          <h2 className="main-heading mt-1.5 mb-4 bg-[linear-gradient(276.25deg,_rgba(245,25,30,0.3)_-11.28%,_rgba(255,255,255)_45%)] bg-clip-text text-center !font-medium text-transparent sm:hidden">
            Free to start, free to stay. Level up when you’re ready.
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={false} delay={0.4}>
          <p className="hero-description max-w-[600px] text-center text-[#818181] sm:!text-[#8A8E91]">
            What the other guys charge extra for, Contractor+ makes it standard.{" "}
            Upgrade when you need more firepower to grow.
          </p>
        </TextAnimation>
        <div className="pt-5 sm:pt-7">
          <CommonFormField
            title=""
            sub_title=""
            ncc="No credit card required"
            placeholder="Your email"
            createBtn="Get started FREE"
            mobileBtn="Download FREE App"
            showTitle={false}
            variant="secondary"
            showDescription={false}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
