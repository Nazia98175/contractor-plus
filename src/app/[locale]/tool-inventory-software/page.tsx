import AutmateDoContacts from "@/components/automatedclientagreements/AutmateDoContacts";
import AutomatedClientHero from "@/components/automatedclientagreements/AutomatedClientHero";
import DualSlider from "@/components/common/DualSlider";
import {
  automatedCardData,
  automatedFaq,
  automatedformData,
  automatedHeadingData,
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
import {
  neverLookBackToolData,
  tool_comparisonData,
  toolEquipmentTracking,
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

import Image from "next/image";

export const metadata = {
  title: "Tool Inventory Software to Track Equipment | Contractor+",
  description:
    "Log tools, assign gear to jobs, and reduce loss. Contractor+ keeps your inventory organized and up to date.",
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
    <main className="relative">
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
      <TrustedService reviews={clientReviews} slug="crm" apiData={false} />
      <SwitchingTool switchingTool={toolManagingData} />
      <DualSlider sliderData={toolEquipmentTracking.solutionCards} />
      {/* <RealTimeServiceConnector theme="dark" fieldService={hello} /> */}
      <div className="relative bg-white">
        <TrackProperties
          ncc={"No credit card required"}
          trackProperties={trackProperties}
        />
        <AutmateDoContacts
          ncc={"No credit card required"}
          trackProperties={propertyCRMSection}
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
