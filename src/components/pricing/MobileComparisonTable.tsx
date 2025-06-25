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
        <div
          key={gIndex}
          className="mb-6 rounded-lg border border-gray-300 bg-white shadow-sm"
        >
          <div className="text-winterWay mb-2 flex items-center gap-2 text-base font-semibold">
            <span>{group.title}</span>
          </div>

          {group.features.map((feature, fIndex) => {
            const tooltipId = `tooltip-${group.key}-${fIndex}`;
            return (
              <div
                key={fIndex}
                className="border-decemberSky flex flex-col items-center justify-between border-t p-2 text-sm sm:text-base"
              >
                <div className="flex items-center justify-center gap-1">
                  <span className="text-wallStreet font-medium">
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
                  <Tooltip id={tooltipId} place="top" />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  {feature.available.map((value, i) => (
                    <div
                      key={i}
                      className="flex h-5 w-5 items-center justify-center"
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <CheckIcon width={20} height={20} />
                        ) : (
                          <CloseIcon width={20} height={20} />
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
