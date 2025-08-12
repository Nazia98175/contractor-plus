"use client";
import BlogArticle from "@/components/blog/BlogArticle";
import BlogHero from "@/components/blog/BlogHero";
import LatestFromContractor from "@/components/blog/LatestFromContractor";
import { useRouter } from "next/navigation";

type BlogPageProps = {
  blogsData: any;
  blogsFields: any;
  blogsList: any;
};
const BlogPage = ({ blogsData, blogsFields, blogsList }: BlogPageProps) => {
  const router = useRouter();
  const handleClick = (name: string) => {
    router.push(`/blog/${name}`);
  };
  return (
    <main id="home-page-wrapper-2">
      <div id="home-page-view-port-screen-blog" className="relative opacity-0">
        <BlogHero blogsList={blogsList} blogsData={blogsData} />
      </div>
      <div className="relative z-20 bg-white">
        <LatestFromContractor
          blogsList={blogsList}
          blogsData={blogsData}
          handleClick={handleClick}
        />
        <BlogArticle blogsList={blogsList} blogsData={blogsData} />
      </div>
    </main>
  );
};

export default BlogPage;
