module.exports = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
  },
  async redirects() {
		const redirects = [
			// Old WordPress-era pages → current equivalents
			{ source: '/contact', destination: '/', permanent: true },
			{ source: '/services', destination: '/', permanent: true },
			{ source: '/online-therapy', destination: '/online', permanent: true },
			{ source: '/individuals', destination: '/individual', permanent: true },
			{ source: '/life-coaching', destination: '/coaching', permanent: true },
			{ source: '/seminars', destination: '/intensives', permanent: true },
			{ source: '/crew', destination: '/about', permanent: true },
			// Old static HTML pages
			{ source: '/Contact.html', destination: '/', permanent: true },
			{ source: '/Contact.php', destination: '/', permanent: true },
			{ source: '/Bio.html', destination: '/about', permanent: true },
			{ source: '/about.html', destination: '/about', permanent: true },
			{ source: '/Couples.html', destination: '/couples', permanent: true },
			{ source: '/Services.html', destination: '/', permanent: true },
			{ source: '/Location.html', destination: '/about', permanent: true },
			{ source: '/Welcome.html', destination: '/', permanent: true },
			{ source: '/Bookstore.html', destination: '/', permanent: true },
		]

		if (process.env.NODE_ENV === 'development') {
			redirects.push({
				source: '/elements',
				destination: '/',
				permanent: false,
			})
		}

		return redirects
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
