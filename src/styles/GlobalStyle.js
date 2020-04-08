import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
	${normalize}

	* {
		margin: 0;
		padding: 0;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	:root {
		font-family: "Roboto", "Helvetica Neue", Helvetica, sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-moz-osx-font-smoothing: grayscale;
		-o-font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
		font-smoothing: antialiased;
		line-height: 1.5;
		-ms-overflow-style: -ms-autohiding-scrollbar;
		overflow-y: scroll;
		text-rendering: optimizeLegibility;
		-webkit-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
		text-size-adjust: 100%;
	}

	body {
		font-size: ${(props) => props.theme.font.size.base};
		line-height: ${(props) => props.theme.spacing.line_height};
		font-family: 'Source Sans Pro', sans-serif;
		font-style: normal;
	}
	a:link {
		${'' /* color: ${(props) => props.theme.colors.primary}; */}
		text-decoration: none;
	}

	p {
		font-size: ${(props) => props.theme.font.size.base};
	}

	h1, h2, h3, h4, h5 {
		${'' /* color: ${(props) => props.theme.colors.darkbluishgrey}; */}
		font-weight: ${(props) => props.theme.font.weight.bold};
	}

	h1 {
		font-size: 1.375rem;
	}

	h2 {
		font-size: 1.25rem;
	}

	h3 {
		font-size: 1.125rem;
	}

	h4 {
		font-size: 1rem;
	}
`
