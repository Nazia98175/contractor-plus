import Image from "next/image";
import React from "react";
import { CheckIcon } from "../common/Icons";

const HowContractorWork = () => {
  const features = [
    "Make it easier for team members to jump in",
    "Easily get the full story on every location",
    "Manage leads, clients, vendors, subs, and properties easier than ever",
  ];
  return (
    <section className="py-10 sm:py-14 lg:py-16 px-2">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-[1284px] w-full mx-auto gap-5 md:gap-10">
        {/* Left: Image */}
        <div className="w-full max-w-[480px] flex justify-center items-center">
          <Image
            src="/images/webp/how-to-works.webp"
            alt="Illustration showing contractor workflow"
            width={480}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="w-full max-w-[742px] space-y-4 lg:space-y-5">
          <h3 className="gradient-text-2 text-2xl md:text-3xl xl:text-4xl font-semibold tracking-[-0.72px] leading-[140%]">
            Made for how contractors, property managers, and REIs really work
          </h3>

          <ul className="space-y-3 lg:space-y-5">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex sm:items-center gap-2.5 px-2 md:px-3 py-2.5 text-lightBlack font-medium sm:font-semibold text-base xl:text-lg"
              >
                <span className="min-w-5 max-w-5 md:max-w-6">
                  <CheckIcon width={25} height={25} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowContractorWork;
