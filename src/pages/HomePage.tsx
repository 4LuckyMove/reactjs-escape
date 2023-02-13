import { FC } from 'react'
import Box from '@mui/material/Box'
import BlockBgImage from 'components/content/BlockBgImage'
import BlockFilterPost from 'components/content/BlockFilterPost'

const HomePage: FC = () => {
	return (
		<Box
			component='div'
			sx={{
				width: '100%',
			}}
		>
			<BlockBgImage />
			<BlockFilterPost />
		</Box>
	)
}

export default HomePage
