import CommonFormField from "@/components/common/CommonFormField";
import { blackPlatforms, pricingfaqitems } from "@/components/common/Helper";
import Faq from "@/components/crmbussiness/Faq";
import TrustBarHvca from "@/components/industry/hvca/TrustBarHvca";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import CompleteFeatureList from "@/components/pricing/CompleteFeatureList";
import Plans from "@/components/pricing/Plans";
import PricingHero from "@/components/pricing/PricingHero";

const PricingPage = () => {
  return (
    <main className="font-myriad overflow-hidden">
      <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-contain bg-no-repeat sm:bg-cover">
        <PricingHero />
      </div>
      <div className="bg-white">
        <Plans />
        <CompleteFeatureList />
        <ComparisonTable />
        <Faq
          mainContainerclassName="pb-16 z-20 px-2"
          faq={{
            title: "What contractors want to know ",
            sub_title: "Frequently asked questions",
            faq: pricingfaqitems,
          }}
          classNameAnswer="pt-1"
          TittleClassName="w-fit mx-auto "
          variant="muted"
          headingVariant="primary"
        />
        <div className="relative overflow-x-hidden">
          <div className="px-2 pb-12 lg:pb-9">
            <CommonFormField
              variantBtn="primary"
              variant="white"
              title={"Start using Contractor+ for free"}
              sub_title={"Try it out now. Upgrade when you're ready."}
              placeholder={"Your Email"}
              createBtn={"Get Started Free"}
              mobileBtn={"Download FREE App"}
              ncc={"No credit card required"}
            />
          </div>
          <TrustBarHvca
            platforms={blackPlatforms}
            className="pb-[91px] xl:pb-10"
          />
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
