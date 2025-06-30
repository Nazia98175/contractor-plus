import BlogDetailHero from "@/components/blogdetails/BlogDetailHero";
import React from "react";

export const metadata = {
  title: "Contractor Plus - Blogs Details",
  description:
    "Contractor+ connects every function of your business so it finally all works in sync.",
};
const BlogDetails = () => {
  return (
    <main className="bg-white">
      <BlogDetailHero />
    </main>
  );
};

export default BlogDetails;
