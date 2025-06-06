"use client";
import AwardsTagsImg from "../common/AwardsTagsImg";
import CardRequiredButton from "../common/CardRequiredButton";
import { makeOperationList } from "../common/Helper";
import { ArrowIcon } from "../common/Icons";
import SoftwareUsed from "../common/SoftwareUsed";
import AwardBadgesBackground from "../hvca/AwardBadgesBackground";

export default function NeverLookBack() {
  return (
    <section className="no-scrollbar relative z-20 mt-[70px] w-full">
      <AwardBadgesBackground />
      <h3 className="sub-heading text-winterWay mb-[13px] text-center font-semibold">
        Teams that switch to Contractor+ never look back
      </h3>
      <p className="paragraph-text text-darkness text-center font-semibold">
        We help you get ahead, not just get by
      </p>
      <div className="main-container relative z-20 grid grid-cols-1 gap-3.5 pt-[100px] sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:pt-8">
        {makeOperationList.map((item, index) => (
          <SoftwareUsed key={index} item={item} />
        ))}
      </div>
      <AwardsTagsImg />
    </section>
  );
}
