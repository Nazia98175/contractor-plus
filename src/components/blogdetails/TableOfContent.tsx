import { useMemo } from "react";
import Link from "next/link";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";

const TableOfContent = ({ markdown }: { markdown: string }) => {
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

  return (
    <ul className="basis-[40%] space-y-2.5 xl:space-y-3.5">
      <h4 className="text-sambucus text-xl font-bold">Table of Contents</h4>
      {headings.map((obj, i) => (
        <Link
          key={i}
          href={`#${obj.id}`}
          className={`text-coldGrey hover:text-sambucus block font-semibold italic duration-300 ml-${(obj.level - 1) * 2}`}
        >
          {obj.text}
        </Link>
      ))}
    </ul>
  );
};

export default TableOfContent;
