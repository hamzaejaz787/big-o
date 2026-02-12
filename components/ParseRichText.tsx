"use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

const ParseRichText = ({ content }: { readonly content: BlocksContent }) => {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alternativeText || ""}
            className="rounded"
          />
        ),
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
        list: (props) => {
          if (props.format === "ordered") {
            return (
              <ol className="list-decimal pl-8 space-y-2">{props.children}</ol>
            );
          }
          return <ul className="list-disc pl-8 space-y-2">{props.children}</ul>;
        },
      }}
    />
  );
};

export default ParseRichText;
