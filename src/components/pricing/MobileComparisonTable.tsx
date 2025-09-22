import React from "react";
import { ChevronDown } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { CheckIcon, CloseIcon, TooltipIcon } from "../common/Icons";
import PlanButton from "./PlanButton";
import AnimateHeight from "react-animate-height";

interface Props {
  pricingComparison: any;
  openKey: string | null;
  toggleCollapse: (key: string) => void;
}

const MobileComparisonTable: React.FC<Props> = ({
  pricingComparison,
  openKey,
  toggleCollapse,
}) => {
  const comparisonTable = pricingComparison?.comparisonTable || [];
  const plans = pricingComparison?.plans || [];

  return (
    <div className="space-y-3.5">
      {comparisonTable.map((section: any, sectionIdx: number) => {
        const sectionKey = `section-${sectionIdx}`;
        const isOpen = openKey === sectionKey;

        return (
          <div
            key={section.id || sectionKey}
            className="overflow-hidden rounded-lg"
          >
            <div
              onClick={() => toggleCollapse(sectionKey)}
              className="bg-superSilver xs:px-4 flex cursor-pointer items-center justify-between gap-2 px-2 py-2.5"
            >
              <h4 className="text-winterWay text-base font-semibold tracking-[0.1px]">
                {section.title}
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
              <div>
                {section.features.map((feature: any, fIndex: number) => {
                  const tooltipId = `tooltip-${sectionKey}-${fIndex}`;

                  return (
                    <div
                      key={feature.id || fIndex}
                      className="border-superSilver bg-doctor flex flex-col items-center justify-between gap-2 border-b p-2 text-base"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-winterWay font-medium tracking-[0.1px]">
                          {feature.title}
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
                        {feature.avilability.map((avail: any, i: number) => (
                          <div
                            key={avail.id || i}
                            className={`flex items-center justify-center ${
                              i !== feature.avilability.length - 1
                                ? "border-superSilver border-r"
                                : ""
                            }`}
                          >
                            {avail.availableText ? (
                              <span className="text-winterWay xs:text-xs text-center text-[10px]">
                                {avail.availableText}
                              </span>
                            ) : avail.available ? (
                              <CheckIcon width={22} height={22} />
                            ) : (
                              <CloseIcon width={22} height={22} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Only show upgrade buttons if we have PRO plans */}
                {plans.length > 1 && (
                  <div className="border-decemberSky bg-doctor xs:p-4 flex justify-center gap-2 border-t p-2">
                    {/* Show button for PRO plan if it exists */}
                    {plans[1] && (
                      <PlanButton
                        cta={`Upgrade To ${plans[1].name}`}
                        className="w-1/2"
                        variant="proTeamSeconadry"
                        size="small"
                      />
                    )}
                    {/* Show button for PRO Team plan if it exists */}
                    {plans[2] && (
                      <PlanButton
                        cta={`Upgrade To ${plans[2].name}`}
                        className="w-1/2"
                        variant="proTeam"
                        size="small"
                      />
                    )}
                  </div>
                )}
              </div>
            </AnimateHeight>
          </div>
        );
      })}
    </div>
  );
};

export default MobileComparisonTable;
