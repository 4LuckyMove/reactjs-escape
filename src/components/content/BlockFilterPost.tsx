import { FC } from 'react'
import {NavLink} from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const pages: { 
	label: string
	link: string 
}[] = [
	{ label: 'Nature', link: 'nature' },
	{ label: 'Photography', link: 'photography' },
	{ label: 'Relaxation', link: 'relaxation' },
	{ label: 'Vacation', link: 'vacation' },
	{ label: 'Travel', link: 'travel' },
	{ label: 'Adventure', link: 'adventure' },
]

const BlockFilterPost: FC = () => {
	return (
		<Box component='div' sx={{ height: '65px' }}>
			<Container
				maxWidth='md'
				sx={{
					px: { md: 0 },
					width: '100%',
					height: '100%',
					py: '10px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '21px',
				}}
			>
				{pages.map(page => (
					<NavLink to={page.link} className='homepage__filter'>{page.label}</NavLink>
				))}
			</Container>
		</Box>
	)
}

export default BlockFilterPost
