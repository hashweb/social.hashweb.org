import { createContext } from 'react'
import { Global, ThemeProvider } from '@emotion/react'

import { light, dark, appGlobalStyles } from 'styles'

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
				<Global styles={appGlobalStyles(theme ? dark : light)} />
				{children}
			</ThemeProvider>
		</AppContext.Provider>
	)
}

export default AppProvider
