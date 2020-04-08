import React from 'react'
import { render } from 'react-dom'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Router, Route, Switch } from 'wouter'

import { defaultTheme, GlobalStyle } from './styles'
import routes from './routes'

const RouteWithSubRoute = (route) => (
	<Route
		path={route.path}
		component={(props) => (
			<route.component {...props} routes={route.routes} />
		)}
	></Route>
)

render(
	<ThemeProvider theme={defaultTheme}>
		<GlobalStyle />
		<Helmet>
			<link
				href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Roboto:ital,wght@0,400;0,500;1,500&display=swap"
				rel="stylesheet"
			/>
		</Helmet>
		<Router>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoute key={i} {...route} />
				))}
			</Switch>
		</Router>
	</ThemeProvider>,
	document.getElementById('root'),
)
