/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'repository-images.githubusercontent.com',
      'opengraph.githubassets.com',
    ],
  },
};

module.exports = nextConfig;
