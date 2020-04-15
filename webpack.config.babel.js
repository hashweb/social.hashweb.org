import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import TerserJsPlugin from 'terser-webpack-plugin'
import path from 'path'

const __dirname = path.resolve()

export default (env, argv) => {
	const devMode = argv.mode === 'development'

	return {
		entry: ['./src/index.js'],
		devtool: devMode ? 'inline-source-map' : false,
		output: {
			path: path.resolve(__dirname, 'public'),
			publicPath: '/',
			filename: devMode
				? 'assets/bundle.[hash].js'
				: 'assets/bundle.min.js',
			chunkFilename: devMode
				? 'assets/[name].[hash].js'
				: 'assets/[name].min.js',
			crossOriginLoading: 'anonymous',
		},
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			hot: true,
			port: 3000,
			https: {
				key: './.docker/localhost.key',
				cert: './.docker/localhost.crt',
			},
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
					loader: 'babel-loader',
					options: {
						envName: argv.mode,
					},
				},
				{
					test: /\.(png|jpg|gif)$/i,
					exclude: /node_modules/,
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
					'!android-chrome-96x96.png',
					'!apple-touch-icon.png',
					'!browserconfig.xml',
					'!favicon-16x16.png',
					'!favicon-32x32.png',
					'!favicon.ico',
					'!mstile-150x150.png',
					'!safari-pinned-tab.svg',
					'!site.webmanifest',
				],
			}),
			new HtmlWebpackPlugin({
				folder: __dirname,
				template: 'src/template.html',
				hash: true,
				cache: false,
				dev: devMode,
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
