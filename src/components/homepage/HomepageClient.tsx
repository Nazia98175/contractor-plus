"use client";
import dynamic from "next/dynamic";
const ContractorPlatforms = dynamic(() => import("./ContractorPlatforms"), {
  ssr: false,
});
const Finally = dynamic(() => import("./Finally"), { ssr: false });
const CoreFeatures = dynamic(() => import("./CoreFeatures"), { ssr: false });
const Features = dynamic(() => import("./Features"), { ssr: false });
const ContractorIndustry = dynamic(() => import("./ContractorIndustry"), {
  ssr: false,
});
const OurReviews = dynamic(() => import("./OurReviews"), { ssr: false });
const WhatEverClient = dynamic(() => import("./WhatEverClient"), {
  ssr: false,
});
const OurBlogs = dynamic(() => import("./OurBlogs"), { ssr: false });
const EntireBusiness = dynamic(() => import("./EntireBusiness"), {
  ssr: false,
});

const HomepageClient = ({
  homePageContent,
  contractPlatformsData,
  reviewsList,
  coreFeatures,
  blogs,
}: any) => {
  return (
    <>
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
};

export default HomepageClient;
