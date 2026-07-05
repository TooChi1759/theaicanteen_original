/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add real CMS/image-host domains here when swapping placeholders for production media.
    ],
  },
  eslint: {
    // Lint is run explicitly via `npm run lint`; don't block production builds on style nits.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
