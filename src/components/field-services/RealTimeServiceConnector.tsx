import Image from "next/image";
import React from "react";
import RealTimeServiceConnectorSlider from "./RealTimeServiceConnectorSlider";
import { RealTimeServiceConnectorIcon } from "../common/Icons";
import { TheServiceProps } from "../crmbussiness/FieldService";
import { debugLog } from "@/utils/getConsole";
import TextAnimation from "../common/TextAnimation";

const RealTimeServiceConnector: React.FC<TheServiceProps> = ({
  fieldService,
  theme,
}) => {
  debugLog("fieldServv", fieldService);

  const sliderData = [
    {
      title: "Live Dispatch",
      description:
        "See who's available and closest to a job in real time, and dispatch the right person. Crews get notified instantly.",
    },
    {
      title: "Live Dispatch",
      description:
        "See who's available and closest to a job in real time, and dispatch the right person. Crews get notified instantly.",
    },
    {
      title: "Job Details",
      description:
        "No more digging for details. Everything tied to the job lives in one place, from tasks to work orders and billing.",
    },
    {
      title: "Field Updates",
      description:
        "Crews can upload photos, notes, and task changes straight from the field. Everything lives in one central hub.",
    },
    {
      title: "Crew Efficiency",
      description:
        "Track time, mileage, and task completion with zero paper. Know who's doing what, where, and when",
    },
    {
      title: "AI Call Attendant",
      description:
        "Big Chief answers your calls 24/7, captures lead details, and books jobs while you focus on the field.",
    },
    {
      title: "Onsite Payments",
      description:
        "Collect payment the moment the job's done. Accept cards or ACH in the field and mark the invoice as paid.",
    },
    {
      title: "CRM",
      description:
        "Track customers, properties, and communication history in one CRM that's built for the way contractors work.",
    },
    {
      title: "Mobile App",
      description:
        "Run your business from anywhere. The intuitive Contractor+ app puts scheduling, dispatch, and updates in your pocket.",
    },
  ];

  return (
    <section
      className={`relative z-20 overflow-hidden bg-white ${theme || ""}`}
    >
      <RealTimeServiceConnectorIcon className="pointer-events-none absolute bottom-[48%] -left-[65%] -z-10 sm:bottom-[15%] sm:left-0 lg:bottom-[18%]" />

      <TextAnimation animateOnScroll={true} delay={0.8}>
        <h3 className="section-heading crm-gradient mx-auto max-w-[1029px] px-2 text-center xl:px-0">
          {(() => {
            const title = fieldService?.title || "";
            const words = title.trim().split(" ");
            const lastTwo = words.slice(-2).join(" ");
            const rest = words.slice(0, -2).join(" ");
            return (
              <>
                {rest} <b>{lastTwo}</b>
              </>
            );
          })()}
        </h3>
      </TextAnimation>

      <RealTimeServiceConnectorSlider sliderData={fieldService?.cardsDetail} />
    </section>
  );
};

export default RealTimeServiceConnector;
