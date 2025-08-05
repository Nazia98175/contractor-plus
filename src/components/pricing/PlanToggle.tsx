"use client";
import React from "react";
import { MoveLeftIcon } from "lucide-react";

interface PlanToggleProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
  title?: string;
  toggleLabel?: string;
  toggleNote?: string;
}

const PlanToggle: React.FC<PlanToggleProps> = ({
  isAnnual,
  setIsAnnual,
  title,
  toggleLabel,
  toggleNote,
}) => {
  return (
    <div className="flex max-w-[400px] flex-wrap items-center justify-center gap-3 py-3 sm:max-w-[500px]">
      <button
        className={`text-wallStreet text-base sm:text-lg ${!isAnnual ? "opacity-90" : "opacity-100"}`}
      >
        {title ?? ""}
      </button>
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
        />
        <div className="peer bg-wallStreet relative h-6 w-10 rounded-full peer-checked:bg-[linear-gradient(262deg,_#DC1112_-10.83%,_#76090A_83.23%)] peer-focus:outline-none after:absolute after:start-[2.5px] after:top-1/2 after:h-[19px] after:min-w-[19px] after:-translate-y-1/2 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-[82%] peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"></div>
      </label>
      <button
        className={`text-winterWay text-base font-bold sm:text-lg ${isAnnual ? "opacity-100" : "opacity-90"}`}
      >
        {toggleLabel ?? ""}
      </button>
      <p className="text-lumpOfCoal hidden items-center gap-2 text-base sm:flex lg:text-lg">
        <MoveLeftIcon color="#5ED5A8" />
        {toggleNote ?? ""}
      </p>
      <p className="xs:text-base text-baba text-sm leading-[120%] font-semibold sm:hidden">
        {toggleNote ?? ""} On Annual Plan
      </p>
    </div>
  );
};

export default PlanToggle;
