import { getSeoData } from "@/services/common/seoMeta";
import { getFeaturesPageData } from "@/services/features/getCrmPageData";
import { notFound } from "next/navigation";
import CrmHero from "@/components/crmbussiness/CrmHero";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TrustedService from "@/components/crmbussiness/TrustedService";
import { generateSeoMetadata } from "@/utils/getSeoMeta";
import FieldService from "@/components/crmbussiness/FieldService";
import TrackProperties from "@/components/crmbussiness/TrackProperties";
import LikeYouDoContacts from "@/components/crmbussiness/LikeYouDoContacts";
import HowContractorWork from "@/components/crmbussiness/HowContractorWork";
import KindAdorable from "@/components/crmbussiness/KindAdorable";
import TeamsUsingContractor from "@/components/crmbussiness/TeamsUsingContractor";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import CrmService from "@/components/crmbussiness/CrmSercive";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import {
  FooterRedLineIcon,
  FooterRedLineMobileIcon,
} from "@/components/common/Icons";
import { platforms } from "@/components/common/Helper";
import Image from "next/image";
import { log } from "console";

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
    thousandReviews,
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
    createBtn: commonData?.getStartedFreeBtn,
    mobileBtn: commonData?.mobileBtn,
    ncc: commonData?.nccTxt,
  };
  console.log(pageData, "4dewsa");

  return (
    <>
      <div id="home-page-wrapper-2">
        <div
          id="home-page-view-port-screen-fetures"
          className="relative opacity-0"
        >
          <CrmHero
            commonData={commonData}
            hero={pageData?.hero}
            slug={useParams?.slug}
            heroImg={heroImg}
            featureTag={pageData?.featureTag}
          />
        </div>

        <TrustedService reviews={reviews} slug={useParams?.slug} />

        <SwitchingTool switchingTool={pageData?.switchingTool} />

        <FieldService
          slug={pageData.slug}
          fieldService={pageData.fieldServiceData}
          theme={pageData.theme as "light" | "dark" | "estimateTheme"}
          apiData={true}
          mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto "
        />

        {/* Direct component rendering without lazy loading */}
        <div className="bg-white">
          {Boolean(trackProperties?.featureHighlightSectionVisible) && (
            <>
              <TrackProperties
                ncc={pageData.ncc}
                trackProperties={pageData.trackProperties}
              />

              <LikeYouDoContacts trackProperties={pageData.trackProperties} />

              <HowContractorWork
                ncc={pageData.ncc}
                trackProperties={pageData.trackProperties}
              />
            </>
          )}

          <KindAdorable
            slug={pageData.slug}
            kindAdorable={pageData.comparison}
          />

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
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
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
          data={pageData.blogsList}
          blogs={pageData.blogs}
          className="mt-7 mb-20 md:mt-9"
          classMaxwidth="max-w-[90%] xs:max-w-[98%] sm:max-w-full"
        />
      </div>
    </>
  );
};

export default CrmBussinessPage;
