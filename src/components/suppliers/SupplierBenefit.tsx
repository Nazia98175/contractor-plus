"use client";
import Copy from "../common/Copy";
import SupplierBenefitList from "./SupplierBenefitList";
import { useScrollDotAnimation } from "@/hooks/useScrollDotAnimation";

const SupplierBenefit = (cardsData: any) => {
  const { sectionRef, dotRef } = useScrollDotAnimation({
    delay: 2.6,
  });

  return (
    <section className="relative mt-[65px] md:mt-[90px]">
      <div className="main-container">
        <Copy delay={0.1}>
          <h4 className="section-heading gradient-text text-center">
            How suppliers benefit
          </h4>
        </Copy>

        <div ref={sectionRef} className="relative mt-10 sm:mt-[51px]">
          {/* Gray line */}
          <span className="bg-wallStreet absolute top-0 left-1/2 z-[1] block h-[97%] w-[1px] translate-x-[-50%]"></span>
          {/* Red dot */}
          <span
            ref={dotRef}
            className="from-redPigment to-netherworld absolute top-0 left-1/2 z-[2] block h-[18px] w-[1px] translate-x-[-50%] rounded-full bg-gradient-to-br opacity-0 will-change-transform"
          />

          <SupplierBenefitList cardsData={cardsData} />
        </div>
      </div>
    </section>
  );
};

export default SupplierBenefit;
