import BlogArticle from "@/components/blog/BlogArticle";
import BlogHero from "@/components/blog/BlogHero";
import LatestFromContractor from "@/components/blog/LatestFromContractor";
import React from "react";

export const metadata = {
  title: "Contractor Plus - Blogs",
  description:
    "Contractor+ connects every function of your business so it finally all works in sync.",
};

const BlogPage = () => {
  return (
    <main>
      <BlogHero />
      <div className="relative z-20 bg-white">
        <LatestFromContractor />
        <BlogArticle />
      </div>
    </main>
  );
};

export default BlogPage;
