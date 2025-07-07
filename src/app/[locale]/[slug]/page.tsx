import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoData } from "@/services/common/seoMeta";
import { getFeaturesPageData } from "@/services/features/getCrmPageData";
// Only import critical above-the-fold component
import CrmHero from "@/components/crmbussiness/CrmHero";
import ClientOnlyWrapper from "@/components/client/ClientOnlyWrapper";
import TrustedService from "@/components/crmbussiness/TrustedService";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import { console } from "inspector";

type CrmBussinessPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;

  const page = await getSeoData(
    "features-pages",
    resolvedParams.locale,
    resolvedParams.slug,
    "&populate[seoMetaData]=true&populate[hero]=true",
  );
  if (!page) return;

  return {
    title:
      page.seoMeta?.metaTitle ||
      page.hero?.heroTitle ||
      `Contractor+ ${resolvedParams.slug}`,
    description: page.seoMeta?.metaDescription || page.hero?.subtitle || "",
    keywords: page.seoMeta?.keywords || "",
    alternates: {
      canonical:
        page.seoMeta?.canonicalUrl ??
        `${process.env.NEXT_PUBLIC_DOMAIN}/${resolvedParams.slug}`,
    },
  };
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
    createBtn: page?.hero?.createBtn,
    mobileBtn: page?.hero?.mobileBtn,
    ncc: page?.hero?.nccTxt,
  };
  console.log("eqwds", switchingTool);

  return (
    <>
      {/* Critical above-the-fold content - Server Component */}
      <CrmHero hero={pageData?.hero} slug={useParams?.slug} heroImg={heroImg} />
      <TrustedService reviews={reviews} slug={useParams?.slug} />
      <SwitchingTool switchingTool={pageData?.switchingTool} />
      {/* Everything else loads client-side - THIS is the key! */}
      <ClientOnlyWrapper data={pageData} />
    </>
  );
};

export default CrmBussinessPage;
