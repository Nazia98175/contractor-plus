import { OurReviewList, platforms } from "@/components/common/Helper";
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
import { getBlogs } from "@/services/blogs";
import { getCrmPage } from "@/services/crm";
import { getHomePage } from "@/services/homepage";
import { getUserLoc } from "@/services/map";
export const metadata = {
  title: "Contractor + - Field Services",
  description:
    "One command center to visualize and run your entire field operation",
};

interface Params {
  params: Promise<{ locale: string }>;
}

const FieldServicesPage = async ({ params }: Params) => {
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
  const [homePageContent] = await Promise.all([
    getHomePage(useParams?.locale || "en", "&populate=*"),
    getHomePage(
      useParams?.locale || "en",
      "&populate[review][on][common.reviews][populate]=*",
    ),
  ]);
  const dummyReviews = [
    {
      id: 1,
      name: "John Smith",
      company: "Smith Plumbing Services",
      rating: 5,
      review:
        "Contractor+ has completely transformed how we manage our field operations. The real-time tracking is a game-changer!",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Johnson HVAC Solutions",
      rating: 5,
      review:
        "The scheduling and dispatch features have saved us hours every week. Our techs love the mobile app!",
      date: "2024-01-10",
      verified: true,
    },
    {
      id: 3,
      name: "Mike Davis",
      company: "Davis Electric Co.",
      rating: 5,
      review:
        "Big Chief AI receptionist never misses a call. We've increased our leads by 40% since implementing Contractor+",
      date: "2024-01-05",
      verified: true,
    },
    {
      id: 4,
      name: "Lisa Brown",
      company: "Brown Roofing & Construction",
      rating: 4,
      review:
        "Great software for managing crews and jobs. The GPS tracking helps us optimize routes and save on fuel costs.",
      date: "2023-12-28",
      verified: true,
    },
    {
      id: 5,
      name: "Robert Wilson",
      company: "Wilson Home Services",
      rating: 5,
      review:
        "The ability to create estimates in the field and get instant signatures has accelerated our sales process significantly.",
      date: "2023-12-20",
      verified: true,
    },
  ];

 const [
    crmPageContent,
    reviews,
    section3,
    section4,
    section5,
    section6,
    section7,
    faq,
    blogs,
  ] = await Promise.all([
    getCrmPage("field-service", useParams.locale, "&populate=*"),
    getCrmPage(
     "field-service",
      useParams.locale,
      "&populate[reviews][populate]=reviews",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[switchingTool][populate]=cardsDetail",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[fieldService][populate][cardsDetail][populate]=*",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[trackProperties][populate][cardDetails][populate]=*",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[comparison][populate][centerLogo]=true&populate[comparison][populate][features]=true",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[teamsUsingContractor][populate][cards]=*",
    ),
    getCrmPage(
      "field-service",
      useParams.locale,
      "&populate[faqs][populate]=faq",
    ),
    getBlogs(useParams?.locale, "&sort=publishedAt:desc&pagination[limit]=3"),
  ]);

  return (
    <main className="overflow-hidden">
      <FieldServicesHero />
      <ServiceContractorsMarquee />
      <GoingFieldSevices />
      <RealTimeServiceConnector />
      <RunWithContractor />
      <TimmingEffect />
      <div className="relative overflow-hidden">
        <NeverLookBack />
        {/* <ThousandsReviews data={OurReviewList} reviews={dummyReviews} /> */}
        <HvacSoftwareService />
      </div>
      {/* <HvacSoftwareService /> */}
      <TrustBarHvca showTrustedSection={false} platforms={platforms} />
      <HvacFaq
      faqitems={faq?.data?.[0]?.faqs}
        // faqitems={faqitems}
        className="mt-12 md:mt-[74px]"
        variant="dark"
      />
      <WhatEverClient
        data={homePageContent?.data?.whateverOperation}
        issection={false}
      />
      <BlogPosts data={crmPageContent?.data?.[0]?.blogs}
            blogs={blogs} className="relative z-20 bg-white" variant="secondary" />
    </main>
  );
};

export default FieldServicesPage;
