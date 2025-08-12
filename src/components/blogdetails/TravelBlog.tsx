"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import AdvertisementCard from "./AdvertisementCard";
import PostCard from "./PostCard";
import TableOfContent from "./TableOfContent";
import VideoSection from "./VideoSection";

gsap.registerPlugin(ScrollTrigger);

const TravelBlog = ({
  blogData,
  blogsList,
}: {
  blogData: any;
  blogsList: any;
}) => {
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rightEl = rightRef.current;

    if (!rightEl || window.innerWidth < 1024) return;

    ScrollTrigger.create({
      trigger: rightEl,
      start: "top 15%", // start when the top of the element hits the top of viewport
      end: () => `+=${rightEl.scrollHeight}`, // adjust as needed
      pin: true,
      pinSpacing: true,
      scrub: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="main-container 1xl:space-y-20 1xl:pb-20 space-y-12 pt-8 pb-12 md:space-y-12 md:pb-14 lg:space-y-14 lg:pb-16">
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div className="grow">
          {/* <BlogDetailContent /> */}
          <section className="w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="mt-8 text-3xl font-bold" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="mt-6 text-2xl font-semibold" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="mt-4 text-xl font-semibold" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mt-3 leading-7" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="mt-3 ml-6 list-disc" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="mt-3 ml-6 list-decimal" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a className="text-blue-600 underline" {...props} />
                ),
              }}
            >
              {blogData?.blogDescription}
            </ReactMarkdown>
          </section>
        </div>
        {/* RIGHT SIDE CONTENT  */}
        <div className="relative w-full lg:min-w-[336px]">
          <div ref={rightRef} className="w-full space-y-8">
            <VideoSection />
            <div className="flex flex-col justify-between gap-8 sm:flex-row-reverse lg:flex-col">
              <TableOfContent markdown={blogData?.blogDescription ?? ""} />
              <div className="top-0 basis-[60%] lg:sticky">
                <AdvertisementCard blogsList={blogsList} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostCard blogData={blogData} />
    </section>
  );
};

export default TravelBlog;
