import Image, { ImageProps } from "next/image";
import React from "react";

// Extend from ImageProps so it accepts all props that <Image /> supports
interface ImageProxyProps extends ImageProps {}

const ImageProxy: React.FC<ImageProxyProps> = ({ src, ...props }) => {
  const imageBaseUrl =
    process.env.NEXT_PUBLIC_API_IMAGE_URL_STRAPI || "";

  return (
    <Image
      src={`/api/image-proxy?url=${encodeURIComponent(`${imageBaseUrl}${src}`)}`}
      {...props}
    />
  );
};

export default ImageProxy;
