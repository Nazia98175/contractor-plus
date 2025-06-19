"use client";
import React, { useState } from "react";
import FaqList from "./FaqList";
import TextAnimation from "../common/TextAnimation";
import UseFaqToggle from "../hook/UseFaqToggle";

type FaqItemType = {
  question: string;
  answer: string;
  classNameQue?: string;
};
interface Props {
  faq: {
    title?: string;
    sub_title?: string;
    faq?: FaqItemType[];
  };
  classNameQue?: string;
  classNameAnswer?: string;
  containerClassName?: string;
  mainContainerclassName?: string;
}
const Faq: React.FC<Props> = ({
  faq,
  classNameQue,
  classNameAnswer,
  containerClassName,
  mainContainerclassName,
}) => {
  const { openIndex, toggleFaq } = UseFaqToggle();

  return (
    <section
      className={`${mainContainerclassName} relative z-20 overflow-hidden py-10 md:pt-[66px] md:pb-[71px]`}
    >
      <div className="bg-athenaBlue pointer-events-none absolute top-0 right-0 hidden h-[500px] w-full max-w-[70px] rotate-[35deg] rounded-[10px] opacity-15 blur-[34px] lg:block"></div>
      <TextAnimation animateOnScroll={true}>
        <h3 className="section-heading text-center">
          <span className="faq-heading-text">{faq?.title}</span>
        </h3>
      </TextAnimation>
      <TextAnimation animateOnScroll={true} delay={0.2}>
        <p className="paragraph-text text-secondary pt-1.5 text-center sm:pt-4">
          {faq?.sub_title}
        </p>
      </TextAnimation>
      <div className="mx-auto max-w-[1190px] pt-[27px]">
        {faq?.faq?.map((item: FaqItemType, index: number) => (
          <FaqList
            key={index}
            data={item}
            isOpen={openIndex === index}
            onToggle={() => toggleFaq(index)}
            classNameQue={classNameQue}
            classNameAnswer={classNameAnswer}
            containerClassName={containerClassName}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
