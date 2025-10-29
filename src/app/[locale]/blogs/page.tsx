import BlogPage from "@/components/blog/BlogPage";
import { getAllBlogs, getBlogsList } from "@/services/blog/getBlogData";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getAllIndustries } from "@/services/industries/getIndustryPageData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `blog-list?locale=${resolvedParams.locale}&populate=SeoMetaData`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;

  const [blogsData, blogsList, industries] = await Promise.all([
    getAllBlogs(locale),
    getBlogsList(locale),
    getAllIndustries(locale),
  ]);

  return (
    <BlogPage
      blogsData={blogsData}
      blogsList={blogsList}
      industries={industries}
      locale={locale}
    />
  );
};

export default page;
