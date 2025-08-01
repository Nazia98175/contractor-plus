import CommonFormField from "@/components/common/CommonFormField";
import { platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import IntegrationCards from "@/components/integration/IntegrationCards";

import IntegrationHero from "@/components/integration/IntegrationHero";

const IntegrationPage = () => {
  return (
    <main>
      <IntegrationHero />
      <IntegrationCards />
      <div className="relative overflow-x-hidden">
        <div className="no-scrollbar mt-[71px] px-2 pb-12 lg:pb-9 xl:pb-12">
          <CommonFormField
            variantBtn="primary"
            variant="default"
            title={"Are you ready to level up your contracting business?"}
            subTitle={
              "Start free. Stay free. Upgrade to get the full operating system.  "
            }
            placeholder={"Your Email"}
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
