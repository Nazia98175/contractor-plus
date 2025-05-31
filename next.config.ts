/** @type {import('next').NextConfig} */
const baseConfig = {
  experimental: {
    turbo: false, // Disables Turbopack
  },
};

const createNextIntlPlugin = require('next-intl/plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin();

// Compose the plugins correctly:
const combinedConfig = withBundleAnalyzer(withNextIntl(baseConfig));

module.exports = combinedConfig;



// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
    
// };
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// export default withBundleAnalyzer(withNextIntl(nextConfig));
