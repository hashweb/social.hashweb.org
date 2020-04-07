import React from 'react';
import { render } from 'react-dom';
// import { ThemeProvider } from 'styled-components';

const Body = ({text}) => {
	return (
		<p>{text}</p>
	)
}

render(
	<Body text="Hello world" />,
	document.getElementById('root')
)
