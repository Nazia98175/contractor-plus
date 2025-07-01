import BlogDetailHero from "@/components/blogdetails/BlogDetailHero";
import ContractorArticles from "@/components/blogdetails/ContractorArticles";
import TravelBlog from "@/components/blogdetails/TravelBlog";
import CloudsAnimation from "@/components/common/CloudsAnimation";
import { platforms } from "@/components/common/Helper";
import { FooterRedLineMobileIcon } from "@/components/common/Icons";
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
    <main className="overflow-hidden">
      <main className="bg-white">
        <BlogDetailHero />
        <TravelBlog />
      </main>
      <div className="relative">
        <CrmSercive
          data={{
            title: "The only OS for build and service contractors.",
            placeholder: "Enter your email",
          }}
          ncc="No credit card required"
          createBtn="Get started FREE"
          mobileBtn="Download Free App"
          showClouds={true}
          className="w-full max-w-[646px] pt-12"
          variant="primary"
          variantBtn="dark"
        />
        <TrustBarHvca platforms={platforms} className="pb-[104px] xl:pb-20" />
        <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] -left-[1%] block max-h-[994px] w-full max-w-[840px]" />
      </div>

      <ContractorArticles />
    </main>
  );
};

export default BlogDetails;
