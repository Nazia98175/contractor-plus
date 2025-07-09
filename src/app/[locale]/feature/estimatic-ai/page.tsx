import {
  contractorIndustry,
  estimaticCardData,
  estimaticReviews,
  realTimeServiceSliderData,
  runWithContractorData,
} from "@/components/common/Helper";
import FieldService from "@/components/crmbussiness/FieldService";
import TrustedService from "@/components/crmbussiness/TrustedService";
import AiEstimateSoftware from "@/components/estimaticAi/AiEstimateSoftware";
import EstimaticHero from "@/components/estimaticAi/EstimaticHero";
import OneGetsSet from "@/components/estimaticAi/OneGetsSet";
import RealTimeServiceConnector from "@/components/field-services/RealTimeServiceConnector";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";

const EstimaticAiPage = () => {
  return (
    <main className="overflow-hidden">
      <EstimaticHero />
      {/* <OurBlogs /> */}
      <TrustedService reviews={estimaticReviews} slug="crm" />
      <RunWithContractor
        kindAdorable={runWithContractorData}
        variant="dark"
        icon={true}
      />
      {/* <AiEstimateSoftware runWithContractorData={runWithContractorData} /> */}
      <OneGetsSet />
      <FieldService
        fieldService={estimaticCardData}
        theme="dark"
        slug="estimatic"
        apiData={false}
        mainClassName="text-center"
      />
      <ContractorIndustry contractorIndustry={contractorIndustry} />
    </main>
  );
};

export default EstimaticAiPage;
