import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	:root {
		font-family: 'Fira Code', monospace;
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
		text-rendering: optimizeLegibility;
		-webkit-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
		text-size-adjust: 100%;
	}
`
