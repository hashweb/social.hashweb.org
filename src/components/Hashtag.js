import styled from 'styled-components'

const Icon = styled.svg`
	fill: ${(props) => props.theme.colors.red};
	margin-right: 0.75rem;
	max-width: 1.25rem;
	position: relative;
	top: 2px;

	@media (min-width: 768px) {
		max-width: 1.75rem;
	}
`

const Hashtag = () => (
	<Icon
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		focusable="false"
		className="svg-inline--fa"
		role="img"
		viewBox="0 0 448 512"
	>
		<path d="M444 190l4-24c1-7-5-14-12-14h-89l19-106c1-7-4-14-12-14h-24a12 12 0 00-12 10l-20 110H187l19-106c1-7-4-14-12-14h-24a12 12 0 00-12 10l-20 110H45a12 12 0 00-12 10l-4 24c-2 7 4 14 12 14h89l-20 112H16a12 12 0 00-12 10l-4 24c-1 7 5 14 12 14h89L82 466c-1 7 4 14 12 14h24a12 12 0 0012-10l20-110h111l-19 106c-1 7 4 14 12 14h24a12 12 0 0012-10l20-110h93a12 12 0 0012-10l4-24c2-7-4-14-12-14h-89l20-112h94a12 12 0 0012-10zM270 312H158l20-112h112l-20 112z" />
	</Icon>
)

export default Hashtag
