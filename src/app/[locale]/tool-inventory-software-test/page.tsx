import AutmateDoContacts from "@/components/automatedclientagreements/AutmateDoContacts";
import AutomatedClientHero from "@/components/automatedclientagreements/AutomatedClientHero";
import {
  automatedCardData,
  blogList,
  clientReviews,
  dealflowhero,
  dealReviews2,
  platforms,
  toolManagingData,
} from "@/components/common/Helper";
import {
  FooterRedLineIcon,
  FooterRedLineMobileIcon,
} from "@/components/common/Icons";
import TrustBar from "@/components/common/TrustBar";
import {
  neverLookBackToolData,
  stopToolsData,
  tool_comparisonData,
  toolBlogData,
  toolformData,
  toolsFaq,
  tooltrackingData,
} from "@/components/common/Utils";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import Faq from "@/components/crmbussiness/Faq";
import CrmService from "@/components/crmbussiness/IndustryService";
import KindAdorable from "@/components/crmbussiness/KindAdorable";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TeamsUsingContractor from "@/components/crmbussiness/TeamsUsingContractor";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrackProperties from "@/components/crmbussiness/TrackProperties";
import TrustedService from "@/components/crmbussiness/TrustedService";
import ManageEveryTool from "@/components/toolandequipment/ManageEveryTool";
import heroImg from "../../../../public/lotties/tool-hero.json";
import Image from "next/image";
import FieldService from "@/components/crmbussiness/FieldService";
import scanning_json from "../../../../public/lotties/scanning.json";

export const metadata = {
  title: "Tool Inventory Software to Track Equipment | Contractor+",
  description:
    "Log tools, assign gear to jobs, and reduce loss. Contractor+ keeps your inventory organized and up to date.",
  keywords: ["Opportunity Tracker for Contractors | Contractor+"],
  openGraph: {
    images: [
      {
        url: "/images/webp/terms-of-service-og.webp",
        width: 1920,
        height: 630,
        alt: "tool-inventory-software",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/tool-inventory-software",
  },
};
const ToolAndTipEquipmentPage = () => {  
  const toolEqupment = {
    id: 1,
    title: "A tool tracking system that syncs with the rest of ypp9999dour operation",
    cardsDetail: [
      {
        id: 1,
        title: "Library-Style Checkouts",
        isIcon: false,
        cardImg: { url: "/images/webp/library-style.webp" },
        content: [
          {
            desc: "Assign tools like library books—check out, transfer, and return with a tap. Self-assign or assign to others (with permission).",
          },
        ],
      },
      {
        id: 2,
        subheading: "Manual Logs  ",
        title: "Fast Scan Workflows",
        lottieJson: scanning_json,
        isIcon: false,

        content: [
          {
            desc: "Check in/out by scanning a QR label or via Bluetooth presence. No typing. No guesswork.",
          },
        ],
      },

      {
        id: 3,
        title: "Role-Based Controls",
        isIcon: false,
        cardImg: { url: "/images/webp/role-based.webp" },
        content: [
          {
            desc: "Decide exactly who can view, add, edit, assign, transfer, or retire assets.",
          },
        ],
      },
      {
        id: 4,
        title: "Full Chain of Custody",
        isIcon: false,
        cardImg: { url: "/images/webp/full-chain.webp" },
        content: [
          {
            desc: "Every assignment, transfer, and return is time and date stamped. You’ll know who had what, when, and where.",
          },
        ],
      },
      {
        id: 5,
        title: "Bluetooth Tool Tags",
        content: [
          {
            desc: "Use Contractor+ tags (multiple options) or bring your own. Hop in the truck, run a Truck Scan, and instantly see what’s on board—and what’s missing.",
          },
        ],
        cardImg: { url: "/images/webp/library-5.webp" },
        isIcon: false,
        lottieJson: null,
      },
      {
        id: 6,
        title: "Central Dashboard",
        content: [
          {
            desc: "See every tool and piece of equipment in real time—by job, person, crew, or truck. Find what you need in a couple clicks.",
          },
        ],
        cardImg: { url: "/images/webp/central-deshboard.webp" },
        isIcon: false,
        lottieJson: null,
      },
      {
        id: 7,
        title: "Job & People Linking",
        content: [
          {
            desc: "Tie each asset to a job or team member for instant context.",
          },
        ],
        cardImg: { url: "/images/webp/job-people.webp" },
        isIcon: false,
        lottieJson: null,
      },
      {
        id: 8,
        title: "Asset Value & Billing",
        content: [
          {
            desc: "Track purchase price and current value. Add equipment usage to invoices (hourly, daily, or per job) without hunting for numbers.",
          },
        ],
        cardImg: { url: "/images/webp/assest-value2.webp" },
        isIcon: false,
        lottieJson: null,
      },
      {
        id: 9,
        title: "Bulk Actions",
        content: [
          {
            desc: "Bulk-assign, bulk-return, and bulk-retire tools after a shift or phase wrap.",
          },
        ],
        cardImg: { url: "/images/webp/bulk-action.webp" },
        isIcon: false,
        lottieJson: null,
      },
    ],
  };
  return (
    <main className="relative">
      <AutomatedClientHero
        hero={{
          heroTitle:
            "Finally, a way to track and audit every tool across every job",
          heroDescription:
            "One system to tag, assign, scan and recover every asset.",
        }}
        featureTag="Tool Inventory Software"
        slug="crm"
        commonData={dealflowhero}
        isBlurBg={false}
        isLottie={heroImg}
        imgClass="-mb-10 sm:-mb-16 mt-10 md:mb-0 md:-mt-5 xl:mr-20 max-w-[800px]"
      />
      <TrustedService reviews={clientReviews} slug="crm" apiData={false} />
      <SwitchingTool switchingTool={toolManagingData} className="mb-16" />
      <div className="relative">
        <FieldService
          fieldService={toolEqupment}
          theme="dark"
          slug="estimateTheme"
          apiData={true}
          mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto"
        />
      </div>
      <div className="relative bg-white pt-16 xl:pt-24">
        <TrackProperties
          ncc={"No credit card required"}
          trackProperties={tooltrackingData}
        />
        <AutmateDoContacts
          ncc={"No credit card required"}
          trackProperties={stopToolsData}
        />
        <ManageEveryTool cardsData={automatedCardData.cardsDetail} />
        <KindAdorable slug={"estimate"} kindAdorable={tool_comparisonData} />
        <TeamsUsingContractor data={neverLookBackToolData} slug={""} />
        <ThousandsReviews
          data={dealReviews2}
          reviews={dealReviews2.reviews}
          variant="primary"
          apiData={false}
        />
      </div>
      <div className="relative overflow-hidden">
        {/* Background Icons */}
        <FooterRedLineIcon className="pointer-events-none absolute top-[-20%] left-[-2%] hidden max-h-[994px] w-full max-w-[840px] sm:block" />
        <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden" />
        <div className="relative">
          <Image
            width={800}
            height={1000}
            // sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            className="absolute top-[10px] left-0 z-10 hidden max-h-[800px] w-full max-w-[800px] object-center sm:block"
            src={"/images/webp/hero-red-line.webp"}
            alt="hero-red-line"
          />

          <CrmService
            createBtn={"Get started FREE"}
            mobileBtn={"Download FREE App"}
            ncc={"No credit card required"}
            data={toolformData}
            variant="primary"
            className="xs:max-w-[88%] max-w-[87%] sm:max-w-[780px]"
            variantBtn="light"
          />
        </div>
        <TrustBar
          platforms={platforms}
          className="mx-auto w-full max-w-[889px]"
        />
        <Faq
          faq={toolsFaq}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
        />
      </div>

      <BlogPosts
        data={blogList}
        blogs={toolBlogData}
        className="mt-7 mb-20 md:mt-9"
        classMaxwidth="max-w-[90%] xs:max-w-[98%] sm:max-w-full"
      />
    </main>
  );
};

export default ToolAndTipEquipmentPage;
