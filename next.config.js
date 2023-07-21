module.exports = {
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
  }
}
