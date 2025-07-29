import {
  blogList,
  dealflowhero,
  dealReviews,
  dealReviews2,
  neverLookBackData2,
  platforms,
  property_profiles_comparisonData2,
  property_profiles_ControlData,
  propertyaddressContractorData,
  propertyCardData,
  propertyFaq,
  propertyFeatureData,
  propertyprofilesformData2,
  propertyprofilesHeadingData,
} from "@/components/common/Helper";
import {
  FooterRedLineIcon,
  FooterRedLineMobileIcon,
} from "@/components/common/Icons";
import TrustBar from "@/components/common/TrustBar";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CrmHero from "@/components/crmbussiness/CrmHero";
import CrmService from "@/components/crmbussiness/CrmSercive";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import KindAdorable from "@/components/crmbussiness/KindAdorable";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TeamsUsingContractor from "@/components/crmbussiness/TeamsUsingContractor";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import TrackProfiles from "@/components/propertyprofiles/TrackProfiles";
import Image from "next/image";

export const metadata = {
  title:
    "Know the full story on every property you manage or service — instantly.",
  description:
    "Contractor+ is the first to offer a living, breathing history for each property that self-updates with every job, document, & email.",
};
const page = () => {
  return (
    <div>
      <CrmHero
        hero={{
          heroTitle:
            "Know the full story on every property you manage or service — instantly.",
          heroDescription:
            "Contractor+ is the first to offer a living, breathing history for each property that self-updates with every job, document, & email.",
        }}
        featureTag="Property Management CRM"
        heroImg="/images/webp/property-profiles.webp"
        slug="crm"
        commonData={dealflowhero}
        apiData={false}
      />
      <div className="pb-6">
        <TrustedService reviews={dealReviews} slug="crm" apiData={false} />
      </div>
      <SwitchingTool switchingTool={property_profiles_ControlData} />
      <FieldService
        fieldService={propertyCardData}
        theme="dark"
        slug="estimateTheme"
        apiData={false}
        mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto"
      />
      <div className="bg-white">
        <TrackProfiles ncc="" trackProperties={propertyFeatureData} />
        <RunWithContractor kindAdorable={propertyaddressContractorData} />
        <KindAdorable
          slug={"estimate"}
          kindAdorable={property_profiles_comparisonData2}
        />
        <TeamsUsingContractor data={neverLookBackData2} slug={""} />
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
            data={propertyprofilesformData2}
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
          faq={propertyFaq}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
        />
      </div>

      <BlogPosts
        data={blogList}
        blogs={propertyprofilesHeadingData}
        className="mt-7 mb-20 md:mt-9"
        classMaxwidth="max-w-[90%] xs:max-w-[98%] sm:max-w-full"
      />
    </div>
  );
};

export default page;
