import { FC } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography/Typography'

const BlockBgImage: FC = () => {
	return (
		<Box
			component='div'
			className='homepage__background'
			sx={{
				width: '100%',
				height: '500px',
			}}
		>
			<Container
				maxWidth='md'
				sx={{
					px: { md: 0 },
					py: { xs: '56px', sm: '64px' },
					height: '100%',
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					zIndex: 3,
				}}
			>
				<Box component='div' sx={{ color: 'white', textAlign: 'center' }}>
					<Typography
						component='h3'
						sx={{
							color: 'white',
							fontSize: { xs: '2.4615rem', sm: '3.8462rem' },
							lineHeight: '51px',
							fontFamily: 'Lora',
							mb: '20px',
						}}
					>
						Let's do it together.
					</Typography>
					<Typography
						component='p'
						sx={{
							color: 'rgba(255,255,255,.63)',
							fontSize: { xs: '0.9231rem', sm: '1.3077rem' },
							mb: '31px',
						}}
					>
						We travel the world in search of stories. Come along for the ride.
					</Typography>
					<Link to='latest' className='homepage__main-link'>
						View Latest Posts
					</Link>
				</Box>
			</Container>
		</Box>
	)
}

export default BlockBgImage