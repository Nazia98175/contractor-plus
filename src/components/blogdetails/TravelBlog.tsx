import React from "react";
import BlogDetailContent from "./BlogDetailContent";
import TableOfContent from "./TableOfContent";

const TravelBlog = () => {
  return (
    <section className="main-container flex gap-4 pt-8">
      <div className="basis-[71%]">
        <BlogDetailContent />
      </div>
      <div className="basis-[26%]">
        <TableOfContent />
      </div>
    </section>
  );
};

export default TravelBlog;
