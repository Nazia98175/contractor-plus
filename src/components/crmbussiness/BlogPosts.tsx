import Image from "next/image";
import Button from "../common/Button";
import { blogData } from "../common/Helper";
import { BlogBtnIcon } from "../common/Icons";
import BlogArticle from "./BlogArticle";
import SliderLayout from "../common/SliderLayout";
import { headingVariantMap } from "@/utils/getVariants";

interface Props {
  data?: any;
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
  title,
}) => {
  const bgClass = variant === "primary" ? "bg-blackRussian" : "bg-doctor2";
  const textClass = variant === "primary" ? "text-white" : "text-winterWay";

  return (
    <section
      className={`relative z-20 px-2 pt-4 sm:px-4 xl:px-20 ${className || ""}`}
    >
      <div className="mx-auto w-full max-w-[1158px]">
        <div className="xs:justify-center mb-6 flex items-center justify-center sm:justify-between md:mb-9">
          {/* <PrimaryAnimatedText delay={3000}> */}
          <h2
            className={`w-full text-center sm:w-fit sm:text-start lg:max-w-full ${
              classMaxwidth || "max-w-[483px]"
            } ${headingVariantMap[headingVariant]}`}
          >
            <span>{title || data?.title}</span>
          </h2>
          {/* </PrimaryAnimatedText> */}

          <div className="hidden md:block">
            <Button className="bg-red-linear primary-btn h-10 gap-2">
              {data?.btnTxt}
              <BlogBtnIcon />
            </Button>
          </div>
        </div>

        <div className="hidden flex-col-reverse items-stretch justify-between gap-6 sm:gap-4 md:flex md:flex-row xl:gap-6">
          <div className="mx-auto flex w-full max-w-[600px] flex-col gap-4 xl:mx-0 xl:max-w-[450px]">
            {blogData.map((blog) => (
              <BlogArticle
                key={blog.id}
                blog={blog}
                bgClass={bgClass}
                textClass={textClass}
              />
            ))}
          </div>

          {/* Right column (Featured Blog) */}
          <div className="card-shine relative flex w-full cursor-pointer flex-col justify-end overflow-hidden pb-3 sm:pb-6 xl:max-w-[700px]">
            <Image
              width={684}
              height={361}
              src="/images/webp/blog-right-side.webp"
              alt="Featured Blog"
              className="absolute top-0 h-full w-full rounded-xl object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 684px"
            />
            <div className="relative z-10 px-3 pt-20 xl:px-6">
              <p className="text-decemberSky font-jakarta text-base font-medium">
                Contractor+ | 5 minutes ago
              </p>
              <h3 className="font-jakarta text-2xl font-extrabold text-white capitalize lg:text-[30px] xl:text-[36px]">
                Discover The Member Benefits Of USA Contracting!
              </h3>
              <p className="text-superSilver font-jakarta mt-2 text-base">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
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
              768: { slidesPerView: 2, spaceBetween: 14 },
            }}
          >
            {blogData.map((blog) => (
              <BlogArticle
                key={blog.id}
                blog={blog}
                bgClass={bgClass}
                textClass={textClass}
              />
            ))}
          </SliderLayout>
        </div>
        <div className="block pt-4 md:hidden">
          <button className="bg-red-linear primary-btn h-10 gap-2">
            {data?.btnTxt}
            <BlogBtnIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
