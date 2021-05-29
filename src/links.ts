import process from 'process'
import { googleFonts } from 'utils'
// import getConfig from 'next/config'

type Links = (string | { href: string; as?: string; type?: string })[]

// const { publicRuntimeConfig } = getConfig()
// const { assetPrefix } = publicRuntimeConfig

const devLinks: Links = [googleFonts('Fira+Code:wght@300;400;500;600;700')]

const prodLinks: Links = [
	{
		href: 'https://socialhashweb.b-cdn.net',
	},
	googleFonts('Fira+Code:wght@400;600'),
]

const globalLinks: Links = [
	{
		href: 'https://fonts.gstatic.com',
	},
]

const links: Links = [...(process.env.NODE_ENV === 'development' ? devLinks : prodLinks), ...globalLinks]

export default links
