import { Suspense } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import CrmHero from "@/components/crmbussiness/CrmHero";
import FieldService from "@/components/crmbussiness/FieldService";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TrustedService from "@/components/crmbussiness/TrustedService";
import { getSeoData } from "@/services/common/seoMeta";
import { getFeaturesPageData } from "@/services/features/getCrmPageData";


const SlugPageClient = dynamic(() => import("@/components/slugPage/SlugPageClient"));
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
interface Props {
  slug: string;
  fieldService: any;
  theme: "light" | "dark" | "estimateTheme";
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
  return (
    <>
      {crmPageContent?.data?.length > 0 && (
        <>
          <CrmHero hero={page?.hero} slug={useParams?.slug} heroImg={heroImg} />
          <TrustedService reviews={reviews} slug={useParams?.slug} />
          <SwitchingTool switchingTool={switchingTool?.switchingTool} />
          <FieldService
            slug={useParams?.slug}
            fieldService={fieldServiceData?.fieldService}
            theme={theme}
            apiData={true}
            mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto"
          />
          <Suspense fallback={<div>Loading...</div>}>
          <SlugPageClient
            slug={useParams?.slug}
            fieldService={fieldServiceData?.fieldService}
            theme={theme}
            ncc={page?.hero?.ncc_txt}
            trackProperties={trackProperties?.trackProperties}
            likeYouDo={trackProperties?.trackProperties?.cardDetails?.[0]}
            howContractorWork={
              trackProperties?.trackProperties?.cardDetails?.[1]
            }
            kindAdorable={comparison?.comparison}
            teamUsingContractor={teamsUsingContractor?.teamsUsingContractor}
            crmService={page?.crmService}
            thousandReviews={page?.thousandReviews}
            reviews={reviews?.data?.[0]?.reviews?.reviews}
            faq={faqs?.faqs}
            blogs={blogs}
            blogsList={page?.blogs}
            createBtn={page?.hero?.createBtn}
            mobileBtn={page?.hero?.mobileBtn}
          />
          </Suspense>
        </>
      )}
    </>
  );
};

export default CrmBussinessPage;
