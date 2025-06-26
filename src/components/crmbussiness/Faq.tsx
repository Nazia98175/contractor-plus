"use client";
import React from "react";
import FaqList from "./FaqList";
import TextAnimation from "../common/TextAnimation";
import UseFaqToggle from "../hook/UseFaqToggle";

type VariantType = "default" | "light" | "dark" | "accent" | "muted";

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
  TittleClassName?: string;
  variant?: VariantType;
}

const Faq: React.FC<Props> = ({
  faq,
  classNameQue,
  classNameAnswer,
  containerClassName,
  mainContainerclassName,
  TittleClassName,
  variant = "default",
}) => {
  const { openIndex, toggleFaq } = UseFaqToggle();

  const headingVariantMap: Record<VariantType, string> = {
    default: "faq-heading-text",
    light: "text-white",
    dark: "text-darkBlue",
    accent: "text-accent",
    muted: "text-muted",
  };

  const paragraphVariantMap: Record<VariantType, string> = {
    default: "text-secondary",
    light: "text-lightGray",
    dark: "text-darkGray",
    accent: "text-accent",
    muted: "text-muted",
  };

  return (
    <section className={`${mainContainerclassName} relative z-20`}>
      <div className="bg-athenaBlue pointer-events-none absolute top-0 right-0 hidden h-[500px] w-full max-w-[70px] rotate-[35deg] rounded-[10px] opacity-15 blur-[34px] lg:block"></div>

      {/* <TextAnimation animateOnScroll={true} delay={0.3}> */}
      <h3
        className={`section-heading text-center ${headingVariantMap[variant]} ${TittleClassName}`}
      >
        {faq?.title}
      </h3>
      {/* </TextAnimation> */}

      <p
        className={`paragraph-text pt-1.5 text-center sm:pt-4 ${paragraphVariantMap[variant]}`}
      >
        {faq?.sub_title}
      </p>

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
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
