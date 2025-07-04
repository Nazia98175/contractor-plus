import { platforms } from "@/components/common/Helper";
import Hero from "@/components/homepage/Hero";
import HomepageClient from "@/components/homepage/HomepageClient";
import TheEngineContractor from "@/components/homepage/TheEngineContractor";
import TrustBar from "@/components/homepage/TrustBar";
import { getSeoData } from "@/services/common/seoMeta";
import { getHomepageData } from "@/services/homePage/getHomepageData";
import { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoData("homepage", resolvedParams?.locale);

  if (!page) {
    return;
  }

  return {
    title: page?.seoMeta?.metaTitle || page?.hero_title || `Contractor+`,
    description: page?.seoMeta?.metaDescription || page?.hero?.subtitle || "",
    keywords: page?.seoMeta?.keywords || "",
    alternates: {
      canonical:
        page?.seoMeta?.canonicalUrl ?? `${process.env.NEXT_PUBLIC_DOMAIN}`,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const useParams = await params;

  const {
    homePageContent,
    contractPlatformsData,
    problemSolutions,
    featurHighlight,
    reviewsList,
    resultStatsSection,
    blogs,
  } = await getHomepageData(useParams?.locale);


  return (
    <>
      <div className="relative overflow-hidden">
        <Hero homePageContent={homePageContent?.data?.hero} />
        <TrustBar
          platforms={platforms}
          className="mx-auto w-full max-w-[889px] py-4"
        />
        <TheEngineContractor
          engineContractor={homePageContent?.data?.engineContractor}
        />
      </div>
      <HomepageClient
        homePageContent={homePageContent}
        contractPlatformsData={contractPlatformsData?.data?.commonProblems}
        problemSolutions={problemSolutions?.data?.problemSolutionSection}
        featurHighlight={featurHighlight?.data?.featureHighlightSection}
        reviewsList={reviewsList?.data?.reviews}
        resultStats={resultStatsSection?.data?.resultsStatsSection}
        blogs={blogs}
      />
    </>
  );
}
