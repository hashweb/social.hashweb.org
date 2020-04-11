import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

const Image = styled.picture`
	img {
		max-width: 100%;
		vertical-align: middle;
	}
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
	color: #673ab7;

	&:hover {
		cursor: pointer;
	}
`

const Avatar = ({ name, image, crown, website, description }) => {
	const openWebsite = () =>
		window.open(website, '_blank', 'noopener noreferrer')

	return (
		<Figure>
			<Image>
				<source
					srcSet={`/avatars/${image.replace('jpg', 'webp')}`}
					type="image/webp"
				/>
				<img src={`/avatars/${image}`} alt={name} />
			</Image>

			<Caption>
				<Name>{name}</Name>

				{(website || crown) && (
					<Icons>
						{website && (
							<WebsiteIcon
								icon={['fad', 'link']}
								onClick={openWebsite}
							/>
						)}
						{crown && (
							<FontAwesomeIcon
								icon={['fad', 'crown']}
								color="gold"
							/>
						)}
					</Icons>
				)}
				<Description>{description}</Description>
			</Caption>
		</Figure>
	)
}

Avatar.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	crown: PropTypes.bool,
	website: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	description: PropTypes.string.isRequired,
}

export default Avatar
