import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogBtnIcon } from "../common/Icons";

const BlogPosts = () => {
  const blogData = [
    {
      id: 1,
      title: "Ryan Garcia is fighting again, this time on social media",
      date: "03 Jan 2025",
      category: "Contractor",
      descrition:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
      image: "/images/webp/blog-post-1.webp",
    },
    {
      id: 2,
      title: "Ryan Garcia is fighting again, this time on social media",
      date: "03 Jan 2025",
      category: "Contractor",
      descrition:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
      image: "/images/webp/blog-post-2.webp",
    },
    {
      id: 3,
      title: "Ryan Garcia is fighting again, this time on social media",
      date: "03 Jan 2025",
      category: "Contractor",
      descrition:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
      image: "/images/webp/blog-post-3.webp",
    },
  ];
  return (
    <section className="py-12 px-2 sm:px-4 lg:px-20">
      <div className="max-w-[1158px] w-full mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-heading text-white">Our Blogs</h2>
          <div className="hidden md:block">
            <button className="bg-red-linear h-10 primary-btn gap-2">
              View All Blogs
              <BlogBtnIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-col-reverse xl:flex-row justify-between items-stretch gap-6">
          {/* Left column */}
          <div className="max-w-[600px] mx-auto xl:mx-0  xl:max-w-[450px] w-full flex flex-col gap-4">
            {blogData.map((blog) => (
              <article
                key={blog.id}
                className="flex flex-col sm:flex-row items-start gap-4 rounded-xl p-2 z-20 relative w-full bg-blackRussian"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={170}
                  height={170}
                  className="rounded-md sm:max-w-[170px] w-full"
                />
                <div className="flex-1 text-sm">
                  <p className="text-[10px] font-medium font-jakarta text-secondary">
                    {blog.category} | {blog.date}
                  </p>
                  <h3 className="text-base font-jakarta font-medium text-white">
                    {blog.title}
                  </h3>
                  <p className="truncate text-xs text-wallStreet max-w-[240px] pt-1">
                    {blog.descrition}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Right column (Featured Blog) */}
          <div className="w-full xl:max-w-[700px] relative flex flex-col justify-end pb-3 sm:pb-6">
            <img
              src="/images/webp/blog-right-side.webp"
              alt="Featured Blog"
              className="rounded-xl object-cover w-full absolute top-0 h-full"
            />
            <div className="px-3 sm:px-6 pt-20 relative z-10">
              <p className="text-base font-medium text-decemberSky font-jakarta">
                Contractor | 5 minutes ago
              </p>
              <h3 className="text-2xl sm:text-[30px] md:text-[36px] font-extrabold font-jakarta capitalize text-white">
                Discover The Member Benefits Of USA Contracting!
              </h3>
              {/* <h3 className="block sm:hidden text-2xl sm:text-[30px] md:text-[36px] font-extrabold font-jakarta capitalize text-white">
                Discover The Member Benefits O...
              </h3>
              <p className="text-superSilver text-base font-jakarta mt-2 w-[250px] sm:w-full truncate block md:hidden">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p> */}
              <p className="text-superSilver text-base font-jakarta mt-2">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
          </div>
        </div>
        <div className="block md:hidden pt-4">
          <button className="bg-red-linear h-10 primary-btn gap-2">
            View All Blogs
            <BlogBtnIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
