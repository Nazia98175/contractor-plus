import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// next.config.js
const nextConfig: import("next").NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "167.88.43.123",
        port: "1337",
      },
      {
        protocol: "http",
        hostname: "167.88.43.123",
        port: "2050",
      },
      {
        protocol: "https",
        hostname: "contractor-plus-website.s3.us-east-2.amazonaws.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lottie-react", "swiper"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
export default withBundleAnalyzer(withNextIntl(nextConfig));
