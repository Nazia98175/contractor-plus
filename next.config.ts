import { redirectsRoutes } from "@/lib/routes";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: import("next").NextConfig = {
  images: {
    unoptimized: true, // optimization disable
    remotePatterns: [
      {
        protocol: "http",
        hostname: "167.88.43.123",
        port: "1337",
      },
      {
        protocol: "https",
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
        hostname: "167.88.43.123",
        port: "2050",
      },
      {
        protocol: "https",
        hostname: "contractor-plus-website.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "contractorplus.app",
      },
      {
        protocol: "https",
        hostname: "contractorplus.app",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lottie-react", "swiper"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = true;
    }
    return config;
  },
  async redirects() {
    return redirectsRoutes;
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(withNextIntl(nextConfig));
