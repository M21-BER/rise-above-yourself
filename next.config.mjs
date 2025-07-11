/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gymleco.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
