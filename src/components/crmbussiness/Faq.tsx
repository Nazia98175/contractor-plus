"use client";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";

const Faq = () => {
  const [FaqOpen, setOpen] = useState(0);
  const handleopen = (index) => {
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
    <section>
      <h3 className="section-heading text-white text-center">
        What contractors want to know
      </h3>
      <p className="paragraph-text text-secondary text-center pt-4">
        Frequently asked questions
      </p>
      <div className="max-w-[1190px] mx-auto px-2 pt-[27px]">
        {faqitems.map((item, index) => (
          <div
            onClick={() => handleopen(index)}
            key={index}
            className="mb-8 cursor-pointer"
          >
            <button className="flex justify-between items-center gap-5 cursor-pointer w-full">
              <h3 className="paragraph-text text-white font-extrabold">
                {item.question}
              </h3>
              <span>
                {FaqOpen === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 12C5 11.4477 5.44772 11 6 11L18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13L6 13C5.44772 13 5 12.5523 5 12Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 19C11.7167 19 11.479 18.904 11.287 18.712C11.095 18.52 10.9993 18.2827 11 18V13H6C5.71667 13 5.479 12.904 5.287 12.712C5.095 12.52 4.99934 12.2827 5 12C5 11.7167 5.096 11.479 5.288 11.287C5.48 11.095 5.71734 10.9993 6 11H11V6C11 5.71667 11.096 5.479 11.288 5.287C11.48 5.095 11.7173 4.99934 12 5C12.2833 5 12.521 5.096 12.713 5.288C12.905 5.48 13.0007 5.71734 13 6V11H18C18.2833 11 18.521 11.096 18.713 11.288C18.905 11.48 19.0007 11.7173 19 12C19 12.2833 18.904 12.521 18.712 12.713C18.52 12.905 18.2827 13.0007 18 13H13V18C13 18.2833 12.904 18.521 12.712 18.713C12.52 18.905 12.2827 19.0007 12 19Z"
                      fill="white"
                    />
                  </svg>
                )}
              </span>
            </button>
            <AnimateHeight
              duration={500}
              height={FaqOpen === index ? "auto" : 0}
            >
              <p className="text-[#D2D4D6] text-base font-jakarta max-w-[1113px] pt-4">
                {item.answer}
              </p>
            </AnimateHeight>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
