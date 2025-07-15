import {
  blogList,
  dealFlowBlogHeadingData,
  dealflowFaq,
  dealflowhero,
  dealReviews,
  dealReviews2,
  fieldcarddetail,
  formData,
  neverLookBackData,
  platforms,
  realTimeServiceSliderData,
  runWithContractorData,
} from "@/components/common/Helper";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CrmHero from "@/components/crmbussiness/CrmHero";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import Faq from "@/components/crmbussiness/Faq";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import FinallyConnectsField from "@/components/dealflowtracker/FinallyConnectsField";
import GoingFieldSevices from "@/components/field-services/GoingFieldSevices";
import NeverLookBack from "@/components/field-services/NeverLookBack";
import RealTimeServiceConnector from "@/components/field-services/RealTimeServiceConnector";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import WhatEverClient from "@/components/homepage/WhatEverClient";

import TrustBar from "@/components/common/TrustBar";
import ContractorWork from "@/components/dealflowtracker/ContractorWork";
const DealFlowTracker = () => {
  return (
    <div>
      <CrmHero
        hero={{
          heroTitle:
            "The one board that shows every deal, dollar value, and what to do next",
          heroDescription:
            "Drag and drop every lead through a visual board. Track dollar values, follow-ups, and next steps. Convert leads to a job in one click.",
        }}
        featureTag="Opportunity Tracker"
        heroImg="/images/webp/deal-flow-hero.webp"
        slug="crm"
        commonData={dealflowhero}
      />
      <TrustedService reviews={dealReviews} slug="crm" apiData={false} />
      <div className="overflow-hidden bg-white">
        <div>
          <GoingFieldSevices
            isImageshow={false}
            switchingTool={{
              title: "There’s no easy way to see what’s going on in the field",
              cardsDetail: fieldcarddetail,
            }}
          />
        </div>

        <ContractorWork
          theme="estimateTheme"
          fieldService={realTimeServiceSliderData}
        />
        <RunWithContractor kindAdorable={runWithContractorData} />
        {/* <TestingConnect /> */}
        <FinallyConnectsField />
        <NeverLookBack data={neverLookBackData} />
      </div>
      <ThousandsReviews
        data={dealReviews2}
        reviews={dealReviews2.reviews} // Optional; only needed if used elsewhere
        variant="secondary"
        apiData={false}
      />
      <CrmSercive
        createBtn={"Get started FREE"}
        mobileBtn={"Download FREE App"}
        ncc={"No credit card required"}
        data={formData}
        showClouds={false}
        className="xs:max-w-[88%] max-w-[87%] sm:max-w-[780px]"
        variantBtn="dark"
      />
      <TrustBar platforms={platforms} className="pb-[148px] xl:pb-20" />
      <Faq
        faq={dealflowFaq}
        classNameAnswer="pt-1"
        mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
        TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
      />
      <WhatEverClient
        data={{
          title: "Whatever you use, Contractor+ connects",
          subTitle: "5000+ Potential Integrations",
        }}
        issection={false}
      />

      <BlogPosts
        data={blogList}
        blogs={dealFlowBlogHeadingData}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />
    </div>
  );
};

export default DealFlowTracker;
