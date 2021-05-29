const isProd = process.env.NODE_ENV === 'production' && process.env.APP_ENV !== 'staging'

const CDN = 'https://socialhashweb.b-cdn.net'
const assetPrefix = isProd ? CDN : ''

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
	future: {
		webpack5: true,
	},
	images: {
		domains: [new URL(CDN).hostname],
	},
	serverRuntimeConfig: {},
	publicRuntimeConfig: {
		assetPrefix,
	},
}
