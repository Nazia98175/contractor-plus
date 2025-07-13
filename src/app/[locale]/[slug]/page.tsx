import { getSeoData } from "@/services/common/seoMeta";
import { getFeaturesPageData } from "@/services/features/getCrmPageData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// Only import critical above-the-fold component
import ClientOnlyWrapper from "@/components/client/ClientOnlyWrapper";
import CrmHero from "@/components/crmbussiness/CrmHero";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TrustedService from "@/components/crmbussiness/TrustedService";
import { generateSeoMetadata } from "@/utils/getSeoMeta";

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
    "&populate[seoMetaData]=true&populate[hero]=true",
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
      {/* Critical above-the-fold content - Server Component */}
      <CrmHero
        commonData={commonData}
        hero={pageData?.hero}
        slug={useParams?.slug}
        heroImg={heroImg}
        featureTag={pageData?.featureTag}
      />
      <TrustedService reviews={reviews} slug={useParams?.slug} />
      <SwitchingTool switchingTool={pageData?.switchingTool} />
      {/* Everything else loads client-side - THIS is the key! */}
      <ClientOnlyWrapper data={pageData} />
    </>
  );
};

export default CrmBussinessPage;
