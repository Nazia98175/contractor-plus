import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
type Integration = {
  description?: string | null;
};

const IntegrationContent = ({ integration }: { integration?: Integration }) => {
  const content = integration?.description;

  if (!content) return null;

  return (
    <section className="w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="mt-5 text-2xl font-bold text-white md:mt-6 md:text-[28px]"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="mt-5 text-lg font-semibold text-white md:mt-6 md:text-2xl"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="mt-4 text-base font-bold text-white md:text-2xl"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              className="mt-3 text-base leading-[160%] font-medium text-white lg:text-lg"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="mt-3 ml-7 list-disc space-y-3 text-white md:ml-12"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="mt-3 ml-5 list-decimal space-y-3 text-white md:ml-9"
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              className="w-full font-medium text-blue-500 transition-all duration-300 ease-in-out hover:text-red-600"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default IntegrationContent;
