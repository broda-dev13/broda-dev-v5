import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // A package-lock.json in the user's home folder would otherwise be taken as the workspace root.
  turbopack: { root: process.cwd() },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default createNextIntlPlugin()(nextConfig);
