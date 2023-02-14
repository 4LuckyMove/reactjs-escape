import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IMenuFooter {
	items: {
		label: string
		link: string
	}[]
}

const MenuFooter: FC<IMenuFooter> = ({ items }) => {
	return (
		<Box
			component='div'
			sx={{
				bgcolor: 'rgba(35,47,56,0.6)',
				width: '100%',
				pt: '30px',
				pb: '32px',
				borderTop: '1px solid rgba(255,255,255,0.12)',
			}}
		>
			<Container
				maxWidth='md'
				sx={{
					px: { md: 0 },
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					flexWrap: { xs: 'wrap', md: 'nowrap' },
					gap: '20px',
				}}
			>
				<Typography
					variant='h4'
					component='div'
					sx={{ color: 'white', fontSize: '26px', lineHeight: '26px' }}
				>
					Escape.
				</Typography>
				<Box sx={{ display: 'flex', gap: '20px' }}>
					{items.map(item => (
						<Link key={item.link} to={item.link} className='footer__nav-link'>
							{item.label}
						</Link>
					))}
				</Box>
			</Container>
		</Box>
	)
}

export default MenuFooter
