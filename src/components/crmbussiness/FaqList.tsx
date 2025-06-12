import React from "react";
import AnimateHeight from "react-animate-height";
import { FaqIcon } from "../common/Icons";

type FaqListProps = {
  data: {
    question: string;
    answer: string;
    classNameQue?: string;
    classNameAnswer?: string;
  };
  isOpen: boolean;
  onToggle: () => void;
  classNameQue?: string;
  classNameAnswer?: string;
  containerClassName?: string;
};
const FaqList: React.FC<FaqListProps> = ({
  data,
  isOpen,
  onToggle,
  classNameQue,
  classNameAnswer,
  containerClassName,
}) => {
  return (
    <>
      <div
        onClick={onToggle}
        className={`flex flex-col gap-3 px-4 md:gap-5 ${containerClassName}`}
      >
        <button
          className={`${classNameQue} flex w-full cursor-pointer items-center justify-between gap-5 px-2 py-3 text-start text-base leading-[127%] font-black text-white lg:text-lg`}
        >
          {data.question}
          <span className="relative inline-block h-6 w-6">
            <FaqIcon isOpen={isOpen} />
          </span>
        </button>
        <AnimateHeight duration={500} height={isOpen ? "auto" : 0}>
          <p
            className={`text-decemberSky font-jakarta h-fit max-w-[1113px] px-2 pt-1 text-sm leading-[126%] md:text-base ${classNameAnswer} `}
          >
            {data.answer
              ?.split("<br/>")
              .map((line, i) => <span key={i}>{line}</span>)}
          </p>
        </AnimateHeight>
      </div>
    </>
  );
};

export default FaqList;
