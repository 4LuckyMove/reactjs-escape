import { FC } from 'react'
import Box from '@mui/material/Box'
import { ICard } from 'interface/types'
import TitleBlock from 'components/UI/TitleBlock'
import CardBlockFeatured from 'components/UI/CardBlockFeatured'
import FPost01 from 'static/featured-post-01.jpg'
import FPost02 from 'static/featured-post-02.jpg'
import AFAuthor01 from 'static/featured-post-avatar-01.png'
import AFAuthor02 from 'static/featured-post-avatar-02.png'

const cards: ICard[] = [
	{
		id: '1',
		title: 'The Road Ahead',
		description: 'The road ahead might be paved - it might not be.',
		author: 'Mat Vogels',
		avatar: AFAuthor01,
		image: FPost01,
		datePublic: 'September 25, 2015',
		category: 'Adventure',
	},
	{
		id: '2',
		title: 'From Top Down',
		description: 'Once a year, go someplace you’ve never been before.',
		author: 'William Wong',
		avatar: AFAuthor02,
		image: FPost02,
		datePublic: 'September 25, 2015',
		category: 'Adventure',
	},
]

const FeaturedPosts: FC = () => {
	return (
		<Box component='div' sx={{ mb: '60px' }}>
			<TitleBlock title='Featured Posts' />
			<Box
				component='div'
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					alignItems: 'center',
					justifyContent: { xs: 'center', md: 'space-between' },
					gap: '20px',
				}}
			>
				{cards.map(card => (
					<CardBlockFeatured card={card} />
				))}
			</Box>
		</Box>
	)
}

export default FeaturedPosts
