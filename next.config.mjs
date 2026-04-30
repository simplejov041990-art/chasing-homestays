/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        pathname: "/im/pictures/**",
      },
      {
        protocol: "https",
        hostname: "media.vrbo.com",
        pathname: "/lodging/**",
      },
    ],
  },
};

export default nextConfig;
