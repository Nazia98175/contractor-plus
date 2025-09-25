import React from "react";
import { CheckIcon } from "../common/Icons";
import Copy from "../common/Copy";

interface Props {
  trackProperties?: any;
}

const LikeYouDoContacts: React.FC<Props> = ({ trackProperties }) => {
  if (!trackProperties?.featuresList?.[0]?.content?.length) return null;
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-[1080px] flex-col-reverse items-start justify-between gap-7 px-2 pt-[66px] sm:py-14 md:flex-row md:gap-10 lg:pt-16 lg:pb-0">
      <div className="w-full space-y-4 md:max-w-[522px] lg:space-y-5">
        <Copy animateOnScroll={true} delay={0.3}>
          <h3 className="text-winterWay heading hidden sm:block">
            {trackProperties?.featuresList?.[0]?.title}
          </h3>
          <h3 className="gradient-text-2 block text-[22px] font-extrabold sm:hidden">
            {trackProperties?.featuresList?.[0]?.title}
          </h3>
        </Copy>

        <ul className="space-y-[14px] sm:space-y-3 lg:space-y-5">
          {trackProperties?.featuresList?.[0]?.content?.map(
            (feature: any, index: number) => (
              <div key={index}>
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
                {feature?.desc && (
                  <p className="font-semibild text-wallStreet mt-2.5 text-sm leading-[100%] md:text-lg lg:text-base">
                    {feature?.desc}
                  </p>
                )}
              </div>
            ),
          )}
        </ul>
      </div>

      <div className="flex w-full items-center justify-center md:max-w-[480px]">
        <img
          src={trackProperties?.featuresList?.[0]?.cardImg.url || null}
          alt="Illustration showing contractor workflow"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
};

export default LikeYouDoContacts;
