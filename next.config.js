/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: false,
    },
  },
};

module.exports = nextConfig;
