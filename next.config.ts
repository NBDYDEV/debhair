import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.netbazis.com'
      }
    ]
  },/*  */
};

export default nextConfig;