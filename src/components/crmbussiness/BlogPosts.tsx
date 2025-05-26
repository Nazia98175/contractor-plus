import Image from "next/image";
import { BlogBtnIcon } from "../common/Icons";
import SliderLayout from "../common/SliderLayout";
import { blogData } from "../common/Helper";
import TextAnimation from "../common/TextAnimation";

interface Props{
  data: any;
  blogs: any;
}

const BlogPosts:React.FC<Props> = ({data , blogs}) => {
  return (
    <section className="pt-4 pb-12 px-2 sm:px-4 lg:px-20">
      <div className="max-w-[1158px] w-full mx-auto">
        <div className="flex justify-between items-center mb-6">
          <TextAnimation animateOnScroll={true} delay={0.2}>
            <h2 className="section-heading text-center text-white gradient-text w-full sm:w-fit">
             {data?.title}
            </h2>
          </TextAnimation>
          <TextAnimation animateOnScroll={true} delay={0.2}>
            <div className="hidden md:block">
              <button className="bg-red-linear h-10 primary-btn gap-2">
              { data?.btnTxt}
                <BlogBtnIcon />
              </button>
            </div>
          </TextAnimation>
        </div>

        <div className="hidden sm:flex flex-col-reverse xl:flex-row justify-between items-stretch gap-6">
          <div className="max-w-[600px] xl:max-w-[450px] w-full flex flex-col gap-4">
            {blogData.map((blog) => (
              <article
                key={blog.id}
                className="flex card-shine cursor-pointer flex-col sm:flex-row items-start gap-4 rounded-xl p-2 z-20 relative w-full bg-blackRussian"
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
          <div className="w-full card-shine cursor-pointer xl:max-w-[700px] relative flex flex-col justify-end pb-3 sm:pb-6">
            <Image
              width={684}
              height={361}
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
              <p className="text-superSilver text-base font-jakarta mt-2">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>
          </div>
        </div>
        <div className="sm:hidden block blog-post">
          <SliderLayout
            autoplay
            pagination
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              520: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 14 },
              768: { slidesPerView: 2.6, spaceBetween: 16 },
            }}
          >
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
                  <p className="truncate text-xs text-wallStreet max-w-[300px] sm:max-w-[240px] pt-1">
                    {blog.descrition}
                  </p>
                </div>
              </article>
            ))}
          </SliderLayout>
        </div>
        <div className="block md:hidden pt-4">
          <button className="bg-red-linear h-10 primary-btn gap-2">
            {data?.btnTxt}
            <BlogBtnIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
