/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
  trailingSlash: true,
  // reactStrictMode: true,
  // swcMinify: true,
  // exportTrailingSlash: true,
};

module.exports = nextConfig;
