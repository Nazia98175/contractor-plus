import React from "react";
import { RealTimeServiceConnectorIcon } from "../common/Icons";
import { TheServiceProps } from "../crmbussiness/FieldService";
import ContractorWorkSlider from "./ContractorWorkSlider";

const ContractorWork: React.FC<TheServiceProps> = ({ fieldService, theme }) => {
  return (
    <section
      className={`relative z-20 overflow-visible bg-white ${theme || ""}`}
    >
      <RealTimeServiceConnectorIcon className="pointer-events-none absolute bottom-[48%] -left-[65%] -z-10 sm:bottom-[15%] sm:left-0 lg:bottom-[18%]" />

      {/* <Copy animateOnScroll={true} delay={0.84}> */}
      <h3 className="xs:text-2xl crm-gradient xs:max-w-[90%] mx-auto px-2 text-center text-xl font-bold sm:hidden xl:px-0">
        {(() => {
          const title = fieldService?.title || "";
          const words = title.trim().split(" ");
          const lastTwo = words.slice(-2).join(" ");
          const rest = words.slice(0, -2).join(" ");
          return (
            <>
              {rest} <>{lastTwo}</>
            </>
          );
        })()}
      </h3>
      <h3 className="section-heading crm-gradient mx-auto hidden max-w-[1029px] px-2 text-center sm:block">
        {(() => {
          const title = fieldService?.title || "";
          const words = title.trim().split(" ");
          const lastTwo = words.slice(-2).join(" ");
          const rest = words.slice(0, -2).join(" ");
          return (
            <>
              {rest} <>{lastTwo}</>
            </>
          );
        })()}
      </h3>
      {/* </Copy> */}

      <ContractorWorkSlider sliderData={fieldService?.solutionCards} />
    </section>
  );
};

export default ContractorWork;
