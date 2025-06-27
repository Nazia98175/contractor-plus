import { ChevronDown, ConstructionIcon } from "lucide-react";
import React from "react";

const CustomSelect = () => {
  return (
    <div className="w-full max-w-[294px]">
      <button className="border-cyanBlue flex h-10 w-full max-w-[294px] items-center rounded-md border">
        <ConstructionIcon color="white" className="mr-2 ml-3.5" />
        <span className="text-decemberSky w-full text-start tracking-[0.1px]">
          General Contractor
        </span>
        <span className="border-wallStreet flex h-full items-center justify-center border-l">
          <ChevronDown color="#D2D4D6" className="mx-2" />
        </span>
      </button>

      <div className="absolute z-50 w-full"></div>
    </div>
  );
};

export default CustomSelect;
