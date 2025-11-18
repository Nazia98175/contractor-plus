import { integrationLogos, platforms } from "@/components/common/Helper";
import { FooterRedLineMobileIcon } from "@/components/common/Icons";
import LoadingFallback from "@/components/common/LoadingFallback";
import TrustBar from "@/components/common/TrustBar";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import Faq from "@/components/crmbussiness/Faq";
import IndustryService from "@/components/crmbussiness/IndustryService";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import FieldServicesHero from "@/components/fieldservices/FieldServicesHero";
import GoingFieldSevices from "@/components/fieldservices/GoingFieldSevices";
import NeverLookBack from "@/components/fieldservices/NeverLookBack";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import ServiceContractorsMarquee from "@/components/fieldservices/ServiceContractorsMarquee";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import { getSeoData } from "@/services/common/seoMeta";
import { getMaxMindLocation } from "@/services/map";
import { getSolutionPageData } from "@/services/solutions/getSolutionPageData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { lazy, Suspense } from "react";
const RealTimeServiceConnector = lazy(
  () => import("@/components/fieldservices/RealTimeServiceConnector"),
);
const TimmingEffect = dynamic(
  () => import("@/components/fieldservices/TimmingEffect"),
);
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoData(
    "solutions",
    resolvedParams.locale,
    "field-service-management",
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: "/field-service-management" });
}

interface Params {
  params: Promise<{ locale: string }>;
}

const FieldServicesPage = async ({ params }: Params) => {
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
    thousandReviews,
    commonData,
    integrationList,
    blogsByCategory,
  } = await getSolutionPageData("field-service-management", useParams?.locale);

  const ip = (await cookies()).get("user-ip")?.value;
  let geoLocation = null;

  geoLocation = await getMaxMindLocation(ip);
  console.log("comparisonList", comparisonList);

  return (
    <main id="home-page-wrapper-2" className="overflow-hidden">
      <div
        id="home-page-view-port-screen-field-service"
        className="relative opacity-0"
      >
        <FieldServicesHero
          hero={solutionPageContent?.data?.[0]?.hero}
          commonData={commonData}
          geoLocation={geoLocation}
          locale={useParams?.locale}
        />
      </div>
      <Suspense fallback={<LoadingFallback />}>
        <ServiceContractorsMarquee reviews={reviews} />
      </Suspense>
      <div className="bg-white">
        <Suspense fallback={<LoadingFallback />}>
          <GoingFieldSevices
            cardsDetail={commonProblems?.cardsDetail}
            title={commonProblems?.title}
          />
          <RealTimeServiceConnector
            theme="estimateTheme"
            fieldService={fieldServiceData}
          />
        </Suspense>
      </div>
      <RunWithContractor kindAdorable={comparisonList} />
      <Suspense fallback={<LoadingFallback />}>
        <TimmingEffect timingEff={trackProperties} commonData={commonData} />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <NeverLookBack data={teamsUsingContractor} />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ThousandsReviews
          data={solutionPageContent?.data?.[0]?.reviewTrustSection}
          reviews={thousandReviews?.reviews}
          variant="secondary"
        />
      </Suspense>
      <div className="relative overflow-visible">
        <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden" />
        <Suspense fallback={<LoadingFallback />}>
          <IndustryService
            createBtn={commonData?.getStartedFreeBtn}
            mobileBtn={commonData?.mobileBtn}
            ncc={commonData?.nccTxt}
            data={solutionPageContent?.data?.[0]?.emailSignupSection}
            showClouds={false}
            className="xs:max-w-[88%] max-w-[87%] sm:max-w-[780px]"
            variantBtn="dark"
          />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <TrustBar
            platforms={platforms}
            trustBarImages={commonData?.trustedCompaniesWhiteBG}
            className="mx-auto w-full max-w-[889px]"
          />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Faq
            faq={faqs?.faqs}
            classNameAnswer="pt-1"
            mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
            TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
          />
        </Suspense>
      </div>
      <Suspense fallback={<LoadingFallback />}>
        <WhatEverClient
          data={commonData?.contractorConnects}
          issection={false}
          images={
            integrationList?.images
              ? integrationList?.images?.map((item: any) => item?.url)
              : integrationLogos
          }
        />
      </Suspense>
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

export default FieldServicesPage;
