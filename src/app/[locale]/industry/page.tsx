import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import TrustBar from "@/components/homepage/TrustBar";
import Faq from "@/components/industry/Faq";
import IntegratesSeamlessly from "@/components/industry/IntegratesSeamlessly";
import KeyTools from "@/components/industry/KeyTools";
import ProvenSystems from "@/components/industry/ProvenSystems";
import ServiceSoftware from "@/components/industry/ServiceSoftware";
import SoftwareSolutions from "@/components/industry/SoftwareSolutions";
import TakeControl from "@/components/industry/TakeControl";
import Trusted from "@/components/industry/Trusted";
import WhyChooseUs from "@/components/industry/WhyChooseUs";
import React from "react";

const IndusryPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <TrustBar />
      <SoftwareSolutions />
      <ServiceSoftware />
      <WhyChooseUs />
      <TakeControl />
      <ProvenSystems />
      <KeyTools />
      <Trusted />
      <Faq />
      <IntegratesSeamlessly />
      {/* <Footer /> */}
    </div>
  );
};

export default IndusryPage;
