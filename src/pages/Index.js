import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
	background-color: #1d1f21;
	height: 65px;

	h1 {
		font-size: 2.25rem;
		font-style: normal;
		font-weight: 400;
		color: white;
		line-height: 65px;
		margin: 0;
		text-align: center;
	}
`

const Index = () => (
	<Header title="#web-social Hall of (f/sh)ame & majestic beards">
		<h1>#web-social Hall of (f/sh)ame & majestic beards</h1>
	</Header>
)

export default Index
