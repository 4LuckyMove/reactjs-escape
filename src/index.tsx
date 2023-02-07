import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import escapeTheme from 'theme'
import { ThemeProvider } from '@mui/material'
import App from 'App'
import 'styles/index.scss'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<ThemeProvider theme={escapeTheme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
)
