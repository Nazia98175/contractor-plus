"use client";
import { PlansProps } from "@/types";
import React, { useState } from "react";
import { ScrollDownIcon } from "../common/Icons";
import PlanCard from "./PlanCard";
import PlanToggle from "./PlanToggle";
import PlanCard2 from "./PlanCard2";

const Plans: React.FC<PlansProps> = ({ onScroll, pricingPlans }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState<"annual" | "monthly" | "lifetime">(
    "monthly",
  );
  console.log(pricingPlans, "pricingPlans");

  return (
    <section className="relative z-20 mx-auto flex w-full max-w-[1092px] flex-col items-center justify-center px-2 pt-2 pb-[22px] sm:space-y-8 sm:pt-8 xl:px-14 xl:pt-12">
      {/* <PlanToggle
        isAnnual={isAnnual}
        setIsAnnual={setIsAnnual}
        title={pricingPlans?.title && pricingPlans?.title}
        toggleLabel={pricingPlans?.toggleLabel && pricingPlans?.toggleLabel}
        toggleNote={pricingPlans?.toggleNote && pricingPlans?.toggleNote}
      /> */}
      {/* <div className="flex w-fit justify-start gap-4 overflow-x-auto rounded-[500px] border border-[#D2D4D6] p-3 whitespace-nowrap sm:justify-center sm:overflow-x-visible">
        {["monthly", "annual", "lifetime"].map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab as "annual" | "monthly" | "lifetime")
            }
            className={`min-w-[100px] flex-1 rounded-[500px] px-4 py-1 text-base font-semibold transition-colors duration-300 sm:max-w-[200px] sm:px-6 ${
              activeTab === tab
                ? "bg-[#56C299] text-white"
                : "hover:bg-thickRed bg-gray-200 text-gray-600 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div> */}
      <div className="flex w-full justify-start gap-4 overflow-x-auto whitespace-nowrap sm:justify-center sm:overflow-visible">
        {/* Monthly Plan */}
        <div className="flex w-fit justify-start gap-4 rounded-[500px] border border-transparent p-2 sm:justify-center sm:border-[#D2D4D6]">
          <button
            onClick={() => setActiveTab("monthly")}
            className={`font-myriad min-w-fit rounded-[500px] px-4 py-1 text-base transition-colors duration-300 sm:px-6 sm:text-lg ${
              activeTab === "monthly"
                ? "bg-[#56C299] font-bold text-white"
                : "font-normal text-[#656C73]"
            }`}
          >
            Monthly Plan
          </button>

          {/* Annual Plan */}
          <button
            onClick={() => setActiveTab("annual")}
            className={`flex min-w-fit items-center justify-center gap-3 rounded-[500px] px-4 py-1 text-base transition-colors duration-300 sm:px-6 sm:text-lg ${
              activeTab === "annual"
                ? "bg-[#439777] font-bold text-white"
                : "font-normal text-[#656C73]"
            }`}
          >
            Annual Plan
            {activeTab === "annual" && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.47124 4.86225C4.73159 5.1226 4.73159 5.54471 4.47124 5.80506L2.94265 7.33366H14.6665C15.0347 7.33366 15.3332 7.63214 15.3332 8.00033C15.3332 8.36852 15.0347 8.66699 14.6665 8.66699H2.94265L4.47124 10.1956C4.73159 10.4559 4.73159 10.878 4.47124 11.1384C4.21089 11.3987 3.78878 11.3987 3.52843 11.1384L0.861766 8.47173C0.601417 8.21138 0.601417 7.78927 0.861766 7.52892L3.52843 4.86225C3.78878 4.6019 4.21089 4.6019 4.47124 4.86225Z"
                    fill="#CDF2E4"
                  />
                </svg>
                <i className="!text-base !font-semibold text-[#CDF2E4]">
                  Save up to Save 40%
                </i>
              </>
            )}
          </button>

          {/* Lifetime Plan */}
          <button
            onClick={() => setActiveTab("lifetime")}
            className={`flex min-w-fit items-center justify-center gap-3 rounded-[500px] px-4 py-1 text-base transition-colors duration-300 sm:px-6 sm:text-lg ${
              activeTab === "lifetime"
                ? "bg-[#34755C] font-bold text-white"
                : "font-normal text-[#656C73]"
            }`}
          >
            Lifetime
            {activeTab === "lifetime" && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2.90909 9.33333C8.41117 9.33333 12.9091 13.7313 12.9091 19.1111C12.9091 19.602 12.5021 20 12 20C6.49792 20 2 15.602 2 10.2222C2 9.7313 2.40701 9.33333 2.90909 9.33333ZM3.87766 11.1693C4.3231 14.8145 7.30264 17.7272 11.0305 18.1632C10.5847 14.5181 7.60569 11.6048 3.87766 11.1693Z"
                    fill="white"
                  />
                  <path
                    d="M6.11814 5.13003C6.37046 5.03174 6.65427 5.04898 6.89229 5.17691L6.89406 5.17778C6.89469 5.17811 6.89588 5.17819 6.89673 5.17865C6.89838 5.17954 6.90048 5.18077 6.90294 5.18212C6.90806 5.18491 6.91487 5.1887 6.92336 5.1934C6.94045 5.20287 6.96438 5.2162 6.99438 5.23333C7.05434 5.26757 7.139 5.31734 7.24474 5.38177C7.45628 5.51067 7.75276 5.69999 8.10145 5.94688C8.79644 6.43897 9.71228 7.16851 10.5846 8.11615C10.9205 8.48104 10.8903 9.04381 10.5171 9.37222C10.1439 9.70037 9.56916 9.67019 9.23337 9.30538C8.47468 8.48116 7.669 7.8366 7.04765 7.39566C7.0396 7.44045 7.02979 7.48597 7.0219 7.53281C6.88279 8.35938 6.77826 9.47672 6.90383 10.6639C6.95549 11.1522 6.59269 11.5891 6.09328 11.6396C5.59397 11.69 5.14707 11.3353 5.09541 10.847C4.9483 9.45659 5.07136 8.17354 5.22769 7.24462C5.3062 6.77815 5.39468 6.39556 5.46384 6.12656C5.49842 5.99207 5.52797 5.88534 5.54996 5.81059C5.56096 5.7732 5.57002 5.74315 5.57659 5.72205C5.57983 5.71164 5.58258 5.70313 5.58458 5.69687L5.58813 5.68646L5.58902 5.68472C5.67182 5.43174 5.86578 5.22835 6.11814 5.13003Z"
                    fill="white"
                  />
                  <path
                    d="M13.8182 12.8003V12C13.8182 10.2387 13.2006 8.60526 12.5558 7.38628C12.3648 7.02533 12.1735 6.70567 12 6.4349C11.8265 6.70567 11.6352 7.02533 11.4442 7.38628C10.7994 8.60526 10.1818 10.2387 10.1818 12V12.8003C10.1816 13.2911 9.77469 13.6892 9.27273 13.6892C8.77077 13.6892 8.36383 13.2911 8.36364 12.8003V12C8.36364 9.85029 9.10971 7.92824 9.82848 6.56944C10.1904 5.88529 10.553 5.33053 10.8263 4.94444C10.9633 4.75109 11.0784 4.59855 11.161 4.49306C11.2024 4.44031 11.2358 4.39888 11.2596 4.36979C11.2713 4.35547 11.281 4.3443 11.288 4.33594C11.2915 4.33177 11.2946 4.32816 11.2969 4.32552C11.2979 4.32425 11.2988 4.32296 11.2995 4.32205L11.3013 4.32031C11.3028 4.32113 11.332 4.34458 12 4.88889L11.3013 4.32031C11.474 4.1177 11.7302 4 12 4C12.2698 4 12.526 4.11684 12.6987 4.31944L12 4.88889C12.668 4.34458 12.6972 4.32026 12.6987 4.31944L12.7005 4.32205C12.7012 4.32296 12.7021 4.32425 12.7031 4.32552C12.7054 4.32816 12.7085 4.33177 12.712 4.33594C12.719 4.3443 12.7287 4.35547 12.7404 4.36979C12.7642 4.39888 12.7976 4.44031 12.839 4.49306C12.9217 4.59855 13.0367 4.75109 13.1737 4.94444C13.447 5.33053 13.8096 5.88529 14.1715 6.56944C14.8903 7.92824 15.6364 9.85029 15.6364 12V12.8003C15.6362 13.2911 15.2292 13.6892 14.7273 13.6892C14.2253 13.6892 13.8184 13.2911 13.8182 12.8003Z"
                    fill="white"
                  />
                  <path
                    d="M17.2292 5.12222C17.4449 5.04398 17.6844 5.04788 17.8986 5.13611C18.1432 5.23688 18.33 5.43757 18.4109 5.68472L17.5453 5.95556C18.4018 5.68755 18.4107 5.68455 18.4109 5.68472L18.4118 5.68646L18.4153 5.69687C18.4173 5.70312 18.4201 5.71165 18.4233 5.72205C18.4299 5.74315 18.4389 5.7732 18.4499 5.81059C18.4719 5.88534 18.5015 5.99205 18.536 6.12656C18.6052 6.39556 18.6937 6.77813 18.7722 7.24462C18.9285 8.17355 19.0516 9.45658 18.9045 10.847C18.8528 11.3353 18.406 11.69 17.9066 11.6396C17.4072 11.5891 17.0444 11.1522 17.0961 10.6639C17.2216 9.47671 17.1171 8.35938 16.978 7.53281C16.9683 7.47558 16.9559 7.42031 16.946 7.36615C16.3331 7.79076 15.5344 8.43001 14.7807 9.28976C14.454 9.66213 13.8807 9.70527 13.4996 9.38611C13.1184 9.06662 13.0744 8.50537 13.4011 8.13264C14.2795 7.13069 15.2035 6.39431 15.9073 5.90781C16.2602 5.6639 16.5602 5.48023 16.7756 5.3566C16.8833 5.29478 16.9704 5.24774 17.0321 5.2151C17.063 5.19882 17.0879 5.18602 17.1058 5.17691L17.1342 5.16302C17.1352 5.16256 17.1362 5.16164 17.1369 5.16128L17.1387 5.16042L17.2292 5.12222Z"
                    fill="white"
                  />
                  <path
                    d="M21.0909 9.33333C21.593 9.33333 22 9.7313 22 10.2222C22 15.602 17.5021 20 12 20C11.4979 20 11.0909 19.602 11.0909 19.1111C11.0909 13.7313 15.5888 9.33333 21.0909 9.33333ZM20.1214 11.1693C16.3938 11.6052 13.4144 14.5184 12.9686 18.1632C16.6968 17.7276 19.6759 14.8147 20.1214 11.1693Z"
                    fill="white"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-center gap-5 lg:flex-nowrap">
        {pricingPlans?.plans &&
          pricingPlans?.plans?.map((plan: any, index: number) => (
            <PlanCard
              plan={plan}
              isAnnual={isAnnual}
              key={index}
              index={index}
              activeTab={activeTab}
            />
          ))}
      </div>

      <p className="text-winterWay xs:max-w-[80%] mx-auto mt-6 text-center text-xs sm:mt-0">
        {pricingPlans?.disclaimer && pricingPlans?.disclaimer}
      </p>
      {/* <button
        onClick={onScroll}
        className="text-winterWay hover:bg-superSilver mb-6 flex h-8 items-center justify-center gap-1 rounded-md px-3 text-sm font-semibold tracking-[0.1px] duration-300 sm:mb-0"
      >
        {pricingPlans?.compareLabel && pricingPlans?.compareLabel}
        <ScrollDownIcon />
      </button> */}
    </section>
  );
};

export default Plans;
