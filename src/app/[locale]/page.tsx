import { platforms } from "@/components/common/Helper";
import Hero from "@/components/homepage/Hero";
import HomepageClient from "@/components/homepage/HomepageClient";
import TheEngineContractor from "@/components/homepage/TheEngineContractor";
import { getSeoData } from "@/services/common/seoMeta";
import { getHomepageData } from "@/services/homePage/getHomepageData";
import { generateSeoMetadata } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import TrustBar from "@/components/common/TrustBar";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoData("homepage", resolvedParams?.locale);

  if (!page) notFound();

  return generateSeoMetadata({ page });
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
    commonData,
    industriesData,
  } = await getHomepageData(useParams?.locale);
  return (
    <div id="home-page-wrapper" className="">
      <div id="home-page-view-port-screen" className="relative opacity-0">
        <div className="relative overflow-hidden">
          <Hero
            commonData={commonData}
            homePageContent={homePageContent?.data?.hero}
          />
          <div className="bg-kuroiBlack absolute bottom-[-3%] z-30 h-[10%] w-[120%] blur-[20px]"></div>
        </div>
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
        commonData={commonData}
        industriesData={industriesData?.data?.Industries}
      />
    </div>
  );
}
