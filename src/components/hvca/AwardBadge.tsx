"use client";
import AwardsTagsImg from "../common/AwardsTagsImg";
import CardRequiredButton from "../common/CardRequiredButton";
import FreeAccountButton from "../common/FreeAccountButton";
import { makeOperationList } from "../common/Helper";
import { ArrowIcon } from "../common/Icons";
import SoftwareUsed from "../common/SoftwareUsed";
import AwardBadgesBackground from "./AwardBadgesBackground";

export default function AwardBadges() {
  return (
    <section className="no-scrollbar relative z-20 w-full">
      <AwardBadgesBackground />
      <div className="main-container relative z-20 grid grid-cols-1 gap-3.5 pt-[100px] sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:pt-8">
        {makeOperationList.map((item, index) => (
          <SoftwareUsed key={index} item={item} />
        ))}
      </div>
      <div className="mt-8 hidden flex-col items-center gap-2 px-2 text-center md:flex">
        <FreeAccountButton text={"Get started FREE"} />
        <CardRequiredButton
          className="text-winterWay"
          text={"No Credit Card Required"}
        />
      </div>
      <AwardsTagsImg />
    </section>
  );
}
