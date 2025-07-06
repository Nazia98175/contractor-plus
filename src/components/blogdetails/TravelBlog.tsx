import React from "react";
import BlogDetailContent from "./BlogDetailContent";
import TableOfContent from "./TableOfContent";
import PostCard from "./PostCard";
import AdvertisementCard from "./AdvertisementCard";
import VideoSection from "./VideoSection";

const TravelBlog = () => {
  return (
    <section className="main-container 1xl:space-y-20 1xl:pb-20 space-y-12 pt-8 pb-12 md:space-y-12 md:pb-14 lg:space-y-14 lg:pb-16">
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div className="1xl:basis-[71%] lg:w-2/3">
          <BlogDetailContent />
        </div>
        {/* RIGHT SIDE CONTENT  */}
        <div className="1xl:basis-[26%] sticky top-0 space-y-8 lg:w-1/3">
          <VideoSection />
          <div className="flex flex-col justify-between gap-8 sm:flex-row-reverse lg:flex-col">
            <TableOfContent />
            <div className="top-0 basis-[60%] lg:sticky">
              <AdvertisementCard />
            </div>
          </div>
        </div>
      </div>
      <PostCard />
    </section>
  );
};

export default TravelBlog;
