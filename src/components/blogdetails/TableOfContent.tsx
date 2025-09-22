"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import { toString as mdText } from "mdast-util-to-string";

type TOCItem = { text: string; id: string; level: number };

const TableOfContent = ({ markdown }: { markdown: string }) => {
  const [activeId, setActiveId] = useState<string>("");

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const headings = useMemo<TOCItem[]>(() => {
    const tree = unified()
      .use(remarkParse)
      .parse(markdown ?? "");
    const items: TOCItem[] = [];

    visit(tree, "heading", (node: any) => {
      const text = mdText(node).trim();
      if (text) items.push({ text, id: slugify(text), level: node.depth ?? 2 });
    });

    visit(tree, "paragraph", (node: any) => {
      const first = node.children?.[0];
      if (first?.type !== "strong") return;
      const text = mdText(first).trim();
      if (text) items.push({ text, id: slugify(text), level: 2 });
    });

    const seen = new Set<string>();
    return items.filter((it) =>
      seen.has(it.id) ? false : (seen.add(it.id), true),
    );
  }, [markdown]);

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstVisible = entries.find((e) => e.isIntersecting);
        if (firstVisible?.target?.id) setActiveId(firstVisible.target.id);
      },
      { rootMargin: "-100px 0px -66%", threshold: 0 },
    );

    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="basis-[40%] space-y-3.5 xl:space-y-3.5">
      <h4 className="text-sambucus text-xl font-bold">Table of Contents</h4>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id}>
            <Link
              href={`#${h.id}`}
              onClick={() => setActiveId(h.id)}
              scroll
              className={`block border-l-2 font-semibold italic transition-all duration-300 ease-in-out ${
                activeId === h.id
                  ? "text-sambucus border-sambucus bg-sambucus/5 pl-3"
                  : "text-coldGrey hover:text-sambucus hover:border-sambucus/30 border-transparent pl-3 hover:border-l-2"
              } ${
                h.level === 1
                  ? "ml-0"
                  : h.level === 2
                    ? "ml-4"
                    : h.level === 3
                      ? "ml-8"
                      : h.level === 4
                        ? "ml-12"
                        : "ml-16"
              } rounded-r-md py-1`}
            >
              {h.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;
