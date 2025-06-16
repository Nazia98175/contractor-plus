import { OurReviewList, platforms } from "@/components/common/Helper";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import FieldServicesHero from "@/components/field-services/FieldServicesHero";
import GoingFieldSevices from "@/components/field-services/GoingFieldSevices";
import NeverLookBack from "@/components/field-services/NeverLookBack";
import RealTimeServiceConnector from "@/components/field-services/RealTimeServiceConnector";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import ServiceContractorsMarquee from "@/components/field-services/ServiceContractorsMarquee";
import TimmingEffect from "@/components/field-services/TimmingEffect";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import HvacFaq from "@/components/hvca/HvacFaq";
import HvacSoftwareService from "@/components/hvca/HvacSoftwareService";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import { getBlogs } from "@/services/blogs";
import { getCrmPage } from "@/services/crm";
import { getHomePage } from "@/services/homepage";
import { getUserLoc } from "@/services/map";
import { debugLog } from "@/utils/getConsole";
export const metadata = {
  title: "Contractor + - Field Services",
  description:
    "One command center to visualize and run your entire field operation",
};

interface Params {
  params: Promise<{ locale: string }>;
}

const FieldServicesPage = async ({ params }: Params) => {
  const useParams = await params;
  const location = await getUserLoc();

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
    section7,
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
      "&populate[teamsUsingContractor][populate][cards]=*",
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
  debugLog("feild-serv", crmPageContent?.data?.[0]);
  // console.log(crmPageContent?.data?.[0] , "thousand reviewss")
  return (
    <main className="overflow-hidden">
      <FieldServicesHero hero={crmPageContent?.data?.[0]?.hero} />
      <ServiceContractorsMarquee reviews={reviews} />
      <GoingFieldSevices switchingTool={section3?.data?.[0]?.switchingTool} />
      <RealTimeServiceConnector
        fieldService={section4?.data?.[0]?.fieldService}
      />
      <RunWithContractor kindAdorable={section6?.data?.[0]?.comparison} />
      <TimmingEffect />
      <NeverLookBack data={section7?.data?.[0]?.teamsUsingContractor} />
      <ThousandsReviews
        data={crmPageContent?.data?.[0]?.thousandReviews}
        reviews={thousandReviews?.data?.[0]?.thousandReviews?.reviews}
      />
      <HvacSoftwareService
        createBtn={crmPageContent?.data?.[0]?.hero?.createBtn}
        mobileBtn={crmPageContent?.data?.[0]?.hero?.mobileBtn}
        ncc={crmPageContent?.data?.[0]?.hero?.ncc_txt}
        data={crmPageContent?.data?.[0]?.crmService}
        descColorClass="text-secondary"
      />

      {/* <HvacSoftwareService /> */}
      <TrustBarHvca showTrustedSection={false} platforms={platforms} />
      <HvacFaq
        faqitems={faq?.data?.[0]?.faqs}
        // faqitems={faqitems}
        className="mt-12 md:mt-[74px]"
        variant="dark"
        heading="What contractors want to know"
        isClaud={false}
        isBlueLinear={false}
      />

      <WhatEverClient
        data={homePageContent?.data?.whateverOperation}
        issection={false}
      />
      <BlogPosts
        data={crmPageContent?.data?.[0]?.blogs}
        blogs={blogs}
        className="relative z-20 bg-white"
        variant="secondary"
      />
    </main>
  );
};

export default FieldServicesPage;
