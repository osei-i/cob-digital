import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["flowbite.s3.amazonaws.com", ' images.unsplash.com']
  }
};

export default nextConfig;
