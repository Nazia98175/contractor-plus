import React from "react";
import { InfoIcon } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { comparisonTableData } from "../common/Helper";
import { CheckIcon, CloseIcon } from "../common/Icons";

interface Props {
  openStates: Record<string, boolean>;
  toggleCollapse: (key: string) => void;
}

const MobileComparisonTable: React.FC<Props> = () => {
  return (
    <div className="space-y-4">
      {comparisonTableData.map((group, gIndex) => (
        <div key={gIndex} className="mb-6 overflow-hidden rounded-lg">
          <h4 className="text-winterWay bg-superSilver mb-2 flex items-center gap-2 px-2 py-2.5 text-base font-semibold tracking-[0.1px]">
            {group.title}
          </h4>

          {group.features.map((feature, fIndex) => {
            const tooltipId = `tooltip-${group.key}-${fIndex}`;
            return (
              <div
                key={fIndex}
                className="border-superSilver bg-doctor flex flex-col items-center justify-between gap-2 border-b p-2 text-base"
              >
                <div className="flex items-center justify-center gap-1">
                  <span className="text-winterWay font-medium tracking-[0.1px]">
                    {feature.name}
                  </span>
                  <span
                    data-tooltip-id={tooltipId}
                    data-tooltip-content={feature.description}
                  >
                    <InfoIcon
                      className="cursor-pointer text-sky-700"
                      size={16}
                    />
                  </span>
                  <Tooltip
                    className="max-w-[280px] text-center text-[10px] leading-snug"
                    id={tooltipId}
                    place="top"
                  />
                </div>

                <div className="grid w-full grid-cols-3 gap-4 rounded-sm bg-white py-[5px]">
                  {feature.available.map((value, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-center ${
                        i !== feature.available.length - 1
                          ? "border-superSilver border-r"
                          : ""
                      }`}
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <CheckIcon width={22} height={22} />
                        ) : (
                          <CloseIcon width={22} height={22} />
                        )
                      ) : (
                        <span className="text-wallStreet text-sm">{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-4 flex gap-2 px-2 pb-2">
            <button className="rounded border border-[#d82c0d] px-4 py-2 text-sm font-semibold text-[#d82c0d] transition hover:bg-[#fef1f0]">
              Upgrade To PRO
            </button>
            <button className="rounded bg-[#fef1f0] px-4 py-2 text-sm font-semibold text-[#d82c0d] transition hover:bg-[#fbe4e2]">
              Upgrade To PRO Team
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileComparisonTable;
