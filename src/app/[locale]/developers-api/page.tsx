import { platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import BuildRightNow from "@/components/developersapi/BuildRightNow";
import DevelopersApiHero from "@/components/developersapi/DevelopersApiHero";
import PublicEndPoints from "@/components/developersapi/PublicEndPoints";
import { DevelopersApiData } from "@/services/developers-api/getDevelopersApi";
import React from "react";
export const metadata = {
  title: "The OS at the center of your stack—not just another app",
  description:
    "uild custom flows, multi-location (or division) dashboards, automate the busywork, and wire Contractor+ into your stack so it fits like a glove. Trusted by 50,000+ contractors.",
  keywords: ["Developers API"],
  // openGraph: {
  //   images: [
  //     {
  //       url: "/images/webp/property-profiles-og.webp",
  //       width: 1920,
  //       height: 630,
  //       alt: "Local SEO for Contractors",
  //     },
  //   ],
  // },
  alternates: {
    canonical: "https://v2site.contractorplus.app/developers-api",
  },
};
interface DevelopersApiProps {
  params: {
    locale: string;
  };
}
export const developersApiPage = async ({ params }: DevelopersApiProps) => {
  const { hero, whatYouCanBuild, goBeyond } = await DevelopersApiData(
    params.locale,
  );

  return (
    <>
      <DevelopersApiHero mainItems={hero} />
      <div className="relative overflow-hidden">
        <BuildRightNow
          items={whatYouCanBuild?.items}
          title={whatYouCanBuild?.title}
        />
        <img
          className="pointer-events-none absolute bottom-[0%] h-[43%] w-[45%] object-cover"
          src={"/images/webp/large-combat.webp"}
          alt="large-combat"
        />
        <PublicEndPoints
          title={goBeyond?.title || "Go beyond the public end points"}
          description={
            goBeyond?.desc ||
            "Need something bespoke? We have 400+ endpoints available to expose for enterprise customers and strategic integration partners. Tell us what you’re building and we’ll open the right doors."
          }
          freeTrialButtonText="View API Reference"
          slackButtonText="Join us on Slack"
          slackLinkText="Need help integrating?"
          slackLinkHref="/"
        />

        <TrustBar platforms={platforms} className="pb-16 sm:pb-10" />
      </div>
    </>
  );
};

export default developersApiPage;
