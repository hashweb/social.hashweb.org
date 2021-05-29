// Types
import type { AppProps } from 'next/app'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub)

import { faCrown, faLightbulb, faLightbulbOn, faLightbulbSlash, faLink } from '@fortawesome/pro-duotone-svg-icons'

library.add(faCrown, faLightbulb, faLightbulbOn, faLightbulbSlash, faLink)

// Next.js
import Head from 'next/head'

// Context
import { AppProvider } from 'contexts'

import { preload } from 'utils'
import links from 'links'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>#web-social Hall of (f/sh)ame</title>
				<meta name="description" content="#web-social Hall of (f/sh)ame &amp; majestic beards" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				{preload({ links })}
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta name="apple-mobile-web-app-capable" content="yes" />

				<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1c1e20" />
				<meta name="msapplication-TileColor" content="#1c1e20" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<AppProvider>
				<Component {...pageProps} />
			</AppProvider>
		</>
	)
}

export default App
