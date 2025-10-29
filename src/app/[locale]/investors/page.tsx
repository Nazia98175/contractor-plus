import Copy from "@/components/common/Copy";
import LoadingFallback from "@/components/common/LoadingFallback";
import InvestorHero from "@/components/investors/InvestorHero";
import MarketOpportunity from "@/components/investors/MarketOpportunity";
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
import { Suspense } from "react";
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
    tableMobile,
    mobileProofSection,
  } = await getInvestorsData(locale);

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
        <Suspense fallback={<LoadingFallback />}>
          <TheProblem
            items={problemSection?.items}
            desc={problemSection?.desc}
            subBoldDesc={problemSection?.subBoldDesc}
            subBoldTitle={problemSection?.subBoldTitle}
            title={problemSection?.title}
            subDesc={problemSection?.subDesc}
          />
        </Suspense>
        {/* <MidMarketTable tableData={table || []} /> */}
        <Suspense fallback={<LoadingFallback />}>
          <div className="hidden sm:block">
            <TeamList teamData={table || []} />
          </div>
          <div className="block px-2 sm:hidden">
            <TeamListMobile data={tableMobile} />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <WhyNow items={whyNowSection?.items} />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ProofWorking
            title={whyContractorSection?.title}
            desc={whyContractorSection?.desc}
            buttomText={proofSection?.buttomText}
            proofSectionTitle={proofSection?.title}
            proofSectionDec={proofSection?.proofSectionDec}
            rightStats={proofSection?.rightStats || []}
            leftStats={proofSection?.leftStats || []}
            mobileProofSection={mobileProofSection || []}
          />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div className="overflow-hidden pt-10 pb-[57px] sm:mt-16 sm:py-10 lg:mt-0">
            <MarketOpportunity
              marketOpportunityData={marketOpportunity || []}
            />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <WhatNext
            title={whatNext?.title}
            desc={whatNext?.desc}
            items={whatNext?.items}
          />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <WinTeam
            items={whyThisTeamSection?.items}
            title={whyThisTeamSection?.title}
          />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <SmartMoney
            btnText={smartMoney?.btnText}
            title={smartMoney?.title}
            desc={smartMoney?.desc}
          />
        </Suspense>
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
