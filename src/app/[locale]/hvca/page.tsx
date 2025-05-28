import { blackPlatforms } from "@/components/common/Helper";
import TrustBar from "@/components/homepage/TrustBar";
import Whatever from "@/components/homepage/Whatever";
import HvcaHero from "@/components/hvca/HvcaHero";
import HvcaSoftware from "@/components/hvca/HvcaSoftware";

const page = () => {
  return (
    <main className="bg-white">
      <HvcaHero />
      <TrustBar platforms={blackPlatforms}  />
      <HvcaSoftware />
      {/* <Whatever
            whateverOperation={homePageContent?.data?.whateverOperation}
          /> */}
          
    </main>
  );
};

export default page;
