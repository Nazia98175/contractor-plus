import CloudsAnimation from "@/components/common/CloudsAnimation";
import CommonFormField from "@/components/common/CommonFormField";
import { blackPlatforms, platforms, reviews } from "@/components/common/Helper";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import Faq from "@/components/crmbussiness/Faq";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import AwardBadges from "@/components/hvca/AwardBadge";
import EraOfSoftware from "@/components/hvca/EraOfSoftware";
import HvacHero from "@/components/hvca/HvacHero";
import HvacSoftware from "@/components/hvca/HvacSoftware";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import TrustBatBuildContractor from "@/components/hvca/TrustBatBuildContractor";
import WantingMore from "@/components/hvca/WantingMore";
import { getCrmPage } from "@/services/features/crm";

import { getHomepageData } from "@/services/homePage/getHomepageData";
import Image from "next/image";

export const metadata = {
  title: "Not just HVAC software Meet your operating system",
  description:
    "Contractor+ connects every function of your business so it finally all works in sync.",
};
type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};
const page = async ({ params }: PageProps) => {
  const useParams = await params;

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

  const [blogs] = await Promise.all([
    getCrmPage("crm", useParams.locale, "&populate=*"),
  ]);

  const { homePageContent } = await getHomepageData(useParams?.locale);
  return (
    <main className="overflow-hidden">
      <div className="relative bg-white">
        <HvacHero />
        <TrustBatBuildContractor
          platforms={blackPlatforms}
          showTrustedSection={true}
          className="relative z-10 mx-auto flex w-full max-w-[1050px] flex-col px-2 pt-[43px] pb-14 md:pt-[13px] xl:pt-5"
        />
        <HvacSoftware />
        <WantingMore />
        <EraOfSoftware />
      </div>
      <AwardBadges />
      <ThousandsReviews
        data={{ title: "4.7 ★ across thousands of reviews" }}
        reviews={reviews}
        variant="secondary"
      />
      <div className="relative overflow-x-hidden">
        <Image
          fill
          className="pointer-events-none absolute top-[10%] left-0 z-10 block h-full w-full object-fill sm:hidden"
          src="/images/webp/large-comet-hvac.webp"
          alt="large-comet-hvac"
        />
        <div className="px-2 pt-[57px] pb-12 lg:pt-[90px] lg:pb-[65px] xl:pt-[113px]">
          <CommonFormField
            variant="tertiary"
            title={"This is what HVAC software should have been all along"}
            sub_title={"Start using Contractor+ FREE. You won’t look back."}
            placeholder={"Your Email"}
            createBtn={"Get Started Free"}
            mobileBtn={"Download FREE App"}
            ncc={"No credit card required"}
          />
        </div>
        <TrustBarHvca platforms={platforms} className="pb-[148px] xl:pb-20" />
      </div>
      <WhatEverClient
        data={homePageContent?.data?.whateverOperation}
        issection={false}
      />
      <div className="relative">
        <Faq
          mainContainerclassName="pt-9 pb-16 z-20 px-2"
          faq={{
            title: "What HVAC contractors want to know",
            sub_title: "Frequently asked questions",
            faq: faqitems,
          }}
          classNameAnswer="pt-1"
          classHeadingMaxWidth="max-w-[88%] xs:max-w-[98%] sm:max-w-full mx-auto"
        />
        <div className="pointer-events-none mt-8 md:h-[76px]">
          <CloudsAnimation
            cloud1Class="bottom-[61px] sm:bottom-[50px] md:bottom-[53px] lg:bottom-0"
            cloud2Class="bottom-[57px] sm:bottom-[50px] md:bottom-[55px] lg:bottom-0"
          />
          <div className="bg-white-linear absolute -bottom-3 z-50 h-7 w-full drop-shadow-[0_30px_30px_rgba(255,255,255,0.7)]"></div>
        </div>
      </div>
      <BlogPosts
        data={blogs?.data?.[0]?.blogs}
        blogs={blogs?.data?.[0]?.blogs}
        className="relative z-20 bg-white pb-8"
        variant="secondary"
      />
    </main>
  );
};

export default page;
