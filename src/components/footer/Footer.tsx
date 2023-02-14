import { FC } from 'react'
import Box from '@mui/material/Box'
import {
	Button,
	Container,
	Divider,
	Typography,
} from '@mui/material'
import { fontSize } from '@mui/system'

const Footer: FC = () => {
	return (
		<Box
			component='footer'
			className='footer__background'
			sx={{
				height: { xs: '100%', md: '378px' },
				bgcolor: '#4D565D',
			}}
		>
			<Container maxWidth='md' sx={{ px: { md: 0 }, pt: '80px', pb: '90px' }}>
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
				<Box component='div' sx={{}}>
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
							placeholder='Enter your email address'
						/>
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
		</Box>
	)
}

export default Footer
