import { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'

interface DesktopMenuProps {
	pages: string[]
}

const DesktopMenu: FC<DesktopMenuProps> = ({ pages }) => {
	return (
		<Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0.2 }}>
			{pages.map(page => (
				<Button
					key={page}
					sx={{
						my: 2,
						color: 'white',
						display: 'block',
					}}
				>
					<Typography
						textAlign='center'
						variant='button'
						sx={{ letterSpacing: '0.6px' }}
					>
						{page}
					</Typography>
				</Button>
			))}
		</Box>
	)
}

export default DesktopMenu
