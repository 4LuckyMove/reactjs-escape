import { FC } from 'react'
import Box from '@mui/material/Box'
import BlockBgImage from 'components/content/BlockBgImage'
import BlockFilterPost from 'components/content/BlockFilterPost'
import BlockPosts from 'components/content/BlockPosts'

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
			<BlockPosts />
		</Box>
	)
}

export default HomePage
