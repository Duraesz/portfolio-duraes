import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O português é servido na raiz ("/"); o inglês fica em "/en"
  async redirects() {
    return [{ source: "/pt", destination: "/", permanent: true }];
  },
  async rewrites() {
    return [{ source: "/", destination: "/pt" }];
  },
};

export default nextConfig;
