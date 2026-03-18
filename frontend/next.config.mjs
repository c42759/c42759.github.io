/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
