import { platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import BuildRightNow from "@/components/developersapi/BuildRightNow";
import DevelopersApiHero from "@/components/developersapi/DevelopersApiHero";
import PublicEndPoints from "@/components/developersapi/PublicEndPoints";
import React from "react";

const developersApiPage = () => {
  return (
    <>
      <DevelopersApiHero />
      <div className="relative overflow-hidden">
        <BuildRightNow />
        <img
          className="pointer-events-none absolute bottom-[0%] h-[43%] w-[45%] object-cover"
          src={"/images/webp/large-combat.webp"}
          alt="large-combat"
        />
        <PublicEndPoints />
        <TrustBar platforms={platforms} className="pb-16 sm:pb-10" />
      </div>
    </>
  );
};

export default developersApiPage;
