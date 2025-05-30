import Header from "@/components/common/Header";
import AwardBadges from "@/components/hvca/AwardBadge";
import EraOfSoftware from "@/components/hvca/EraOfSoftware";
import HvcaFaq from "@/components/hvca/HvcaFaq";
import HvcaHero from "@/components/hvca/HvcaHero";
import HvcaSoftware from "@/components/hvca/HvcaSoftware";
import ServiceContractor from "@/components/hvca/ServiceContractor";
import WantingMore from "@/components/hvca/WantingMore";

const page = () => {
  return (
    <>
      <Header />
      <main className="bg-white">
        <HvcaHero />
        <ServiceContractor />
        <HvcaSoftware />
        <WantingMore />
        <EraOfSoftware />
        <AwardBadges />
        {/* <Whatever
            whateverOperation={homePageContent?.data?.whateverOperation}
          /> */}
        <HvcaFaq faq={[]} />
      </main>
    </>
  );
};

export default page;
