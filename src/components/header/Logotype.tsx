import { FC } from 'react'
import Typography from '@mui/material/Typography'

interface LogotypeProps {
	label: string
}

const Logotype: FC<LogotypeProps> = ({ label }) => {
	return (
		<Typography
			variant='h4'
			noWrap
			component='a'
			href='/'
			sx={{
				mr: 2,
				display: { xs: 'none', md: 'block' },
				flexGrow: 1,
				color: 'inherit',
			}}
		>
			{label}
		</Typography>
	)
}

export default Logotype
