import {
  estimaticCardData,
  estimaticReviews,
} from "@/components/common/Helper";
import FieldService from "@/components/crmbussiness/FieldService";
import TrustedService from "@/components/crmbussiness/TrustedService";
import EstimaticHero from "@/components/estimaticAi/EstimaticHero";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";

const EstimaticAiPage = () => {
  return (
    <main className="overflow-hidden">
      <EstimaticHero />
      {/* <OurBlogs /> */}
      <TrustedService reviews={estimaticReviews} slug="crm" />
      {/* <FieldService
        fieldService={estimaticCardData}
        theme="dark"
        slug="estimatic"
        apiData={false}
        mainClassName="text-center"
      /> */}
      {/* <ContractorIndustry contractorIndustry={indus} /> */}
    </main>
  );
};

export default EstimaticAiPage;
