import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledHeader = styled.header`
	background-color: #1d1f21;
	color: white;
	height: 65px;
	position: relative;
`

const Title = styled.h1`
	font-size: 2.25rem;
	font-style: normal;
	font-weight: 400;
	line-height: 65px;
	margin: 0;
	text-align: center;
`

const Github = styled.a`
	color: white;
	font-size: 3rem;
	height: 65px;
	position: absolute;
	right: 16px;
	top: 0;

	span {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		whitespace: nowrap;
		width: 1px;
	}
`

const Header = ({ title }) => (
	<StyledHeader>
		<Title>{title}</Title>

		<Github
			href="https://github.com/omBratteng/social.hashweb.org"
			target="_blank"
			alt="GitHub repo"
			rel="noopener noreferrer"
		>
			<span>view the source code</span>
			<FontAwesomeIcon icon={['fab', 'github']} />
		</Github>
	</StyledHeader>
)

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header
