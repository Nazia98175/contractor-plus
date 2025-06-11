"use client";
import AwardsTagsImg from "../common/AwardsTagsImg";
import CardRequiredButton from "../common/CardRequiredButton";
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
      <div className="mt-10 flex flex-col items-center gap-2 px-2 text-center">
        <button className="bg-red-linear primary-btn h-10">
          <span className="flex">Get started FREE</span>{" "}
          <span>
            <ArrowIcon fill="#fff" />
          </span>
        </button>
        {/* <CardRequiredButton className="text-winterWay" /> */}
      </div>
      <AwardsTagsImg />
    </section>
  );
}
