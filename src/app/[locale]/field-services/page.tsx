import { platforms } from "@/components/common/Helper";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import FieldServicesHero from "@/components/field-services/FieldServicesHero";
import FreedomToWork from "@/components/field-services/FreedomToWork";
import GoingFieldSevices from "@/components/field-services/GoingFieldSevices";
import NeverLookBack from "@/components/field-services/NeverLookBack";
import RealTimeServiceConnector from "@/components/field-services/RealTimeServiceConnector";
import ServiceContractorsMarquee from "@/components/field-services/ServiceContractorsMarquee";
import TimmingEffect from "@/components/field-services/TimmingEffect";
import AwardBadges from "@/components/hvca/AwardBadge";
import EraOfSoftware from "@/components/hvca/EraOfSoftware";
import HvacFaq from "@/components/hvca/HvacFaq";
import HvacReview from "@/components/hvca/HvacReview";
import HvacSoftware from "@/components/hvca/HvacSoftware";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import WantingMore from "@/components/hvca/WantingMore";
export const metadata = {
  title: "Contractor + - Field Services",
  description:
    "One command center to visualize and run your entire field operation",
};
const FieldServicesPage = () => {
  return (
    <>
      <FieldServicesHero />
      <ServiceContractorsMarquee />
      <GoingFieldSevices />
      <RealTimeServiceConnector />
      <FreedomToWork />
      <TimmingEffect />
      <div className="relative overflow-hidden">
        <NeverLookBack />
        <HvacReview />
      </div>
      {/* <HvacSoftwareService /> */}
      <TrustBarHvca platforms={platforms} />
      {/* <Whatever whateverOperation={homePageContent?.data?.whateverOperation} /> */}
      <HvacFaq faq={[]} />
      <BlogPosts className="relative z-20 bg-white" variant="secondary" />
    </>
  );
};

export default FieldServicesPage;
