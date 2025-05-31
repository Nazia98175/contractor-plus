"use client";
import React from "react";
import TextAnimation from "../common/TextAnimation";
import HvcaFaqList from "./HvcaFaqList";
import UseFaqToggle from "../hook/UseFaqToggle";

type FaqItemType = {
  question: string;
  answer: string;
};
interface Props {
  faq: any;
}
const HvcaFaq: React.FC<Props> = () => {
  const { openIndex, toggleFaq } = UseFaqToggle();
  const faqitems = [
    {
      id: 1,
      question: "Will my team actually use this?",
      answer:
        "Your team won’t want to live without it. It will make every single person’s job easier to the point you won’t be able to imagine running your HVAC business without Contractor+. Use it free and we’ll prove it. ",
    },
    {
      id: 2,
      question:
        "How fast can I switch from Jobber, Housecall Pro or ServiceTitan?",
      answer:
        "It links every call, message, email and file to each customer and each job address, so you can review past interactions and documents at a glance.",
    },
    {
      id: 3,
      question: "Can I import my current invoices, customers, and templates?",
      answer:
        "You drag and drop tasks on the schedule, view crew locations in real time and see status updates as work items are checked off or notes are added.",
    },
    {
      id: 4,
      question: "What software/tools does Contractor+ replace?",
      answer:
        "Contractor+ includes built-in calling and texting, dedicated job chat rooms and automatic transcripts so everyone stays in sync without missing details.",
    },
    {
      id: 5,
      question: "Does this work for small teams and large teams?",
      answer:
        "Capture inquiries through customized entry points, move opportunities through visual stages, then generate quotes and contracts clients can sign online—all within the same system.",
    },
  ];
  return (
    <section className="relative z-20 py-10">
      <div className="bg-athenaBlue pointer-events-none absolute top-0 right-0 hidden h-[500px] w-full max-w-[70px] rotate-[35deg] rounded-[10px] opacity-15 blur-[34px] lg:block"></div>
      <TextAnimation animateOnScroll={true} delay={0.2}>
        <p className="paragraph-text text-secondary pt-4 text-center">
          Frequently asked questions
        </p>
      </TextAnimation>
      <TextAnimation animateOnScroll={true} delay={0.2}>
        <h3 className="section-heading text-center text-white">
          What HVAC contractors want to know{" "}
        </h3>
      </TextAnimation>
      <div className="mx-auto max-w-[1190px] px-4 pt-[27px]">
        {faqitems.map((item: FaqItemType, index: number) => (
          <HvcaFaqList
            key={index}
            data={item}
            isOpen={openIndex === index}
            onToggle={() => toggleFaq(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HvcaFaq;
