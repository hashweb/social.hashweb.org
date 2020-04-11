import React from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import Avatar from 'components/layout/Avatar'

const Main = styled.main`
	display: grid;
	grid-column-gap: 20px;
	grid-row-gap: 40px;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	margin: 50px auto 0;
	padding-bottom: 40px;
	max-width: 1180px;
	width: 90%;

	${media('>tablet')} {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	${media('>desktop')} {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
`

import people from 'people.json'

const App = () => {
	return (
		<>
			<Header title="#web-social Hall of (f/sh)ame & majestic beards" />
			<Main>
				{people.map((person, key) => {
					return <Avatar key={key} {...person} />
				})}
			</Main>
			<Footer />
		</>
	)
}

export default App
