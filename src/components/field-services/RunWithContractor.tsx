"use client";
import Image from "next/image";
import CardReveal from "../common/CardReveal";
import { GreenArrowIcon, GreenDotIcon2, RedCrossIcon } from "../common/Icons";
import { TheServiceProps } from "../crmbussiness/KindAdorable";
import RunWithContractorMobile from "./RunWithContractorMobile";

const RunWithContractor: React.FC<TheServiceProps> = ({
  kindAdorable,
  variant = "light",
  icon = false,
}) => {
  const variantClasses = {
    light: {
      title: "crm-gradient max-w-[950px]",
      description: "crm-gradient",
      theirwaybg: "their-way",
      yourwaybg: "your-way",
      copyright: "text-wallStreet",
      powered: "text-wallStreet",
      background: "bg-white",
    },
    dark: {
      title: "service-text",
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
      <h3
        className={`section-heading mx-auto hidden px-2 text-center sm:block ${styles.title}`}
      >
        {kindAdorable?.title}
      </h3>
      <h3
        className={`xs:text-[22px] mx-auto max-w-[370px] px-2 text-center text-[19px] font-bold sm:hidden ${styles.description}`}
      >
        {kindAdorable?.title}
      </h3>
      <p className="hero-description mt-3 text-center">
        {" "}
        {kindAdorable?.subTitle}
      </p>

      {/* Desktop View */}
      <div className="mx-auto mt-8 hidden w-full max-w-[1213px] space-y-5 px-4 md:mt-[44px] md:block xl:mt-[58px]">
        <div className="grid grid-cols-2">
          <p className="font-myriad text-secondary text-center text-sm font-semibold sm:text-lg md:text-xl md:leading-[127%]">
            {kindAdorable?.headerLeft}
          </p>
          {icon ? (
            <Image
              src="/images/svg/estimatic.svg"
              alt="Estimatic "
              className="mx-auto"
              width={120}
              height={20}
            />
          ) : (
            <p className="font-myriad text-oldMoney text-center text-sm font-bold sm:text-lg md:text-xl md:leading-[127%]">
              {kindAdorable?.headerRight}
            </p>
          )}
        </div>
        {kindAdorable?.features?.map((item: any, index: number) => (
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
                {item.competitorsNote}
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
                  {item.ourProductNote}
                </p>
              </div>
            </div>
          </CardReveal>
        ))}
      </div>

      {/* Mobile View */}
      <div className="1xl:px-0 custom-pagination relative z-50 mx-auto block w-full max-w-[1181px] px-2 md:hidden">
        <RunWithContractorMobile
          their={kindAdorable?.headerLeft}
          your={kindAdorable?.headerRight}
          run_contractor={kindAdorable?.features}
          style={styles}
          icon={icon}
        />
      </div>
    </section>
  );
};

export default RunWithContractor;
