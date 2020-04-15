/* eslint-env node */

module.exports = (api) => {
	const isTest = api.env('test')

	return {
		presets: [
			[
				'@babel/preset-env',
				{
					useBuiltIns: 'usage',
					corejs: 3,
				},
			],
			'@babel/preset-react',
		],
		plugins: [
			[
				'babel-plugin-styled-components',
				{ ssr: !isTest, displayName: !isTest },
			],
			['module-resolver', { root: ['./assets', './src'] }],
		],
		env: {
			production: {
				plugins: [
					[
						'react-remove-properties',
						{
							properties: ['data-testid'],
						},
					],
				],
			},
		},
	}
}
