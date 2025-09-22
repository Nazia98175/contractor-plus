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
}

const TableFeatureRow: React.FC<TableFeatureRowProps> = ({
  feature,
  index,
  isOpen,
  toggle,
}) => {
  return (
    <tr className="border-decemberSky border-b">
      <td className="border-r border-gray-300">
        <div
          className="flex h-full cursor-pointer items-start justify-between gap-1 px-3 pt-3 pb-3 xl:gap-3 xl:px-5"
          onClick={toggle}
        >
          <span className="text-winterWay text-sm lg:text-base">
            {feature.title}
          </span>
          <span
            className={`transform ${
              isOpen ? "rotate-180" : "rotate-0"
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
          <p className="text-wallStreet w-full max-w-[223px] pb-3 pl-3 text-xs xl:pl-5">
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
          <span className="text-secondary semibold flex items-center justify-center text-sm font-medium italic">
            {typeof avail === "boolean" ? (
              avail ? (
                <CheckIcon width={24} height={24} />
              ) : (
                <CloseIcon width={24} height={24} />
              )
            ) : (
              avail
            )}
          </span>
        </td>
      ))}
    </tr>
  );
};

export default TableFeatureRow;
