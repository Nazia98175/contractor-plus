import BlogPage from "@/components/blog/BlogPage";
import {
  getAllBlogs,
  getBlogsDetails,
  getBlogsList,
} from "@/services/blog/getBlogData";
import { getSeoDataBlogs } from "@/services/common/seoMeta";
import { generateSeoMetadataBlogs } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataBlogs("blog-list", resolvedParams?.locale);

  if (!page) notFound();

  return generateSeoMetadataBlogs({ page });
}
const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const [blogsData, blogsFields, blogsList] = await Promise.all([
    getAllBlogs(locale),
    getBlogsDetails(locale),
    getBlogsList(locale),
  ]);

  return (
    <BlogPage
      blogsData={blogsData}
      blogsFields={blogsFields}
      blogsList={blogsList}
    />
  );
};

export default page;
