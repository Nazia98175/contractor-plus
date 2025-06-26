import React from "react";
import AnimateHeight from "react-animate-height";
import { FaqIcon } from "../common/Icons";
import { variantStyles } from "@/utils/getVariants";

type VariantType = "default" | "light" | "dark" | "accent" | "muted";

type FaqListProps = {
  data: {
    question: string;
    answer: string;
    classNameQue?: string;
    classNameAnswer?: string;
  };
  isOpen: boolean;
  onToggle: () => void;
  variant?: VariantType;
  classNameQue?: string;
  classNameAnswer?: string;
  containerClassName?: string;
};

const FaqList: React.FC<FaqListProps> = ({
  data,
  isOpen,
  onToggle,
  variant = "default",
  classNameQue,
  classNameAnswer,
  containerClassName,
}) => {
  const currentVariant = variantStyles[variant];

  return (
    <div
      onClick={onToggle}
      className={`relative mb-5 flex flex-col rounded-lg px-2 ${containerClassName}`}
    >
      <div
        className={`${
          isOpen ? "h-full" : "h-0"
        } bg-faq-bg-2 pointer-events-none absolute inset-0 z-0 w-full overflow-hidden rounded-lg transition-all duration-200`}
      ></div>

      <button
        className={`flex w-full cursor-pointer items-center justify-between gap-5 px-2 py-3 text-start text-base leading-[127%] font-black ${currentVariant.question} ${classNameQue} ${isOpen ? "faq-opened" : ""} `}
      >
        {data.question}
        <span className="relative inline-block h-6 w-6">
          <FaqIcon isOpen={isOpen} />
        </span>
      </button>

      <AnimateHeight duration={500} height={isOpen ? "auto" : 0}>
        <p
          className={`font-jakarta max-w-[1113px] px-2 pt-1 pb-3 text-sm leading-[126%] ${currentVariant.answer} ${classNameAnswer} ${isOpen ? "text-visible" : ""} `}
        >
          {data.answer
            ?.split("<br/>")
            .map((line, i) => <span key={i}>{line}</span>)}
        </p>
      </AnimateHeight>
    </div>
  );
};

export default FaqList;
