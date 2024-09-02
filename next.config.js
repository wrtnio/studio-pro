const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  ...withNextra(),
  exportTrailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/studio-pro",
  rewrites: async () => [
    {
      source: "/",
      destination: "/index.html",
    },
    {
      source: "/api",
      destination: "/api/index.html",
    },
    {
      source: "/swagger",
      destination: "/swagger/index.html",
    },
  ],
  distDir: "out/public",
};
module.exports = nextConfig;
