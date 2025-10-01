"use client";
import Copy from "../common/Copy";
import { useScrollDotAnimation } from "@/hooks/useScrollDotAnimation";
import EveryMile from "./EveryMile";
interface SupplierBenefitProps {
  title?: string;
  decs?: string;
  list: {
    text: string;
    desc: string;
  }[];
}
const ManageEveryMile: React.FC<SupplierBenefitProps> = ({
  title,
  list,
  decs,
}) => {
  const { sectionRef, dotRef } = useScrollDotAnimation({
    delay: 2.6,
  });

  return (
    <section className="relative mt-[65px] md:mt-[90px]">
      <div className="main-container">
        <Copy delay={0.1}>
          <h4 className="section-heading gradient-text-2 text-center">
            {title || "We manage every mile from drive to reimbursement"}
          </h4>
        </Copy>
        <Copy delay={0.2}>
          <p className="text-wallStreet pt-4 text-center text-base font-medium">
            {decs}
          </p>
        </Copy>
        <div ref={sectionRef} className="relative mt-10 sm:mt-[51px]">
          {/* Gray line */}
          <span className="bg-wallStreet absolute top-0 left-1/2 z-[1] block h-[97%] w-[1px] translate-x-[-50%]"></span>
          {/* Red dot */}
          <span
            ref={dotRef}
            className="from-redPigment to-netherworld absolute top-0 left-1/2 z-[2] block h-[18px] w-[1px] translate-x-[-50%] rounded-full bg-gradient-to-br opacity-0 will-change-transform"
          />
          <EveryMile list={list} />
        </div>
      </div>
    </section>
  );
};

export default ManageEveryMile;
