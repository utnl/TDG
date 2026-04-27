import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sinspiredstudio.com",
        pathname: "/**",
      },
    ],
  },
};


export default nextConfig;
