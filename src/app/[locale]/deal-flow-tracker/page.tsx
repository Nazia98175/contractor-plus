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
  const fieldServiceData = {
    title:
      "Field service management software that connects the work, the people, and the updates in real time",
    slug: "field-service",
    solutionCards: [
      {
        id: 57,
        title: "Visual Pipeline",
        description:
          "Track every deal in a drag-and-drop Kanban board that shows exactly where things stand—and what they’re worth.",
        image: null,
      },
      {
        id: 58,
        title: "Dollar Value Visibility",
        description:
          "See how much revenue is sitting in each stage of your pipeline. Forecast with real numbers instead of rough guesses.",
        image: null,
      },
      {
        id: 59,
        title: "One-Click Conversion",
        description:
          "Turn any opportunity into an estimate or job instantly without retyping or  duplicate entry.",
        image: null,
      },
      {
        id: 60,
        title: "Field Updates",
        description:
          "Crews can upload photos, notes, and task changes straight from the field. Everything lives in one central hub.",
        image: null,
      },
      {
        id: 61,
        title: "Crew Efficiency",
        description:
          "Track time, mileage, and task completion with zero paper. Know who’s doing what, where, and when.",
        image: null,
      },
      {
        id: 62,
        title: "AI Call Attendant",
        description:
          "Big Chief answers your calls 24/7, captures lead details, and books jobs while you focus on the field.",
        image: null,
      },
      {
        id: 63,
        title: "Onsite Payments",
        description:
          "Collect payment the moment the job’s done. Accept cards or ACH in the field and mark the invoice as paid.",
        image: null,
      },
      {
        id: 64,
        title: "CRM",
        description:
          "Track customers, properties, and communication history in one CRM that’s built for the way contractors work.",
        image: null,
      },
      {
        id: 65,
        title: "Mobile App",
        description:
          "Run your business from anywhere. The intuitive Contractor+ app puts scheduling, dispatch, and updates in your pocket.",
        image: null,
      },
    ],
  };

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
        <GoingFieldSevices
          switchingTool={{
            title: "There’s no easy way to see what’s going on in the field",
            cardsDetail: fieldcarddetail,
          }}
        />

        <ContractorWork theme="estimateTheme" fieldService={fieldServiceData} />
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
