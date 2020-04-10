import HtmlWebpackPlugin from 'html-webpack-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import TerserJsPlugin from 'terser-webpack-plugin'
import path from 'path'
import pkg from './package.json'

const __dirname = path.resolve()
const replaceTLD = (domain) =>
	domain.split('.').slice(0, -1).concat('dev').join('.')

export default (env, argv) => {
	const devMode = argv.mode === 'development'

	return {
		entry: ['babel-polyfill', './src/index.js'],
		devtool: devMode ? 'source-map' : false,
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
				{
					test: /\.(png|jpg|gif)$/i,
					loader: 'file-loader',
					options: {
						outputPath: (url, resourcePath) => {
							if (/assets\/avatars/.test(resourcePath)) {
								return `assets/static/avatars/${url}`
							}

							return `assets/static/${url}`
						},
						name: () =>
							argv.mode === 'development'
								? '[name].[ext]'
								: '[contenthash].[ext]',
					},
				},
			],
		},
		plugins: [
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: [
					'**/*',
					'!avatars*',
					'!avatars/*.*',
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
