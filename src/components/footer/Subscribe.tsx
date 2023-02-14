import { FC } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

const Subscribe: FC = () => (
	<Container maxWidth='md' sx={{ px: { md: 0 }, pt: '82px', pb: '90px' }}>
		<Box
			component='div'
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '16px',
				mb: '20px',
			}}
		>
			<Typography
				variant='h2'
				color='#EFEFEF'
				sx={{
					fontSize: '25px',
					lineHeight: '30px',
				}}
			>
				Stay in Touch
			</Typography>
			<Divider />
		</Box>
		<Box component='div'>
			<Box
				sx={{
					width: 500,
					height: '50px',
					maxWidth: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					ml: 'auto',
					mr: 'auto',
				}}
			>
				<input
					type='email'
					name='subscribe'
					id='subscribe'
					placeholder='Enter your email address' />
				<Button
					variant='contained'
					sx={{
						color: '#F8F8F8',
						bgcolor: 'rgba(255,255,255,0.28)',
						fontSize: '12px',
						fontFamily: 'Oxygen',
						textTransform: 'capitalize',
						letterSpacing: '1px',
						height: '100%',
						py: '18px',
						px: '43px',
						'&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
						borderRadius: '0 3px 3px 0',
					}}
				>
					Submit
				</Button>
			</Box>
		</Box>
	</Container>
)

export default Subscribe