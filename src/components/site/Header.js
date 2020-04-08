import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeader = styled.header`
	background-color: #1d1f21;
	height: 65px;
`

const Title = styled.h1`
	font-size: 2.25rem;
	font-style: normal;
	font-weight: 400;
	color: white;
	line-height: 65px;
	margin: 0;
	text-align: center;
`

const Header = ({ title }) => {
	return (
		<StyledHeader>
			<Title>{title}</Title>
		</StyledHeader>
	)
}

Header.propTypes = {
	title: PropTypes.string,
}

export default Header
