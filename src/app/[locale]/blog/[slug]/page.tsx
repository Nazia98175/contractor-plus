import BlogDetailHero from "@/components/blogdetails/BlogDetailHero";
import BlogsContent from "@/components/blogdetails/BlogsContent";
import ContractorArticles from "@/components/blogdetails/ContractorArticles";
import { platforms } from "@/components/common/Helper";
import { FooterRedLineMobileIcon } from "@/components/common/Icons";
import TrustBar from "@/components/common/TrustBar";
import IndustryService from "@/components/crmbussiness/IndustryService";
import {
  getAllBlogs,
  getBlogDataBySlug,
  getBlogsDetails,
} from "@/services/blog/getBlogData";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Contractor Plus - Blogs Details",
  description:
    "Contractor+ connects every function of your business so it finally all works in sync.",
};

export const generateStaticParams = async () => {
  const blogs = await getAllBlogs("en");
  return blogs.map((blog: { id: number; blogUrl: string }) => ({
    locale: "en",
    slug: blog.blogUrl.toString(),
  }));
};

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) => {
  const { locale, slug } = await params;
  const [blogData, blogsList, allBlogs] = await Promise.all([
    getBlogDataBySlug(locale, slug),
    getBlogsDetails(locale),
    getAllBlogs(locale),
  ]);

  if (!blogData) {
    notFound();
  }
  return (
    <main className="overflow-hidden">
      <div className="bg-white">
        <BlogDetailHero blogData={blogData} />
        <BlogsContent blogData={blogData} blogsList={blogsList} />
      </div>
      <div className="relative overflow-hidden">
        <IndustryService
          data={{
            title: `${blogsList?.emailSignupSection?.title}`,
            placeholder: `${blogsList?.emailSignupSection?.placeholder}`,
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

      <ContractorArticles blogList={blogsList} blogData={allBlogs} />
    </main>
  );
};

export default BlogDetails;
