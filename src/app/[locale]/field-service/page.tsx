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
import { getCrmPage } from "@/services/crm";
import { getHomePage } from "@/services/homePage/homepage";

export const metadata = {
  title: "Contractor Plus - Field Service",
  description:
    "One command center to visualize and run your entire field operation",
};

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

  const [
    crmPageContent,
    reviews,
    section3,
    section4,
    section5,
    section6,
    neverLookBackData,
    faq,
    blogs,
    thousandReviews,
  ] = await Promise.all([
    getCrmPage("field-service", useParams.locale, "&populate=*"),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[reviews][populate]=reviews",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[switchingTool][populate]=cardsDetail",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[fieldService][populate][cardsDetail][populate]=*",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[trackProperties][populate][cardDetails][populate]=*",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[comparison][populate][centerLogo]=true&populate[comparison][populate][features]=true",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[teamsUsingContractor][populate]=*",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[faqs][populate]=faq",
    ),
    getBlogs(useParams?.locale, "&sort=publishedAt:desc&pagination[limit]=3"),
    getCrmPage(
      "field-service",
      useParams?.locale,
      "&populate[thousandReviews][populate]=reviews",
    ),
  ]);

  return (
    <main className="overflow-hidden">
      <FieldServicesHero hero={crmPageContent?.data?.[0]?.hero} />
      <ServiceContractorsMarquee reviews={reviews} />
      <div className="bg-white">
        <GoingFieldSevices switchingTool={section3?.data?.[0]?.switchingTool} />
        <RealTimeServiceConnector
          theme="estimateTheme"
          fieldService={section4?.data?.[0]?.fieldService}
        />
      </div>
      <RunWithContractor kindAdorable={section6?.data?.[0]?.comparison} />
      <TimmingEffect />
      <NeverLookBack
        data={neverLookBackData?.data?.[0]?.teamsUsingContractor}
      />
      <ThousandsReviews
        data={crmPageContent?.data?.[0]?.thousandReviews}
        reviews={thousandReviews?.data?.[0]?.thousandReviews?.reviews}
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
          faq={faq?.data?.[0]?.faqs}
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
  );
};

export default FieldServicesPage;
