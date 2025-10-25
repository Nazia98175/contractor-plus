import { afflitatesClientReviews, platforms } from "@/components/common/Helper";
import FieldService from "@/components/crmbussiness/FieldService";
import TrustedService from "@/components/crmbussiness/TrustedService";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import AppOpratingSytem from "@/components/lp/generalfsm/AppOpratingSytem";
import GeneralFsmHero from "@/components/lp/generalfsm/GeneralFsmHero";
import React from "react";
import capture from "../../../../../public/lotties/capture-wrok.json";
import connectTeam from "../../../../../public/lotties/communition.json";
import OverlapCardMobileViewChild from "@/components/common/OverlapCardMobileViewChild";
import Image from "next/image";
import AwardsTagsImg from "@/components/common/AwardsTagsImg";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";
import CommonFormField from "@/components/common/CommonFormField";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";

export const metadata = {
  title: "Your all-in-one app locks features behind the priciest plans",
  description:
    "They promised one software to run your business, but forgot to mention features come at a price. Contractor+ gives you everything.",
};

const GeneralFsmPage = () => {
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
    title: "How to finally run jobs in sync",
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
        heading: "Step 2",
        title: "Connect the team",
        lottieJson: connectTeam,
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
        cardImg: { url: "/images/webp/control-no..webp" },
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

  const toolManagingData = {
    id: 320,
    title: "Every feature included, no BS tiers",
    sub_title:
      "If the best features are hidden behind a paywall, they're not on your side.",
    cardsDetail: [
      {
        id: 1671,
        text: <> eSign, phone, and SMS aren’t “extras”</>,
        cardImg: {
          name: "tick.png",
          url: "/images/svg/green-tick.svg",
          width: 264,
          height: 136,
        },
        imgWidth: 66,
        imgHeight: 34,
      },
      {
        id: 1672,
        text: <>All-in pricing, no nickel & diming</>,
        cardImg: {
          name: "tick.png",
          url: "/images/svg/green-tick.svg",
          width: 264,
          height: 136,
        },
        imgWidth: 66,
        imgHeight: 34,
      },
      {
        id: 1673,
        text: <>Insanely competitive pricing you'll love</>,
        cardImg: {
          name: "tick.png",
          url: "/images/svg/green-tick.svg",
          width: 264,
          height: 136,
        },
        imgWidth: 66,
        imgHeight: 34,
      },
    ],
  };

  const industriesData = {
    id: 113,
    title: "Designed to handle the complexity of",
    subTitle: "Contractor+ serves 30+ industries",
    url: null,
    btnText: "View All Industries",
    imageCard: [
      {
        id: 1549,
        imageTitle: "Carpenter",
        linkUrl: "/industries/carpenter-business-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/construction_management_software_52070e0fe7.jpg",
        },
      },
      {
        id: 1550,
        imageTitle: "Construction",
        linkUrl: "/industries/construction-management-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/drywall_contractor_software_394690d402.jpg",
        },
      },
      {
        id: 1551,
        imageTitle: "Drywall",
        linkUrl: "/industries/drywall-contractor-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/electrician_software_8fabd50a92.png",
        },
      },
      {
        id: 1552,
        imageTitle: "Electrician",
        linkUrl: "/industries/electrician-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/Screenshot_2025_08_21_141725_b1bd011fd5.png",
        },
      },
      {
        id: 1553,
        imageTitle: "Handyman",
        linkUrl: "/industries/handyman-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/General_Contractor_4720246fab.webp",
        },
      },
      {
        id: 1554,
        imageTitle: "General Contractor",
        linkUrl: "/industries/general-contractor-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/HVAC_contractor_software_e10aeb220d.png",
        },
      },
      {
        id: 1555,
        imageTitle: "HVAC",
        linkUrl: "/industries/hvac-contractor-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/plumbing_business_software_f6fd744ddd.jpg",
        },
      },
      {
        id: 1556,
        imageTitle: "Plumbing",
        linkUrl: "/industries/plumbing-business-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/plumbing_business_software_f6fd744ddd.jpg",
        },
      },
      {
        id: 1557,
        imageTitle: "Painting",
        linkUrl: "/industries/painting-contractor-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/painting_contractor_software_7de327e2b9.jpg",
        },
      },
      {
        id: 1558,
        imageTitle: "Remodeling",
        linkUrl: "/industries/remodeling-contractor-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/remodeling_contractor_software_c3b9ddefd3.jpg",
        },
      },
      {
        id: 1559,
        imageTitle: "Roofing",
        linkUrl: "/industries/roofing-contractor-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/roofing_contractor_software_b9d4801fc5.png",
        },
      },
    ],
  };

  const automatedFaq = {
    title: "What contractors want to know ",
    subTitle: "Frequently asked questions",
    faq: [
      {
        id: 1,
        question: "The last new software you'll need for your business",
        answer:
          "Heck no. We have a free plan, single-person plan, and team plan. We don't purposely paywall critical features you need to run your business just so you upgrade to a more expensive plan.",
      },
      {
        id: 2,
        question: "What are the minimum seats needed for PRO Team?",
        answer:
          "Just 2. Contractor+ isn't just for big teams. We care about the smaller companies too that want professional-level functionality... and we make it affordable.",
      },
      {
        id: 3,
        question: "What is your AI estimate tool? ",
        answer:
          "Estimatic AI is a highly accurate estimate generator based on AI technology. Upload photos, blueprints, or even competitors bids, tell it what you need an estimate for, and have an estimate in minutes. Estimatic even pulls live pricing from suppliers. Tweak with your markups, and send! Be the first to get your bid to a prospective customer.",
      },
      {
        id: 4,
        question: "How are you different than other all-in-one apps? ",
        answer:
          "Every function within the Contractor+ operating system automatically updates the whole system, and triggers other workflows. For example, every call, text, or email that comes in for a specific customer or job is automatically logged to a visual timeline within their profile. You have all communication and updates in one place for the whole team.",
      },
      {
        id: 5,
        question: "What data is used for pricing? ",
        answer:
          "Estimatic searches to find  real-time pricing from vendors like Lowe’s, Home Depot, Menards, Ace Hardware, Build.com, and ABC Supply. It also uses a proprietary labor rate index based on over 500,000 approved estimates and official BLS data.",
      },
      {
        id: 6,
        question: "How much is Contractor+? ",
        answer:
          "Our pricing is completely transparent. For annual plans, PRO (1 person) is $29/month, and PRO Team (2+) is $58/month for the first two users, plus $20/month per additional user. If you'd like to use the included AI features, tokens can be added as needed (this covers the cost of AI usage).",
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
        <OverlapCardMobileViewChild
          fieldService={mileageActuallyWorkdata}
          theme="dark"
          mainClassName="text-center "
        />
      </div>
      <div className="relative overflow-hidden">
        <SwitchingTool
          className="pb-[113px]"
          switchingTool={toolManagingData}
        />
        <ContractorIndustry contractorIndustry={industriesData} />
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

      <div className="pb-10">
        <CommonFormField
          variantBtn="primary"
          variant="default"
          title={
            "One platform that runs the whole d*mn thing (for one d*mn price)"
          }
          subTitle={"The last new software you'll need for your business"}
          placeholder={"Your Email"}
          createBtn={"Get Started Free"}
          mobileBtn={"Download FREE App"}
          ncc={"No credit card required"}
        />
      </div>
      <TrustBar
        platforms={platforms}
        className="mx-auto w-full max-w-[889px]"
      />
      <div className="relative overflow-hidden">
        <Faq
          faq={automatedFaq}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-5 sm:pb-10"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
        />
      </div>
    </main>
  );
};

export default GeneralFsmPage;
