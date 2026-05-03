import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Wikimedia Commons rate-limit:ar Next.js bildproxy. Med unoptimized
    // skickas bilden direkt från ursprungs-CDN till browsern och slipper
    // Next:s mellanliggande fetch.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "commons.wikimedia.org" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
