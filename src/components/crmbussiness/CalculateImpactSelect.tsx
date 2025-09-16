"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface OptionType {
  value: string;
  label: string;
  icon?: React.ReactNode; // for future (per-option icons if needed)
  logo?: string;
}

export interface CustomSelectProps {
  options: OptionType[];
  placeholder?: string;
  value: string | null;
  onChange: (option: OptionType | null) => void;
  disabled?: boolean;
  className?: string;
  buttonIcon?: React.ReactNode; // 👈 button-only icon
}

const CalculateImpactSelect: React.FC<CustomSelectProps> = ({
  options = [],
  placeholder = "Select an option...",
  value = null,
  onChange = () => {},
  disabled = false,
  className = "",
  buttonIcon, // 👈 here
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option: OptionType) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div ref={dropdownRef} className={` ${className} relative w-full`}>
      {/* --- Button --- */}
      <button
        onClick={toggleDropdown}
        disabled={disabled}
        className="flex h-10 w-full items-center gap-3 rounded-md border border-[#656C73] pl-3"
      >
        {/* 👇 Button-only icon */}
        {buttonIcon && (
          <span className="h-5 w-5 min-w-5 [&>*]:h-full [&>*]:w-full">
            {buttonIcon}
          </span>
        )}

        <span className="w-full truncate text-start tracking-[0.1px] text-[#656C73]">
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <span className="flex h-full items-center justify-center border-l border-[#656C73]">
          <ChevronDown color="#656C73" className="mx-2" />
        </span>
      </button>

      {/* --- Dropdown --- */}
      <div
        className={`${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-10 opacity-0"
        } absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-[#656C73] bg-white text-sm backdrop-blur-[42px] duration-300`}
      >
        <div
          onWheel={(e) => e.stopPropagation()}
          className="no-scrollbar max-h-60 overflow-auto"
        >
          {options.length === 0 ? (
            <p className="px-4 py-2.5">No options available</p>
          ) : (
            options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="hover:bg-wallStreet flex w-full items-center gap-3 px-3 py-2 text-left text-[#656C73] hover:text-white"
              >
                <span>{option.label}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculateImpactSelect;
