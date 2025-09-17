import {
  blogList,
  dealFlowBlogHeadingData,
  dealflowFaq,
  dealflowformData,
  dealflowhero,
  dealReviews,
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

export const metadata = {
  title: "Opportunity Tracker for Contractors | Contractor+",
  description:
    "One board that shows every deal, dollar value, and next steps so you can win more opportunities. Convert won leads to jobs in one click. ",
  keywords: ["Opportunity Tracker for Contractors | Contractor+"],
  openGraph: {
    images: [
      {
        url: "/images/webp/opportunity-tracker-og.webp",
        width: 1920,
        height: 630,
        alt: "opportunity-tracker-og",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/opportunity-tracker",
  },
};
interface Params {
  params: Promise<{ locale: string }>;
}
const DealFlowTracker = async ({ params }: Params) => {
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

  console.log("frdsxz", solutionPageContent);

  return (
    <div className="overflow-x-hidden">
      <CommonHero
        commonData={commonData}
        hero={hero}
        heroImg={hero?.heroImg}
        solutionTag="Opportunity Tracker"
      />
      <TrustedService
        reviews={dealReviews}
        slug="crm"
        apiData={false}
        className="shadow-c5 pb-6"
      />
      <div className="overflow-hidden bg-white">
        <div className="">
          <GoingFieldSevices
            cardsDetail={commonProblems?.cardsDetail}
            title={commonProblems?.title}
          />
        </div>
        <ContractorWork
          theme="estimateTheme"
          fieldService={realTimeServiceSliderData}
        />
        <RunWithContractor kindAdorable={comparisonList} />
        <FinallyConnectsField />
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
        data={{
          title: "Whatever you use, Contractor+ connects",
          subTitle: "5000+ Potential Integrations",
        }}
        images={
          integrationList?.hero
            ? integrationList?.hero?.images?.map((item: any) => item?.url)
            : integrationLogos
        }
        issection={false}
      />
      <BlogPosts
        data={blogs}
        blogs={solutionPageContent?.data?.[0]?.blogs}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />
    </div>
  );
};
export default DealFlowTracker;
