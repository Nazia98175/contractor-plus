import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { FooterRedLineIcon } from "@/components/common/Icons";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import Hero from "@/components/crmbussiness/Hero";
import KindAdorable from "@/components/crmbussiness/KindAdorable";
import OnScroll from "@/components/crmbussiness/OnScroll";
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
        <Hero />
        <TrustedService />
        <SwitchingTool />
      </div>
      <OnScroll />
      <FieldService />
      <TrackProperties />
      <KindAdorable />
      <TeamsUsingContractor />
      <ThousandsReviews />
      <div className="relative">
        {/* Cloud Layer 1 */}
        <div className="absolute -top-[30%] left-0 hidden lg:flex w-full h-[267px] z-10 pointer-events-none">
          <div className="absolute w-full h-full animate-cloud-layer-1 z-10 opacity-100">
            <img
              src="/images/webp/claud-2.webp"
              alt="Cloud Layer 1"
              className="h-full object-contain w-full"
            />
          </div>
          <div className="top-0 bg-white rounded-2xl h-2/4 blur-md w-28"></div>
          {/* Cloud Layer 2 */}
          <div className="absolute w-full h-full animate-cloud-layer-2 opacity-100">
            <img
              src="/images/webp/claud-2.webp"
              alt="Cloud Layer 2"
              className="h-full object-contain w-full"
            />
          </div>
        </div>
        <CrmSercive />
        <TrustBar />
      </div>
      <Faq />
      <BlogPosts />
      <Footer />
    </main>
  );
};

export default CrmBussinessPage;
