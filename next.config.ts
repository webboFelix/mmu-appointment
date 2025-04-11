import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable minifier if it's causing issues
  swcMinify: false,
  // Or use:
  // optimization: { minimize: false }
};

export default nextConfig;
