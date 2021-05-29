import type { GetServerSideProps } from 'next'

import { Avatar, Header, Main } from 'components'
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
