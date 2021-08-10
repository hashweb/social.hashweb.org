/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production' && process.env.APP_ENV !== 'staging'

const CDN = 'https://socialhashweb.b-cdn.net'
const assetPrefix = isProd ? CDN : ''

const nextConfig = {
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
		domains: [new URL(CDN).hostname],
	},
	serverRuntimeConfig: {},
	publicRuntimeConfig: {
		assetPrefix,
	},
}

module.exports = withPlugins([withBundleAnalyzer], nextConfig)
