import React from "react";
import FreeTrialButton from "../common/FreeTrialButton";
import Link from "next/link";
import { SlackIcon } from "../common/Icons";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";

const PublicEndPoints = () => {
  return (
    <section className="mx-auto mt-[95px] mb-[59px] w-full max-w-[898px] px-2 lg:px-0">
      <AdaptiveHeroTitle
        title="Go beyond the public end points"
        className="text-decemberSky text-center font-extrabold"
        minFontSize={16}
        maxLines={1}
        maxFontSize={32}
        textAnimation="home-page-view-port-screen-fetures"
      />
      <p className="text-secondary mt-4 mb-[34px] text-center text-sm font-medium sm:text-base md:text-lg lg:text-xl">
        Need something bespoke? We have 400+ endpoints available to expose for
        enterprise customers and strategic integration partners. Tell us what
        you’re building and we’ll open the right doors.
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row">
        <FreeTrialButton showIcon={true} text={"View API Reference"} />
        <div>
          <button className="font-montserrat flex items-center gap-1.5 px-6 py-2.5 text-base font-bold tracking-[0.1px] text-white">
            <SlackIcon /> Join us on Slack
          </button>
          <Link
            className="font-myriad text-gray pl-10 text-base font-semibold"
            href={"/"}
          >
            Need help integrating?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicEndPoints;
