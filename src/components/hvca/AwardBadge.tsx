"use client";
import AwardsTagsImg from "../common/AwardsTagsImg";
import CardRequiredButton from "../common/CardRequiredButton";
import FreeAccountButton from "../common/FreeAccountButton";
import { makeOperationList } from "../common/Helper";
import SoftwareUsed from "../common/SoftwareUsed";

export default function AwardBadges() {
  return (
    <section className="no-scrollbar relative w-full">
      <div className="-top-0.5 left-0 h-1.5 w-full bg-white"></div>
      <img
        src="/images/webp/red-linear-bg.webp"
        className="absolute -top-0 left-0 -z-[3] hidden h-[124%] w-full bg-cover md:block"
        alt="Red Lineaar background"
      />
      <img
        src="/images/webp/red-linear-mobile.webp"
        className="absolute top-0 left-0 -z-[5] block h-[110%] w-full bg-top md:hidden"
        alt="Red Lineaar background"
      />
      <div className="main-container relative z-20 flex grid-cols-1 flex-wrap items-center justify-center gap-3.5 pt-[100px] sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:pt-0 xl:grid xl:grid-cols-3">
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
