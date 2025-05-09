import Image from "next/image";
import Link from "next/link";
import { describe } from "node:test";
import React from "react";

const OurBlogs = () => {
  const blogData = [
    {
      id: 1,
      title: "Ryan Garcia is fighting again, this time on social media",
      date: "03 Jan 2025",
      category: "Contractor",
      descrition:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
      image: "/images/webp/blog-1.webp",
    },
    {
      id: 2,
      title: "Ryan Garcia is fighting again, this time on social media",
      date: "03 Jan 2025",
      category: "Contractor",
      descrition:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
      image: "/images/webp/blog-2.webp",
    },
    {
      id: 3,
      title: "Ryan Garcia is fighting again, this time on social media",
      date: "03 Jan 2025",
      category: "Contractor",
      descrition:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
      image: "/images/webp/blog-3.webp",
    },
  ];
  return (
    <section className="bg-white py-12 px-4 lg:px-20">
      <div className="max-w-[1158px] w-full mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[26px] md:text-[35px] lg:text-[42px] font-semibold text-black font-jakarta">
            Our Blogs
          </h2>
          <button className="bg-red-linear h-10 primary-btn gap-2">
            View All Blogs
            <span>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8335 12.9997C15.5974 12.9997 15.3993 12.9197 15.2393 12.7597C15.0793 12.5997 14.9996 12.4019 15.0002 12.1663V5.49968H8.3335C8.09739 5.49968 7.89933 5.41968 7.73933 5.25968C7.57933 5.09968 7.49961 4.9019 7.50017 4.66634C7.50017 4.43023 7.58017 4.23218 7.74017 4.07218C7.90017 3.91218 8.09794 3.83246 8.3335 3.83301H15.8335C16.0696 3.83301 16.2677 3.91301 16.4277 4.07301C16.5877 4.23301 16.6674 4.43079 16.6668 4.66634V12.1663C16.6668 12.4025 16.5868 12.6005 16.4268 12.7605C16.2668 12.9205 16.0691 13.0002 15.8335 12.9997ZM11.6668 17.1663C11.4307 17.1663 11.2327 17.0863 11.0727 16.9263C10.9127 16.7663 10.8329 16.5686 10.8335 16.333V9.66634H4.16683C3.93072 9.66634 3.73267 9.58634 3.57267 9.42634C3.41267 9.26634 3.33294 9.06857 3.3335 8.83301C3.3335 8.5969 3.4135 8.39884 3.5735 8.23884C3.7335 8.07884 3.93128 7.99912 4.16683 7.99968H11.6668C11.9029 7.99968 12.101 8.07968 12.261 8.23968C12.421 8.39968 12.5007 8.59746 12.5002 8.83301V16.333C12.5002 16.5691 12.4202 16.7672 12.2602 16.9272C12.1002 17.0872 11.9024 17.1669 11.6668 17.1663Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="flex flex-col-reverse xl:flex-row justify-between items-stretch gap-6">
          {/* Left column */}
          <div className="lg:max-w-[450px] w-full flex flex-col gap-4">
            {blogData.map((blog) => (
              <article key={blog.id} className="relative">
                {blog.id === 2 && (
                  <img
                    className="h-full w-full absolute top-0 lelf-0"
                    src="/images/webp/blog-bg.webp"
                    alt="blog bg"
                  />
                )}

                <div
                  className={`${
                    blog.id === 2 ? "bg-transparent" : "bg-[#F8F8F8]"
                  } flex items-start gap-4 rounded-xl p-2 z-20 relative`}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={170}
                    height={170}
                    className="rounded-md max-w-[170px] w-full"
                  />
                  <div className="flex-1 text-sm">
                    <p className="text-[10px] font-medium font-jakarta text-[#ADB1B5]">
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
          <div className="w-full relative flex flex-col justify-end pb-6">
            <img
              src="/images/webp/blog-right-side.webp"
              alt="Featured Blog"
              className="rounded-xl object-cover w-full absolute top-0 h-full"
            />
            <div className="px-6 pt-20 relative z-10">
              <p className="text-base font-medium text-[#D2D4D6] font-jakarta">
                Contractor | 5 minutes ago
              </p>
              <h3 className="text-2xl sm:text-[30px] md:text-[36px] font-extrabold font-jakarta capitalize text-white truncate overflow-hidden w-[400px]">
                Discover The Member Benefits Of USA Contracting!
              </h3>
              <p className="text-[#F0F0F0] text-base font-jakarta mt-2">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
