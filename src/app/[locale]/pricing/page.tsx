import { OurReviewList } from "@/components/common/Helper";
import OurReviews from "@/components/homepage/OurReviews";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import Plans from "@/components/pricing/Plans";

import PricingHero from "@/components/pricing/PricingHero";

const PricingPage = () => {
  return (
    <main className="font-myriad overflow-hidden">
      <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-cover">
        <PricingHero />
      </div>
      <div className="bg-white">
        <Plans />
        {/* <OurReviews reviewsList={OurReviewList} reviews={"hello"} /> */}
        <ComparisonTable />
      </div>
    </main>
  );
};

export default PricingPage;
