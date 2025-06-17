import React from "react";
import TextAnimation from "./TextAnimation";
import HvacFaqList from "../hvca/HvacFaqList";
import PrimaryAnimatedText from "./PrimaryAnimatedText";

type FaqItemType = {
  id: number;
  question: string;
  answer: string;
};

interface CommonFaqLayoutProps {
  heading: string;
  description: string;
  className?: string;
  faqitems: FaqItemType[];
  openIndex: number | null;
  onToggle: (index: number) => void;
  variant?: "hvac" | "light" | "dark";
}
const CommonFaqLayout: React.FC<CommonFaqLayoutProps> = ({
  heading,
  description,
  faqitems,
  openIndex,
  onToggle,
  variant = "hvac",
  className = "w-full px-2 py-10",
}) => {
  return (
    <div className={`${className}`}>
      <PrimaryAnimatedText delay={3000}>
        <h3 className="section-heading faq-heading-text text-center">
          {heading}
        </h3>
      </PrimaryAnimatedText>
      <TextAnimation animateOnScroll={true} delay={0.2}>
        <p className="paragraph-text text-secondary pt-2 text-center sm:pt-4">
          {description}
        </p>
      </TextAnimation>
      <div className="relative z-50 mx-auto max-w-[1190px] pt-[23px] sm:pt-[27px] md:pt-8">
        {faqitems?.map((item, index) => (
          <HvacFaqList
            key={item.id}
            data={item}
            variant={variant}
            isOpen={openIndex === index}
            onClick={() => onToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommonFaqLayout;
