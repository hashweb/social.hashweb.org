const isProd =
	process.env.NODE_ENV === 'production' && process.env.APP_ENV !== 'staging'

const assetPrefix = isProd ? 'https://socialhashweb.b-cdn.net' : ''

module.exports = {
	reactStrictMode: false,
	poweredByHeader: false,
	assetPrefix,
	serverRuntimeConfig: {},
	publicRuntimeConfig: {
		assetPrefix,
	},
}
