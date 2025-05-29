import Header from "@/components/common/Header";
import EraOfSoftware from "@/components/hvca/EraOfSoftware";
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
        {/* <Whatever
            whateverOperation={homePageContent?.data?.whateverOperation}
          /> */}
      </main>
    </>
  );
};

export default page;
