import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',       // 👈 REQUIRED
  basePath: '/ieee_sb', // 👈 GitHub repo name
  assetPrefix: '/ieee_sb/',
    // trailingSlash: true, // 👈 VERY important for GitHub Pages

  images: {
    unoptimized: true,    // 👈 GitHub Pages needs this
  },
};

export default nextConfig;
