/* eslint-env node */

module.exports = (api) => {
	const isDev = api.env('development')

	return {
		presets: ['next/babel'],
		plugins: [
			[
				'babel-plugin-styled-components',
				{
					ssr: true,
					displayName: isDev,
					preprocess: false,
				},
			],
			['babel-plugin-module-resolver', { root: ['./src'] }],
		],
	}
}
