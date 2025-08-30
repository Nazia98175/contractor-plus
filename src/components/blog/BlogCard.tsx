import { tagColors, variantsBlogCard } from "@/utils/getVariants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CardArrowIcon } from "../common/MainIcon";

type Tag = { text: string; id: number };

interface Article {
  id?: number | string;
  title?: string;
  blogTitle?: string;
  shortDescription?: string;
  publishedAt?: string;
  date?: string;
  blogUrl?: string;
  category?: string;
  tags?: Tag[];
  blogImg?: { url: string }[];
}

interface BlogCardProps {
  article: Article;
  variant?: "large" | "small";
  onClick?: () => void;
}

const defaultColor = { bg: "bg-gray-500", text: "text-white" };

const BlogCard: React.FC<BlogCardProps> = ({
  article,
  variant = "large",
  onClick,
}) => {
  const styles = variantsBlogCard[variant];
  const router = useRouter();

  const dateISO = article?.publishedAt || article?.date || "";
  const formattedDate = (() => {
    const d = dateISO ? new Date(dateISO) : null;
    return d && !Number.isNaN(d.getTime())
      ? d.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";
  })();

  const title = article?.blogTitle || article?.title || "";
  const imgSrc = article?.blogImg?.[0]?.url || "/images/webp/blog-card-1.webp";
  const href = article?.blogUrl ? `/blog/${article.blogUrl}` : undefined;

  const handleNavigate = () => {
    if (onClick) return onClick();
    if (href) router.push(href);
  };

  return href ? (
    <Link
      href={href}
      className={`${styles.wrapper} card-shine group relative overflow-hidden`}
      onClick={onClick}
    >
      <div className={`${styles.imageWrapper}`}>
        <Image
          src={imgSrc}
          alt={title || "blog cover"}
          width={400}
          height={240}
          className="h-full min-h-[240px] w-full object-cover transition-transform duration-300 group-hover:scale-105 md:min-h-[150px]"
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className="text-secondary flex items-center gap-2 text-sm leading-[130%] font-semibold">
          {formattedDate && (
            <>
              <span>•</span>
              <span>{formattedDate}</span>
            </>
          )}
        </div>

        <div className="my-2 flex items-start justify-between sm:my-3">
          <h3 className={`${styles.title} capitalize`}>{title}</h3>
          <CardArrowIcon className="stroke-eerieBlack h-6 w-6 max-w-6 min-w-6 transition-all duration-200 ease-in group-hover:-translate-y-1.5" />
        </div>

        {article?.shortDescription && (
          <p className="text-flintstone mb-4 line-clamp-3 text-sm leading-[112%] font-normal capitalize sm:mb-6 md:text-base">
            {article.shortDescription}
          </p>
        )}

        {article?.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, idx) => {
              const colorSet = tag?.text
                ? tagColors[tag.text] || defaultColor
                : defaultColor;
              return (
                <span
                  key={tag?.id ?? idx}
                  className={`rounded-2xl px-2 py-0.5 text-sm font-medium capitalize ${colorSet.bg} ${colorSet.text}`}
                >
                  {tag?.text ?? "tag"}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </Link>
  ) : (
    <div
      role="button"
      tabIndex={0}
      onClick={handleNavigate}
      onKeyDown={(e) => (e.key === "Enter" ? handleNavigate() : undefined)}
      className={`${styles.wrapper} card-shine group relative overflow-hidden`}
    >
      <div className={`${styles.imageWrapper}`}>
        <Image
          src={imgSrc}
          alt={title || "blog cover"}
          width={400}
          height={240}
          className="h-full min-h-[240px] w-full object-cover transition-transform duration-300 group-hover:scale-105 md:min-h-[150px]"
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className="text-secondary flex items-center gap-2 text-sm leading-[130%] font-semibold">
          {formattedDate && (
            <>
              <span>•</span>
              <span>{formattedDate}</span>
            </>
          )}
        </div>

        <div className="my-2 flex items-start justify-between sm:my-3">
          <h3 className={`${styles.title} capitalize`}>{title}</h3>
          <CardArrowIcon className="stroke-eerieBlack h-6 w-6 max-w-6 min-w-6 transition-all duration-200 ease-in group-hover:-translate-y-1.5" />
        </div>

        {article?.shortDescription && (
          <p className="text-flintstone mb-4 line-clamp-3 text-sm leading-[112%] font-normal capitalize sm:mb-6 md:text-base">
            {article.shortDescription}
          </p>
        )}

        {article?.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, idx) => {
              const colorSet = tag?.text
                ? tagColors[tag.text] || defaultColor
                : defaultColor;
              return (
                <span
                  key={tag?.id ?? idx}
                  className={`rounded-2xl px-2 py-0.5 text-sm font-medium capitalize ${colorSet.bg} ${colorSet.text}`}
                >
                  {tag?.text ?? "tag"}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BlogCard;
