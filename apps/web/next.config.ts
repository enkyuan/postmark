import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@monorepo/ui"],
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**/**",
      },
    ],
  },
};

export default nextConfig;
