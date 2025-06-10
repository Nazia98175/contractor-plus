import Image from "next/image";
import React from "react";
import { CheckIcon, SideIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";
import Button from "../common/Button";
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
      <section className="relative z-20 mx-auto flex w-full max-w-[1064px] flex-col items-center justify-between gap-5 px-2 py-10 leading-0 sm:py-14 md:flex-row md:gap-10 lg:pt-16 lg:pb-[54px]">
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
            <h3 className="text-winterWay heading">
              {data?.title}
              {/* Made for how contractors, property managers, and REIs really work */}
            </h3>
          </TextAnimation>

          <ul className="space-y-2 sm:space-y-3 lg:space-y-5">
            {data?.content?.map((feature, index) => (
              <li
                key={index}
                className="text-lightBlack flex gap-2.5 px-2 py-2.5 text-base font-medium sm:font-semibold md:px-3 xl:text-lg"
              >
                <span className="max-w-5 min-w-5 md:max-w-6">
                  <CheckIcon width={25} height={25} />
                </span>
                <span>{feature?.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="relative z-20 flex flex-col items-center justify-center gap-2.5 px-2">
        <Button
          variant="primary"
          className="bg-red-linear primary-btn flex h-10 items-center gap-1.5"
        >
          {trackProperties?.btnText}
          <SideIcon />
        </Button>
        <button className="font-myriad text-wallStreet flex cursor-pointer items-center gap-1.5 text-sm font-semibold">
          <CheckIcon />
          {ncc}
        </button>
      </div>
    </>
  );
};

export default HowContractorWork;
