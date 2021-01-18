const isProd =
	process.env.NODE_ENV === 'production' && process.env.APP_ENV !== 'staging'

const assetPrefix = isProd ? 'https://socialhashweb.b-cdn.net' : ''

module.exports = {
	reactStrictMode: false,
	poweredByHeader: false,
	assetPrefix,
	async headers() {
		return [
			{
				source: '/avatars/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=15552000',
					},
				],
			},
		]
	},
	images: {
		domains: [assetPrefix],
	},
	serverRuntimeConfig: {},
	publicRuntimeConfig: {
		assetPrefix,
	},
}
