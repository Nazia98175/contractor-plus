import AutmateDoContacts from "@/components/automatedclientagreements/AutmateDoContacts";
import AutomatedClientHero from "@/components/automatedclientagreements/AutomatedClientHero";
import {
  automatedCardData,
  blogList,
  clientReviews,
  dealflowhero,
  dealReviews2,
  mileageFaq,
  mileageformData,
  platforms,
} from "@/components/common/Helper";
import {
  FooterRedLineIcon,
  FooterRedLineMobileIcon,
} from "@/components/common/Icons";
import OverlapCardMobileViewChild from "@/components/common/OverlapCardMobileViewChild";
import TrustBar from "@/components/common/TrustBar";
import {
  mileage_comparisonData,
  mileageActuallyWorkdata,
  mileageHeadingData,
  mileageListData,
  mileageManagingData,
  mileageTrackingData,
  neverLookBackMileageData,
} from "@/components/common/Utils";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
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
  title: "Mileage Tracking Software for Contractors | Contractor+",
  description:
    "Track miles while working in the field. Contractor+ logs your travel automatically so you can manage costs and records easily.",
};
const MileageTrackingPage = () => {
  return (
    <main className="">
      <AutomatedClientHero
        hero={{
          heroTitle: "Tap once to track every mile. Reimburse with confidence.",
          heroDescription:
            "Stupidly simple trips, IRS-friendly reports, and zero hardware.",
        }}
        featureTag="Mileage Tracking Software For Contractors"
        heroImg="/images/webp/mileage-tracking-hero.webp"
        slug="crm"
        commonData={dealflowhero}
        isBlurBg={false}
        imgClass="max-w-[700px] w-full mt-16 xl:-mt-14"
      />
      <TrustedService
        reviews={clientReviews}
        slug="crm"
        apiData={false}
        className="-mt-5"
      />
      <SwitchingTool switchingTool={mileageManagingData} className="mb-16" />
      <div className="relative">
        <FieldService
          fieldService={mileageActuallyWorkdata}
          theme="dark"
          slug="estimateTheme"
          apiData={true}
          mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto"
        />
      </div>
      <div className="block md:hidden">
        <OverlapCardMobileViewChild
          fieldService={mileageActuallyWorkdata}
          theme="dark"
          slug="estimateTheme"
          mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto"
        />
      </div>
      <div className="relative bg-white pt-16 xl:pt-24">
        <TrackProperties
          ncc={"No credit card required"}
          trackProperties={mileageTrackingData}
        />
        <AutmateDoContacts
          ncc={"No credit card required"}
          trackProperties={mileageListData}
        />
        <ManageEveryTool cardsData={automatedCardData.cardsDetail} />
        <KindAdorable slug={"estimate"} kindAdorable={mileage_comparisonData} />
        <TeamsUsingContractor data={neverLookBackMileageData} slug={""} />
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
            data={mileageformData}
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
          faq={mileageFaq}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
        />
      </div>
      <BlogPosts
        data={blogList}
        blogs={mileageHeadingData}
        className="mt-7 mb-20 md:mt-9"
        classMaxwidth="max-w-[90%] xs:max-w-[98%] sm:max-w-full"
      />
    </main>
  );
};
export default MileageTrackingPage;
