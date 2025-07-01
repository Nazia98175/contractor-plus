import React from "react";
import BlogDetailContent from "./BlogDetailContent";
import TableOfContent from "./TableOfContent";
import PostCard from "./PostCard";

const TravelBlog = () => {
  return (
    <section className="main-container 1xl:space-y-20 1xl:pb-20 space-y-12 pt-8 pb-12 md:space-y-12 md:pb-14 lg:space-y-14 lg:pb-16">
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
