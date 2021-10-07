import { ImageLoaderProps } from 'next/image'

import { IMGIX_URL } from 'site-config'

const imgixLoader = ({ src, width, quality }: ImageLoaderProps): string =>
	`${IMGIX_URL}${src}?auto=format&w=${width}&q=${quality || 75}`

export default imgixLoader
