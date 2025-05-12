import Image from "next/image";
import React from "react";
import { BlogBtnIcon } from "../common/Icons";
import { useTranslations } from "next-intl";

const OurBlogs = () => {
  // Get translations from the "blogs" namespace
  const t = useTranslations("blogs");

  // Get the blog list from translations
  const blogList = t.raw("blogList") as {
    id: number;
    title: string;
    date: string;
    category: string;
    description: string;
    image: string;
  }[];

  // Get featured blog data
  const featuredBlog = t.raw("featuredBlog") as {
    category: string;
    timeAgo: string;
    title: string;
    description: string;
    image: string;
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-[26px] md:text-[35px] lg:text-[42px] font-semibold text-black font-jakarta">
            {t("heading")}
          </h2>
          <div className="hidden md:block">
            <button className="bg-red-linear h-10 primary-btn gap-2">
              {t("viewAllBlogs")}
              <BlogBtnIcon />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
          <article className="py-10 h-[400px]">
            <div className="px-6 py-6 relative flex flex-col justify-between h-full">
              <img
                className="absolute top-0 lef-0 w-[300px] h-[300px] z-[-1]"
                src="images/webp/blog-angle.webp"
                alt="blog angle"
              />
              <h4 className="text-wallStreet text-xs font-bold px-4 pt-5">
                +01
              </h4>
              <div className="pb-5 px-4">
                <p className="text-wallStreet text-[10px] font-bold">
                  Free resources by
                </p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="66"
                    height="13"
                    fill="none"
                    viewBox="0 0 66 13"
                  >
                    <g clipPath="url(#clip0_184_30095)">
                      <path
                        fill="#1C2731"
                        d="M13.92 4.978c.293.006.585-.06.85-.194.264-.134.495-.331.673-.576l.81.872q-.962 1.134-2.273 1.135-1.31 0-2.156-.864a2.9 2.9 0 0 1-.643-.997 3 3 0 0 1-.203-1.184c-.01-.408.062-.815.21-1.193a3 3 0 0 1 .653-1.004c.278-.289.608-.516.972-.668a2.8 2.8 0 0 1 1.145-.216 2.9 2.9 0 0 1 1.286.28c.404.192.761.476 1.047.83l-.786.932a1.86 1.86 0 0 0-.659-.577 1.8 1.8 0 0 0-.838-.2 1.7 1.7 0 0 0-1.219.486c-.17.168-.303.373-.39.6a1.8 1.8 0 0 0-.116.714c-.01.244.026.487.108.715s.208.436.37.612c.15.161.33.288.53.374.2.085.413.127.628.123M21.486 5.331a3.02 3.02 0 0 1-2.117.876 3.02 3.02 0 0 1-2.116-.876 2.9 2.9 0 0 1-.648-.996 3.05 3.05 0 0 1-.21-1.185c-.01-.405.062-.809.21-1.184.148-.376.368-.715.648-.996A3.02 3.02 0 0 1 19.37.092c.787 0 1.544.314 2.117.878.28.281.5.62.648.996.148.375.22.779.21 1.184.009.406-.062.81-.21 1.185a2.9 2.9 0 0 1-.648.996m-.43-2.176a2 2 0 0 0-.486-1.35 1.6 1.6 0 0 0-.54-.415 1.54 1.54 0 0 0-1.31 0c-.207.097-.391.238-.541.414a2 2 0 0 0-.486 1.35c-.01.498.164.98.486 1.347.15.175.335.314.541.41a1.55 1.55 0 0 0 1.309 0c.206-.096.39-.235.541-.41.322-.366.496-.849.485-1.346M26.973.227h1.27v5.92h-1.27l-2.7-3.71v3.71h-1.27V.226h1.185l2.78 3.811zM31.626 1.37v4.776h-1.27V1.371h-1.598V.227h4.472V1.37zM38.341 2.192q0 1.422-1.078 1.837l1.435 2.117h-1.552l-1.255-1.888h-.875v1.888h-1.27V.226h2.148q1.32 0 1.883.466t.564 1.5m-1.518.702q.236-.219.236-.698 0-.48-.243-.656c-.16-.118-.446-.178-.846-.178h-.948v1.753h.922q.635 0 .88-.221"
                      ></path>
                      <path
                        fill="#1C2731"
                        d="m43.27 6.146-.52-1.28h-2.382l-.526 1.277h-1.346L40.944.227h1.223l2.448 5.92zM41.56 1.99l-.713 1.719h1.418zM47.466 4.978c.294.006.585-.06.85-.194s.496-.331.674-.576l.814.872q-.966 1.133-2.275 1.135-1.308 0-2.154-.864a2.9 2.9 0 0 1-.643-.997 3 3 0 0 1-.203-1.184c-.01-.408.06-.814.208-1.193.148-.378.37-.72.65-1.004.278-.289.609-.516.972-.668a2.8 2.8 0 0 1 1.145-.216c.444-.008.883.088 1.287.28s.762.476 1.048.83l-.787.932a1.86 1.86 0 0 0-.655-.577 1.8 1.8 0 0 0-.835-.203c-.452-.01-.89.165-1.22.486-.17.168-.303.373-.39.6s-.128.47-.117.714c-.01.244.026.487.108.715.083.228.209.436.37.612.15.16.33.288.527.374.199.086.411.129.626.126M52.79 1.37v4.776h-1.27V1.371h-1.598V.227h4.472V1.37zM59.526 5.33a3.02 3.02 0 0 1-2.116.877 3.02 3.02 0 0 1-2.116-.877 2.9 2.9 0 0 1-.65-.996 3 3 0 0 1-.21-1.185 3 3 0 0 1 .21-1.185c.148-.375.37-.714.65-.996A3.01 3.01 0 0 1 57.41.09c.787 0 1.544.314 2.116.878.28.281.502.62.65.996.149.375.22.779.211 1.185.01.406-.062.81-.21 1.185-.149.376-.37.715-.65.996m-.423-2.177a1.98 1.98 0 0 0-.485-1.35 1.6 1.6 0 0 0-.542-.417 1.54 1.54 0 0 0-1.315 0c-.207.097-.392.24-.542.417a2 2 0 0 0-.488 1.35c-.01.498.163.98.485 1.347.152.175.337.316.543.412a1.55 1.55 0 0 0 1.313 0c.207-.096.392-.237.543-.412.321-.367.494-.85.481-1.347zM65.642 2.192q0 1.422-1.078 1.837L66 6.146h-1.552l-1.256-1.888h-.874v1.888h-1.27V.226h2.147q1.32 0 1.884.466t.564 1.5m-1.524.702q.236-.219.236-.698 0-.48-.243-.656-.244-.178-.846-.178h-.948v1.753h.922q.645 0 .88-.221"
                      ></path>
                      <path
                        fill="#EE1E25"
                        d="M15.261 7.499q.601.532.601 1.638 0 1.104-.616 1.621-.618.514-1.884.514h-.76v1.66h-1.27V6.965h2.018q1.312 0 1.911.534m-.935 2.347c.166-.224.248-.504.229-.786q0-.516-.298-.737-.3-.22-.927-.218h-.728v2.01h.858q.639 0 .866-.27M16.45 12.932V6.965h1.269v4.78h2.434v1.18zM22.07 11.391c.102.135.232.242.381.314.15.072.313.107.477.1a1 1 0 0 0 .474-.1 1.04 1.04 0 0 0 .38-.314c.225-.328.336-.727.314-1.13V6.964h1.27v3.338q0 1.296-.686 1.993c-.485.45-1.11.699-1.759.699a2.58 2.58 0 0 1-1.758-.699q-.69-.7-.69-1.989V6.965h1.27v3.295c-.02.405.096.805.327 1.131M27.621 8.155a.535.535 0 0 0-.185.419.5.5 0 0 0 .06.239c.039.072.097.133.166.175q.224.148 1.037.363c.466.098.902.313 1.27.628q.448.417.448 1.22c.006.25-.042.496-.142.722s-.248.424-.433.58q-.577.5-1.515.499a3.43 3.43 0 0 1-2.444-1.05l.76-.973q.923.845 1.707.845a.87.87 0 0 0 .552-.158.5.5 0 0 0 .15-.187.5.5 0 0 0 .05-.24.5.5 0 0 0-.053-.242.5.5 0 0 0-.16-.185 2.7 2.7 0 0 0-.846-.32q-.996-.248-1.459-.644-.462-.397-.461-1.247a1.6 1.6 0 0 1 .136-.73 1.5 1.5 0 0 1 .448-.58c.423-.319.937-.481 1.459-.461.389.001.775.07 1.142.205.365.127.703.324.998.58l-.646.974a2.44 2.44 0 0 0-1.535-.59.75.75 0 0 0-.504.158M6.879 0v2.446h2.34z"
                      ></path>
                      <path
                        fill="#1C2731"
                        fillRule="evenodd"
                        d="M5.51 3.876V0H0v12.872h9.22V3.876zM5.04 2.42H3.17v1.462h1.87zm1.855 2.01v1.916h-1.4V4.429z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        fill="#EE1E25"
                        d="M4.9 8.582H.936v.677H4.9zM4.9 9.936H.936v.676H4.9zM4.9 11.291H.936v.677H4.9z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_184_30095">
                        <path fill="#fff" d="M0 0h66v13H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
            <div className="relative py-10 px-4">
              <img
                className="absolute top-0 left-0 w-full h-full"
                src="/images/webp/blog-angle2.webp"
                alt=""
              />
            </div>
          </article>
        </div>
        <div className="lg:hidden flex flex-col-reverse xl:flex-row justify-between items-stretch gap-4">
          {/* Left column */}
          <div className="max-w-[600px] mx-auto xl:mx-0 xl:max-w-[450px] w-full flex flex-col gap-4">
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
                      {blog.description}
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
              src={featuredBlog.image}
              alt={t("featuredBlogAlt")}
              className="rounded-xl object-cover w-full absolute top-0 h-full"
            />
            <div className="px-6 pt-20 relative z-10">
              <p className="text-base font-medium text-decemberSky font-jakarta">
                {featuredBlog.category} | {featuredBlog.timeAgo}
              </p>
              <h3 className="hidden sm:block text-2xl sm:text-[30px] md:text-[36px] font-extrabold font-jakarta capitalize text-white">
                {featuredBlog.title}
              </h3>
              <h3 className="block sm:hidden text-2xl sm:text-[30px] md:text-[36px] font-extrabold font-jakarta capitalize text-white">
                {featuredBlog.title.substring(0, 30)}...
              </h3>
              <p className="text-superSilver text-base font-jakarta mt-2 w-[250px] sm:w-full truncate block md:hidden">
                {featuredBlog.description}
              </p>
              <p className="text-superSilver text-base font-jakarta mt-2 hidden md:block">
                {featuredBlog.description}
              </p>
            </div>
          </div>
        </div>
        <div className="block md:hidden pt-4">
          <button className="bg-red-linear h-10 primary-btn gap-2">
            {t("viewAllBlogs")}
            <BlogBtnIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
