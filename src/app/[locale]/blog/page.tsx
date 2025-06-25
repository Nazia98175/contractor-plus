import BlogArticle from "@/components/blog/BlogArticle";
import React from "react";

export const metadata = {
  title: "Not just HVAC software Meet your operating system",
  description:
    "Contractor+ connects every function of your business so it finally all works in sync.",
};

const BlogPage = () => {
  return (
    <div className="relative z-20 bg-white">
      <BlogArticle />
    </div>
  );
};

export default BlogPage;
