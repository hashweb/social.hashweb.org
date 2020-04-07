const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJsPlugin = require('terser-webpack-plugin')
const path = require('path')
const pkg = require('./package.json')

const replaceTLD = (domain) =>
	domain.split('.').slice(0, -1).concat('dev').join('.')

module.exports = (env, argv) => {
	const devMode = argv.mode === 'development'

	return {
		entry: ['babel-polyfill', './src/index.js'],
		devtool: devMode ? 'inline-source-map' : false,
		output: {
			path: path.resolve(__dirname, 'public'),
			publicPath: '/',
			filename: devMode
				? 'assets/bundle.[chunkhash:8].js'
				: 'assets/bundle.js',
			chunkFilename: devMode
				? 'assets/[name].[chunkhash:8].js'
				: 'assets/[name].js',
			crossOriginLoading: 'anonymous',
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
			minimizer: [
				new TerserJsPlugin({
					cache: true,
					parallel: true,
					sourceMap: devMode,
				}),
			],
			usedExports: true, // Remove unused code in production
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react',
							],
						},
					},
				},
			],
		},
		plugins: [
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: [
					'**/*',
					'!.gitignore',
					'!favicon.ico',
				],
			}),
			new HtmlWebpackPlugin({
				folder: __dirname,
				template: 'src/template.html',
				hash: true,
				cache: false,
				dev: devMode,
			}),
			new MiniCssExtractPlugin({
				filename: 'assets/main.css',
			}),
			new BrowserSyncPlugin({
				host: 'localhost',
				port: 3000,
				proxy: replaceTLD(pkg.homepage),
				files: ['src/**/*', '!app/**/*.php', '!app/storage/**/*'],
				open: false,
				https: {
					key: './.docker/localhost.key',
					cert: './.docker/localhost.crt',
				},
			}),
		],

		// Do not replace node globals with polyfills
		// https://webpack.js.org/configuration/node/
		node: {
			console: false,
			global: false,
			process: false,
			Buffer: false,
			__filename: false,
			__dirname: false,
		},
	}
}
