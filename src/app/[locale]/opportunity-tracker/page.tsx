import {
  blogList,
  dealFlowBlogHeadingData,
  dealflowFaq,
  dealflowformData,
  dealflowhero,
  dealReviews2,
  fieldcarddetail,
  integrationLogos,
  opportunityTracker,
  platforms,
  realTimeServiceSliderData,
  runWithContractorData,
} from "@/components/common/Helper";

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
import { getIntegrationList } from "@/services/integation/getIntegrationData";
import { getSolutionPageData } from "@/services/solutions/getSolutionPageData";
import Estimate_Scheduled from "../../../../public/lotties/Estimate-Scheduled.json";
import Estimate_Sent from "../../../../public/lotties/Estimate-Sent.json";
import Initial_Contact from "../../../../public/lotties/Initial-Contact.json";
import Job_Scheduled from "../../../../public/lotties/Job-Scheduled.json";
import Lead_Captured from "../../../../public/lotties/Lead-Captured.json";
import dealApproved from "../../../../public/lotties/Deal-Approved.json";
import Revenue_Forecast_Updated from "../../../../public/lotties/Revenue-Forecast-Updated.json";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { notFound } from "next/navigation";
import { getSeoData, getSeoDataCommon } from "@/services/common/seoMeta";
import { Metadata } from "next";
// export const metadata = {
//   title: "Opportunity Tracker for Contractors | Contractor+",
//   description:
//     "One board that shows every deal, dollar value, and next steps so you can win more opportunities. Convert won leads to jobs in one click. ",
//   keywords: ["Opportunity Tracker for Contractors | Contractor+"],
//   openGraph: {
//     images: [
//       {
//         url: "/images/webp/opportunity-tracker-og.webp",
//         width: 1920,
//         height: 630,
//         alt: "opportunity-tracker-og",
//       },
//     ],
//   },
//   alternates: {
//     canonical: "https://v2site.contractorplus.app/opportunity-tracker",
//   },
// };
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
    "opportunity-tracker",
  );

  if (!page) notFound();

  return {
    title:
      page.seoMetaData?.metaTitle ||
      page.hero?.heroTitle ||
      `Contractor+ field-service`,
    description: page.seoMetaData?.metaDescription || page.hero?.subTitle || "",
    keywords: page.seoMetaData?.keywords || "",
    alternates: {
      canonical:
        page.seoMetaData?.canonicalUrl ??
        `${process.env.NEXT_PUBLIC_DOMAIN}/opportunity-tracker`,
    },
  };
}

interface Params {
  params: Promise<{ locale: string }>;
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

  // const cards = [
  //   {
  //     title: "Lead Captured",
  //     description:
  //       "A new lead is captured by Big Chief AI or manually entered into the CRM. It’s instantly added to your Deal Flow pipeline with property, contact info, and project notes.",
  //     lottieJson: Lead_Captured,
  //     imgClass: "relative h-[245px] max-w-[611px]",
  //   },
  //   {
  //     title: "Initial Contact",
  //     description:
  //       "You or your team follows up, logs notes, and assigns a dollar value to the opportunity.",
  //     lottieJson: Initial_Contact,
  //     imgClass: "absolute top-0 left-0 h-[245px] max-w-[611px]",
  //   },
  //   {
  //     title: "Estimate Scheduled",
  //     description:
  //       "You schedule a walkthrough or site visit directly from the opportunity without switching tools.",
  //     lottieJson: Estimate_Scheduled,
  //     imgClass: "absolute top-0 left-0 h-[245px] max-w-[611px]",
  //   },
  //   {
  //     title: "Estimate Sent",
  //     description:
  //       "The estimate is generated and linked directly to the deal card.",
  //     lottieJson: Estimate_Sent,
  //     imgClass: "absolute top-0 left-0 h-[245px] max-w-[611px]",
  //   },
  //   {
  //     title: "Deal Approved",
  //     description:
  //       "You move the card to “Approved” and convert it to a job instantly.",
  //     lottieJson: dealApproved,
  //     imgClass: "absolute top-0 left-0 h-[245px] max-w-[611px]",
  //   },
  //   {
  //     title: "Job Scheduled",
  //     description:
  //       "The new job is created and scheduled, with the original deal, estimate, and client details fully synced across Contractor+.",
  //     lottieJson: Job_Scheduled,
  //     imgClass: "absolute top-0 left-0 h-[345px] max-w-[611px]",
  //   },
  //   {
  //     title: "Initial Contact",
  //     description:
  //       "Your pipeline now reflects the converted value, updating your projected revenue and helping you prioritize what’s next.",
  //     lottieJson: Revenue_Forecast_Updated,
  //     imgClass: "absolute top-0 left-0 h-[245px] max-w-[611px]",
  //   },
  // ];
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
        <div>
          <GoingFieldSevices
            cardsDetail={commonProblems?.cardsDetail}
            title={commonProblems?.title}
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
