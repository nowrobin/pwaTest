/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// const prod = process.env.NODE_ENV === "production";

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: ["manifest.json"],
});

const nextConfig = withPWA({
  // next config
});
module.exports = nextConfig;
