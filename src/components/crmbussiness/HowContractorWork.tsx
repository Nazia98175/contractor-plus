import Image from "next/image";
import React from "react";
import { CheckIcon, SideIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";
import Button from "../common/Button";
import FreeAccountButton from "../common/FreeAccountButton";
import CardRequiredButton from "../common/CardRequiredButton";
interface Content {
  title: string;
}

interface LikeYouDo {
  title: string;
  content: Content[];
}

interface Props {
  data: LikeYouDo;
  ncc: string;
  trackProperties: any;
}
const HowContractorWork: React.FC<Props> = ({ data, ncc, trackProperties }) => {
  const features = [
    "Make it easier for team members to jump in",
    "Easily get the full story on every location",
    "Manage leads, clients, vendors, subs, and properties easier than ever",
  ];
  return (
    <>
      <section className="relative z-20 mx-auto flex w-full max-w-[1064px] flex-col items-center justify-between gap-5 px-2 pt-7 leading-0 sm:py-14 md:flex-row md:gap-10 lg:pt-[48px] lg:pb-[54px]">
        {/* Left: Image */}
        <div className="flex w-full max-w-[480px] items-center justify-center">
          <Image
            src="/images/webp/how-to-works.webp"
            alt="Illustration showing contractor workflow"
            width={480}
            height={600}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="w-full max-w-[742px] space-y-4 lg:space-y-5">
          <TextAnimation animateOnScroll={true} delay={0.3}>
            <h3 className="text-winterWay hidden text-[22px] !leading-[130%] font-extrabold tracking-[-0.72px] sm:block sm:text-2xl sm:font-semibold md:text-3xl xl:text-4xl">
              {data?.title}
            </h3>
            <h3 className="gradient-text-2 xs:max-w-[100%] block max-w-[83%] text-[22px] !leading-[130%] font-extrabold tracking-[-0.72px] sm:hidden">
              {data?.title}
            </h3>
          </TextAnimation>

          <ul className="space-y-[14px] sm:space-y-3 lg:space-y-5">
            {data?.content?.map((feature, index) => (
              <li
                key={index}
                className="text-lightBlack flex gap-2.5 text-xs font-medium sm:items-center sm:px-2 sm:text-sm sm:font-semibold md:px-3 md:py-2.5 md:text-base xl:text-lg"
              >
                <span className="max-w-5 min-w-5 md:max-w-6">
                  <CheckIcon
                    className="mt-0.5 h-full w-full max-w-4 min-w-4 md:max-w-6 md:min-w-5"
                    width={25}
                    height={25}
                  />
                </span>
                <span>{feature?.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="relative z-20 hidden flex-col items-center justify-center gap-2.5 px-2 sm:flex">
        <FreeAccountButton
          className="gap-1.5"
          text={trackProperties?.btnText}
        />
        <CardRequiredButton className="text-wallStreet" text={ncc} />
      </div>
    </>
  );
};

export default HowContractorWork;
