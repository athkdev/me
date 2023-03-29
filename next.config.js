/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "./build",
  async redirects() {
    return [
      {
        source: "/leetcode",
        destination:
          "https://adkio.notion.site/adkio/Leetcode-w-me-753a277aeab2456d9773478ef0d11a3c",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
