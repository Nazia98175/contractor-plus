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
  problemSolutions,
  featurHighlight,
  reviewsList,
  resultStats,
  blogs,
  commonData,
}: any) => {
  return (
    <>
      <ContractorPlatforms contractPlatformsData={contractPlatformsData} />
      <Finally finallyC={problemSolutions} />
      <CoreFeatures coreFeatures={featurHighlight} />
      <Features features={homePageContent?.data?.serviceList} />
      <ContractorIndustry
        contractorIndustry={homePageContent?.data?.Industries}
      />
      <OurReviews reviewsList={reviewsList?.reviews} reviews={reviewsList} />
      <WhatEverClient
        data={commonData?.contractorConnects}
        resultStats={resultStats}
        className="overflow-hidden"
      />
      <OurBlogs
        blogs={blogs?.data}
        blogHeading={homePageContent?.data?.blogs}
      />
      <EntireBusiness
        entireBusiness={homePageContent?.data?.emailSignupSection}
        ncc_text={commonData?.nccTxt}
        mobileBtn={commonData?.mobileBtn}
        createBtn={commonData?.getStartedFreeBtn}
      />
    </>
  );
};

export default HomepageClient;
