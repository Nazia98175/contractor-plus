import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoData } from "@/services/common/seoMeta";
import { getFeaturesPageData } from "@/services/features/getCrmPageData";
// Only import critical above-the-fold component
import CrmHero from "@/components/crmbussiness/CrmHero";
import ClientOnlyWrapper from "@/components/client/ClientOnlyWrapper";
import TrustedService from "@/components/crmbussiness/TrustedService";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";

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
    "services-pages",
    resolvedParams.locale,
    resolvedParams.slug,
    "&populate[seoMeta]=true&populate[hero]=true",
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
    blogs,
  } = await getFeaturesPageData(useParams?.slug, useParams?.locale);

  const theme = useParams?.slug === "estimate" ? "estimateTheme" : "dark";
  const page = crmPageContent?.data?.[0];

  if (!crmPageContent?.data?.length) {
    return notFound();
  }

  // Serialize data for client component
  const pageData = {
    slug: useParams?.slug,
    theme,
    hero: page?.hero,
    reviews,
    switchingTool: switchingTool?.switchingTool,
    fieldServiceData: fieldServiceData?.fieldService,
    trackProperties: trackProperties?.trackProperties,
    comparison: comparison?.comparison,
    teamsUsingContractor: teamsUsingContractor?.teamsUsingContractor,
    crmService: page?.crmService,
    thousandReviews: page?.thousandReviews,
    reviewsData: reviews?.data?.[0]?.reviews?.reviews,
    faq: faqs?.faqs,
    blogs,
    blogsList: page?.blogs,
    createBtn: page?.hero?.createBtn,
    mobileBtn: page?.hero?.mobileBtn,
    ncc: page?.hero?.ncc_txt,
  };

  return (
    <>
      {/* Critical above-the-fold content - Server Component */}
      <img src="http://167.88.43.123:1337/uploads/5_d7fecadc48.webp" />
      <CrmHero hero={page?.hero} slug={useParams?.slug} heroImg={heroImg} />
      <TrustedService reviews={reviews} slug={useParams?.slug} />
      <SwitchingTool switchingTool={switchingTool?.switchingTool} />
      {/* Everything else loads client-side - THIS is the key! */}
      <ClientOnlyWrapper data={pageData} />
    </>
  );
};

export default CrmBussinessPage;
