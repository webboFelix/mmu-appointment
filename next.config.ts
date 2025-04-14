import { NextConfig } from "next";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import safeParser from "postcss-safe-parser";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      const minimizer = config.optimization?.minimizer?.find(
        (plugin: any) => plugin instanceof CssMinimizerPlugin
      );
      if (minimizer && minimizer.options) {
        minimizer.options.minimizerOptions = {
          preset: ["default", { cssDeclarationSorter: false }],
          parser: safeParser,
        };
      }
    }
    return config;
  },
};

export default nextConfig;
