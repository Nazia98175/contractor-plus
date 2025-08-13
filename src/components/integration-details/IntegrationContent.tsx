import Image from "next/image";
import React from "react";

const IntegrationContent = ({
  integration,
}: {
  integration: {
    description: {
      type: string;
      children: {
        text: string;
        bold: boolean;
      }[];
      image: {
        url: string;
        alternativeText: string;
      };
    }[];
  };
}) => {
  return (
    <section className="w-full">
      {integration?.description.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p className="my-3 text-white" key={i}>
                {block.children?.map((child, idx) =>
                  child.bold ? (
                    <strong key={idx}>{child.text}</strong>
                  ) : (
                    child.text
                  ),
                )}
              </p>
            );

          case "image":
            return (
              <Image
                width={500}
                height={500}
                key={i}
                src={block.image?.url}
                alt={block.image?.alternativeText || ""}
                className="my-4 rounded-lg"
              />
            );

          default:
            return null;
        }
      })}
    </section>
  );
};

export default IntegrationContent;
