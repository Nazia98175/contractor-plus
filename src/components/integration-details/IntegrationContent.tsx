import Image from "next/image";
import React from "react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

type Integration = {
  description?: BlocksContent | null;
};

const IntegrationContent = ({ integration }: { integration?: Integration }) => {
  const content = integration?.description;

  if (!content) return null;

  return (
    <section className="w-full text-white">
      <BlocksRenderer
        content={content as BlocksContent}
        blocks={{
          paragraph: ({ children }) => (
            <p className="my-3 max-w-none !text-white">{children}</p>
          ),
          heading: ({ children, level }) => {
            // @ts-ignore
            const Tag = `h${level}` as unknown as keyof JSX.IntrinsicElements;
            return (
              // @ts-ignore
              <Tag className="mt-4 mb-2 max-w-none font-semibold">
                {children}
              </Tag>
            );
          },
          list: ({ children, format }) =>
            format === "ordered" ? (
              <ol className="my-3 max-w-none list-decimal pl-6">{children}</ol>
            ) : (
              <ul className="my-3 max-w-none list-disc pl-6">{children}</ul>
            ),
          quote: ({ children }) => (
            <blockquote className="my-4 max-w-none italic">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <pre className="my-4 max-w-none overflow-auto">
              <code>{children}</code>
            </pre>
          ),
          image: ({ image }) => {
            const url = image?.url ?? "";
            const alt = image?.alternativeText ?? "";
            const width = image?.width ?? 1200;
            const height = image?.height ?? 800;

            if (!url) return null;

            return (
              <figure className="my-6">
                <Image
                  src={url}
                  alt={alt}
                  width={width}
                  height={height}
                  style={{ width: "100%", height: "auto" }}
                  unoptimized
                  priority={false}
                />
                {alt ? (
                  <figcaption className="mt-2 text-sm text-gray-400">
                    {alt}
                  </figcaption>
                ) : null}
              </figure>
            );
          },
          link: ({ children, url }) => (
            <a href={url} className="underline underline-offset-2">
              {children}
            </a>
          ),
        }}
      />
    </section>
  );
};

export default IntegrationContent;
