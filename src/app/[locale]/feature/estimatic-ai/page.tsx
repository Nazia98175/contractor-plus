"use client";
import {
  contractorIndustry,
  estimateSoftwareData,
  estimaticCardData,
  estimaticReviews,
} from "@/components/common/Helper";
import FieldService from "@/components/crmbussiness/FieldService";
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
    </main>
  );
};

export default EstimaticAiPage;
