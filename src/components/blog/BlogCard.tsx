import Image from "next/image";
import Link from "next/link";
import { CardArrowIcon } from "../common/MainIcon";

interface BlogCardProps {
  article: {
    id: number;
    category: string;
    date: string;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
  };
}
const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <article className="group flex flex-col">
      <Image
        src={article.image}
        alt={article.title}
        width={400}
        height={240}
        className="h-[240px] max-h-[240px] min-h-[240px] w-full rounded-lg object-cover transition-transform duration-300"
      />
      <div className="">
        <div className="text-secondary font-jakarta flex items-center gap-2 text-sm font-semibold">
          <span>{article.category}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        <div className="my-3 flex items-center justify-between">
          <h3 className="text-eerie text-2xl font-semibold">{article.title}</h3>
          <CardArrowIcon />
        </div>
        <p className="text-flintstone mb-6 text-sm font-semibold">
          {article.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-2xl bg-gray-100 px-2 py-0.5 text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
