import React, { useState } from "react";
interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement> {}
const CalculateImpactRange = () => {
  const [value, setValue] = useState(4.5);

  const handleChange = (e: HandleChangeEvent) => {
    setValue(parseFloat(e.target.value));
  };
  return (
    <div className="relative w-full">
      <label className="text-base text-[#656C73]" htmlFor="estimates">
        Level of Detail & Itemization (1-10)
      </label>
      <div className="mx-auto max-w-[250px] pt-5">
        <div className="relative h-2 w-full rounded-full bg-gray-800">
          {/* Filled Track */}
          <div
            className="pointer-events-none absolute h-2 rounded-full bg-red-600"
            style={{ width: `${((value - 1) / 9) * 100}%` }}
          ></div>

          {/* Range Input */}
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={value}
            onChange={handleChange}
            className="absolute top-0 left-0 h-2 w-full cursor-pointer opacity-0"
          />

          {/* Floating Label */}
          <div
            className="pointer-events-none absolute -top-3 flex h-8 w-8 cursor-grab items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white"
            style={{
              left: `${((value - 1) / 9) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            {value}
          </div>
        </div>
      </div>

      {/* Min & Max Labels */}
      <div className="mt-1 flex justify-between text-sm text-gray-600">
        <span>1</span>
        <span>10</span>
      </div>
      <div className="mx-auto flex w-full max-w-[250px] items-center justify-between">
        <div className="h-[8px] w-[2px] bg-[#3F464B]"></div>
        <div className="h-[8px] w-[2px] bg-[#3F464B]"></div>
        <div className="h-[8px] w-[2px] bg-[#3F464B]"></div>
        <div className="h-[8px] w-[2px] bg-[#3F464B]"></div>
        <div className="h-[8px] w-[2px] bg-[#3F464B]"></div>
        <div className="h-[8px] w-[2px] bg-[#3F464B]"></div>
        <div className="h-[8px] w-[2px] bg-[#3F464B]"></div>
        <div className="h-[8px] w-[2px] bg-[#3F464B]"></div>
      </div>
    </div>
  );
};

export default CalculateImpactRange;
