import { platforms } from "@/components/common/Helper";
import { FooterRedLineMobileIcon } from "@/components/common/Icons";
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
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import { getBlogs } from "@/services/blogs";
import { getSeoData } from "@/services/common/seoMeta";
import { getFeaturesPageData } from "@/services/features/getCrmPageData";
import { getHomePage } from "@/services/homePage/homepage";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoData(
    "services-pages",
    resolvedParams.locale,
    "field-service",
    "&populate[seoMeta]=true&populate[hero]=true",
  );

  if (!page) return;

  return {
    title:
      page.seoMeta?.metaTitle ||
      page.hero?.heroTitle ||
      `Contractor+ field-service`,
    description: page.seoMeta?.metaDescription || page.hero?.subtitle || "",
    keywords: page.seoMeta?.keywords || "",
    alternates: {
      canonical:
        page.seoMeta?.canonicalUrl ??
        `${process.env.NEXT_PUBLIC_DOMAIN}/field-service`,
    },
  };
}

interface Params {
  params: Promise<{ locale: string }>;
}

const FieldServicesPage = async ({ params }: Params) => {
  const useParams = await params;

  const [homePageContent] = await Promise.all([
    getHomePage(useParams?.locale || "en", "&populate=*"),
    getHomePage(
      useParams?.locale || "en",
      "&populate[review][on][common.reviews][populate]=*",
    ),
  ]);

  const {
    crmPageContent,
    reviews,
    switchingTool,
    fieldServiceData,
    trackProperties,
    comparison,
    teamsUsingContractor,
    faqs,
    blogs,
    thousandReviews,
  } = await getFeaturesPageData("field-service", useParams?.locale);

  return (
    <>
      {/* <MainLoader /> */}
      <main className="overflow-hidden">
        <FieldServicesHero hero={crmPageContent?.data?.[0]?.hero} />
        <ServiceContractorsMarquee reviews={reviews} />
        <div className="bg-white">
          <GoingFieldSevices switchingTool={switchingTool?.switchingTool} />
          <RealTimeServiceConnector
            theme="estimateTheme"
            fieldService={fieldServiceData?.fieldService}
          />
        </div>
        <RunWithContractor kindAdorable={comparison?.comparison} />
        <TimmingEffect />
        <NeverLookBack data={teamsUsingContractor?.teamsUsingContractor} />
        <ThousandsReviews
          data={crmPageContent?.data?.[0]?.thousandReviews}
          reviews={thousandReviews?.thousandReviews?.reviews}
          variant="secondary"
        />
        <div className="relative overflow-visible">
          <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden" />
          <CrmSercive
            createBtn={crmPageContent?.data?.[0]?.hero?.createBtn}
            mobileBtn={crmPageContent?.data?.[0]?.hero?.mobileBtn}
            ncc={crmPageContent?.data?.[0]?.hero?.ncc_txt}
            data={crmPageContent?.data?.[0]?.crmService}
            showClouds={false}
          />
          <TrustBarHvca
            platforms={platforms}
            className="mx-auto w-full max-w-[889px]"
          />
          <Faq
            faq={faqs?.faqs}
            classNameAnswer="pt-1"
            mainContainerclassName="md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
          />
        </div>
        <WhatEverClient
          data={homePageContent?.data?.whateverOperation}
          issection={false}
        />
        <BlogPosts
          data={crmPageContent?.data?.[0]?.blogs}
          blogs={blogs}
          className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
        />
      </main>
    </>
  );
};

export default FieldServicesPage;
