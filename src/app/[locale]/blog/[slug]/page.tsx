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
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getIntegrationDetails } from "@/services/integation/getIntegrationData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const { locale, slug } = await params;
  const page = await getSeoDataCommon(
    `blogs?locale=${locale}&filters[blogUrl][$eq]=${slug}&populate[seoMetaData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: `/blog/${slug}` });
}

export const generateStaticParams = async () => {
  try {
    const blogs = await getAllBlogs("en", true);

    const locales = ["en", "fr", "es"];
    const params = [];

    if (Array.isArray(blogs) && blogs.length > 0) {
      for (const locale of locales) {
        for (const blog of blogs) {
          params.push({
            locale,
            slug: blog.blogUrl.toString(),
          });
        }
      }
    }

    return params;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
};

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) => {
  const { locale, slug } = await params;
  const [blogData, blogsList, allBlogs, appfeatures] = await Promise.all([
    getBlogDataBySlug(locale, slug),
    getBlogsDetails(locale),
    getAllBlogs(locale),
    getIntegrationDetails(locale),
  ]);

  if (!blogData) {
    notFound();
  }

  return (
    <main>
      <div className="bg-white">
        <BlogDetailHero blogData={blogData} />
        <BlogsContent
          blogData={blogData}
          appfeatures={appfeatures}
          blogsList={blogsList}
        />
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
        <ContractorArticles blogList={blogsList} blogData={allBlogs} />
      </div>
    </main>
  );
};

export default BlogDetails;
