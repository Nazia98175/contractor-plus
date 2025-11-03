"use client";
import { Blog, BlogPageProps } from "@/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
const LatestFromContractor = dynamic(() => import("./LatestFromContractor"), {
  ssr: false,
});
const BlogArticle = dynamic(() => import("./BlogArticle"), {
  ssr: false,
});

const BlogHero = dynamic(() => import("./BlogHero"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen w-full items-center justify-center">
      <p>Loading...</p>
    </div>
  ),
});

const normalize = (s?: string) =>
  (s ?? "").toString().trim().toLowerCase().replace(/\s+/g, "-");

const getBlogCategories = (blog: Blog) => {
  const categories = new Set<string>();

  const list = blog?.tags ?? [];
  for (const item of list) {
    if (item?.list) categories.add(normalize(item.list));
  }

  if (Array.isArray(blog?.tags)) {
    for (const c of blog.tags) {
      if (typeof c === "string") categories.add(normalize(c));
      else if ((c as any)?.text) categories.add(normalize((c as any).text));
      else if ((c as any)?.name) categories.add(normalize((c as any).name));
    }
  }

  if (Array.isArray(blog?.tags)) {
    for (const t of blog.tags) {
      if (typeof t === "string") categories.add(normalize(t));
      else if ((t as any)?.text) categories.add(normalize((t as any).text));
    }
  }

  return Array.from(categories);
};

const BlogPage = ({
  blogsData,
  blogsList,
  industries,
  locale,
}: BlogPageProps) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    return (blogsData ?? []).filter((b) => {
      const hay = `${b.blogTitle ?? ""} ${b.title ?? ""} ${
        b.shortDescription ?? ""
      }`.toLowerCase();
      const matchesSearch = q.length === 0 || hay.includes(q);

      const catTokens = getBlogCategories(b);
      const wanted = normalize(selectedCategory);
      const matchesCategory = wanted === "all" || catTokens.includes(wanted);

      return matchesSearch && matchesCategory;
    });
  }, [blogsData, selectedCategory, searchTerm]);

  const handleClick = (name: string) => router.push(`/blogs/${name}`);

  return (
    <main id="home-page-wrapper-2">
      <div id="home-page-view-port-screen-blog" className="relative opacity-0">
        <BlogHero
          blogsList={blogsList}
          onSearchChange={setSearchTerm}
          onTypeChange={setSelectedCategory}
          industries={industries}
          locale={locale}
        />
      </div>

      <div id="next-section" className="relative z-20 bg-white">
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
