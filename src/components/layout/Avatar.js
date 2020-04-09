import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WebsiteIcon from 'components/WebsiteIcon'

const Figure = styled.figure`
	margin: 0;
	padding: 0;
	box-shadow: 0 4px 7px rgba(0, 0, 0, 0.23), 0 8px 25px rgba(0, 0, 0, 0.05);
	padding: 5px;
`

const Image = styled.img`
	max-width: 100%;
`

const Name = styled.p`
	font-size: 1.2rem;
`

const Avatar = ({ name, image, website, description }) => {
	return (
		<Figure>
			<Image src={`/avatars/${image}`} alt={name} />
			<Name>
				<strong>{name}</strong>
				{website && <WebsiteIcon url={website} />}
			</Name>
			<p>{description}</p>
		</Figure>
	)
}

Avatar.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	website: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	description: PropTypes.string.isRequired,
}

export default Avatar
