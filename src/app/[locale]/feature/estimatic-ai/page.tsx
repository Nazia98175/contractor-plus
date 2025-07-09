import {
  blogheading,
  blogList,
  contractorIndustry,
  dealReviews2,
  estimateFaq,
  estimateSoftwareData,
  estimaticCardData,
  estimaticReviews,
  formData,
  platforms,
} from "@/components/common/Helper";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import EstimaticHero from "@/components/estimaticAi/EstimaticHero";
import OneGetsSet from "@/components/estimaticAi/OneGetsSet";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";
import TrustBarHvca from "@/components/industry/hvca/TrustBarHvca";

const EstimaticAiPage = () => {
  return (
    <main className="overflow-hidden">
      <EstimaticHero />
      <TrustedService reviews={estimaticReviews} slug="crm" />
      <RunWithContractor
        kindAdorable={estimateSoftwareData}
        variant="dark"
        icon={true}
      />
      <OneGetsSet />
      <FieldService
        fieldService={estimaticCardData}
        theme="dark"
        slug="estimateTheme"
        apiData={false}
        mainClassName="text-center"
      />
      <ContractorIndustry
        contractorIndustry={{
          ...contractorIndustry,
          url: contractorIndustry.url ?? "",
          btnText: contractorIndustry.btnText ?? "",
        }}
      />
      <ThousandsReviews
        data={dealReviews2}
        reviews={dealReviews2.reviews}
        variant="secondary"
      />
      <CrmSercive
        createBtn={"Get started FREE"}
        mobileBtn={"Download FREE App"}
        ncc={"No credit card required"}
        data={formData}
        showClouds={false}
        className="xs:max-w-[88%] max-w-[87%] sm:max-w-[780px]"
        variantBtn="dark"
      />{" "}
      <TrustBarHvca
        platforms={platforms}
        className="mx-auto w-full max-w-[889px]"
      />
      <Faq
        faq={estimateFaq}
        classNameAnswer="pt-1"
        mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
        TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
      />
      <BlogPosts
        data={blogheading}
        blogs={blogList}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />
    </main>
  );
};

export default EstimaticAiPage;
