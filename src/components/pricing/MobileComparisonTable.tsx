import React from "react";
import { ChevronDown } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { comparisonTableData } from "../common/Helper";
import { CheckIcon, CloseIcon, TooltipIcon } from "../common/Icons";
import PlanButton from "./PlanButton";
import AnimateHeight from "react-animate-height";

interface Props {
  openKey: string | null;
  toggleCollapse: (key: string) => void;
}

const MobileComparisonTable: React.FC<Props> = ({
  openKey,
  toggleCollapse,
}) => {
  return (
    <div className="space-y-2.5">
      {comparisonTableData.map((group) => {
        const isOpen = openKey === group.key;

        return (
          <div key={group.key} className="overflow-hidden rounded-lg">
            <div
              onClick={() => toggleCollapse(group.key)} // ✅ Toggles this group
              className="bg-superSilver xs:px-4 flex cursor-pointer items-center justify-between gap-2 px-2 py-2.5"
            >
              <h4 className="text-winterWay text-base font-semibold tracking-[0.1px]">
                {group.title}
              </h4>
              <span
                className={`transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                } transition-transform`}
              >
                <ChevronDown width={20} color="#656C73" />
              </span>
            </div>

            <AnimateHeight duration={300} height={isOpen ? "auto" : 0}>
              {" "}
              <div>
                {group.features.map((feature, fIndex) => {
                  const tooltipId = `tooltip-${group.key}-${fIndex}`;
                  return (
                    <div
                      key={fIndex}
                      className="border-superSilver bg-doctor flex flex-col items-center justify-between gap-2 border-b p-2 text-base"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-winterWay font-medium tracking-[0.1px]">
                          {feature.name}
                        </span>
                        <button
                          data-tooltip-id={tooltipId}
                          data-tooltip-content={feature.description}
                        >
                          <TooltipIcon />
                        </button>
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
                              <span className="text-winterWay xs:text-xs text-center text-[10px]">
                                {value}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                <div className="border-decemberSky bg-doctor xs:p-4 flex justify-center gap-2 border-t p-2">
                  <PlanButton
                    cta=" Upgrade To PRO"
                    className="w-1/2"
                    variant="proTeamSeconadry"
                    size="small"
                  />
                  <PlanButton
                    cta="Upgrade To PRO Team"
                    className="w-1/2"
                    variant="proTeam"
                    size="small"
                  />
                </div>
              </div>
            </AnimateHeight>
          </div>
        );
      })}
    </div>
  );
};

export default MobileComparisonTable;
