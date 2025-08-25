import AutmateDoContacts from "@/components/automatedclientagreements/AutmateDoContacts";
import AutomatedClientHero from "@/components/automatedclientagreements/AutomatedClientHero";
import ContractorStartMain from "@/components/automatedclientagreements/ContractorStartMain";
import {
  automate_comparisonData,
  automate_ControlData,
  automatedCardData,
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
  propertyCRMSection2,
} from "@/components/common/Helper";
import {
  FooterRedLineIcon,
  FooterRedLineMobileIcon,
} from "@/components/common/Icons";
import OverlapCardMobileViewChild from "@/components/common/OverlapCardMobileViewChild";
import TrustBar from "@/components/common/TrustBar";
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
import Image from "next/image";

export const metadata = {
  title: "Contractor Client Agreement Made Simple | Contractor+",
  description:
    "One automated system to create, sign, amend, and store every client contract. We manage every contract from start to finish.",
};
const ContractorClientAgreementPage = () => {
  return (
    <>
      <AutomatedClientHero
        hero={{
          heroTitle:
            "Finally, a way to track and automate each stage of client agreements",
          heroDescription:
            "One automated system to create, sign, amend, and store every client contract.",
        }}
        featureTag="Automated Client Agreements"
        heroImg="/images/webp/automated-client-hero.webp"
        slug="crm"
        commonData={dealflowhero}
      />
      <div className="pb-6">
        <TrustedService reviews={clientReviews} slug="crm" apiData={false} />
      </div>
      <SwitchingTool switchingTool={automate_ControlData} />
      <div className="relative hidden md:block">
        <FieldService
          fieldService={automatedCardData}
          theme="dark"
          slug="estimateTheme"
          mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto"
        />
      </div>
      <div className="mb-12 block md:hidden">
        <OverlapCardMobileViewChild
          fieldService={automatedCardData}
          theme="dark"
          slug="estimateTheme"
          mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto "
        />
      </div>
      <div className="mt-16 bg-white sm:mt-0">
        <TrackProperties
          ncc={"No credit card required"}
          trackProperties={propertyCRMSection}
          desktopImgUrl="/images/webp/client-agriment.webp"
          mobileImgUrl="/images/png/client-agriment-mobile.png"
        />
        <AutmateDoContacts
          ncc={"No credit card required"}
          trackProperties={propertyCRMSection2}
        />
        <ContractorStartMain cardsData={automatedCardData.cardsDetail} />
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
    </>
  );
};

export default ContractorClientAgreementPage;
