import BlogPage from "@/components/blog/BlogPage";
import {
  getAllBlogs,
  getBlogsDetails,
  getBlogsList,
} from "@/services/blog/getBlogData";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getAllIndustries } from "@/services/industries/getIndustryPageData";
import { generateSeoMetadataEvent } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `blog-list?locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetadataEvent({ page, slug: resolvedParams.slug });
}
const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const [blogsData, blogsFields, blogsList, industries] = await Promise.all([
    getAllBlogs(locale),
    getBlogsDetails(locale),
    getBlogsList(locale),
    getAllIndustries(locale),
  ]);

  return (
    <BlogPage
      blogsData={blogsData}
      blogsFields={blogsFields}
      blogsList={blogsList}
      industries={industries}
    />
  );
};

export default page;
