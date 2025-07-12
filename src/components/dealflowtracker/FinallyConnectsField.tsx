"use client";
import Image from "next/image";
import Button from "../common/Button";
import CardRequiredButton from "../common/CardRequiredButton";
import { ArrowIcon } from "../common/Icons";

const FinallyConnectsField = () => {
  return (
    <div className="relative">
      <h2
        style={{
          background:
            "linear-gradient(276deg, rgba(238, 30, 37, 0.4) 8%, rgba(0, 0, 0, 0) 100%), #D8D8D8",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="section-heading relative z-[4] hidden px-2 text-center sm:block"
      >
        A system that finally connects field and office
      </h2>
      <h2
        style={{
          background:
            "linear-gradient(276deg, rgba(238, 30, 37, 0.4) 8%, rgba(0, 0, 0, 0) 100%), #D8D8D8",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="xs:text-[22px] xs:max-w-[88%] relative z-[4] mx-auto px-2 text-center text-[19px] font-bold sm:hidden"
      >
        A system that finally connects field and office
      </h2>

      <p className="text-darkness xs:text-sm relative z-[4] my-3 text-center text-xs font-semibold md:mt-5 md:text-base xl:text-lg">
        A drag-and-drop Kanban view that simplifies opportunities
      </p>
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden">
        <div className="bg-gradient-bar absolute top-0 left-0 z-[100] h-[10vh] w-full"></div>

        {/* TOP WHITE BLUR LINE  */}
        <div className="absolute -top-[17%] left-1/2 z-[10000] hidden h-[180px] w-[120%] -translate-x-1/2 rounded-t-full bg-white blur-[20px] sm:block lg:-top-[25%] lg:blur-[25px] xl:h-[250px]"></div>
        <img
          src="/images/png/initial-cloud.png"
          className="absolute top-0 z-[21] h-full w-full"
          alt="Initial background cloud graphic"
        />

        <div className="relative z-[2000] mx-auto flex w-full max-w-[702px] flex-col items-center justify-center px-2 md:px-0">
          <div className="relative">
            <p className="text-phantom mt-[85px] mb-2 text-center text-sm text-[28px] leading-[120%] font-semibold md:mt-[158px] lg:text-[35px] xl:text-[42px]">
              Lead Captured
            </p>
            <p className="text-secondary relative mt-5 mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]">
              A new lead is captured by Big Chief AI or manually entered into
              the CRM. It’s instantly added to your Deal Flow pipeline with
              property, contact info, and project notes.
            </p>
          </div>
          <div className="relative mt-[72px] overflow-hidden">
            <Image
              width={611}
              height={245}
              className="relative h-full w-full"
              src="/images/webp/lead.webp"
              alt="Timing Image"
            />
          </div>
        </div>

        <div className="relative z-20 mt-[60px] flex flex-col items-center justify-center px-2 md:mt-[72px]">
          <Button variant="primary" className="mx-auto mt-3 mb-1.5 !w-fit">
            Get started FREE
            <ArrowIcon fill="white" />
          </Button>
          <CardRequiredButton text="No credit card required" />
        </div>
      </div>
    </div>
  );
};

export default FinallyConnectsField;
