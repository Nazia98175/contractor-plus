import AutmateDoContacts from "@/components/automatedclientagreements/AutmateDoContacts";
import AutomatedClientHero from "@/components/automatedclientagreements/AutomatedClientHero";
import ContractorStartMain from "@/components/automatedclientagreements/ContractorStartMain";
import {
  automate_comparisonData,
  automatedFaq,
  automatedformData,
  automatedHeadingData,
  automateneverlookBackData,
  blogList,
  clientReviews,
  dealflowhero,
  dealReviews2,
  platforms,
  propertyCRMSection,
  toolManagingData,
} from "@/components/common/Helper";
import {
  FooterRedLineIcon,
  FooterRedLineMobileIcon,
} from "@/components/common/Icons";
import TrustBar from "@/components/common/TrustBar";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import Faq from "@/components/crmbussiness/Faq";
import CrmService from "@/components/crmbussiness/IndustryService";
import KindAdorable from "@/components/crmbussiness/KindAdorable";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TeamsUsingContractor from "@/components/crmbussiness/TeamsUsingContractor";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrackProperties from "@/components/crmbussiness/TrackProperties";
import TrustedService from "@/components/crmbussiness/TrustedService";
import RealTimeServiceConnector from "@/components/fieldservices/RealTimeServiceConnector";

import Image from "next/image";

const hello = {
  title: "A tool tracking system that syncs with the rest of your operation",
  solutionCards: [
    {
      title: "Smart Schedule",
      description:
        "See every crew, job, and asset in one screen. Drag and drop booking makes scheduling simple.",
      image: null,
    },
    {
      id: 292,
      title: "Live Dispatch",
      description:
        "See who’s available and closest to a job in real time so you assign the right work to the right person. Crews get notified instantly.",
      image: null,
    },
    {
      id: 293,
      title: "Job Details",
      description:
        "No more digging for details. Everything tied to the job is in one place, from tasks to work orders and billing.",
      image: null,
    },
    {
      id: 294,
      title: "Field Updates",
      description:
        "Crews can upload photos, notes, and task changes straight from the field. Everything lives in one central hub.",
      image: null,
    },
    {
      id: 295,
      title: "Crew Efficiency",
      description:
        "Track time, mileage, and task completion with zero paper. Know who’s doing what, where, and when.",
      image: null,
    },
    {
      id: 296,
      title: "AI Call Attendant",
      description:
        "Big Chief answers your calls 24/7, captures lead details, and books jobs while you focus on the field.",
      image: null,
    },
    {
      id: 297,
      title: "Onsite Payments",
      description:
        "Collect payment the moment the job’s done. Accept cards or ACH in the field and mark the invoice as paid.",
      image: null,
    },
    {
      id: 298,
      title: "CRM",
      description:
        "Track customers, properties, and communication history in one CRM that’s built for the way contractors work.",
      image: null,
    },
    {
      id: 299,
      title: "Mobile App",
      description:
        "Run your business from anywhere. The intuitive ContractorOS puts scheduling, dispatch, and updates in your pocket.",
      image: null,
    },
  ],
};

const trackProperties = {
  btnText: "Get started FREE",
  btnUrl: null,
  featureHighlightSectionVisible: true,

  mainImgDesktop: {
    url: "/images/webp/tool-tracking.webp",
  },
  mainImgMobile: {
    url: "/images/webp/tool-tracking.webp",
  },
  mobileBtn: "Download FREE App",
  subTitle:
    "Contractor+ is the first CRM to offer property profiles — so you can see what’s been done, what’s next, and who did it.",
  title: "View every property like you do your customers",
};
const ToolAndTipEquipmentPage = () => {
  return (
    <main className="overflow-hidden">
      <AutomatedClientHero
        hero={{
          heroTitle:
            "Finally, a way to track and audit every tool across every job",
          heroDescription:
            "One system to tag, assign, scan and recover every asset.",
        }}
        featureTag="Tool Inventory Software"
        heroImg="/images/png/tool-and-equipment.png"
        slug="crm"
        commonData={dealflowhero}
        isBlurBg={false}
        imgClass="-mb-16 mt-10 md:mb-0 md:-mt-1 max-w-[800px]"
      />
      <TrustedService
        reviews={clientReviews}
        slug="crm"
        apiData={false}
        className="lg:-mt-24"
      />
      <SwitchingTool switchingTool={toolManagingData} />
      {/* <RealTimeServiceConnector theme="dark" fieldService={hello} /> */}
      <div className="bg-white">
        <TrackProperties
          ncc={"No credit card required"}
          trackProperties={trackProperties}
        />
        <AutmateDoContacts
          ncc={"No credit card required"}
          trackProperties={propertyCRMSection}
        />
        <ContractorStartMain />
        <KindAdorable
          slug={"estimate"}
          kindAdorable={automate_comparisonData}
        />
        <TeamsUsingContractor data={automateneverlookBackData} slug={""} />
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
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            className="absolute top-[10px] left-0 z-10 hidden max-h-[800px] w-full max-w-[800px] object-center sm:block"
            src={"/images/webp/hero-red-line.webp"}
            alt="hero-red-line"
          />

          <CrmService
            createBtn={"Get started FREE"}
            mobileBtn={"Download FREE App"}
            ncc={"No credit card required"}
            data={automatedformData}
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
          faq={automatedFaq}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
        />
      </div>

      <BlogPosts
        data={blogList}
        blogs={automatedHeadingData}
        className="mt-7 mb-20 md:mt-9"
        classMaxwidth="max-w-[90%] xs:max-w-[98%] sm:max-w-full"
      />
    </main>
  );
};

export default ToolAndTipEquipmentPage;
