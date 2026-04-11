/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
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
  allowedDevOrigins: ["gamma-nuc.vpn", "localhost"],
};

export default nextConfig;
