import CloudsAnimation from "@/components/common/CloudsAnimation";
import {
  blackPlatforms,
  makeOperationList,
  OurReviewList,
  platforms,
  reviews,
} from "@/components/common/Helper";
import SoftwareUsed from "@/components/common/SoftwareUsed";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustBar from "@/components/homepage/TrustBar";
import Whatever from "@/components/homepage/Whatever";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import AwardBadges from "@/components/hvca/AwardBadge";
import EraOfSoftware from "@/components/hvca/EraOfSoftware";
import HvacFaq from "@/components/hvca/HvacFaq";
import HvacHero from "@/components/hvca/HvacHero";
import HvacReview from "@/components/hvca/HvacReview";
import HvacSoftware from "@/components/hvca/HvacSoftware";
import HvacSoftwareService from "@/components/hvca/HvacSoftwareService";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import TrustBatBuildContractor from "@/components/hvca/TrustBatBuildContractor";
import WantingMore from "@/components/hvca/WantingMore";

export const metadata = {
  title: "Contractor + - HVAC Software",
  description: "Not just HVAC software. Meet your operating system.",
};

const page = () => {
  const faqitems = [
    {
      id: 1,
      question: "Will my team actually use this?",
      answer:
        "Your team won't want to live without it. It will make every single person's job easier to the point you won't be able to imagine running your HVAC business without Contractor+. Use it free and we'll prove it. ",
    },
    {
      id: 2,
      question:
        "How fast can I switch from Jobber, Housecall Pro or ServiceTitan?",
      answer:
        "It links every call, message, email and file to each customer and each job address, so you can review past interactions and documents at a glance.",
    },
    {
      id: 3,
      question: "Can I import my current invoices, customers, and templates?",
      answer:
        "You drag and drop tasks on the schedule, view crew locations in real time and see status updates as work items are checked off or notes are added.",
    },
    {
      id: 4,
      question: "What software/tools does Contractor+ replace?",
      answer:
        "Contractor+ includes built-in calling and texting, dedicated job chat rooms and automatic transcripts so everyone stays in sync without missing details.",
    },
    {
      id: 5,
      question: "Does this work for small teams and large teams?",
      answer:
        "Capture inquiries through customized entry points, move opportunities through visual stages, then generate quotes and contracts clients can sign online—all within the same system.",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <div className="relative">
          <div className="absolute bottom-[205px] left-0 z-50 block h-[45px] w-full bg-white blur-[9px] sm:hidden"></div>
          <HvacHero />
          <TrustBatBuildContractor
            platforms={blackPlatforms}
            showTrustedSection={true}
            className="1xl:gap-13 relative z-20 mx-auto flex w-full max-w-[1050px] flex-col gap-4 px-2 pt-[43px] pb-14 sm:gap-6 md:gap-7 md:pt-[13px] xl:gap-9 xl:pt-20"
          />
        </div>
        <HvacSoftware />
        <WantingMore />
        <EraOfSoftware />
      </div>
      <div className="relative overflow-hidden">
        <AwardBadges />
        <ThousandsReviews
          data={
            "There's a reason we have a 4.7 ★  average across  thousands of reviews"
          }
          reviews={reviews}
          variant="secondary"
        />
      </div>
      <HvacSoftwareService
        data={{
          title: "This is what HVAC software should have been all along",
          sub_title: "",
          placeholder: "Enter your email",
        }}
        ncc="No credit card required"
        createBtn="Get Started Free"
        mobileBtn="Download App"
        mobileBtnHref="/app-download"
      />
      <TrustBarHvca platforms={platforms} />
      {/* <WhatEverClient data={homePageContent?.data?.whateverOperation} /> */}
      <HvacFaq
        faqitems={{
          faq: faqitems,
        }}
        variant="hvac"
        heading="What HVAC contractors want to know "
      />

      {/* <Faq /> */}

      <BlogPosts className="relative z-20 bg-white" variant="secondary" />
    </>
  );
};

export default page;
