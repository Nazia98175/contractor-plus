import React from "react";
import TextAnimation from "../common/TextAnimation";
import CommonFormField from "../common/CommonFormField";

const PricingHero = () => {
  return (
    <section className="relative px-2 pt-[137px] pb-[90px]">
      <img
        src="/images/webp/pricing.webp"
        alt=""
        className="absolute top-0 right-0 h-full w-full max-w-[200px]"
      />
      <div className="bg-darkKnight text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-xs font-semibold tracking-[-0.24px] backdrop-blur-lg">
        Plans and Pricing
      </div>
      <div className="relative mx-auto w-full max-w-[700px]">
        <TextAnimation animateOnScroll={false} delay={0}>
          <h2 className="main-heading mb-2 bg-[linear-gradient(180deg,_#FFFFFF_25%,_#0C1711_177.29%)] bg-clip-text text-center !font-extralight text-transparent max-sm:mx-auto sm:mb-4">
            Free to start, free to stay. Level up when you’re ready.
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={false} delay={0.4}>
          <p className="hero-description max-w-[600px] text-center !text-[#8A8E91]">
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
            mobileBtn="Get started FREE"
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
