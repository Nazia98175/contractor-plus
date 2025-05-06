import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
