import FinallyMakesInvoicing from "@/components/billing/FinallyMakesInvoicing";
import OneClearInvoice from "@/components/billing/OneClearInvoice";
import { integrationLogos, platforms } from "@/components/common/Helper";
import LoadingFallback from "@/components/common/LoadingFallback";
import TrustBar from "@/components/common/TrustBar";
import { billingSliderData } from "@/components/common/Utils";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CommonHero from "@/components/crmbussiness/CommonHero";
import Faq from "@/components/crmbussiness/Faq";
import IndustryService from "@/components/crmbussiness/IndustryService";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import GoingFieldSevices from "@/components/fieldservices/GoingFieldSevices";
import NeverLookBack from "@/components/fieldservices/NeverLookBack";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import { getSeoData } from "@/services/common/seoMeta";
import { getSolutionPageData } from "@/services/solutions/getSolutionPageData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoData(
    "solutions",
    resolvedParams.locale,
    "contractor-invoicing-software",
  );

  if (!page) notFound();
  return generateSeoMetaData({ page, slug: "/contractor-invoicing-software" });
}

const BillingPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const useParams = await params;
  const {
    solutionPageContent,
    reviews,
    commonProblems,
    trackProperties,
    comparisonList,
    teamsUsingContractor,
    faqs,
    thousandReviews,
    commonData,
    integrationList,
    hero,
    blogsByCategory,
  } = await getSolutionPageData(
    "contractor-invoicing-software",
    useParams?.locale,
  );

  return (
    <main className="relative z-10 overflow-hidden">
      <CommonHero
        commonData={commonData}
        hero={hero}
        heroImg={hero?.heroImg}
        solutionTag="Contractor Invoicing Software"
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

        <OneClearInvoice
          theme="estimateTheme"
          fieldService={billingSliderData}
        />
        <RunWithContractor kindAdorable={comparisonList} />
        <FinallyMakesInvoicing
          steps={trackProperties?.cards}
          subTitle={trackProperties?.subTitle}
          title={trackProperties?.title}
        />
        <NeverLookBack data={teamsUsingContractor} />
      </div>
      <ThousandsReviews
        data={solutionPageContent?.data?.[0]?.reviewTrustSection}
        reviews={thousandReviews?.reviews}
        variant="secondary"
      />
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
        className="pb-[148px] xl:pb-20"
      />
      <Faq
        faq={faqs?.faqs}
        classNameAnswer="pt-1"
        mainContainerclassName="px-2 md:pb-[76px]  md:pb-[83px] pb-10"
        TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
      />
      <WhatEverClient
        data={commonData?.contractorConnects}
        issection={false}
        images={
          integrationList?.hero
            ? integrationList?.hero?.images?.map((item: any) => item?.url)
            : integrationLogos
        }
      />
      <Suspense fallback={<LoadingFallback />}>
        <BlogPosts
          data={blogsByCategory || []}
          blogs={blogsByCategory || []}
          className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
        />
      </Suspense>
    </main>
  );
};

export default BillingPage;
