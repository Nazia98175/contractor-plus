import {
  automatedHeadingData,
  blogList,
  dealReviews,
  dealReviews2,
  platforms,
} from "@/components/common/Helper";
import TrustedService from "@/components/crmbussiness/TrustedService";
import EstimaticHero from "@/components/estimaticAi/EstimaticHero";
import OneGetsSet from "@/components/estimaticAi/OneGetsSet";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import React from "react";
import capture from "../../../../public/lotties/capture-wrok.json";
import FieldService from "@/components/crmbussiness/FieldService";
import OverlapCardMobileViewChild from "@/components/common/OverlapCardMobileViewChild";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";
import Image from "next/image";
import AwardsTagsImg from "@/components/common/AwardsTagsImg";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustBar from "@/components/common/TrustBar";
import CommonFormField from "@/components/common/CommonFormField";
import Faq from "@/components/crmbussiness/Faq";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
const page = () => {
  const estimaticData = {
    id: 59,
    documentId: "jz0jpk8x65n5itsgvis6sbz1",
    estimaticTag: "AI Estimating Software",
    estimaticTagTitle:
      "I need a quote for a 12x16 deck, using pressure treated lumber, railing, steps, with flashing on one 16' side. Offer option to upgrade to composite deck boards.",

    hero: {
      id: 59,
      title: "The first AI estimator worth trusting",
      subTitle:
        "Estimatic references your costbook, live supplier pricing, and estimates the same way you do. Just 100x faster.",
    },

    comparison: {
      id: 58,
      title: "One gets sent. The other gets redone.",
      subTitle: "Don’t",
      subTitleBold: "hand off",
      subTitle2:
        "control of your estimating process to a tool that can’t bid like you do",
    },

    comparisonTable: {
      id: 62,
      title: "Not all AI estimate software makes your life easier",
      subTitle: "Some AI estimators get “close”. Estimatic gets it right.",
    },

    commonProblems: {
      id: 60,
      title: "You’re still in control. Estimatic just gets you there faster.",
      subTitle: "No gimmicks, just a damn good estimate",
    },

    problemSolutionSection: {
      id: 2189,
      title: "How to create a winning AI estimate",
      subTitle: null,
    },

    resultStatsEstimatic: [
      { id: 241, title: "<9", subTitle: "Minutes spent on an estimate" },
      {
        id: 242,
        title: "$100k+",
        subTitle: "More in annual profit from fewer underbids",
      },
      {
        id: 243,
        title: "2x",
        subTitle: "Higher close rate for same-day estimates",
      },
      { id: 244, title: "30%", subTitle: "Reduction in material cost errors" },
    ],

    reviews: {
      id: 3709,
      title: "Trusted by over 50,000 build and service contractors",
      showSection: true,
      isLoop: true,
    },

    reviewTrustSection: {
      id: 3710,
      title:
        "There’s a reason we have a 4.7 ★  average across thousands of reviews",
      showSection: null,
      isLoop: null,
    },

    emailSignupSection: {
      id: 2474,
      title: "The AI estimate generator that will change your business forever",
      subTitle: "Get started with Estimatic AI in Contractor+ today.",
      placeholder: "Your Email",
    },

    blogs: {
      id: 2136,
      title: "AI related topics in Contractor+ HQ",
      btnUrl: null,
      btnText: "Contractor+ HQ",
    },

    Industries: {
      id: 133,
      title: "Designed to handle the complexity of every crew, job, and trade",
      subTitle: "Contractor+ serves 30+ industries",
    },

    SeoMetaData: {
      id: 6960,
      metaTitle: "Estimatic AI Estimating Software | Contractor+",
      metaDescription:
        "Create accurate estimates in minutes with Estimatic AI. Generate proposals that win jobs with powerful automation.",
      canonicalUrl: "https://v2site.contractorplus.app/ai-estimating-software",
      keywords: "ai estimating software",
    },
  };

  const resultStatsEstimatic2 = estimaticData.resultStatsEstimatic;
  const billingVsthWayYouCouldData = {
    title: "Not all AI estimate software makes your life easier",
    subTitle: "Some AI estimators get “close”. Estimatic gets it right.",

    comparisons: [
      {
        title: "Other Options",
        comparisonList: [
          {
            details:
              "Uses AI that’s not much different than the free version of ChatGPT",
          },
          {
            details: "Standalone tool with inadequate add-on features",
          },
          {
            details: "Generic line items that don’t match how you bid",
          },
          {
            details: "Limited supply integrations",
          },
          {
            details: "AI guesses numbers based on who-knows-what",
          },
          { details: "Can only read text input" },
          { details: "Limited customizability" },
          {
            details:
              "$120/mo. for 5 people to use a standalone estimating & invoice tool",
          },
        ],
      },
      {
        title: "The Contractor+ way",
        comparisonList: [
          {
            details: "Built on advanced AI models fine-tuned for estimating",
          },
          {
            details:
              "Estimates auto sync to contacts, jobs, and scheduling tools in Contractor+",
          },
          {
            details:
              "Labor, materials, assemblies, permits, and info-only lines built to your exact format",
          },
          {
            details:
              "Live pricing from Home Depot, Lowe’s, Menards, Ace, Ferguson Home, ABC Supply.",
          },
          {
            details:
              "Estimates are tied to your real labor rates, cost book, and local material prices",
          },
          {
            details:
              "Can read photos, blueprints, and drawings for more context about the job",
          },
          {
            details: "Built-in options for labor and material markup",
          },
          {
            details:
              "$95/mo. for 5 people to use the entire Contractor+ operating system. AI estimates are included",
          },
        ],
      },
    ],
  };
  const mileageActuallyWorkdata = {
    id: 1,
    title: "How to create a winning AI estimate",
    cardsDetail: [
      {
        id: 1,
        isIcon: true,
        lottieJson: null,
        title: "Step 1",
        cardImg: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/create_estimating_add14f6047.webp",
        },
        content: [
          {
            title: "Describe the estimate to Estimatic",
            desc: "It’s simple. Just tell Estimatic what you need an estimate for and give it as much context as you want. You can upload photos, blueprints, drawings, or even a competing quote.",
          },
        ],
      },
      {
        id: 2,
        isIcon: true,
        lottieJson: null,
        title: "Step 2",
        cardImg: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/estimate_build_ed8bfa497a.webp",
        },
        content: [
          {
            title: "Estimatic builds your estimate",
            desc: "Using your cost book, real-time pricing from suppliers, and live local labor rates, Estimatic builds a detailed, accurate estimate, 100x faster than any human.",
          },
        ],
      },
      {
        id: 3,
        isIcon: true,
        lottieJson: null,
        title: "Step 3",
        cardImg: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/estimate_aproved_91640f7583.webp",
        },
        content: [
          {
            title: "You tweak (if needed) + approve",
            desc: "Estimatic shows its work so you feel confident in yours. Tweak any details like margins or materials, and add markup before approving",
          },
        ],
      },
      {
        id: 4,
        isIcon: true,
        lottieJson: null,
        title: "Step 4",
        cardImg: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/estimate_sending_c01ff67825.webp",
        },
        content: [
          {
            title: "Send your estimate",
            desc: "Whether you’re at the office or at your customer’s kitchen table, send your estimate faster than anyone else, and let them eSign without extra software.",
          },
        ],
      },
    ],
  };
  const toolManagingData = {
    id: 320,
    title: "You’re still in control. Estimatic just gets you there faster.",
    sub_title: "No gimmicks, just a damn good estimate",
    cardsDetail: [
      {
        id: 1671,
        text: <>AI isn’t replacing your judgment</>,
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
        text: <>You can tweak, edit, or override any line</>,
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
        text: <>Estimatic shows its work (no black box)</>,
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
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/carpenter_business_software_f892ee9908.jpg",
        },
      },
      {
        id: 1550,
        imageTitle: "Construction",
        linkUrl: "/industries/construction-management-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/construction_management_software_52070e0fe7.jpg",
        },
      },
      {
        id: 1551,
        imageTitle: "Drywall",
        linkUrl: "/industries/drywall-contractor-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/drywall_contractor_software_394690d402.jpg",
        },
      },
      {
        id: 1552,
        imageTitle: "Electrician",
        linkUrl: "/industries/electrician-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/electrician_software_8fabd50a92.png",
        },
      },
      {
        id: 1553,
        imageTitle: "Handyman",
        linkUrl: "/industries/handyman-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/Screenshot_2025_08_21_141725_b1bd011fd5.png",
        },
      },
      {
        id: 1554,
        imageTitle: "General Contractor",
        linkUrl: "/industries/general-contractor-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/Screenshot_2025_08_21_141725_b1bd011fd5.png",
        },
      },
      {
        id: 1555,
        imageTitle: "HVAC",
        linkUrl: "/industries/hvac-contractor-software",
        image: {
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/General_Contractor_4720246fab.webp",
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
          url: "https://contractor-plus-website.s3.us-east-2.amazonaws.com/painting_contractor_software_7de327e2b9.jpg",
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
        question:
          "How is Estimatic different from tools like ChatGPT or other AI estimate generators?",
        answer:
          "Our AI estimate software actually pulls from your real cost book, current supplier pricing, and local labor rates. While other tools give you generic estimates, Estimatic builds accurate, client-ready bids that match how you quote jobs.",
      },
      {
        id: 2,
        question: "Can I still control or edit the estimate?",
        answer:
          "Absolutely. Estimatic gives you a complete draft in a couple minutes, but you’ll always have the final say. Review, adjust, and approve line items just like you would normally (but WAY faster!)",
      },
      {
        id: 3,
        question: "Can Estimatic read job photos and blueprints?",
        answer:
          "Yes — upload jobsite photos, blueprints, and/or drawings when you create your estimate for the AI to use. ",
      },
      {
        id: 4,
        question: "Will it match my usual estimate format?",
        answer:
          "Yes. Use your saved templates and upload your cost book so the final output looks like your usual estimates. No reformatting or manual entry necessary. We don’t force you into a rigid layout. ",
      },
      {
        id: 5,
        question: "What data is used for pricing? ",
        answer:
          "Estimatic searches to find  real-time pricing from vendors like Lowe’s, Home Depot, Menards, Ace Hardware, Ferguson Home, and ABC Supply. It also uses a proprietary labor rate index based on over 500,000 approved estimates and official BLS data.",
      },
      {
        id: 6,
        question: " Is Estimatic part of Contractor+ or a separate tool?",
        answer:
          "It’s fully built into Contractor+. That means your estimates automatically connect to your CRM, service requests, job schedule, and invoicing. It’s included with your regular subscription.",
      },
    ],
  };
  return (
    <main id="common-homepage-wrapper">
      <div
        id="home-page-view-port-screen"
        className="relative overflow-hidden opacity-0"
      >
        <EstimaticHero
          hero={estimaticData}
          heroImg={"/images/webp/estimatic-ai-hero.webp"}
          createBtn={"Get started FREE"}
          createMobileBtn={"Download FREE App"}
          nccTxt={"No credit card required"}
          estimateHeroData={resultStatsEstimatic2 || []}
        />
        <TrustedService
          reviews={dealReviews}
          className="pb-6 lg:pt-6 lg:pb-3.5"
        />
        <RunWithContractor
          kindAdorable={billingVsthWayYouCouldData}
          variant="dark"
          icon={true}
        />
      </div>

      <OneGetsSet />

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

      <ThousandsReviews
        data={dealReviews2}
        reviews={dealReviews2?.reviews}
        variant="secondary"
      />

      <div className="pt-20 pb-10 sm:pb-[75px] lg:pt-[110px] xl:pt-[120px]">
        <CommonFormField
          variantBtn="primary"
          variant="default"
          title={
            "The AI estimate generator that will change your business forever"
          }
          subTitle={"Get started with Estimatic AI in Contractor+ today."}
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
      <BlogPosts
        data={blogList}
        blogs={automatedHeadingData}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />
    </main>
  );
};

export default page;
