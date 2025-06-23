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
import { getSeoData } from "@/services/common/seoMeta";
import { getHomepageData } from "@/services/homePage/getHomepageData";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata | undefined> {
  const page = await getSeoData("homepage", params.locale);

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
  params: Promise<{ locale: string }>;
}) {
  const useParams = await params;

  const {
    homePageContent,
    contractPlatformsData,
    reviewsList,
    coreFeatures,
    blogs,
  } = await getHomepageData(useParams?.locale);

  return (
    <>
      <div className="relative overflow-hidden">
        <Hero homePageContent={homePageContent?.data} />
        <TrustBar
          platforms={platforms}
          className="mx-auto w-full max-w-[889px] py-4"
        />
        <TheEngineContractor
          engineContractor={homePageContent?.data?.engineContractor}
        />
      </div>
      <ContractorPlatforms contractPlatformsData={contractPlatformsData} />
      <Finally finallyC={homePageContent?.data?.finally} />
      <CoreFeatures coreFeatures={coreFeatures?.data?.coreFeatures?.[0]} />
      <Features features={homePageContent?.data?.features} />
      <ContractorIndustry
        contractorIndustry={homePageContent?.data?.contractorIndustry}
      />
      <OurReviews
        reviewsList={reviewsList?.data?.review?.[0]?.reviews}
        reviews={homePageContent?.data?.reviews}
      />
      <WhatEverClient data={homePageContent?.data?.whateverOperation} />
      <OurBlogs
        blogs={blogs?.data}
        blogHeading={homePageContent?.data?.blogs}
      />
      <EntireBusiness
        entireBusiness={homePageContent?.data?.entireBusiness}
        ncc_text={homePageContent?.data?.ncc_text}
        mobileBtn={homePageContent?.data?.mobileBtn}
      />
    </>
  );
}
