module.exports = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gottmanreferralnetwork.com',
        pathname: '/**',
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
			]
		}

		return []
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://analytics.lacy.sh https://www.google-analytics.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com; font-src 'self' https://cdnjs.cloudflare.com https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://analytics.lacy.sh https://www.google-analytics.com https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; base-uri 'self'; form-action 'self'",
          },
        ],
      },
    ]
  },
}
