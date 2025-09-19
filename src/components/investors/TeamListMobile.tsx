import React from "react";
import { CloseIcon, GreenCrossIcon } from "../common/Icons";

type TableMobileItem = {
  name: string;
  arrayOfIcons: { icon: boolean }[];
};

const TeamListMobile: React.FC<{ data?: TableMobileItem[] }> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-white">No data available</p>;
  }

  return (
    <div className="border-winterWay mx-auto mt-[34px] w-full max-w-[900px] rounded-lg border text-white">
      {/* Header Row */}
      <div className="grid grid-cols-3 pb-3 text-center font-semibold">
        {data.map((col, index) => (
          <div
            key={index}
            className={`flex items-center justify-center p-2 text-start text-xs font-semibold ${
              index === 0
                ? "font-semibold text-white"
                : "text-wallStreet font-bold"
            } ${index === 1 ? "border-winterWay border-x" : ""}`}
          >
            {col.name}
          </div>
        ))}
      </div>

      {/* Features Values */}
      {data[0]?.arrayOfIcons?.map((_, featureIndex) => (
        <div key={featureIndex} className="text-center">
          <div className="grid grid-cols-3 py-3">
            {data.map((col, colIndex) => {
              const iconValue = col?.arrayOfIcons?.[featureIndex]?.icon;
              return (
                <div
                  key={colIndex}
                  className={`flex items-center justify-center ${
                    colIndex === 1 ? "border-winterWay border-x" : ""
                  }`}
                >
                  {iconValue ? (
                    <span className="flex w-full max-w-[23px] sm:max-w-[14px]">
                      <GreenCrossIcon />
                    </span>
                  ) : (
                    <CloseIcon width={24} height={24} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamListMobile;
