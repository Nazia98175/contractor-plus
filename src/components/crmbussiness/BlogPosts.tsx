import Image from "next/image";
import { BlogBtnIcon } from "../common/Icons";
import SliderLayout from "../common/SliderLayout";
import { blogData } from "../common/Helper";
import TextAnimation from "../common/TextAnimation";
import BlogArticle from "./BlogArticle";

interface Props {
  data?: any;
  blogs?: any;
  className?: string;
  variant?: "primary" | "secondary";
}

const BlogPosts: React.FC<Props> = ({
  data,
  blogs,
  className,
  variant = "primary",
}) => {
  const bgClass = variant === "primary" ? "bg-blackRussian" : "bg-doctor2";
  const textClass = variant === "primary" ? "text-white" : "text-winterWay";

  return (
    <section className={`px-2 pt-4 pb-12 sm:px-4 lg:px-20 ${className || ""}`}>
      <div className="mx-auto w-full max-w-[1158px]">
        <div className="mb-6 flex items-center justify-between">
          <TextAnimation animateOnScroll={true} delay={0.2}>
            <h2 className="section-heading gradient-text w-full text-center text-white sm:w-fit">
              {data?.title}
            </h2>
          </TextAnimation>
          <TextAnimation animateOnScroll={true} delay={0.2}>
            <div className="hidden md:block">
              <button className="bg-red-linear primary-btn h-10 gap-2">
                {data?.btnTxt}
                <BlogBtnIcon />
              </button>
            </div>
          </TextAnimation>
        </div>

        <div className="hidden flex-col-reverse items-stretch justify-between gap-6 sm:flex xl:flex-row">
          <div className="flex w-full max-w-[600px] flex-col gap-4 xl:max-w-[450px]">
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
            />
            <div className="relative z-10 px-3 pt-20 sm:px-6">
              <p className="text-decemberSky font-jakarta text-base font-medium">
                Contractor | 5 minutes ago
              </p>
              <h3 className="font-jakarta text-2xl font-extrabold text-white capitalize sm:text-[30px] md:text-[36px]">
                Discover The Member Benefits Of USA Contracting!
              </h3>
              <p className="text-superSilver font-jakarta mt-2 text-base">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
          </div>
        </div>
        <div className="blog-post block sm:hidden">
          <SliderLayout
            autoplay
            pagination
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              520: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 14 },
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
