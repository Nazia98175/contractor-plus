import Image from "next/image";
import React from "react";
import { BlogBtnIcon } from "../common/Icons";
import { blogList } from "../common/Helper";

const OurBlogs = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-[26px] md:text-[35px] lg:text-[42px] font-semibold text-black font-jakarta">
            Our Blogs
          </h2>
          <div className="hidden md:block">
            <button className="bg-red-linear h-10 primary-btn gap-2">
              View All Blogs
              <BlogBtnIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-col-reverse xl:flex-row justify-between items-stretch gap-4">
          {/* Left column */}
          <div className="max-w-[600px] mx-auto xl:mx-0  xl:max-w-[450px] w-full flex flex-col gap-4">
            {blogList.map((blog) => (
              <article key={blog.id} className="relative w-full">
                <div
                  className={`${
                    blog.id === 2
                      ? "bg-transparent gradient-border"
                      : "bg-doctor2"
                  } flex flex-col sm:flex-row items-start gap-4 rounded-xl p-2 z-20 relative w-full`}
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
                    <h3 className="text-base font-jakarta font-medium text-winterWay">
                      {blog.title}
                    </h3>
                    <p className="truncate text-xs text-wallStreet max-w-[240px] pt-2">
                      {blog.descrition}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right column (Featured Blog) */}
          <div className="w-full xl:max-w-[700px] relative flex flex-col justify-end pb-6">
            <Image
              height={700}
              width={700}
              unoptimized
              src="/images/webp/blog-right-side.webp"
              alt="Featured Blog"
              className="rounded-xl object-cover w-full absolute top-0 h-full"
            />
            <div className="px-6 pt-20 relative z-10">
              <p className="text-base font-medium text-decemberSky font-jakarta">
                Contractor | 5 minutes ago
              </p>
              <h3 className="hidden sm:block text-2xl sm:text-[30px] md:text-[36px] font-extrabold font-jakarta capitalize text-white">
                Discover The Member Benefits Of USA Contracting!
              </h3>
              <h3 className="block sm:hidden text-2xl sm:text-[30px] md:text-[36px] font-extrabold font-jakarta capitalize text-white">
                Discover The Member Benefits O...
              </h3>
              <p className="text-superSilver text-base font-jakarta mt-2 w-[250px] sm:w-full truncate block md:hidden">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <p className="text-superSilver text-base font-jakarta mt-2 hidden md:block">
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

export default OurBlogs;
