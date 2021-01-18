import { createContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, light, dark } from 'styles'

import useTheme, { IUseTheme } from 'hooks/useTheme'

export type ContextProps = IUseTheme

export const AppContext = createContext({})

type Props = {
	children: React.ReactNode
}

const AppProvider = ({ children }: Props): JSX.Element => {
	const [theme, setTheme] = useTheme()

	return (
		<AppContext.Provider value={{ theme, setTheme }}>
			<ThemeProvider theme={theme ? dark : light}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</AppContext.Provider>
	)
}

export default AppProvider
