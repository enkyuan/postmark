import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@monorepo/ui"],
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
