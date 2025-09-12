// app/components/Blocks.tsx
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";
import Image from "next/image";

export default function BlocksRender({ content }: { content: BlocksContent }) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        heading: ({ children, level }) => {
          //@ts-ignore
          const Tag = `h${level}` as keyof JSX.IntrinsicElements;
          const sizes = {
            1: "text-4xl",
            2: "text-3xl",
            3: "text-2xl",
            4: "text-xl",
            5: "text-lg",
            6: "text-base uppercase text-gray-600",
          } as const;
          return (
            //@ts-ignore
            <Tag className={`font-semibold ${sizes[level ?? 2]}`}>
              {children}
            </Tag>
          );
        },
        paragraph: ({ children }) => (
          <p className="mb-4 leading-7">{children}</p>
        ),
        list: ({ children, format }) =>
          format === "ordered" ? (
            <ol className="ml-6 list-decimal">{children}</ol>
          ) : (
            <ul className="ml-6 list-disc">{children}</ul>
          ),
        link: ({ children, url }) => <Link href={url ?? "#"}>{children}</Link>,
        image: ({ image }) => (
          <Image
            src={image?.url ?? ""}
            alt={image?.alternativeText ?? ""}
            width={image?.width ?? 800}
            height={image?.height ?? 600}
            className="my-4 rounded-lg"
          />
        ),
        code: ({ children }) => (
          <pre className="my-4 overflow-auto rounded bg-zinc-900 p-4 text-zinc-100">
            <code>{children}</code>
          </pre>
        ),
        quote: ({ children }) => (
          <blockquote className="my-4 border-l-4 pl-4 text-zinc-600">
            {children}
          </blockquote>
        ),
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <em>{children}</em>,
        underline: ({ children }) => <u>{children}</u>,
        strikethrough: ({ children }) => <s>{children}</s>,
        code: ({ children }) => (
          <code className="rounded bg-zinc-100 px-1 py-0.5">{children}</code>
        ),
      }}
    />
  );
}
