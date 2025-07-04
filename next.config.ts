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
    ],
  },
  experimental: {
    optimizePackageImports: ["lottie-react", "swiper"],
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
export default withBundleAnalyzer(withNextIntl(nextConfig));
