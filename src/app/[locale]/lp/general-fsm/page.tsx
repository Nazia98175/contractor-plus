import { afflitatesClientReviews } from "@/components/common/Helper";
import {
  billingVsthWayYouCouldData,
  mileageActuallyWorkdata,
} from "@/components/common/Utils";
import FieldService from "@/components/crmbussiness/FieldService";
import TrustedService from "@/components/crmbussiness/TrustedService";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import AppOpratingSytem from "@/components/lp/generalfsm/AppOpratingSytem";
import GeneralFsmHero from "@/components/lp/generalfsm/GeneralFsmHero";
import React from "react";
import capture from "../../../../../public/lotties/capture-wrok.json";
const page = () => {
  const billingVsthWayYouCouldData = {
    title: "Good enough apps hold contractors hostage",

    comparisons: [
      {
        title: "The other guys",
        comparisonList: [
          {
            details:
              "Core features as add-ons (AI, phone & SMS, job costing, etc.)",
          },
          {
            details: "CRM that's basically a contact list with basic functions",
          },
          {
            details: "Basic quotes, manual entry needed",
          },
          {
            details: "Static calendar, one-way sync, manual work still needed",
          },
          {
            details: "COs buried in texts, invoices rebuilt by hand",
          },
          { details: "Modules don't talk to each other or sync easily" },
        ],
      },
      {
        title: "The Contractor+ way",
        comparisonList: [
          {
            details: "Every feature, no BS price gatekeeping",
          },
          {
            details:
              "Communication auto-logged to job timeline, property profiles, AI call recording & transcription",
          },
          {
            details:
              "AI estimates in minutes with live pricing & Good/Better/Best options",
          },
          {
            details:
              "Live crew map, proximity assignment, drag-drop, two-way Google/Outlook/iCal.",
          },
          {
            details:
              "Time, tasks, and charges all feed into one invoice automatically",
          },
          {
            details:
              "COs e-signed and time-stamped, invoices that auto update & capture uninvoiced billables",
          },
          {
            details:
              "Every action or update syncs with the entire operating system",
          },
        ],
      },
    ],
  };

  const mileageActuallyWorkdata = {
    id: 1,
    title: "Contractor financing that meets homeowners where they are",
    cardsDetail: [
      {
        id: 1,
        heading: "Step 1",
        title: "Capture the work",
        isIcon: false,
        lottieJson: capture,
        content: [
          {
            desc: "Calls, leads, estimates, and notes all land in one place automatically — no more hunting across apps, voicemails, & texts.",
          },
        ],
      },
      {
        id: 2,
        subheading: "Step 2",
        title: "Connect the team",
        cardImg: { url: "/images/webp/all-in-one-solution.webp" },
        lottieJson: null,
        isIcon: false,
        content: [
          {
            desc: "Jobs, schedules, and tasks update in real time for the office and the field. Everyone sees the same truth.",
          },
        ],
      },
      {
        id: 3,
        heading: "Step 3",
        title: "Control the numbers",
        isIcon: false,
        cardImg: { url: "/images/webp/all-in-one-solution.webp" },
        lottieJson: null,
        content: [
          {
            desc: "Invoices, payments, and margins update as work happens. No missing billable or delayed payouts.",
          },
        ],
      },
      {
        id: 4,
        heading: "Step 4",
        title: "Scale with less stress",
        isIcon: false,
        cardImg: { url: "/images/webp/all-in-one-solution.webp" },
        lottieJson: null,
        content: [
          {
            desc: "From the first call to the final check, you grow without adding more apps, admin, or chaos.",
          },
        ],
      },
    ],
  };
  return (
    <main id="common-homepage-wrapper">
      <div
        id="home-page-view-port-screen"
        className="relative overflow-hidden opacity-0"
      >
        <GeneralFsmHero />
        <TrustedService
          reviews={afflitatesClientReviews || []}
          className="pb-6 lg:pt-6 lg:pb-3.5"
        />
        <RunWithContractor
          kindAdorable={billingVsthWayYouCouldData}
          variant="dark"
          icon={true}
          issubHeadingShow={true}
        />
      </div>
      <AppOpratingSytem />
      <div className="relative hidden md:block">
        <FieldService
          fieldService={mileageActuallyWorkdata}
          theme="dark"
          mainClassName="text-center "
        />
      </div>
      <div className="mb-12 block md:hidden">
        {/* <OverlapCardMobileViewChild
          fieldService={problemSolution}
          theme="dark"
          mainClassName="text-center "
        /> */}
      </div>
      {/* <div className="relative overflow-hidden">
        <SwitchingTool className="pb-[113px]" switchingTool={commonProblem} />
        <ContractorIndustry
          contractorIndustry={industriesData?.data?.Industries}
        />
        <Image
          className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-[90%] w-full max-w-[900px] object-center md:block"
          src="/images/webp/josh-lesson-left-background.webp"
          alt="webp bg"
          width={900}
          height={700}
        />
        <Image
          className="svgTwinkle absolute right-0 bottom-0 z-0 hidden h-[50%] w-full max-w-[700px] object-center lg:block"
          src="/images/webp/josh-lesson-right-background.webp"
          alt="webp bg"
          width={700}
          height={300}
        />
      </div>
      <AwardsTagsImg className="sm:mt-14" />
      <ThousandsReviews
        data={thousandReviews}
        reviews={thousandReviews?.reviews}
        variant="secondary"
      />
      <div className="pt-20 pb-10 sm:pb-[75px] lg:pt-[110px] xl:pt-[120px]">
        <CommonFormField
          variantBtn="primary"
          variant="default"
          title={
            emailSignupSection?.title ||
            "The AI estimate generator that will change your business forever"
          }
          subTitle={
            emailSignupSection?.subTitle ||
            "Get started with Estimatic AI in Contractor+ today."
          }
          placeholder={emailSignupSection?.placeholder || "Your Email"}
          createBtn={commonData?.getStartedFreeBtn || "Get Started Free"}
          mobileBtn={commonData?.mobileBtn || "Download FREE App"}
          ncc={commonData?.nccTxt || "No credit card required"}
        />
      </div>
      <TrustBar
        platforms={platforms}
        className="mx-auto w-full max-w-[889px]"
      />
      <div className="relative overflow-hidden">
        <Faq
          faq={faqs}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-5 sm:pb-10"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
        />
      </div>
      <BlogPosts
        data={blogs?.data || []}
        blogs={pageContent?.blogs}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      /> */}
    </main>
  );
};

export default page;
