import type { NextPageContext } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import { Header } from 'components'

const H1 = styled.h1`
	border-right: 1px solid rgba(0, 0, 0, 0.3);
	display: inline-block;
	font-size: 24px;
	font-weight: 500;
	margin: 0px 20px 0px 0px;
	padding: 10px 23px 10px 0px;
	vertical-align: top;
`

const H2 = styled.h2`
	font-size: 14px;
	font-weight: normal;
	line-height: inherit;
	margin: 0px;
	padding: 0px;
`

const Content = styled.div`
	align-items: center;
	display: flex;
`

const Main = styled.main`
	font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande',
		sans-serif;
	align-items: center;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 65px);
	justify-content: center;
	text-align: center;
`

export type ErrorProps = {
	statusCode?: number
	title?: string
}

const statusCodes: { [code: number]: string } = {
	0: 'An unexpected error has occurred',
	400: 'Bad Request',
	404: 'This page could not be found',
	405: 'Method Not Allowed',
	500: 'Internal Server Error',
}

const Error = ({ statusCode, ...props }: ErrorProps): JSX.Element => {
	statusCode = statusCode || 0
	const title = props.title || statusCodes[statusCode] || 'An unexpected error has occurred'

	return (
		<>
			<Header title="web-social Hall of (f/sh)ame &amp; majestic beards" />
			<Main>
				<Head>
					<title>
						{statusCode}: {title}
					</title>
				</Head>
				<Content>
					{statusCode ? <H1>{statusCode}</H1> : null}
					<H2>{title}.</H2>
				</Content>
			</Main>
		</>
	)
}

Error.getInitialProps = async ({ res, err }: NextPageContext): Promise<ErrorProps> => {
	const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404

	return {
		statusCode,
	}
}

export default Error
