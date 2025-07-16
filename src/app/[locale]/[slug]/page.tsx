import { getSeoData } from "@/services/common/seoMeta";
import { getFeaturesPageData } from "@/services/features/getCrmPageData";
import { notFound } from "next/navigation";
import CrmHero from "@/components/crmbussiness/CrmHero";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TrustedService from "@/components/crmbussiness/TrustedService";
import { generateSeoMetadata } from "@/utils/getSeoMeta";
import FieldService from "@/components/crmbussiness/FieldService";
import dynamic from "next/dynamic";
// Lazy load the heavy components
const SlugPageClient = dynamic(
  () => import("@/components/slugPage/SlugPageClient"),
);
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

  if (!page) return;

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

  return (
    <>
      <div id="home-page-wrapper-2" className="">
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
          />{" "}
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

        {/* Lazy loaded content */}
        <SlugPageClient
          slug={pageData.slug}
          trackProperties={pageData.trackProperties}
          kindAdorable={pageData.comparison}
          teamUsingContractor={pageData.teamsUsingContractor}
          thousandReviews={pageData.thousandReviews}
          reviews={pageData.reviewsData}
          blogs={pageData.blogs}
          blogsList={pageData.blogsList}
          faq={pageData.faq}
          createBtn={pageData.createBtn}
          mobileBtn={pageData.mobileBtn}
          ncc={pageData.ncc}
          crmService={pageData.crmService}
        />
      </div>
    </>
  );
};

export default CrmBussinessPage;
