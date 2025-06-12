import React from "react";
import AnimateHeight from "react-animate-height";
import { FaqIcon } from "../common/Icons";

type FaqListProps = {
  data: {
    question: string;
    answer: string;
    classNameQue?: string;
  };
  isOpen: boolean;
  onToggle: () => void;
  classNameQue?: string;
};
const FaqList: React.FC<FaqListProps> = ({
  data,
  isOpen,
  onToggle,
  classNameQue,
}) => {
  return (
    <>
      <div onClick={onToggle} className="mb-3 cursor-pointer">
        <button className="flex w-full cursor-pointer items-center justify-between gap-5 py-2">
          <h3
            className={`${classNameQue} paragraph text-start !font-black !text-white`}
          >
            {data.question}
          </h3>
          <span className="relative inline-block h-6 w-6">
            <FaqIcon isOpen={isOpen} />
          </span>
        </button>
        <AnimateHeight duration={500} height={isOpen ? "auto" : 0}>
          <p className="text-decemberSky font-jakarta max-w-[1113px] pt-4 text-sm sm:text-base">
            {data.answer?.split("<br/>").map((line, i) => (
              <span key={i}>
                {line}
                <br />
                <br />
              </span>
            ))}
          </p>
        </AnimateHeight>
      </div>
    </>
  );
};

export default FaqList;
