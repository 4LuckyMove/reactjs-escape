import { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import FeaturedPosts from './FeaturedPosts'
import MostRecent from './MostRecent'

const BlockPosts: FC = () => {
	return (
		<Box component='div' sx={{ bgcolor: '#F7F7F7', pt: '60px', pb: '80px' }}>
			<Container maxWidth='md' sx={{ px: { md: 0 } }}>
				<FeaturedPosts />
				<MostRecent />
			</Container>
		</Box>
	)
}

export default BlockPosts
