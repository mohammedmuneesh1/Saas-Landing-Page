// next.config.js
const nextConfig = {
  turbopack: {}, // ← add this
  webpack: (config) => {
    // your existing webpack config
    return config;
  },
};

export default nextConfig;