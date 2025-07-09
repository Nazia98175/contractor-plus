"use client";
import {
  contractorIndustry,
  dealReviews2,
  estimateFaq,
  estimateSoftwareData,
  estimaticCardData,
  estimaticReviews,
} from "@/components/common/Helper";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import EstimaticHero from "@/components/estimaticAi/EstimaticHero";
import OneGetsSet from "@/components/estimaticAi/OneGetsSet";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";

const EstimaticAiPage = () => {
  return (
    <main className="overflow-hidden">
      <EstimaticHero />
      {/* <OurBlogs /> */}
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

      <Faq
        faq={estimateFaq}
        classNameAnswer="pt-1"
        mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
        TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
      />
    </main>
  );
};

export default EstimaticAiPage;
