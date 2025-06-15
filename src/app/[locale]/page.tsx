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
import LottieAnimation from "@/components/common/LottieAnimation";
import test1 from "../../../public/test/1.json";
import test2 from "../../../public/test/2_CRM_opt.json";
import test3 from "../../../public/test/3_Live Scheduling_opt.json";
import test4 from "../../../public/test/4_Internal Job Chat_opt.json";
import test5 from "../../../public/test/5_Estimate Builder_opt.json";
import test6 from "../../../public/test/6_Property Profile_opt.json";
import test7 from "../../../public/test/7_Big Chief AI_opt.json";
import test8 from "../../../public/test/8_icon star_opt.json";
import test9 from "../../../public/test/9_icon car_opt.json";
import test10 from "../../../public/test/10_icon arrow_opt.json";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const useParams = await params;
  // const [homePageContent, contractPlatformsData, blogs, footer] =
  const [
    homePageContent,
    contractPlatformsData,
    reviewsList,
    coreFeatures,
    blogs,
  ] = await Promise.all([
    getHomePage(useParams.locale, "&populate=*"),
    getHomePage(
      useParams.locale,
      "&populate[platforms][populate][platforms][populate]=image&populate[platforms][populate]=title",
    ),
    getHomePage(
      useParams?.locale,
      "&populate[review][on][common.reviews][populate]=*",
    ),
    getHomePage(
      useParams?.locale,
      "&populate[coreFeatures][on][sections.features-section][populate][cardsDetail][populate][cardImg]=true&populate[coreFeatures][on][sections.features-section][populate][cardsDetail][populate][content]=*",
    ),
    //&populate[platforms][populate][title]=*&populate[platforms][populate][platforms]=*
    getBlogs(useParams?.locale, "&sort=publishedAt:desc&pagination[limit]=3"),
  ]);

  return (
    <div className="relative">
      <div className="relative">
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
      />
      <LottieAnimation className="w-[500px]" animationData={test1} />
      <LottieAnimation className="w-[500px]" animationData={test2} />
      <LottieAnimation className="w-[500px]" animationData={test3} />
      <LottieAnimation className="w-[500px]" animationData={test4} />
      <LottieAnimation className="w-[500px]" animationData={test5} />
      <LottieAnimation className="w-[500px]" animationData={test6} />
      <LottieAnimation className="w-[500px]" animationData={test7} />
      <LottieAnimation className="w-[500px]" animationData={test8} />
      <LottieAnimation className="w-[500px]" animationData={test9} />
      <LottieAnimation className="w-[500px]" animationData={test10} />
    </div>
  );
}
