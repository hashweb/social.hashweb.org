import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { assetPrefix } = publicRuntimeConfig

const Figure = styled.figure`
	margin: 0;
	padding: 0;
	box-shadow: 0 4px 7px rgba(0, 0, 0, 0.23), 0 8px 25px rgba(0, 0, 0, 0.05);
`

const Caption = styled.figcaption`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	padding: 0.75rem 1rem 0.5rem;
`

const Name = styled.p`
	font-size: 1.2rem;
	font-weight: 600;
`

const Description = styled.p`
	margin-top: 0.5rem;
	width: 100%;
`

const Icons = styled.div`
	margin-left: 0.75rem;
	font-size: 16px;

	svg:not(:last-child) {
		margin-right: 8px;
	}
`

const WebsiteIcon = styled(FontAwesomeIcon)`
	color: ${(props) => props.theme.colors.red};

	&:hover {
		cursor: pointer;
	}
`

interface Props {
	name: string
	image: string
	crown?: boolean
	website?: string
	description: string
}

const Avatar = ({ name, image, crown, website, description }: Props): JSX.Element => {
	const openWebsite = () => window.open(website, '_blank', 'noopener noreferrer')

	return (
		<Figure>
			<Image src={`${assetPrefix}/avatars/${image}`} alt={name} width="280" height="280" />

			<Caption>
				<Name>{name}</Name>

				{(website || crown) && (
					<Icons>
						{website && <WebsiteIcon icon={['fad', 'link']} onClick={openWebsite} />}
						{crown && <FontAwesomeIcon icon={['fad', 'crown']} color="gold" />}
					</Icons>
				)}
				<Description>{description}</Description>
			</Caption>
		</Figure>
	)
}

export default Avatar
