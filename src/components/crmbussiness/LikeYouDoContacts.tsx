import Image from "next/image";
import React from "react";
import TextAnimation from "../common/TextAnimation";
import { CheckIcon } from "../common/Icons";

const LikeYouDoContacts = () => {
  const contactFeatures = [
    "Timeline of every job, message, and update",
    "All docs, permits, and photos in one place",
    "Log emails using property-specific CC addresses",
    "Add live camera feeds to any property",
    "Track permits tied to each location",
  ];
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-[1080px] flex-col items-start justify-between gap-5 px-2 py-10 sm:py-14 md:flex-row md:gap-10 lg:py-16">
      <div className="w-full max-w-[522px] space-y-4 lg:space-y-5">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h3 className="text-winterWay heading">
            Track properties like you do your contacts
          </h3>
        </TextAnimation>

        <ul className="space-y-2 sm:space-y-3 lg:space-y-5">
          {contactFeatures.map((feature, index) => (
            <li
              key={index}
              className="text-lightBlack flex gap-2.5 px-2 py-2.5 text-base font-medium sm:items-center sm:font-semibold md:px-3 xl:text-lg"
            >
              <span className="max-w-5 min-w-5 md:max-w-6">
                <CheckIcon width={25} height={25} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full max-w-[480px] items-center justify-center">
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
