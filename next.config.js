/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
