"use client";
import AwardsTagsImg from "../common/AwardsTagsImg";
import SoftwareUsed from "../common/SoftwareUsed";
import { Props } from "../crmbussiness/TeamsUsingContractor";
import Image from "next/image";

const NeverLookBack: React.FC<Props> = ({ data }) => {
  return (
    <section className="no-scrollbar relative z-10 w-full bg-white pt-[50px] sm:pt-14 md:pt-[70px]">
      <div className="pointer-events-none absolute top-[-86px] left-[-20%] z-50 h-[150px] w-[140%] bg-white blur-[34px]"></div>
      <div className="absolute -top-0.5 z-[2] hidden h-3 w-full bg-white sm:block"></div>
      <Image
        width={1440}
        height={200}
        priority
        sizes="(max-width: 768px) 1440px, min(768px, 1440px)"
        src="/images/webp/red-linear-bg.webp"
        className="absolute -top-0 left-0 -z-[3] hidden h-[124%] w-full bg-cover sm:block"
        alt="Red Lineaar background"
      />
      <Image
        width={1440}
        height={200}
        priority
        sizes="(max-width: 768px) 1440px, min(768px, 1440px)"
        src="/images/webp/red-linear-mobile.webp"
        className="absolute top-0 left-0 -z-[5] block h-[110%] w-full bg-top sm:hidden"
        alt="Red Lineaar background"
      />

      <h3 className="sub-heading text-winterWay mb-[13px] hidden text-center font-semibold sm:block">
        {data?.title}
      </h3>
      <h3 className="crm-gradient xs:text-[22px] xs:max-w-[93%] mx-auto mb-[9px] block max-w-[88%] text-center text-[19px] font-extrabold sm:hidden sm:max-w-[330px]">
        {data?.title}
      </h3>
      <p className="paragraph-text gradient-text-2 text-center leading-[124%] sm:hidden">
        {data?.sub_title}
      </p>
      <p className="paragraph-text text-darkness hidden text-center leading-[124%] font-semibold sm:block">
        {data?.sub_title}
      </p>
      <div className="main-container relative z-20 flex flex-wrap items-center justify-center gap-3.5 pt-7 pb-10 sm:gap-6 sm:pt-10 md:pt-8 xl:grid xl:grid-cols-3">
        {data?.cards?.map((item: any, index: any) => (
          <SoftwareUsed
            key={index}
            item={item}
            icons={data?.images}
            index={index}
            titleColor="text-white sm:text-winterWay"
            paragraphColor="text-decemberSky sm:text-white"
          />
        ))}
      </div>
      <AwardsTagsImg />
    </section>
  );
};
export default NeverLookBack;
