import { pricingfaqitems } from "@/components/common/Helper";
import Faq from "@/components/crmbussiness/Faq";
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
          classHeadingMaxWidth="w-fit mx-auto"
          variant="muted"
        />
      </div>
    </main>
  );
};

export default PricingPage;
