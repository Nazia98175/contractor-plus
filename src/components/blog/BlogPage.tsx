"use client";
import BlogArticle from "@/components/blog/BlogArticle";
import BlogHero from "@/components/blog/BlogHero";
import LatestFromContractor from "@/components/blog/LatestFromContractor";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type Blog = {
  id?: string | number;
  documentId?: string;
  blogUrl: string;
  blogTitle?: string;
  title?: string;
  shortDescription?: string;
  category?: string | Array<{ text?: string; name?: string } | string>;
  tags?: Array<{ text?: string } | string>;
  [k: string]: any;
};

type BlogPageProps = {
  blogsData: Blog[];
  blogsFields: any;
  blogsList: any;
  industries: {
    id: number;
    slug: string;
    name: string;
  }[];
};

const normalize = (s?: string) =>
  (s ?? "").toString().trim().toLowerCase().replace(/\s+/g, "-");

const getBlogCategories = (blog: Blog) => {
  const cats: string[] = [];

  if (typeof blog?.category === "string") {
    cats.push(normalize(blog.category));
  } else if (Array.isArray(blog?.category)) {
    for (const c of blog.category) {
      if (typeof c === "string") cats.push(normalize(c));
      else if (c?.text) cats.push(normalize(c.text));
      else if ((c as any)?.name) cats.push(normalize((c as any).name));
    }
  }

  if (Array.isArray(blog?.tags)) {
    for (const t of blog.tags) {
      if (typeof t === "string") cats.push(normalize(t));
      else if (t?.text) cats.push(normalize(t.text));
    }
  }

  return Array.from(new Set(cats));
};

const BlogPage = ({
  blogsData,
  blogsFields,
  blogsList,
  industries,
}: BlogPageProps) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    return (blogsData ?? []).filter((b) => {
      const hay =
        `${b.blogTitle ?? ""} ${b.shortDescription ?? ""}`.toLowerCase();
      const matchesSearch = q.length === 0 || hay.includes(q);

      const catTokens = getBlogCategories(b);
      const wanted = normalize(selectedCategory);
      const matchesCategory = wanted === "all" || catTokens.includes(wanted);

      return matchesSearch && matchesCategory;
    });
  }, [blogsData, searchTerm, selectedCategory]);

  const handleClick = (name: string) => router.push(`/blog/${name}`);

  return (
    <main id="home-page-wrapper-2">
      <div id="home-page-view-port-screen-blog" className="relative opacity-0">
        <BlogHero
          blogsList={blogsList}
          blogsData={blogsData}
          onSearchChange={setSearchTerm}
          onTypeChange={setSelectedCategory}
        />
      </div>

      <div className="relative z-20 bg-white">
        <LatestFromContractor
          blogsList={blogsList}
          blogsData={filtered}
          handleClick={handleClick}
        />

        <BlogArticle blogsList={blogsList} blogsData={filtered} />
      </div>
    </main>
  );
};

export default BlogPage;
