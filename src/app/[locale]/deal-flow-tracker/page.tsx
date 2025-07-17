import {
  blogList,
  dealFlowBlogHeadingData,
  dealflowFaq,
  dealflowformData,
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
import TrustBar from "@/components/common/TrustBar";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CrmHero from "@/components/crmbussiness/CrmHero";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import Faq from "@/components/crmbussiness/Faq";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import ContractorWork from "@/components/dealflowtracker/ContractorWork";
import FinallyConnectsField from "@/components/dealflowtracker/FinallyConnectsField";
import GoingFieldSevices from "@/components/field-services/GoingFieldSevices";
import NeverLookBack from "@/components/field-services/NeverLookBack";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import WhatEverClient from "@/components/homepage/WhatEverClient";
export const metadata = {
  title:
    " The one board that shows every deal, dollar value, and what to do next",
  description:
    "Drag and drop every lead through a visual board. Track dollar values, follow-ups, and next steps. Convert leads to a job in one click.",
};
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
      <div className="pb-6">
        <TrustedService reviews={dealReviews} slug="crm" apiData={false} />
      </div>
      <div className="overflow-hidden bg-white">
        <div className="pt-8 sm:pt-12">
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
      <div className="relative">
        <div className="bg-kuroiBlack pointer-events-none absolute -top-1 z-20 h-2 w-full"></div>
        <ThousandsReviews
          data={dealReviews2}
          reviews={dealReviews2.reviews} // Optional; only needed if used elsewhere
          variant="secondary"
          apiData={false}
        />
      </div>
      <CrmSercive
        createBtn={"Get started FREE"}
        mobileBtn={"Download FREE App"}
        ncc={"No credit card required"}
        data={dealflowformData}
        showClouds={false}
        className="xs:max-w-[88%] max-w-[87%] sm:max-w-[780px]"
        variantBtn="dark"
      />
      <TrustBar platforms={platforms} className="md:pb-[148px] xl:pb-20" />
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
