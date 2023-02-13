import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider/Divider'

interface ITitleBlockProps {
	title: string
}

const TitleBlock: FC<ITitleBlockProps> = ({ title }) => {
	return (
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
			<Typography variant='h2' color='initial' sx={{ letterSpacing: '2px' }}>
				{title}
			</Typography>
			<Divider />
		</Box>
	)
}

export default TitleBlock
