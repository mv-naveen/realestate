/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Vite app did not wrap the tree in StrictMode.
  reactStrictMode: false,
  // Next writes an AGENTS.md on dev startup. This app does not use that file.
  agentRules: false,
  async rewrites() {
    return [
      {
        source: '/src/assets/images/:path*',
        destination: '/assets/images/:path*',
      },
      {
        source: '/public/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;
