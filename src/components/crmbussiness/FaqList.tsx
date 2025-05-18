import React from "react";
import AnimateHeight from "react-animate-height";
import { FaqIcon } from "../common/Icons";

type FaqListProps = {
  data: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
};
const FaqList: React.FC<FaqListProps> = ({ data, isOpen, onToggle }) => {
  return (
    <>
      <div onClick={onToggle} className="mb-6 cursor-pointer">
        <button className="flex justify-between items-center gap-5 cursor-pointer w-full py-3">
          <h3 className="paragraph-text text-white font-extrabold text-start">
            {data.question}
          </h3>
          <span className="relative w-6 h-6 inline-block">
            <FaqIcon isOpen={isOpen} />
          </span>
        </button>
        <AnimateHeight duration={500} height={isOpen ? "auto" : 0}>
          <p className="text-decemberSky text-base font-jakarta max-w-[1113px] pt-4">
            {data.answer}
          </p>
        </AnimateHeight>
      </div>
    </>
  );
};

export default FaqList;
