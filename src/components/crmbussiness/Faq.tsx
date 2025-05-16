"use client";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import FaqList from "./FaqList";

type FaqItemType = {
  question: string;
  answer: string;
};
const Faq = () => {
  const [FaqOpen, setOpen] = useState<number | null>(0);
  const handleToggle = (index: number) => {
    setOpen(FaqOpen === index ? null : index);
  };
  console.log(FaqOpen);

  const faqitems = [
    {
      id: 1,
      question: "What is field service CRM?",
      answer:
        "Field service CRM brings client contacts, communication and job records into a single system, letting you handle calls, texts and schedules without juggling separate apps.",
    },
    {
      id: 2,
      question: "How does Contractor+ capture and organize customer history?",
      answer:
        "It links every call, message, email and file to each customer and each job address, so you can review past interactions and documents at a glance.",
    },
    {
      id: 3,
      question: "How do I assign tasks and monitor work progress?",
      answer:
        "You drag and drop tasks on the schedule, view crew locations in real time and see status updates as work items are checked off or notes are added.",
    },
    {
      id: 4,
      question: "How can my crew stay connected on the job?",
      answer:
        "Contractor+ includes built-in calling and texting, dedicated job chat rooms and automatic transcripts so everyone stays in sync without missing details.",
    },
    {
      id: 5,
      question: "How does Contractor+ turn leads into signed contracts?",
      answer:
        "Capture inquiries through customized entry points, move opportunities through visual stages, then generate quotes and contracts clients can sign online—all within the same system.",
    },
    {
      id: 6,
      question: "How do I keep every job and follow-up on track?",
      answer:
        "Set scheduled follow-ups and reminders, then use timeline views to see upcoming tasks and past actions. This ensures nothing gets overlooked. ",
    },
  ];
  return (
    <section className="bg-kuroiBlack py-10">
      <h3 className="section-heading text-white text-center">
        What contractors want to know
      </h3>
      <p className="paragraph-text text-secondary text-center pt-4">
        Frequently asked questions
      </p>
      <div className="max-w-[1190px] mx-auto px-2 pt-[27px]">
        {faqitems.map((item: FaqItemType, index: number) => (
          <FaqList
            key={index}
            data={item}
            isOpen={FaqOpen === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
