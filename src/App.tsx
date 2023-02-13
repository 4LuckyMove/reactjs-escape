import { FC } from 'react'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Layout from 'components/Layout'
import HomePage from 'pages/HomePage'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<HomePage />} />
		</Route>
	)
)

const App: FC = () => {
	return (
		<>
			<CssBaseline />
			<RouterProvider router={router} />
		</>
	)
}

export default App
