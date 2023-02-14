import { FC } from 'react'
import Box from '@mui/material/Box'
import Subscribe from './Subscribe'
import MenuFooter from './MenuFooter'

const footerItems = [
	{ label: 'Home', link: '/' },
	{ label: 'Categories', link: 'categories' },
	{ label: 'About', link: 'about' },
	{ label: 'Contact', link: 'contact' },
]

const Footer: FC = () => {
	return (
		<Box
			component='footer'
			className='footer__background'
			sx={{
				height: { xs: '100%', md: '378px' },
				bgcolor: '#4D565D',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<Subscribe />
			<MenuFooter items={footerItems} />
		</Box>
	)
}

export default Footer
