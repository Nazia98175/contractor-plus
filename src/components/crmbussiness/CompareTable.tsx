import React from "react";
import { BlackLogo, CheckIcon, CloseIcon } from "../common/Icons";
import { CompareFeature } from "@/types";

interface CompareTableProps {
  headerLeft: string;
  compareFeatures: CompareFeature[];
  headerRight: string;
  slug?: string;
}

const CompareTable: React.FC<CompareTableProps> = ({
  compareFeatures,
  headerLeft,
  headerRight,
  slug,
}) => {
  return (
    <table className="min-w-full text-left whitespace-nowrap">
      <thead>
        <tr
          className={`font-myriad lg:text-xl" divide-x md:text-lg ${slug === "estimate" ? "divide-coconut" : "divide-decemberSky"}`}
        >
          <th className="text-wallStreet w-1/3 p-3 text-center font-bold lg:p-5">
            {headerLeft}
          </th>
          <th className="text-wallStreet w-1/3 p-1 text-center font-semibold sm:p-3 lg:p-5">
            <div className="flex items-center justify-center">
              <span className="max-w-24 min-w-20 lg:max-w-[148px]">
                <BlackLogo />
              </span>
            </div>
          </th>
          <th className="font-myriad text-secondary w-1/3 p-3 text-center text-lg font-semibold lg:p-5 xl:text-2xl">
            {headerRight}
          </th>
        </tr>
      </thead>
      <tbody>
        {compareFeatures?.map((feature, index) => (
          <tr
            key={index}
            className={` ${slug === "estimate" ? "divide-coconut border-coconut text-secondary" : "divide-decemberSky border-decemberSky text-winterWay"} font-jakarta divide-x border-t text-xs font-semibold sm:text-sm lg:text-base`}
          >
            <td className="text-winterWay p-2.5 lg:px-5 lg:py-3">
              {feature.featureName}
            </td>
            <td className="p-2.5 lg:px-5 lg:py-3">
              <div className="flex items-center justify-center">
                {feature.ourProduct == "available" ? (
                  <CheckIcon
                    width={24}
                    height={24}
                    className="max-w-5 min-w-5 md:max-w-6 md:min-w-6"
                  />
                ) : (
                  <CloseIcon width={24} height={24} />
                )}
              </div>
            </td>
            <td className="w-full px-5 py-3">
              <div className="flex items-center justify-center">
                {feature.competitorsNote !== null ? (
                  // <CheckIcon
                  //   width={24}
                  //   height={24}
                  //   className="max-w-5 min-w-5 md:max-w-6 md:min-w-6"
                  // />
                  <i>{feature?.competitorsNote}</i>
                ) : (
                  <span className="max-w-5 min-w-5 md:max-w-6 md:min-w-6">
                    <CloseIcon width={24} height={24} />
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
