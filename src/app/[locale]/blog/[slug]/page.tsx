import BlogDetailHero from "@/components/blogdetails/BlogDetailHero";
import ContractorArticles from "@/components/blogdetails/ContractorArticles";
import TravelBlog from "@/components/blogdetails/TravelBlog";
import { platforms } from "@/components/common/Helper";
import { FooterRedLineMobileIcon } from "@/components/common/Icons";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import TrustBar from "@/components/common/TrustBar";

export const metadata = {
  title: "Contractor Plus - Blogs Details",
  description:
    "Contractor+ connects every function of your business so it finally all works in sync.",
};
const BlogDetails = () => {
  return (
    <main id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-blog"
        className="relative bg-white opacity-0"
      >
        <BlogDetailHero />
        <TravelBlog />
      </div>
      <div className="relative overflow-hidden">
        <CrmSercive
          data={{
            title: "The only OS for build and service contractors.",
            placeholder: "Enter your email",
          }}
          ncc="No credit card required"
          createBtn="Get started FREE"
          mobileBtn="Download Free App"
          showClouds={true}
          className="w-full max-w-[646px] pt-14"
          variant="primary"
          variantBtn="dark"
        />
        <TrustBar platforms={platforms} className="z-20 pb-[104px] xl:pb-20" />
        <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] -left-[1%] z-0 block max-h-[994px] w-full max-w-[840px]" />
      </div>

      <ContractorArticles />
    </main>
  );
};

export default BlogDetails;
