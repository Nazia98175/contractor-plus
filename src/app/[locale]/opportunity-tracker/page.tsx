import { integrationLogos, platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CommonHero from "@/components/crmbussiness/CommonHero";
import Faq from "@/components/crmbussiness/Faq";
import IndustryService from "@/components/crmbussiness/IndustryService";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import ContractorWork from "@/components/dealflowtracker/ContractorWork";
import FinallyConnectsField from "@/components/dealflowtracker/FinallyConnectsField";
import GoingFieldSevices from "@/components/fieldservices/GoingFieldSevices";
import NeverLookBack from "@/components/fieldservices/NeverLookBack";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import { getSeoData } from "@/services/common/seoMeta";
import { getSolutionPageData } from "@/services/solutions/getSolutionPageData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface OpportunityTrackerProps {
  params: Promise<{ locale: string }>;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoData(
    "solutions",
    resolvedParams.locale,
    "opportunity-tracker&populate[seoMetaData][populate]=*",
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: "/opportunity-tracker" });
  
}
export default async function OpportunityTracker({
  params,
}: OpportunityTrackerProps) {
  const useParams = await params;
  const {
    solutionPageContent,
    reviews,
    commonProblems,
    fieldServiceData,
    trackProperties,
    comparisonList,
    teamsUsingContractor,
    faqs,
    blogs,
    thousandReviews,
    commonData,
    integrationList,
    hero,
  } = await getSolutionPageData("opportunity-tracker", useParams?.locale);
  return (
    <div className="overflow-x-hidden">
      <CommonHero
        commonData={commonData}
        hero={hero}
        heroImg={hero?.heroImg}
        solutionTag="Opportunity Tracker"
      />
      <TrustedService reviews={reviews} slug="crm" className="shadow-c5 pb-6" />
      <div className="overflow-hidden bg-white">
        <div className="pt-8 sm:pt-12">
          <GoingFieldSevices
            cardsDetail={commonProblems?.cardsDetail}
            title={commonProblems?.title}
            isImageshow={false}
          />
        </div>
        <ContractorWork theme="estimateTheme" fieldService={fieldServiceData} />
        <RunWithContractor kindAdorable={comparisonList} />
        <FinallyConnectsField
          cards={trackProperties?.cards}
          subTitle={trackProperties?.subTitle}
          title={trackProperties?.title}
        />
        <NeverLookBack data={teamsUsingContractor} />
      </div>
      <div className="relative">
        <div className="bg-kuroiBlack pointer-events-none absolute -top-1 z-20 h-2 w-full"></div>
        <ThousandsReviews
          data={solutionPageContent?.data?.[0]?.reviewTrustSection}
          reviews={thousandReviews?.reviews}
          variant="secondary"
        />
      </div>
      <IndustryService
        createBtn={commonData?.getStartedFreeBtn}
        mobileBtn={commonData?.mobileBtn}
        ncc={commonData?.nccTxt}
        data={solutionPageContent?.data?.[0]?.emailSignupSection}
        showClouds={false}
        className="xs:max-w-[88%] max-w-[87%] sm:max-w-[780px]"
        variantBtn="dark"
      />
      <TrustBar
        platforms={platforms}
        trustBarImages={commonData?.trustedCompaniesWhiteBG}
        className="md:pb-[148px] xl:pb-20"
      />
      <Faq
        faq={faqs?.faqs}
        classNameAnswer="pt-1"
        mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
        TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
      />
      <WhatEverClient
        data={commonData?.contractorConnects}
        issection={false}
        images={
          integrationList?.images
            ? integrationList?.images?.map((item: any) => item?.url)
            : integrationLogos
        }
      />
      <BlogPosts
        data={blogs}
        blogs={solutionPageContent?.data?.[0]?.blogs}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />
    </div>
  );
}
