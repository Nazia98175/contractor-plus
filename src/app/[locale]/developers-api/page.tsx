import { platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import BuildRightNow from "@/components/developersapi/BuildRightNow";
import DevelopersApiHero from "@/components/developersapi/DevelopersApiHero";
import PublicEndPoints from "@/components/developersapi/PublicEndPoints";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { DevelopersApiData } from "@/services/developers-api/getDevelopersApi";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `developer-api?locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}

interface DevelopersApiProps {
  params: Promise<{
    locale: string;
  }>;
}
export default async function DevelopersApiPage({
  params,
}: DevelopersApiProps) {
  // Destructure locale directly after awaiting
  const { locale } = await params;

  // Use locale directly
  const { hero, whatYouCanBuild, goBeyond } = await DevelopersApiData(locale);
  console.log("34edsaxz", whatYouCanBuild);

  console.log(hero, whatYouCanBuild, goBeyond);
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
}
