import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHover } from '@react-aria/interactions'
import { useFocusRing } from '@react-aria/focus'
import { size } from 'polished'

import ToggleTheme from 'components/ToggleTheme'
import Hashtag from 'components/Hashtag'

const StyledHeader = styled.header`
	background-color: #1d1f21;
	color: white;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	height: 65px;
	padding: 0 16px;
	position: relative;
`

const Title = styled.h1`
	flex: 1;
	align-self: center;
	font-size: 2.25rem;
	font-style: normal;
	font-weight: 400;
	line-height: 65px;
	text-align: center;
`

interface Github {
	isHovered: boolean
	isFocused: boolean
}
const Github = styled.a<Github>`
	${size('3rem')}
	align-items: center;
	align-self: center;
	border-radius: 100%;
	color: white;
	display: flex;
	font-size: 3rem;
	justify-content: center;
	margin: 0;

	&:focus {
		box-shadow: 0px 0px 0px 2px #005fcc;
		outline: 0;
	}

	span {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`

interface Props {
	title: string
}

const Header = ({ title }: Props): JSX.Element => {
	const { hoverProps, isHovered } = useHover({})
	const { focusProps, isFocused } = useFocusRing()

	return (
		<StyledHeader>
			<ToggleTheme />
			<Title>
				<Hashtag />
				{title}
			</Title>

			<Github
				{...hoverProps}
				{...focusProps}
				isHovered={isHovered}
				isFocused={isFocused}
				href="https://github.com/hashweb/social.hashweb.org"
				target="_blank"
				aria-label="GitHub repo"
				rel="noopener noreferrer"
			>
				<span>view the source code</span>
				<FontAwesomeIcon icon={['fab', 'github']} />
			</Github>
		</StyledHeader>
	)
}

export default Header
