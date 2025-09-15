import Copy from "@/components/common/Copy";
import InvestorHero from "@/components/investors/InvestorHero";
import MarketOpportunity from "@/components/investors/MarketOpportunity";
import MidMarketTable from "@/components/investors/MidMarketTable";
import ProofWorking from "@/components/investors/ProofWorking";
import SmartMoney from "@/components/investors/SmartMoney";
import TeamList from "@/components/investors/TeamList";
import TeamListMobile from "@/components/investors/TeamListMobile";
import TheProblem from "@/components/investors/TheProblem";
import WhatNext from "@/components/investors/WhatNext";
import WhyNow from "@/components/investors/WhyNow";
import WinTeam from "@/components/investors/WinTeam";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getInvestorsData } from "@/services/investors/getInvestorsData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
interface InvestorsPageProps {
  params: Promise<{
    locale: string;
  }>;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `investor?locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}

export default async function InvestorsPage({ params }: InvestorsPageProps) {
  const { locale } = await params;
  const {
    hero,
    problemSection,
    table,
    whyNowSection,
    whyContractorSection,
    proofSection,
    marketOpportunity,
    whatNext,
    smartMoney,
    disclaimerText,
    whyThisTeamSection,
  } = await getInvestorsData(locale);
  console.log("wesx", table);

  return (
    <main id="home-page-view-port-screen">
      <div
        id="home-page-header-view-port-screen"
        className="relative opacity-0"
      >
        <InvestorHero
          heroDescription={hero?.heroDescription}
          heroSubTitle={hero?.heroSubTitle}
          heroTitle={hero?.heroTitle}
          heroSubDesc={hero?.heroSubDesc}
          btnText={hero?.btnText}
        />
        <TheProblem
          items={problemSection?.items}
          desc={problemSection?.desc}
          subBoldDesc={problemSection?.subBoldDesc}
          subBoldTitle={problemSection?.subBoldTitle}
          title={problemSection?.title}
          subDesc={problemSection?.subDesc}
        />
        {/* <MidMarketTable tableData={table || []} /> */}
        <TeamList teamData={table || []} />
        <TeamListMobile teamData={table || []} />
        <WhyNow items={whyNowSection?.items} />
        <ProofWorking
          title={whyContractorSection?.title}
          desc={whyContractorSection?.desc}
          //@ts-ignore
          title2={proofSection?.title}
          desc2={proofSection?.desc}
          items={proofSection?.items}
        />
        <div className="overflow-hidden pt-10 pb-[57px] sm:mt-16 sm:py-10 lg:mt-0">
          <p className="proof-working relative z-20 mx-auto mt-[100px] mb-16 w-fit text-center text-base font-semibold tracking-[-0.32px]">
            {proofSection?.buttomText ||
              "Now imagine what we'll do with real capital."}
          </p>
          <MarketOpportunity marketOpportunityData={marketOpportunity || []} />
        </div>
        <WhatNext
          title={whatNext?.title}
          desc={whatNext?.desc}
          items={whatNext?.items}
        />
        <WinTeam
          teamCards={whyThisTeamSection?.teamCards}
          title={whyThisTeamSection?.title}
        />
        <SmartMoney
          btnText={smartMoney?.btnText}
          title={smartMoney?.title}
          desc={smartMoney?.desc}
        />
        <div className="mx-auto w-full max-w-[1296px] px-4 pt-[74px] pb-[80px] md:pt-[100px] lg:pt-[190px]">
          <Copy animateOnScroll={true}>
            <p className="text-secondary text-center text-xs font-medium">
              {disclaimerText}
            </p>
          </Copy>
        </div>
      </div>
    </main>
  );
}
