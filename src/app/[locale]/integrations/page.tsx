import CommonFormField from "@/components/common/CommonFormField";
import { platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import IntegrationCards from "@/components/integration/IntegrationCards";
import IntegrationHero from "@/components/integration/IntegrationHero";
import {
  getAllIntegration,
  getIntegrationList,
} from "@/services/integation/getIntegrationData";

export const metadata = {
  title: "Material Trends: Track Prices & Shortages of Different Industries",
  description:
    "Get updates on material trends, pricing shifts, and supply chain alerts affecting contractors this year.",
};
const IntegrationPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const [integrations, integrationList] = await Promise.all([
    getAllIntegration(locale),
    getIntegrationList(locale),
  ]);
  console.log(integrations, "integrations data");
  return (
    <main id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-fetures"
        className="relative opacity-0"
      >
        <div className="relative mx-auto w-full overflow-hidden px-2">
          <IntegrationHero integrationList={integrationList} />
          <IntegrationCards
            integrationList={integrationList}
            integrations={integrations}
          />
        </div>
      </div>
      <div className="no-scrollbar relative overflow-x-hidden">
        <div className="mt-[71px] px-2 pb-12 lg:pb-9 xl:pb-12">
          <CommonFormField
            variantBtn="primary"
            variant="default"
            title={integrationList?.emailSignupSection?.title ?? ""}
            subTitle={integrationList?.emailSignupSection?.subTitle ?? ""}
            placeholder={integrationList?.emailSignupSection?.placeholder ?? ""}
            createBtn={"Get Started Free"}
            mobileBtn={"Download FREE App"}
            ncc={"No credit card required"}
          />
        </div>
        <TrustBar platforms={platforms} className="pb-[91px] sm:pb-10" />
      </div>
    </main>
  );
};

export default IntegrationPage;
