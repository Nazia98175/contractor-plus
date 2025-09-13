import React from "react";
import Copy from "../common/Copy";
interface PartnerContractorProps {
  title: string;
  desc1: string;
  desc2: string;
}
const PartnerContractor: React.FC<PartnerContractorProps> = ({
  title,
  desc1,
  desc2,
}) => {
  return (
    <section className="mx-auto w-full max-w-[1224px] px-2 pt-5 pb-5 md:pt-16 md:pb-10">
      <Copy animateOnScroll={true}>
        <h3 className="text-mana section-heading text-center">
          {title || "Why partner with Contractor+?"}
        </h3>
      </Copy>
      <Copy animateOnScroll={true}>
        <p className="text-ironFixture pt-3 text-center text-base font-semibold md:text-lg lg:text-xl xl:text-2xl">
          {desc1 ||
            "Contractors build estimates, generate material lists, and move straight to ordering without leaving Contractor+. That means your products show up at the exact moment a buyer is specifying quantities and approving budgets—no extra portals, no friction. Our job is to reduce clicks between “need” and “ordered,” so you win more baskets with less effort."}
          <span className="flex pt-5">
            {desc2 ||
              "We already power fast quotes with live material pricing and one‑flow approvals/eSign, so adding your catalog completes the loop from estimate → order → job."}
          </span>
        </p>
      </Copy>
    </section>
  );
};

export default PartnerContractor;
