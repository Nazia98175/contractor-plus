"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { integrationLogos } from "../common/Helper";

// Lazy load all components
const ContractorPlatforms = dynamic(() => import("./ContractorPlatforms"), {
  ssr: false,
});

const Finally = dynamic(() => import("./Finally"), {
  ssr: false,
  loading: () => <div className="h-screen w-full" />,
});

const CoreFeatures = dynamic(() => import("./CoreFeatures"), {
  ssr: false,
  loading: () => <div className="h-screen w-full" />,
});

const Features = dynamic(() => import("./Features"), {
  ssr: false,
  loading: () => <div className="h-96 w-full" />,
});

const ContractorIndustry = dynamic(() => import("./ContractorIndustry"), {
  ssr: false,
  loading: () => <div className="h-screen w-full" />,
});

const OurReviews = dynamic(() => import("./OurReviews"), {
  ssr: false,
  loading: () => <div className="h-screen w-full" />,
});

const WhatEverClient = dynamic(() => import("./WhatEverClient"), {
  ssr: false,
  loading: () => <div className="h-screen w-full" />,
});

const OurBlogs = dynamic(() => import("./OurBlogs"), {
  ssr: false,
  loading: () => <div className="h-96 w-full" />,
});

const EntireBusiness = dynamic(() => import("./EntireBusiness"), {
  ssr: false,
  loading: () => <div className="h-96 w-full" />,
});

interface HomepageClientProps {
  homePageContent: any;
  contractPlatformsData: any;
  problemSolutions: any;
  featurHighlight: any;
  reviewsList: any;
  resultStats: any;
  blogs: any;
  commonData: any;
  industriesData: any;
  integrationList: any;
}

const HomepageClient = ({
  homePageContent,
  contractPlatformsData,
  problemSolutions,
  featurHighlight,
  reviewsList,
  resultStats,
  blogs,
  commonData,
  industriesData,
  integrationList,
}: HomepageClientProps) => {
  return (
    <>
      <ContractorPlatforms contractPlatformsData={contractPlatformsData} />
      
      <Finally finallyC={problemSolutions} />
      
      <CoreFeatures coreFeatures={featurHighlight} />
      
      <Features features={homePageContent?.data?.serviceList} />
      
      <div className="relative overflow-hidden">
        <ContractorIndustry contractorIndustry={industriesData} />
        
        {/* Background Images - Lazy loaded with proper sizes */}
        <Image
          className="animated-image pointer-events-none absolute top-0 left-0 z-20 hidden h-full w-full max-w-[900px] object-center md:block"
          src="/images/webp/contractor-left-bg.webp"
          alt="webp bg"
          width={900}
          height={700}
          loading="lazy"
          sizes="(min-width: 768px) 900px"
          quality={75}
        />
        <Image
          className="bubbling-animation svgTwinkle absolute top-0 right-0 z-0 hidden h-full w-full max-w-[700px] object-center lg:block"
          src="/images/webp/contractor-right-bg.webp"
          alt="webp bg"
          width={700}
          height={300}
          loading="lazy"
          sizes="(min-width: 1024px) 700px"
          quality={75}
        />
      </div>
      
      <OurReviews reviewsList={reviewsList?.reviews} reviews={reviewsList} />
      
      <WhatEverClient
        data={commonData?.contractorConnects}
        resultStats={resultStats}
        className="overflow-hidden"
        images={
          integrationList?.images
            ? integrationList?.images?.map((item: any) => item?.url)
            : integrationLogos
        }
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