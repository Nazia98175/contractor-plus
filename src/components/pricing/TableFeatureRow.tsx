import React from "react";
import AnimateHeight from "react-animate-height";
import { ChevronDown } from "lucide-react";
import { CheckIcon, CloseIcon } from "../common/Icons";
import { tableFeature } from "@/types";

interface FeatureRowProps {
  feature: tableFeature;
  index: string;
  isOpen: boolean;
  toggle: () => void;
}

const TableFeatureRow: React.FC<FeatureRowProps> = ({
  feature,
  index,
  isOpen,
  toggle,
}) => (
  <tr className="border-decemberSky border-b">
    <td className="border-r border-gray-300">
      <div
        className="flex h-full cursor-pointer items-center justify-between gap-3 px-5 pt-3 pb-3"
        onClick={toggle}
      >
        <span className="text-winterWay text-base">{feature.name}</span>
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
        <p className="text-wallStreet max-w-[223px] pb-3 pl-5 text-xs">
          {feature.description}
        </p>
      </AnimateHeight>
    </td>
    {feature.available.map((avail, idx) => (
      <td key={idx} className="border-r border-gray-300 px-5 py-3 text-center">
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

export default TableFeatureRow;
