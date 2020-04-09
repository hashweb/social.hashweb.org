import React from 'react'
import { render } from 'react-dom'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { defaultTheme, GlobalStyle } from 'styles'
import App from 'components/App'

render(
	<ThemeProvider theme={defaultTheme}>
		<GlobalStyle />
		<Helmet>
			<link
				href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap"
				rel="stylesheet"
			/>
		</Helmet>
		<App />
	</ThemeProvider>,
	document.getElementById('root'),
)
