import { platforms } from "@/components/common/Helper";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import FieldServicesHero from "@/components/field-services/FieldServicesHero";
import GoingFieldSevices from "@/components/field-services/GoingFieldSevices";
import NeverLookBack from "@/components/field-services/NeverLookBack";
import RealTimeServiceConnector from "@/components/field-services/RealTimeServiceConnector";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import ServiceContractorsMarquee from "@/components/field-services/ServiceContractorsMarquee";
import TimmingEffect from "@/components/field-services/TimmingEffect";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import HvacFaq from "@/components/hvca/HvacFaq";
import HvacSoftwareService from "@/components/hvca/HvacSoftwareService";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import { getHomePage } from "@/services/homepage";
import { getUserLoc } from "@/services/map";
export const metadata = {
  title: "Contractor + - Field Services",
  description:
    "One command center to visualize and run your entire field operation",
};

interface PageParams {
  params: {
    locale?: string;
  };
}

const FieldServicesPage = async ({ params }: PageParams) => {
  const useParams = await params;
  const location = await getUserLoc();
  const faqitems = [
    {
      id: 1,
      question: " Can I assign jobs based on where my team is?",
      answer:
        "Yes. Contractor+ shows you a live GPS map of your entire crew, so you can assign jobs based on location, availability, or skill",
    },
    {
      id: 2,
      question: "How do schedule changes get communicated to the field?",
      answer:
        "Instantly. If you move or reassign a job, your crew is notified immediately through the mobile app with updated details, tasks, and location info. You won’t need to call or text anyone.",
    },
    {
      id: 3,
      question: "What if I miss a call from a potential client?",
      answer:
        "Big Chief, our built-in AI receptionist, will answer for you. It captures lead details, books appointments, and drops them right into your pipeline. It works after-hours too!",
    },
    {
      id: 4,
      question: " Do my field techs need to be tech-savvy to use this?",
      answer:
        "Not at all. Contractor+ was built mobile-first for crews on the go. Most techs are up and running within minutes.",
    },
    {
      id: 5,
      question: "Can I take payments on-site through Contractor+?",
      answer:
        "Yes. Your crew can collect card or ACH payments in the field, directly from the job or via the client portal. You can even get a free card reader with certain plans.",
    },
    {
      id: 6,
      question:
        "Does Contractor+ replace my current scheduling and dispatch tools?",
      answer:
        "Yes. Contractor+ consolidates job scheduling, dispatch, crew tracking, time logging, and communication into one system.",
    },
    {
      id: 7,
      question: "Can I build estimates in the field?",
      answer:
        "Yes. Contractor+ has the fastest and most professional-looking contractor estimates in the industry. Our AI quickly pulls in live pricing for materials and labor rates to build out estimates faster than you've ever done before. Offer customers “Good, Better, Best” options, add groups and line items, and even get eSignatures on the spot. ",
    },
  ];
  const [homePageContent, reviewsList] = await Promise.all([
    getHomePage(useParams?.locale || "en", "&populate=*"),
    getHomePage(
      useParams?.locale || "en",
      "&populate[review][on][common.reviews][populate]=*",
    ),
  ]);

  return (
    <>
      <FieldServicesHero />
      <ServiceContractorsMarquee />
      <GoingFieldSevices />
      <RealTimeServiceConnector />
      <RunWithContractor />
      <TimmingEffect />
      <div className="relative overflow-hidden">
        <NeverLookBack />
        {/* <ThousandsReviews
          data={crmPageContent?.data?.[0]?.thousandReviews}
          reviews={reviews?.data?.[0]?.reviews?.reviews}
        /> */}
        <HvacSoftwareService />
      </div>
      {/* <HvacSoftwareService /> */}
      <TrustBarHvca showTrustedSection={false} platforms={platforms} />
      <HvacFaq
        faqitems={faqitems}
        className="mt-12 md:mt-[74px]"
        variant="dark"
      />
      <WhatEverClient
        data={homePageContent?.data?.whateverOperation}
        issection={false}
      />
      <BlogPosts className="relative z-20 bg-white" variant="secondary" />
    </>
  );
};

export default FieldServicesPage;
