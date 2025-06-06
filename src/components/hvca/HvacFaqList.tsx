import React from "react";
import AnimateHeight from "react-animate-height";
import { FaqIcon } from "../common/Icons";

type FaqListProps = {
  data: {
    id: number;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onClick: () => void;
  variant?: "hvac" | "light" | "dark";
};
const getVariantClass = (variant: string, isOpen: boolean) => {
  if (!isOpen) return "bg-transparent";

  const variants: Record<string, string> = {
    hvac: "bg-faq-bg-2",
    light: "bg-white",
    dark: "bg-kuroiBlack",
  };

  return variants[variant] || "bg-transparent";
};
const HvacFaqList: React.FC<FaqListProps> = ({
  data,
  isOpen,
  onClick,
  variant = "hvac",
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`mb-3 cursor-pointer rounded-lg px-4 py-3 transition-all duration-300 ease-in-out sm:mb-6 ${getVariantClass(
          variant,
          isOpen,
        )}`}
      >
        <button className="flex w-full cursor-pointer items-center justify-between gap-5">
          <h3 className="paragraph !mt-0 text-start !font-black !text-white">
            {data.question}
          </h3>
          <span className="relative inline-block h-6 w-6">
            <FaqIcon isOpen={isOpen} />
          </span>
        </button>
        <AnimateHeight duration={500} height={isOpen ? "auto" : 0}>
          <p className="text-decemberSky font-jakarta w-[90%] max-w-[1113px] pt-4 text-sm sm:text-base">
            {data.answer
              ?.split("<br/>")
              .map((line, i) => <span key={i}>{line}</span>)}
          </p>
        </AnimateHeight>
      </div>
    </>
  );
};

export default HvacFaqList;
