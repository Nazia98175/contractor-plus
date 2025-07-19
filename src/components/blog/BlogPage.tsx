"use client";
import BlogArticle from "@/components/blog/BlogArticle";
import BlogHero from "@/components/blog/BlogHero";
import LatestFromContractor from "@/components/blog/LatestFromContractor";
import { useRouter } from "next/navigation";
import React from "react";

const BlogPage = () => {
  const router = useRouter();
  const handleClick = (name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/blog/${slug}`);
  };

  return (
    <main id="home-page-wrapper-2">
      <div id="home-page-view-port-screen-blog" className="relative opacity-0">
        <BlogHero />
      </div>
      <div className="relative z-20 bg-white">
        <LatestFromContractor handleClick={handleClick} />
        <BlogArticle handleClick={handleClick} />
      </div>
    </main>
  );
};

export default BlogPage;
