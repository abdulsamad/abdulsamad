/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'repository-images.githubusercontent.com',
      'opengraph.githubassets.com',
    ],
  },
};

module.exports = nextConfig;
