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
        <div className="relative">
          <div className="bg-kuroiBlack absolute bottom-[15px] left-0 z-[888] hidden h-[60px] w-full blur-[12.5px] lg:block"></div>
          <img
            className="absolute bottom-[-100px] left-0 z-[888] hidden h-[150px] w-full md:block"
            src="/images/webp/hvca-clould.webp"
            alt=""
          />
          <img
            className="absolute bottom-[-87px] left-0 z-[888] block h-[100px] w-full md:hidden"
            src="/images/webp/hvca-mobile-could.webp"
            alt=""
          />
          <HvcaHero />
        </div>
        <ServiceContractor />
        <HvcaSoftware />
        <WantingMore />
        <EraOfSoftware />
        <AwardBadges />
        {/* <Whatever
            whateverOperation={homePageContent?.data?.whateverOperation}
          /> */}
      </main>
      <HvcaFaq faq={[]} />
    </>
  );
};

export default page;
