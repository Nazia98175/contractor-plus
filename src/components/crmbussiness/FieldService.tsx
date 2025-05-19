import React from "react";
import { TickIcon } from "../common/Icons";

const features = [
  {
    title: "Contact profiles + communication history",
    description:
      "See every call, text, and email tied to each contact, all in one place.",
  },
  {
    title: "Property profiles",
    description:
      "Just like customers, each property gets its own profile with full job history, files, and communication timeline.",
  },
  {
    title: "Role-based contact labeling",
    description:
      "Whether owner, tenant, or property manager, label contacts by role within a profile.",
  },
  {
    title: " Client portal access",
    description:
      "Give your clients a clean, professional portal to view estimates, invoices, and project updates.",
  },
  {
    title: "Timeline view for every client and property",
    description:
      "Scroll through a full history of every interaction, file, and update tied to each person or place.",
  },
  {
    title: "Contracts, eSign, and payments",
    description:
      "Quotes become contracts, contracts get signed, and invoices get paid—all in one flow.",
  },
  {
    title: "Scheduled follow-ups",
    description:
      "Business keeps you busy. Scheduled follow-ups make sure nothing slips through the cracks. ",
  },
];

const FieldService = () => {
  return (
    <div className="py-10">
      <div className="absolute bg-kuroiBlack blur-[22px] rounded-full"></div>
      <article className="field-service-card flex justify-between text-white p-8 max-w-[1272px] mx-auto">
        <div className="max-w-[650px] w-full">
          <div className="flex flex-col gap-5 p-[26px]">
            <h4 className="text-[26px] font-semibold">Client Management</h4>
            <div className="flex flex-col gap-6 max-w-[570px] w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <span className="min-w-5 sm:max-w-5 max-w-4 h-fit">
                    <TickIcon />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-lg font-bold leading-[79%]">
                      {feature.title}
                    </h5>
                    <p className="text-xs sm:text-sm lg:text-base font-medium text-secondary lg:text-superSilver">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="p-3 text-secondary text-sm font-montserrat font-medium max-w-[650px]">
            “I used to spend hours piecing together quotes. Now I can hammer one
            out in minutes, and my clients love the professional look.” <br />{" "}
            <br /> – Satisfied Contractor+ User
          </p>
        </div>
        <div className="side-img rounded-lg max-w-[518px] max-h-[302px] w-full"></div>
      </article>
    </div>
  );
};

export default FieldService;
