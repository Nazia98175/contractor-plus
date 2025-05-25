import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CrmHero from "@/components/crmbussiness/CrmHero";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import KindAdorable from "@/components/crmbussiness/KindAdorable";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TeamsUsingContractor from "@/components/crmbussiness/TeamsUsingContractor";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrackProperties from "@/components/crmbussiness/TrackProperties";
import TrustedService from "@/components/crmbussiness/TrustedService";
import TrustBar from "@/components/homepage/TrustBar";

const CrmBussinessPage = () => {
  return (
    <main>
      <Header />
      <div className="black-bg">
        <CrmHero />
        <TrustedService />
        <SwitchingTool />
      </div>
      <FieldService />
      <TrackProperties />
      <KindAdorable />
      <TeamsUsingContractor />
      <ThousandsReviews />
      <div className="relative w-full">
        <CrmSercive />
        {/* Cloud Layer 1 */}
        <div className="absolute -top-[33%] left-0 flex w-full h-[250px] z-0 pointer-events-none">
          <div className="bg-white h-[58%] w-full right-0 top-0 absolute blur-sm"></div>
          <div className="absolute w-full h-full animate-cloud-layer-1 opacity-100">
            <img
              src="/images/webp/claud-2.webp"
              alt="Cloud Layer 1"
              className="h-full object-cover w-full"
            />
          </div>

          {/* Cloud Layer 2 */}
          <div className="absolute w-full h-full animate-cloud-layer-2 opacity-100">
            <img
              src="/images/webp/claud-2.webp"
              alt="Cloud Layer 2"
              className="h-full object-cover w-full"
            />
          </div>
        </div>
      </div>

      <TrustBar />
      <Faq />
      <BlogPosts />
      {/* <Footer /> */}
    </main>
  );
};

export default CrmBussinessPage;
