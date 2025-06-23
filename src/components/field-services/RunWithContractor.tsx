"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GreenArrowIcon, GreenDotIcon2, RedCrossIcon } from "../common/Icons";
import RunWithContractorMobile from "./RunWithContractorMobile";
import { TheServiceProps } from "../crmbussiness/KindAdorable";
import { debugLog } from "@/utils/getConsole";
import TextAnimation from "../common/TextAnimation";
const run_contractor = [
  {
    their: "Calling or texting each tech to check availability",
    your: "Drag-and-drop scheduling with real-time crew availability",
  },
  {
    their: "Guessing locations or waiting for callbacks",
    your: "Live GPS tracking shows where everyone is on a map",
  },
  {
    their: "Missed calls, forgotten voicemails, manual callbacks",
    your: "AI receptionist answers, captures lead details, and books jobs",
  },
  {
    their: "Miscommunication through group texts or missed updates",
    your: "Field updates sync instantly across mobile, office, and job chat",
  },
  {
    their: "Paper timesheets or unreliable check-ins",
    your: "GPS-stamped time clock inside the mobile app",
  },
  {
    their: "Texts, emails, and Slack all over the place",
    your: "Every job has its own chat thread, visible to all assigned team members",
  },
  {
    their: "Verbal check-ins or unlogged inspections",
    your: "Post-inspections with photos and task completion logs",
  },
  {
    their: "Manually sent invoices and delayed payment",
    your: "Instant invoice creation and onsite payment",
  },
];

const RunWithContractor: React.FC<TheServiceProps> = ({ kindAdorable }) => {
  debugLog("KINDA", kindAdorable);
  return (
    <section className="relative z-20 bg-white pt-10 pb-9 sm:pt-9 sm:pb-14 md:pb-[75px]">
      {/* <TextAnimation animateOnScroll={true} delay={0.6}> */}
      <h3 className="section-heading crm-gradient mx-auto mb-8 max-w-[950px] text-center md:mb-[44px]">
        {kindAdorable?.title}
      </h3>
      {/* </TextAnimation> */}

      {/* Desktop view  */}
      <div className="mx-auto hidden w-full max-w-[1213px] space-y-5 px-4 md:block">
        <div className="grid grid-cols-2">
          <p className="font-myriad text-secondary text-center text-sm font-semibold sm:text-lg md:text-xl md:leading-[127%]">
            {kindAdorable?.headerLeft}
          </p>
          <p className="font-myriad text-oldMoney text-center text-sm font-bold sm:text-lg md:text-xl md:leading-[127%]">
            {kindAdorable?.headerRight}
          </p>
        </div>
        {kindAdorable?.features?.map((item: any, index: any) => (
          <div
            key={index}
            className="grid grid-cols-2 items-center gap-5 text-center lg:gap-2"
          >
            {/* Their way */}
            <div className="their-way flex items-center gap-3 rounded-[10px] px-3 py-2">
              <span>
                {/* Red Cross Icon */}
                <RedCrossIcon />
              </span>
              <p className="text-sangoPink text-start text-[17px] leading-[130%] font-medium">
                {item.competitorsNote}
              </p>
            </div>

            {/* Your way */}
            <div className="flex items-center gap-2">
              {/* Arrow Icon */}
              <span>
                <GreenArrowIcon />
              </span>
              <div className="your-way flex items-center gap-2 rounded-[10px] px-3 py-2">
                <span>
                  {/* Green Dot Icon */}
                  <GreenDotIcon2 />
                </span>
                <p className="text-majorelleGardens text-start text-[17px] leading-[130%] font-bold">
                  {item.ourProductNote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile-view  */}
      <div className="1xl:px-0 custom-pagination relative z-50 mx-auto block w-full max-w-[1181px] px-2 md:hidden">
        <RunWithContractorMobile
          their={kindAdorable?.headerLeft}
          your={kindAdorable?.headerRight}
          run_contractor={kindAdorable?.features}
        />
      </div>
    </section>
  );
};

export default RunWithContractor;
