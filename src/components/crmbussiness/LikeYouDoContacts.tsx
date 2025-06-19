import Image from "next/image";
import React from "react";
import TextAnimation from "../common/TextAnimation";
import { CheckIcon } from "../common/Icons";

interface Content {
  title: string;
}

interface LikeYouDo {
  title: string;
  content: Content[];
}

interface Props {
  data: LikeYouDo;
}

const LikeYouDoContacts: React.FC<Props> = ({ data }) => {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-[1080px] flex-col-reverse items-start justify-between gap-7 px-2 pt-[66px] sm:py-14 md:flex-row md:gap-10 lg:pt-16 lg:pb-0">
      <div className="w-full space-y-4 md:max-w-[522px] lg:space-y-5">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h3 className="text-winterWay heading">{data?.title}</h3>
        </TextAnimation>

        <ul className="space-y-[14px] sm:space-y-3 lg:space-y-5">
          {data?.content?.map((feature, index) => (
            <li
              key={index}
              className="text-lightBlack flex gap-2.5 text-xs font-medium sm:items-start sm:px-2 sm:text-sm sm:font-semibold md:px-3 md:py-2.5 md:text-base xl:text-lg"
            >
              <CheckIcon
                className="mt-0.5 h-full w-full max-w-4 min-w-4 md:max-w-6 md:min-w-5"
                width={25}
                height={25}
              />
              <span>{feature?.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full items-center justify-center md:max-w-[480px]">
        <Image
          src="/images/webp/like-contacts.webp"
          alt="Illustration showing contractor workflow"
          width={480}
          height={600}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default LikeYouDoContacts;
