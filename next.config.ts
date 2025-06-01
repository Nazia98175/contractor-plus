import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
export default withBundleAnalyzer(withNextIntl(nextConfig));
