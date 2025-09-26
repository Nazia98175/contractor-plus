import {
  constructionBookkeepingServices,
  platforms,
} from "@/components/common/Helper";
import {
  FooterRedLineIcon,
  FooterRedLineMobileIcon,
} from "@/components/common/Icons";
import TrustBar from "@/components/common/TrustBar";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CommonHero from "@/components/crmbussiness/CommonHero";
import ConstructionBookkeepingCard from "@/components/constructionbookkeeping/ConstructionBookkeepingCard";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import HowContractorWork from "@/components/crmbussiness/HowContractorWork";
import CrmService from "@/components/crmbussiness/IndustryService";
import KindAdorable from "@/components/crmbussiness/KindAdorable";
import LikeYouDoContacts from "@/components/crmbussiness/LikeYouDoContacts";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TeamsUsingContractor from "@/components/crmbussiness/TeamsUsingContractor";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrackProperties from "@/components/crmbussiness/TrackProperties";
import TrustedService from "@/components/crmbussiness/TrustedService";
import { getSeoData } from "@/services/common/seoMeta";
import { getFeaturesPageData } from "@/services/features/getCrmPageData";
import { generateSeoMetadata } from "@/utils/getSeoMeta";
import Image from "next/image";
import { notFound } from "next/navigation";
import OverlapCardMobileViewChild from "@/components/common/OverlapCardMobileViewChild";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import CalculateImpact from "@/components/crmbussiness/CalculateImpact";
import ManageEveryMile from "@/components/toolandequipment/ManageEveryMile";
import FreeTrialButton from "@/components/common/FreeTrialButton";
import CardRequiredButton from "@/components/common/CardRequiredButton";

type CrmBussinessPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const page = await getSeoData(
    "features-pages",
    resolvedParams.locale,
    resolvedParams.slug,
  );

  if (!page) notFound();

  return generateSeoMetadata({ page, slug: resolvedParams.slug });
}

const CrmBussinessPage = async ({ params }: CrmBussinessPageProps) => {
  const useParams = await params;
  if (!useParams?.slug) {
    return notFound();
  }

  const {
    crmPageContent,
    heroImg,
    reviews,
    switchingTool,
    fieldServiceData,
    trackProperties,
    comparison,
    teamsUsingContractor,
    faqs,
    blogsList,
    blogsByCategory,
    thousandReviews,
    weManageContract,
    comparisonList,
    commonData,
  } = await getFeaturesPageData(useParams?.slug, useParams?.locale);

  const theme = useParams?.slug === "estimate" ? "estimateTheme" : "dark";
  const page = crmPageContent?.data?.[0];

  if (!crmPageContent?.data?.length) {
    return notFound();
  }

  const pageData = {
    slug: useParams?.slug,
    theme,
    hero: page?.hero,
    featureTag: page?.featureTag,
    reviews,
    switchingTool: switchingTool?.commonProblems,
    fieldServiceData: fieldServiceData,
    trackProperties: trackProperties,
    comparison: comparison,
    teamsUsingContractor: teamsUsingContractor,
    crmService: page?.emailSignupSection,
    thousandReviews: thousandReviews,
    reviewsData: reviews?.data?.[0]?.reviews?.reviews,
    faq: faqs?.faqs,
    blogsList,
    blogs: page?.blogs,
    blogsByCategory,
    createBtn: commonData?.getStartedFreeBtn,
    mobileBtn: commonData?.mobileBtn,
    weManageContract: weManageContract?.weManageContract,
    comparisonList: comparisonList,
    ncc: commonData?.nccTxt,
  };

  return (
    <>
      <div id="common-homepage-wrapper">
        <div id="home-page-view-port-screen" className="relative opacity-0">
          <CommonHero
            commonData={commonData}
            hero={pageData?.hero}
            slug={useParams?.slug}
            heroImg={heroImg}
            featureTag={pageData?.featureTag}
          />

          {useParams.slug === "construction-bookkeeping-services" ? (
            <>
              <ConstructionBookkeepingCard
                constructionBookkeepingServices={
                  constructionBookkeepingServices
                }
              />
            </>
          ) : (
            <TrustedService reviews={reviews} slug={useParams?.slug} />
          )}

          <SwitchingTool switchingTool={pageData?.switchingTool} />
          <div className="hidden md:block">
            <FieldService
              slug={pageData.slug}
              fieldService={pageData.fieldServiceData}
              theme={pageData.theme as "light" | "dark" | "estimateTheme"}
              apiData={true}
              mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto "
            />
          </div>
          <div className="mb-12 block md:hidden">
            <OverlapCardMobileViewChild
              slug={pageData.slug}
              fieldService={pageData.fieldServiceData}
              theme={pageData.theme as "light" | "dark" | "estimateTheme"}
              apiData={true}
              mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto "
            />
          </div>
        </div>
        {/* Direct component rendering without lazy loading */}
        <div className="bg-white">
          {Boolean(trackProperties?.featureHighlightSectionVisible) && (
            <>
              <TrackProperties
                ncc={pageData.ncc}
                trackProperties={trackProperties}
                slug={useParams.slug}
              />

              <LikeYouDoContacts
                trackProperties={pageData.trackProperties || null}
                slug={useParams.slug}
              />
              <HowContractorWork
                ncc={pageData.ncc}
                trackProperties={pageData.trackProperties || null}
              />
              {useParams.slug === "contractor-financing" && (
                <div className="relative z-20 mt-10 hidden flex-col items-center justify-center gap-2.5 px-2 sm:flex">
                  <FreeTrialButton
                    className="gap-1.5"
                    text={trackProperties?.btnText}
                  />
                  <CardRequiredButton
                    className="text-wallStreet"
                    text={pageData.ncc}
                  />
                </div>
              )}
            </>
          )}
          {pageData?.weManageContract?.isShowSection && (
            <ManageEveryMile
              title={
                pageData?.weManageContract?.title ||
                "A smooth financing experience for contractors and their clients"
              }
              list={pageData?.weManageContract?.list ?? []}
            />
          )}
          {pageData?.comparisonList ? (
            <RunWithContractor kindAdorable={comparisonList} />
          ) : null}
          <KindAdorable
            slug={pageData.slug}
            kindAdorable={pageData.comparison}
          />
          {useParams.slug === "ai-call-answering-software" && (
            <CalculateImpact />
          )}
          <TeamsUsingContractor
            data={pageData.teamsUsingContractor}
            slug={pageData.slug}
          />
          <ThousandsReviews
            data={pageData.thousandReviews}
            reviews={pageData.reviewsData}
          />
        </div>
        <div className="relative overflow-hidden">
          {/* Background Icons */}
          <FooterRedLineIcon className="pointer-events-none absolute top-[-20%] left-[-2%] hidden max-h-[994px] w-full max-w-[840px] sm:block" />
          <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden" />
          <div className="relative">
            <Image
              width={800}
              height={1000}
              className="absolute top-[10px] left-0 z-10 hidden max-h-[800px] w-full max-w-[800px] object-center sm:block"
              src={"/images/webp/hero-red-line.webp"}
              alt="hero-red-line"
            />

            <CrmService
              createBtn={pageData.createBtn}
              mobileBtn={pageData.mobileBtn}
              ncc={pageData.ncc}
              data={pageData.crmService}
              variant="primary"
              className={`${
                pageData.slug === "crm"
                  ? "xs:max-w-[89%] max-w-[83%] pt-10 sm:max-w-[1120px] sm:pt-0"
                  : "xs:max-w-[81%] max-w-[76%] pt-10 sm:max-w-[662px] sm:pt-0"
              }`}
              variantBtn="light"
            />
          </div>
          <TrustBar
            platforms={platforms}
            className="mx-auto w-full max-w-[889px]"
          />
          <Faq
            faq={pageData.faq}
            classNameAnswer="pt-1"
            mainContainerclassName="px-2 pt-[66px] pb-0 md:pt-[76px] md:pb-[83px]"
            TittleClassName="max-w-[88%] xs:max-w-[98%] sm:max-w-full mx-auto"
          />
        </div>
        <BlogPosts
          data={pageData.blogsByCategory || []}
          blogs={pageData.blogs}
          className="mt-7 mb-20 md:mt-9"
          classMaxwidth="max-w-[90%] xs:max-w-[98%] sm:max-w-full"
        />
      </div>
    </>
  );
};

export default CrmBussinessPage;
