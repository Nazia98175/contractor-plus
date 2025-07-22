import { platforms } from "@/components/common/Helper";
import { FooterRedLineMobileIcon } from "@/components/common/Icons";
import TrustBar from "@/components/common/TrustBar";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import Faq from "@/components/crmbussiness/Faq";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import FieldServicesHero from "@/components/field-services/FieldServicesHero";
import GoingFieldSevices from "@/components/field-services/GoingFieldSevices";
import NeverLookBack from "@/components/field-services/NeverLookBack";
import RealTimeServiceConnector from "@/components/field-services/RealTimeServiceConnector";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import ServiceContractorsMarquee from "@/components/field-services/ServiceContractorsMarquee";
import TimmingEffect from "@/components/field-services/TimmingEffect";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import { getSeoData } from "@/services/common/seoMeta";
import { getSolutionPageData } from "@/services/solutions/getSolutionPageData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoData(
    "solutions",
    resolvedParams.locale,
    "field-service",
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
        `${process.env.NEXT_PUBLIC_DOMAIN}/field-service`,
    },
  };
}

interface Params {
  params: Promise<{ locale: string }>;
}

const FieldServicesPage = async ({ params }: Params) => {
  const useParams = await params;

  const {
    solutionPageContent,
    reviews,
    switchingTool,
    fieldServiceData,
    trackProperties,
    comparison,
    teamsUsingContractor,
    faqs,
    blogs,
    thousandReviews,
    commonData,
  } = await getSolutionPageData("field-service", useParams?.locale);

  return (
    <>
      {/* <MainLoader /> */}
      <main className="overflow-hidden">
        <FieldServicesHero
          hero={solutionPageContent?.data?.[0]?.hero}
          solutionTag={solutionPageContent?.data?.[0]?.solutionTag}
          commonData={commonData}
        />
        <ServiceContractorsMarquee reviews={reviews} />
        <div className="bg-white">
          <GoingFieldSevices switchingTool={switchingTool?.commonProblems} />
          <RealTimeServiceConnector
            theme="estimateTheme"
            fieldService={fieldServiceData}
          />
        </div>
        <RunWithContractor kindAdorable={comparison} />
        <TimmingEffect timingEff={trackProperties} commonData={commonData} />
        <NeverLookBack data={teamsUsingContractor} />
        <ThousandsReviews
          data={solutionPageContent?.data?.[0]?.reviewTrustSection}
          reviews={thousandReviews?.reviews}
          variant="secondary"
        />
        <div className="relative overflow-visible">
          <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden" />
          <CrmSercive
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
            className="mx-auto w-full max-w-[889px]"
          />
          <Faq
            faq={faqs?.faqs}
            classNameAnswer="pt-1"
            mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
            TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
          />
        </div>
        <WhatEverClient
          data={commonData?.contractorConnects}
          issection={false}
        />
        <BlogPosts
          data={blogs}
          blogs={solutionPageContent?.data?.[0]?.blogs}
          className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
        />
      </main>
    </>
  );
};

export default FieldServicesPage;
