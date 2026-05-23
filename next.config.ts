import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.2", "192.168.1.6", "192.168.1.8"],
};

export default nextConfig;

if (process.env.OPENNEXT_CLOUDFLARE === "1" && process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
}
