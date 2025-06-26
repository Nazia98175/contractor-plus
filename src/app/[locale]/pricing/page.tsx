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
          TittleClassName="w-fit mx-auto gradient-text-2"
          variant="muted"
        />
        <div className="relative overflow-x-hidden">
          <div className="px-2 pt-[57px] pb-12 lg:pt-[90px] lg:pb-[65px] xl:pt-[113px]">
            <CommonFormField
              variant="secondary"
              title={"This is what HVAC software should have been all along"}
              sub_title={"Start using Contractor+ FREE. You won’t look back."}
              placeholder={"Your Email"}
              createBtn={"Get Started Free"}
              mobileBtn={"Download FREE App"}
              ncc={"No credit card required"}
            />
          </div>
          <TrustBarHvca
            platforms={blackPlatforms}
            className="pb-[148px] xl:pb-20"
          />
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
