import React from "react";
import BlogDetailContent from "./BlogDetailContent";
import TableOfContent from "./TableOfContent";
import PostCard from "./PostCard";

const TravelBlog = () => {
  return (
    <section className="main-container space-y-20 pt-8">
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div className="1xl:basis-[71%] lg:w-2/3">
          <BlogDetailContent />
        </div>
        <div className="1xl:basis-[26%] lg:w-1/3">
          <TableOfContent />
        </div>
      </div>
      <PostCard />
    </section>
  );
};

export default TravelBlog;
