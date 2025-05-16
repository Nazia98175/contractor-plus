import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
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
import React from "react";

const CrmBussinessPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <TrustedService />
      <SwitchingTool />
      <OnScroll />
      <FieldService />
      <TrackProperties />
      <KindAdorable />
      <TeamsUsingContractor />
      <ThousandsReviews />
      <Faq />
      <BlogPosts />
      <Footer />
    </>
  );
};

export default CrmBussinessPage;
