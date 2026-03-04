/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gottmanreferralnetwork.com',
      },
    ],
  },
  async redirects() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/elements',
          destination: '/',
          permanent: false,
        },
      ];
    }
    return [];
  },
};

module.exports = nextConfig;
