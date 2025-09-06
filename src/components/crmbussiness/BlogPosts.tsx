"use client";
import Image from "next/image";
import Button from "../common/Button";
import { blogData } from "../common/Helper";
import { BlogBtnIcon, NoBlogIcon } from "../common/Icons";
import BlogArticle from "./BlogArticle";
import SliderLayout from "../common/SliderLayout";
import { headingVariantMap } from "@/utils/getVariants";
import Copy from "../common/Copy";
import { useRouter } from "next/navigation";
import { getTimeAgo } from "@/utils/dataTransformers";
import NoBlogFound from "../common/NoBlogFound";

interface Props {
  data?: any[];
  blogs?: any;
  className?: string;
  title?: string;
  classMaxwidth?: string;
  variant?: "primary" | "secondary";
  headingVariant?: "primary" | "secondary" | "tertiary";
}

const BlogPosts: React.FC<Props> = ({
  data,
  blogs,
  className,
  classMaxwidth,
  variant = "primary",
  headingVariant = "primary",
  title = "",
}) => {
  const bgClass = variant === "primary" ? "bg-blackRussian" : "bg-doctor2";
  const textClass = variant === "primary" ? "text-white" : "text-winterWay";
  const router = useRouter();

  const goToNewPage = () => {
    router.push("/blog");
  };

  return (
    <section
      className={`relative z-20 px-2 pt-4 sm:px-4 xl:px-20 ${className || ""}`}
    >
      <div className="mx-auto w-full max-w-[1158px]">
        <div className="xs:justify-center mb-6 flex items-start justify-center gap-2 sm:justify-between md:mb-9 lg:items-center">
          <Copy animateOnScroll={true}>
            <h2
              className={`mx-auto w-full text-center sm:w-fit sm:text-start md:mx-0 lg:max-w-full ${
                classMaxwidth || "max-w-[483px]"
              } ${headingVariantMap[headingVariant]}`}
            >
              {blogs?.title || title}
            </h2>
          </Copy>
          <Copy animateOnScroll={true}>
            <div className="hidden md:block">
              <Button
                onClick={goToNewPage}
                className="bg-red-linear primary-btn mt-0.5 h-10 gap-2 lg:mt-0"
              >
                {blogs?.btnText}
                <BlogBtnIcon />
              </Button>
            </div>
          </Copy>
        </div>
        {Array.isArray(data) && data.length > 0 ? (
          <>
            <div className="hidden flex-col-reverse items-stretch justify-between gap-6 sm:gap-4 md:flex md:flex-row xl:gap-6">
              <div className="mx-auto flex w-full max-w-[600px] flex-col gap-4 xl:mx-0 xl:max-w-[450px]">
                {data.slice(0, 3).map((blog) => (
                  <BlogArticle
                    key={blog.id}
                    blog={blog}
                    bgClass={bgClass}
                    textClass={textClass}
                  />
                ))}
              </div>

              <div className="card-shine relative flex min-h-[366px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-xl pb-3 sm:pb-6 xl:max-w-[700px]">
                {data[0]?.blogImg ? (
                  <img
                    src={`${data[0]?.blogImg[0]?.url}`}
                    alt="Featured Blog"
                    className="absolute top-0 h-full w-full rounded-xl object-cover brightness-50"
                  />
                ) : (
                  <img
                    src="/images/webp/blog-right-side.webp"
                    alt="Featured Blog"
                    className="absolute top-0 h-full w-full rounded-xl object-cover"
                  />
                )}
                <div className="relative z-10 px-3 pt-20 xl:px-6">
                  <p className="text-decemberSky font-jakarta text-base font-medium">
                    Contractor+ | {getTimeAgo(data[0]?.publishedAt)}
                  </p>
                  <h3 className="font-jakarta line-clamp-1 text-2xl font-extrabold text-white capitalize lg:text-[30px] xl:text-[36px]">
                    {data[0]?.blogTitle ||
                      "Discover The Member Benefits Of USA Contracting!"}
                  </h3>
                  <p className="text-superSilver font-jakarta mt-2 line-clamp-3 text-base">
                    {data[0]?.shortDescription ||
                      "How do you create compelling presentations that wow your colleagues and impress your managers?"}
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-post block md:hidden">
              <SliderLayout
                autoplay
                pagination
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 12 },
                  520: { slidesPerView: 1.5, spaceBetween: 12 },
                  640: { slidesPerView: 2, spaceBetween: 14 },
                  768: { slidesPerView: 4, spaceBetween: 14 },
                }}
                speed={600}
              >
                {data.map((blog) => (
                  <BlogArticle
                    key={blog.id}
                    blog={blog}
                    bgClass={bgClass}
                    textClass={textClass}
                  />
                ))}
              </SliderLayout>
            </div>
          </>
        ) : (
          <NoBlogFound />
        )}
        <div className="block pt-4 md:hidden">
          <button className="bg-red-linear primary-btn h-10 gap-2">
            {blogs?.btnText}
            <BlogBtnIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
