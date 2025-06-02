import Header from "@/components/common/Header";
import { platforms } from "@/components/common/Helper";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";
import ContractorPlatforms from "@/components/homepage/ContractorPlatforms";
import CoreFeatures from "@/components/homepage/CoreFeatures";
import EntireBusiness from "@/components/homepage/EntireBusiness";
import Features from "@/components/homepage/Features";
import Finally from "@/components/homepage/Finally";
import Hero from "@/components/homepage/Hero";
import OurBlogs from "@/components/homepage/OurBlogs";
import OurReviews from "@/components/homepage/OurReviews";
import TheEngineContractor from "@/components/homepage/TheEngineContractor";
import TrustBar from "@/components/homepage/TrustBar";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import { getBlogs } from "@/services/blogs";
import { getHomePage } from "@/services/homepage";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const useParams = await params;
  // const [homePageContent, contractPlatformsData, blogs, footer] =
  const [homePageContent, contractPlatformsData, blogs] = await Promise.all([
    getHomePage(useParams.locale, "&populate=*"),
    getHomePage(
      useParams.locale,
      "&populate[platforms][populate][title]=*&populate[platforms][populate][platforms]=*",
    ),
    getBlogs(useParams?.locale, "&sort=publishedAt:desc&pagination[limit]=3"),
  ]);
  return (
    <div className="relative overflow-x-hidden">
      <div className="relative">
        {/* <Header /> */}
        <Hero homePageContent={homePageContent?.data} />
        <TrustBar platforms={platforms} />
        <TheEngineContractor
          engineContractor={homePageContent?.data?.engineContractor}
        />
      </div>
      <ContractorPlatforms contractPlatformsData={contractPlatformsData} />
      <Finally finallyC={homePageContent?.data?.finally} />
      <CoreFeatures />
      <Features features={homePageContent?.data?.features} />
      <ContractorIndustry
        contractorIndustry={homePageContent?.data?.contractorIndustry}
      />
      <OurReviews reviews={homePageContent?.data?.reviews} />
      <WhatEverClient data={homePageContent?.data?.whateverOperation} />
      <OurBlogs
        blogs={blogs?.data}
        blogHeading={homePageContent?.data?.blogs}
      />
      <div className="relative overflow-hidden">
        <EntireBusiness
          entireBusiness={homePageContent?.data?.entireBusiness}
          ncc_text={homePageContent?.data?.ncc_text}
        />
      </div>
    </div>
  );
}
