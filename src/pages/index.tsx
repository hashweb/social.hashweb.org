import type { GetServerSideProps } from 'next'

import Main from 'components/layout/Main'
import Header from 'components/layout/Header'
import Avatar from 'components/layout/Avatar'
import people from 'people.json'

const Index = (): JSX.Element => {
	return (
		<>
			<Header title="web-social Hall of (f/sh)ame &amp; majestic beards" />
			<Main>
				{people.map((person, key) => (
					<Avatar key={key} {...person} />
				))}
			</Main>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {}, // will be passed to the page component as props
	}
}

export default Index
