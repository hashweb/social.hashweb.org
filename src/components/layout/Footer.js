import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const StyledFooter = styled.footer`
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto 50px;
	max-width: 1180px;
	width: 90%;
`

const Footer = () => (
	<StyledFooter>
		<Helmet>
			<script
				async
				defer
				src="https://buttons.github.io/buttons.js"
			></script>
		</Helmet>
		<a
			className="github-button"
			href="https://github.com/omBratteng/social.hashweb.org"
			data-icon="octicon-code"
			aria-label="View omBratteng/social.hashweb.org on GitHub"
		>
			View source code
		</a>
	</StyledFooter>
)

export default Footer
