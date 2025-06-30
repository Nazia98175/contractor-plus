import BlogDetailHero from "@/components/blogdetails/BlogDetailHero";
import ContractorArticles from "@/components/blogdetails/ContractorArticles";
import TravelBlog from "@/components/blogdetails/TravelBlog";
import { platforms } from "@/components/common/Helper";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import TrustBarHvca from "@/components/industry/hvca/TrustBarHvca";
import React from "react";

export const metadata = {
  title: "Contractor Plus - Blogs Details",
  description:
    "Contractor+ connects every function of your business so it finally all works in sync.",
};
const BlogDetails = () => {
  return (
    <>
      <main className="bg-white">
        <BlogDetailHero />
        <TravelBlog />
      </main>
      <CrmSercive
        data={{
          title: "The only OS for build and service contractors.",
          placeholder: "Enter your email",
        }}
        ncc="No credit card required"
        createBtn="Get started FREE"
        mobileBtn="Get Started"
        showClouds={true}
        className="w-full max-w-[646px]"
        variant="primary"
        variantBtn="dark"
      />
      <TrustBarHvca platforms={platforms} className="pb-[148px] xl:pb-20" />
      <ContractorArticles />
    </>
  );
};

export default BlogDetails;
