"use client";
import Image from "next/image";
import CardReveal from "../common/CardReveal";
import { GreenArrowIcon, GreenDotIcon2, RedCrossIcon } from "../common/Icons";
import RunWithContractorMobile from "./RunWithContractorMobile";
import Copy from "../common/Copy";
import { TheServiceProps } from "@/types";

const RunWithContractor: React.FC<TheServiceProps> = ({
  kindAdorable,
  variant = "light",
  icon = false,
}) => {
  const variantClasses = {
    light: {
      title: "crm-gradient",
      description: "crm-gradient",
      theirwaybg: "their-way",
      yourwaybg: "your-way",
      copyright: "text-wallStreet",
      powered: "text-wallStreet",
      background: "bg-white",
    },
    dark: {
      title: "gradient-white",
      description: "service-text",
      theirwaybg: "estimate-software",
      yourwaybg: "your-way",
      copyright: "text-secondary",
      powered: "text-secondary",
      background: "bg-transparent",
    },
  };
  const styles = variantClasses[variant];

  return (
    <section
      className={`relative z-20 pt-10 pb-9 sm:pt-9 sm:pb-14 md:pb-[75px] ${styles.background}`}
    >
      {/* <Copy animateOnScroll={true}> */}
      <h3
        className={`section-heading mx-auto hidden w-full max-w-[1020px] px-2 text-center sm:block ${styles.title}`}
      >
        {kindAdorable?.title}
      </h3>
      <h3
        className={`xs:text-[22px] mx-auto max-w-[370px] px-2 text-center text-[19px] font-bold sm:hidden ${styles.description}`}
      >
        {kindAdorable?.title}
      </h3>
      {/* </Copy> */}

      <Copy animateOnScroll={true}>
        <p className="text-decemberSky mx-auto mt-3 max-w-[80%] text-center">
          {kindAdorable?.subTitle}
        </p>
      </Copy>
      {/* Desktop View */}
      <div className="mx-auto mt-8 hidden w-full max-w-[1213px] space-y-5 px-4 md:mt-[44px] md:block xl:mt-[58px]">
        <div className="grid grid-cols-2">
          <p className="font-myriad text-secondary text-center text-sm font-semibold sm:text-lg md:text-xl md:leading-[127%]">
            {kindAdorable?.comaprisons?.[0]?.title}
          </p>
          {icon ? (
            <Image
              src="/images/svg/estimatic.svg"
              alt="Estimatic "
              className="mx-auto w-full max-w-24 object-center sm:max-w-[120px]"
              width={120}
              height={20}
            />
          ) : (
            <p className="font-myriad text-oldMoney text-center text-sm font-bold sm:text-lg md:text-xl md:leading-[127%]">
              {kindAdorable?.comaprisons?.[1]?.title}
            </p>
          )}
        </div>
        {kindAdorable?.comaprisons?.[0]?.comparisonList?.map(
          (item: any, index: number) => (
            <CardReveal
              distance={50}
              delay={0.1}
              key={index}
              className="grid grid-cols-2 items-center gap-5 text-center lg:gap-2"
            >
              {/* Their Way */}
              <div
                className={`their-way flex max-w-[570px] items-center gap-3 rounded-[10px] px-3 py-2 ${styles.theirwaybg}`}
              >
                <span>
                  <RedCrossIcon />
                </span>
                <p className="text-sangoPink text-start text-sm leading-[130%] font-medium md:text-[17.5px]">
                  {item.details}
                </p>
              </div>
              {/* Your Way */}
              <div className="flex items-center gap-2">
                <span>
                  <GreenArrowIcon />
                </span>
                <div
                  className={`your-way flex items-center gap-2 rounded-[10px] px-3 py-2 ${styles.yourwaybg}`}
                >
                  <span>
                    <GreenDotIcon2 />
                  </span>
                  <p className="text-majorelleGardens text-start text-sm leading-[130%] font-bold md:text-[17.5px]">
                    {
                      kindAdorable?.comaprisons?.[0]?.comparisonList[index]
                        ?.details
                    }
                  </p>
                </div>
              </div>
            </CardReveal>
          ),
        )}
      </div>
      {/* Mobile View */}
      <div className="1xl:px-0 custom-pagination relative z-50 mx-auto block w-full max-w-[1181px] px-2 md:hidden">
        <RunWithContractorMobile
          their={kindAdorable?.comaprisons?.[0]?.title}
          your={kindAdorable?.comaprisons?.[1]?.title}
          run_contractor={kindAdorable?.comaprisons}
          style={styles}
          icon={icon}
        />
      </div>
    </section>
  );
};
export default RunWithContractor;
