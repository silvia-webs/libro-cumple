import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // react-pageflip-enhanced clones children and injects refs;
  // React Compiler breaks that pattern and kills page turns.
  reactCompiler: true,
  allowedDevOrigins: ["192.168.78.114", "192.168.1.14"],
};

export default nextConfig;
