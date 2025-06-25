import React from "react";
import AnimateHeight from "react-animate-height";
import { ChevronDown } from "lucide-react";
import { CheckIcon, CloseIcon } from "../common/Icons";
import { Plan, tableFeature } from "@/types";

interface TableFeatureRowProps {
  feature: tableFeature;
  index: string;
  isOpen: boolean;
  toggle: () => void;
  isMobile: boolean;
  plans: Plan[];
}

const TableFeatureRow: React.FC<TableFeatureRowProps> = ({
  feature,
  index,
  isOpen,
  toggle,
  isMobile,
  plans,
}) => {
  if (isMobile) {
    return (
      <div className="rounded-lg border border-gray-300 p-4">
        <div
          className="flex cursor-pointer items-start justify-between"
          onClick={toggle}
        >
          <span className="text-winterWay text-lg font-semibold">
            {feature.name}
          </span>
          <ChevronDown
            className={`transform transition-transform ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
            width={20}
            color="#656C73"
          />
        </div>
        <AnimateHeight
          id={`feature-desc-${index}`}
          duration={500}
          height={isOpen ? "auto" : 0}
        >
          <p className="text-wallStreet mt-2 max-w-[90%] text-sm">
            {feature.description}
          </p>
        </AnimateHeight>
        <div className="mt-4 space-y-2">
          {feature.available.map((avail, idx) => (
            <div
              key={idx}
              className="text-wallStreet border-decemberSky flex items-center justify-between border-t pt-2 text-sm sm:text-base"
            >
              <span className="font-medium">{plans[idx].name}</span>
              {avail ? (
                <CheckIcon width={20} height={20} />
              ) : (
                <CloseIcon width={20} height={20} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <tr className="border-decemberSky border-b">
      <td className="border-r border-gray-300">
        <div
          className="flex h-full cursor-pointer items-center justify-between gap-1 px-3 pt-3 pb-3 xl:gap-3 xl:px-5"
          onClick={toggle}
        >
          <span className="text-winterWay text-sm lg:text-base">
            {feature.name}
          </span>
          <span
            className={`transform ${
              isOpen ? "rotate-0" : "rotate-180"
            } transition-transform`}
          >
            <ChevronDown width={20} color="#656C73" />
          </span>
        </div>
        <AnimateHeight
          id={`feature-desc-${index}`}
          duration={500}
          height={isOpen ? "auto" : 0}
        >
          <p className="text-wallStreet max-w-[223px] px-3 pb-3 text-xs xl:pl-5">
            {feature.description}
          </p>
        </AnimateHeight>
      </td>
      {feature.available.map((avail, idx) => (
        <td
          key={idx}
          className={`px-5 py-3 text-center ${
            idx !== feature.available.length - 1
              ? "border-r border-gray-300"
              : ""
          }`}
        >
          <span className="flex items-center justify-center">
            {avail ? (
              <CheckIcon width={24} height={24} />
            ) : (
              <CloseIcon width={24} height={24} />
            )}
          </span>
        </td>
      ))}
    </tr>
  );
};

export default TableFeatureRow;
