/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict mode double-renders in dev for perceived speed
  reactStrictMode: false,

  // Enable experimental optimizations
  experimental: {
    // Optimizes package imports to reduce bundle size
    optimizePackageImports: ['react', 'react-dom'],
  },
};

export default nextConfig;
