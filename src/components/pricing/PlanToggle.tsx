"use client";
import React from "react";
import { MoveLeftIcon } from "lucide-react";

interface PlanToggleProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

const PlanToggle: React.FC<PlanToggleProps> = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="flex items-center justify-center gap-3 py-3">
      <button
        className={`text-lg ${!isAnnual ? "text-wallStreet" : "text-secondary"}`}
      >
        Monthly Plan
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
      <div className="flex items-center gap-2.5">
        <button
          className={`text-lg font-bold ${isAnnual ? "text-winterWay" : "text-secondary"}`}
        >
          Annual Plan
        </button>
        <p className="hidden items-center gap-2 text-base text-[#4F5357] md:flex lg:text-lg">
          <MoveLeftIcon color="#5ED5A8" />
          Save up to 40%
        </p>
      </div>
    </div>
  );
};

export default PlanToggle;
