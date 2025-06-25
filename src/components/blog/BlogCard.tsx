import Image from "next/image";
import { CardArrowIcon } from "../common/MainIcon";
import Link from "next/link";

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
const tagColors: Record<string, { bg: string; text: string }> = {
  Leadership: { bg: "bg-sugar", text: "text-dragonlord" },
  Management: { bg: "bg-wash", text: "text-lviv" },
  Product: { bg: "bg-alice", text: "text-led" },
  Research: { bg: "bg-aliceBlue", text: "text-kikorangi" },
  Design: { bg: "bg-aliceBlue", text: "text-dragonlord" },
  Frameworks: { bg: "bg-fatback", text: "text-sinopia" },
  "Software Development": { bg: "bg-mint", text: "text-blarney" },
  Tools: { bg: "bg-placebo", text: "text-bramble" },
  SaaS: { bg: "bg-placebo", text: "text-bramble" },
  Podcasts: { bg: "bg-sugar", text: "text-dragonlord" },
  "Customer Success": { bg: "bg-wash", text: "text-lviv" },
};
const defaultColor = { bg: "bg-gray-500", text: "text-white" };
const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <Link
      href={article.link}
      className="group flex flex-col transition-all duration-200 ease-in"
    >
      <Image
        src={article.image}
        alt={article.title}
        width={400}
        height={240}
        className="h-full max-h-[240px] w-full rounded-lg object-cover transition-transform duration-300"
      />
      <div className="mt-8">
        <div className="text-secondary font-jakarta flex items-center gap-2 text-sm font-semibold">
          <span>{article.category}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        <div className="my-3 flex items-center justify-between">
          <h3 className="text-eerie text-2xl font-semibold">{article.title}</h3>
          <CardArrowIcon className="stroke-eerie h-6 w-6 transition-all duration-200 ease-in group-hover:translate-x-1.5" />
        </div>
        <p className="text-flintstone mb-6 text-sm font-semibold">
          {article.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, index) => {
            const colorSet = tagColors[tag] || defaultColor;
            return (
              <span
                key={index}
                className={`rounded-2xl px-2 py-0.5 text-sm font-medium ${colorSet.bg} ${colorSet.text}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
