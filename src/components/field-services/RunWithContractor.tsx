"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GreenArrowIcon, GreenDotIcon2, RedCrossIcon } from "../common/Icons";
import RunWithContractorMobile from "./RunWithContractorMobile";
import { TheServiceProps } from "../crmbussiness/KindAdorable";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";

const RunWithContractor: React.FC<TheServiceProps> = ({ kindAdorable }) => {
  return (
    <section className="relative z-20 bg-white pt-10 pb-9 sm:pt-9 sm:pb-14 md:pb-[75px]">
      {/* <TextAnimation animateOnScroll={true} delay={0.6}> */}
      <h3 className="section-heading crm-gradient mx-auto mb-8 hidden max-w-[950px] px-2 text-center sm:block md:mb-[44px]">
        {kindAdorable?.title}
      </h3>
      <h3 className="crm-gradient xs:text-[22px] mx-auto mb-8 max-w-[370px] px-2 text-center text-[19px] font-bold sm:hidden md:mb-[44px]">
        {kindAdorable?.title}
      </h3>
      {/* </TextAnimation> */}

      {/* Desktop view  */}
      <div className="mx-auto hidden w-full max-w-[1213px] space-y-5 px-4 md:block">
        <div className="grid grid-cols-2">
          <p className="font-myriad text-secondary text-center text-sm font-semibold sm:text-lg md:text-xl md:leading-[127%]">
            {kindAdorable?.headerLeft}
          </p>
          <p className="font-myriad text-oldMoney text-center text-sm font-bold sm:text-lg md:text-xl md:leading-[127%]">
            {kindAdorable?.headerRight}
          </p>
        </div>
        {kindAdorable?.features?.map((item: any, index: any) => (
          <CardReveal
            distance={50}
            delay={0.1}
            key={index}
            className="grid grid-cols-2 items-center gap-5 text-center lg:gap-2"
          >
            {/* Their way */}
            <div className="their-way flex items-center gap-3 rounded-[10px] px-3 py-2">
              <span>
                {/* Red Cross Icon */}
                <RedCrossIcon />
              </span>
              <p className="text-sangoPink text-start text-[17px] leading-[130%] font-medium">
                {item.competitorsNote}
              </p>
            </div>

            {/* Your way */}
            <div className="flex items-center gap-2">
              {/* Arrow Icon */}
              <span>
                <GreenArrowIcon />
              </span>
              <div className="your-way flex items-center gap-2 rounded-[10px] px-3 py-2">
                <span>
                  {/* Green Dot Icon */}
                  <GreenDotIcon2 />
                </span>
                <p className="text-majorelleGardens text-start text-[17px] leading-[130%] font-bold">
                  {item.ourProductNote}
                </p>
              </div>
            </div>
          </CardReveal>
        ))}
      </div>
      {/* Mobile-view  */}
      <div className="1xl:px-0 custom-pagination relative z-50 mx-auto block w-full max-w-[1181px] px-2 md:hidden">
        <RunWithContractorMobile
          their={kindAdorable?.headerLeft}
          your={kindAdorable?.headerRight}
          run_contractor={kindAdorable?.features}
        />
      </div>
    </section>
  );
};

export default RunWithContractor;
