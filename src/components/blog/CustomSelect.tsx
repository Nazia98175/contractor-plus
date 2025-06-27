"use client";
import { ChevronDown, ConstructionIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface OptionType {
  value: string;
  label: string;
  icon?: React.ReactNode;
}
export interface CustomSelectProps {
  options: OptionType[];
  placeholder?: string;
  value: string | null;
  onChange: (option: OptionType | null) => void;
  disabled?: boolean;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options = [],
  placeholder = "Select an option...",
  value = null,
  onChange = () => {},
  disabled = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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
      <button
        onClick={toggleDropdown}
        disabled={disabled}
        className="border-cyanBlue flex h-10 w-full items-center gap-3 rounded-md border pl-3"
      >
        <span className="h-5 w-5 min-w-5 [&>*]:h-full [&>*]:w-full">
          {selectedOption ? (
            selectedOption.icon
          ) : (
            <ConstructionIcon color="white" />
          )}
        </span>
        <span className="text-decemberSky w-full text-start tracking-[0.1px]">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="border-wallStreet flex h-full items-center justify-center border-l">
          <ChevronDown color="#D2D4D6" className="mx-2" />
        </span>
      </button>

      <div
        className={` ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} border-decemberSky bg-kuroiBlack/70 sm:bg-kuroiBlack/50 text-decemberSky absolute z-50 mt-1 w-full rounded-md border text-sm backdrop-blur-[42px] duration-300 hover:text-white`}
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
                className="hover:bg-wallStreet flex w-full items-center gap-3 px-3 py-2 text-left"
              >
                <span className="h-5 w-5 [&>*]:h-full [&>*]:w-full">
                  {option.icon}
                </span>
                <span
                  className={` ${selectedOption?.value === option.value ? "" : ""}`}
                >
                  {option.label}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
