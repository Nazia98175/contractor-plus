import React from "react";
import { BlackLogo, CheckIcon, CloseIcon } from "../common/Icons";
import { CompareFeature } from "@/types";

interface CompareTableProps {
  headerLeft: string;
  compareFeatures: CompareFeature[];
  headerRight: string;

}

const CompareTable: React.FC<CompareTableProps> = ({ compareFeatures , headerLeft , headerRight }) => {
  return (
    <table className="min-w-full text-left whitespace-nowrap">
      <thead>
        <tr className="md:text-lg lg:text-xl font-myriad divide-x divide-decemberSky">
          <th className="p-3 lg:p-5 w-1/3 font-bold text-center text-wallStreet">
           {headerLeft}
          </th>
          <th className="p-1 sm:p-3 lg:p-5 w-1/3 text-center font-semibold  text-wallStreet">
            <div className="flex justify-center items-center">
              <span className="max-w-24 min-w-20 lg:max-w-[148px]">
                <BlackLogo />
              </span>
            </div>
          </th>
          <th className="p-3 lg:p-5 w-1/3 font-myriad text-lg xl:text-2xl text-center font-semibold text-secondary">
            {headerRight}
          </th>
        </tr>
      </thead>
      <tbody>
        {compareFeatures.map((feature, index) => (
          <tr
            key={index}
            className={` border-decemberSky divide-x divide-decemberSky text-winterWay border-t font-jakarta font-semibold text-xs sm:text-sm lg:text-base`}
          >
            <td className="lg:px-5 p-2.5 lg:py-3">{feature.featureName}</td>
            <td className="lg:px-5 p-2.5 lg:py-3 ">
              <div className="flex justify-center items-center">
                {feature.ourProduct == "available" ? (
                  <CheckIcon
                    width={24}
                    height={24}
                    className="max-w-5 min-w-5 md:max-w-6 md:min-w-6"
                  />
                ) : (
                  <span className="max-w-5 min-w-5 md:max-w-6 md:min-w-6">
                    <CloseIcon />
                  </span>
                )}
              </div>
            </td>
            <td className="px-5 py-3 w-full">
              <div className="flex items-center justify-center">
                {feature.othersHave ? (
                  <CheckIcon
                    width={24}
                    height={24}
                    className="max-w-5 min-w-5 md:max-w-6 md:min-w-6"
                  />
                ) : (
                  <span className="max-w-5 min-w-5 md:max-w-6 md:min-w-6">
                    <CloseIcon />
                  </span>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompareTable;
