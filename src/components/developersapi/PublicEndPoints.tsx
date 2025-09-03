import React from "react";
import FreeTrialButton from "../common/FreeTrialButton";
import Link from "next/link";
import { SlackIcon } from "../common/Icons";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import FreeAccountButton from "../common/FreeAccountButton";

interface PublicEndPointsProps {
  title?: string;
  description?: string;
  freeTrialButtonText?: string;
  slackButtonText?: string;
  slackLinkText?: string;
  slackLinkHref?: string;
  slack?: boolean;
}

const PublicEndPoints: React.FC<PublicEndPointsProps> = ({
  title,
  description,
  freeTrialButtonText,
  slackButtonText,
  slackLinkText,
  slackLinkHref,
  slack = true,
}) => {
  return (
    <section className="mx-auto mt-[95px] mb-[59px] w-full max-w-[898px] px-2 lg:px-0">
      <AdaptiveHeroTitle
        title={title ?? ""}
        className="text-decemberSky text-center font-extrabold"
        minFontSize={16}
        maxLines={1}
        maxFontSize={32}
        textAnimation="home-page-view-port-screen-fetures"
      />

      {description && (
        <p className="text-secondary mt-4 mb-[34px] text-center text-sm font-medium sm:text-base md:text-lg lg:text-xl">
          {description}
        </p>
      )}

      <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row">
        {freeTrialButtonText && (
          <FreeAccountButton showIcon={true} text={freeTrialButtonText} />
        )}

        {slack && (slackButtonText || slackLinkText) && (
          <div>
            {slackButtonText && (
              <button className="font-montserrat flex items-center gap-1.5 px-6 py-2.5 text-base font-bold tracking-[0.1px] text-white">
                <SlackIcon /> {slackButtonText}
              </button>
            )}
            {slackLinkText && (
              <Link
                className="font-myriad text-gray pl-10 text-base font-semibold"
                href={slackLinkHref ?? "#"}
              >
                {slackLinkText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicEndPoints;
