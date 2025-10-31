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

const BlogsContent = ({
  blogData,
  appfeatures,
  blogsList,
}: {
  blogData: any;
  appfeatures: any;
  blogsList: any;
}) => {
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let triggerInstance: ScrollTrigger | null = null;

    const setupScrollTrigger = () => {
      const rightEl = rightRef.current;
      if (!rightEl) return;

      // ✅ Only apply on desktop
      if (window.innerWidth >= 1024) {
        triggerInstance = ScrollTrigger.create({
          trigger: rightEl,
          start: "top 15%",
          end: () => `+=${rightEl.scrollHeight}`,
          pin: true,
          pinSpacing: true,
          scrub: false,
        });
      } else {
        // Kill all ScrollTriggers if not on desktop
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };

    setupScrollTrigger();

    // ✅ Handle screen resize
    const handleResize = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      setupScrollTrigger();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  console.log(blogsList,"blogsList");
  
  return (
    <section className="main-container 1xl:space-y-30 1xl:pb-20 space-y-12 pt-8 pb-12 md:space-y-12 md:pb-14 lg:space-y-14 lg:pb-16">
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div className="grow">
          <div className="relative z-30 block space-y-5 md:hidden">
            <VideoSection blogData={blogData} />
            <TableOfContent markdown={blogData?.blogDescription ?? ""} />
          </div>
          {/* <BlogDetailContent /> */}
          <section className="w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className="mt-5 text-2xl font-bold md:mt-6 md:text-[28px]"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="mt-5 text-lg font-semibold md:mt-6 md:text-2xl"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="mt-4 text-base font-bold md:text-2xl"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="mt-3 text-base leading-[160%] font-medium lg:text-lg"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="mt-3 ml-7 list-disc space-y-3 md:ml-12"
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    className="mt-3 ml-5 list-decimal space-y-3 md:ml-9"
                    {...props}
                  />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="w-full font-medium text-black transition-all duration-300 ease-in-out hover:text-red-600"
                    {...props}
                  />
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
            <div className="hidden md:block">
              <VideoSection blogData={blogData} />
            </div>
            <div className="flex flex-col justify-between gap-8 sm:flex-row-reverse lg:flex-col">
              <div className="hidden sm:block">
                <TableOfContent markdown={blogData?.blogDescription ?? ""} />
              </div>
              <div className="block w-full sm:max-w-[300px] md:max-w-full lg:hidden">
                <AdvertisementCard appfeatures={appfeatures.features} />
              </div>
            </div>
          </div>
          <div className="top-[15%] mt-6 hidden lg:sticky lg:block">
            <AdvertisementCard appfeatures={appfeatures.features} />
          </div>
        </div>
      </div>
      <PostCard blogData={blogData} />
    </section>
  );
};

export default BlogsContent;
