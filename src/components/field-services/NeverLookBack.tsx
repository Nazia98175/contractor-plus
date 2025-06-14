"use client";
import AwardsTagsImg from "../common/AwardsTagsImg";
import { swichToContractordata } from "../common/Helper";
import SoftwareUsed from "../common/SoftwareUsed";

export default function NeverLookBack() {
  return (
    <section className="no-scrollbar relative z-10 w-full bg-white pt-[70px]">
      <div className="absolute -top-1 z-[2] h-3 w-full bg-white"></div>
      <img
        src="/images/webp/red-linear-bg.webp"
        className="absolute -top-0 left-0 -z-[3] h-[124%] w-full bg-cover"
        alt="Red Lineaar background"
      />

      <h3 className="sub-heading text-winterWay mb-[13px] text-center font-semibold">
        Teams that switch to Contractor+ never look back
      </h3>
      <p className="paragraph-text text-darkness text-center leading-[124%] font-semibold">
        We help you get ahead, not just get by
      </p>
      <div className="main-container relative z-20 grid grid-cols-1 gap-3.5 pt-[100px] sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:pt-8">
        {swichToContractordata.map((item, index) => (
          <SoftwareUsed key={index} item={item} />
        ))}
      </div>
      <AwardsTagsImg />
    </section>
  );
}
