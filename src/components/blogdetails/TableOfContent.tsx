import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";

const TableOfContent = ({ markdown }: { markdown: string }) => {
  const [activeId, setActiveId] = useState<string>("");

  const headings = useMemo(() => {
    const tree = unified().use(remarkParse).parse(markdown);
    const items: { text: string; id: string; level: number }[] = [];

    visit(tree, "heading", (node: any) => {
      const text = node.children
        .filter((n: any) => n.type === "text")
        .map((n: any) => n.value)
        .join(" ");
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      items.push({ text, id, level: node.depth });
    });

    return items;
  }, [markdown]);

  // Intersection Observer to track which heading is currently visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0]);
        }
      },
      {
        rootMargin: "-100px 0px -66%",
        threshold: 0,
      }
    );

    // Observe all heading elements
    const headingElements = headings.map((heading) =>
      document.getElementById(heading.id)
    ).filter(Boolean);

    headingElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      headingElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  const handleLinkClick = (id: string) => {
    setActiveId(id);
  };

  if (headings.length === 0) return null;

  return (
    <div className="basis-[40%] space-y-2.5 xl:space-y-3.5">
      <h4 className="text-sambucus text-xl font-bold">Table of Contents</h4>
      <ul className="space-y-1">
        {headings.map((obj, i) => (
          <li key={i}>
            <Link
              href={`#${obj.id}`}
              onClick={() => handleLinkClick(obj.id)}
              scroll={true} 
              className={`
                block font-semibold italic duration-300 transition-all ease-in-out border-l-2 
                ${activeId === obj.id 
                  ? 'text-sambucus  border-sambucus pl-3 bg-sambucus/5' 
                  : 'text-coldGrey hover:text-sambucus pl-3 hover:border-l-2 hover:border-sambucus/30 border-transparent'
                }
                ${obj.level === 1 ? 'ml-0' : 
                  obj.level === 2 ? 'ml-4' : 
                  obj.level === 3 ? 'ml-8' : 
                  obj.level === 4 ? 'ml-12' : 'ml-16'}
                py-1 rounded-r-md
              `}
            >
              {obj.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;