import { tagColors, variantsBlogCard } from "@/utils/getVariants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CardArrowIcon } from "../common/MainIcon";

interface BlogCardProps {
  article: {
    id: number;
    category: string;
    date: string;
    title: string;
    description: string;
    image: string;
    tags: {
      text: string;
      id: number;
    }[];
    isSmall?: boolean;
    blogImg?: {
      url: string;
    }[];
    blogTitle?: string;
    publishedAt?: string;
    blogShortDescription?: string;
    blogUrl?: string;
  };
  variant?: "large" | "small";
  onClick?: () => void;
}

const defaultColor = { bg: "bg-gray-500", text: "text-white" };

const BlogCard: React.FC<BlogCardProps> = ({ article, variant = "large" }) => {
  const styles = variantsBlogCard[variant];
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/blog/${article?.blogUrl}`)}
      className={`${styles.wrapper} card-shine relative overflow-hidden`}
    >
      <div className={`${styles.imageWrapper} `}>
        <Image
          src={`${article?.blogImg ? article?.blogImg[0]?.url : "/images/webp/blog-card-1.webp"}`}
          alt={(article?.blogTitle as string) || article?.title}
          width={400}
          height={240}
          className={`h-full min-h-[240px] w-full object-cover transition-transform duration-300 group-hover:scale-105 md:min-h-[150px]`}
        />
      </div>
      <div className={styles.contentWrapper}>
        <div className="text-secondary flex items-center gap-2 text-sm leading-[130%] font-semibold">
          {/* <span>{article.category}</span> */}
          <span>•</span>
          <span>
            {new Date(article?.publishedAt as string).toLocaleDateString(
              "en-GB",
              { day: "numeric", month: "long", year: "numeric" },
            )}
          </span>
        </div>
        <div className="my-2 flex items-start justify-between sm:my-3">
          <h3 className={`${styles.title} capitalize`}>
            {article?.blogTitle ?? ""}
          </h3>
          <CardArrowIcon className="stroke-eerieBlack h-6 w-6 max-w-6 min-w-6 transition-all duration-200 ease-in group-hover:-translate-y-1.5" />
        </div>
        <p className="text-flintstone mb-4 line-clamp-3 text-sm leading-[112%] font-normal capitalize sm:mb-6 md:text-base">
          {article?.blogShortDescription ?? ""}
        </p>
        <div className="flex flex-wrap gap-2">
          {article?.tags?.length > 0 &&
            article.tags.map((tag, index) => {
              const colorSet = tagColors[tag.text] || defaultColor;
              return (
                <span
                  key={index}
                  className={`rounded-2xl px-2 py-0.5 text-sm font-medium capitalize ${colorSet.bg} ${colorSet.text}`}
                >
                  {tag.text}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
