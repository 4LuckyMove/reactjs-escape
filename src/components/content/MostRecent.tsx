import { FC } from 'react'
import Box from '@mui/material/Box'
import TitleBlock from 'components/UI/TitleBlock'
import { ICard } from 'interface/types'
import MRPost01 from 'static/most-recent-01.jpg'
import MRPost02 from 'static/most-recent-02.jpg'
import MRPost03 from 'static/most-recent-03.jpg'
import MRPost04 from 'static/most-recent-04.jpg'
import MRPost05 from 'static/most-recent-05.jpg'
import MRPost06 from 'static/most-recent-06.jpg'
import AAuthor01 from 'static/featured-post-avatar-01.png'
import AAuthor02 from 'static/featured-post-avatar-02.png'
import CardMostRecent from 'components/UI/CardMostRecent'

const cardsMostRecent: ICard[] = [
	{
		id: '1',
		title: 'Still Standing Tall',
		description: 'Life begins at the end of your comfort zone.',
		avatar: AAuthor02,
		author: 'William Wong',
		image: MRPost01,
		category: 'Adventure',
		datePublic: '9/25/2015',
	},
	{
		id: '2',
		title: 'Sunny Side Up',
		description: 'No place is ever as bad as they tell you it’s going to be.',
		avatar: AAuthor01,
		author: 'Mat Vogels',
		image: MRPost02,
		category: 'Adventure',
		datePublic: '9/25/2015',
	},
	{
		id: '3',
		title: 'Water Falls',
		description: 'We travel not to escape life, but for life not to escape us.',
		avatar: AAuthor01,
		author: 'Mat Vogels',
		image: MRPost03,
		category: 'Adventure',
		datePublic: '9/25/2015',
	},
	{
		id: '4',
		title: 'Through the Mist',
		description:
			'Travel makes you see what a tiny place you occupy in the world.',
		avatar: AAuthor02,
		author: 'William Wong',
		image: MRPost04,
		category: 'Adventure',
		datePublic: '9/25/2015',
	},
	{
		id: '5',
		title: 'Awaken Early',
		description: 'Not all those who wander are lost.',
		avatar: AAuthor01,
		author: 'Mat Vogels',
		image: MRPost05,
		category: 'Adventure',
		datePublic: '9/25/2015',
	},
	{
		id: '6',
		title: 'Try it Always',
		description:
			'The world is a book, and those who do not travel read only one page.',
		avatar: AAuthor01,
		author: 'Mat Vogels',
		image: MRPost06,
		category: 'Adventure',
		datePublic: '9/25/2015',
	},
]

const MostRecent: FC = () => {
	return (
		<Box component='div' sx={{ mb: '60px' }}>
			<TitleBlock title='Most Recent' />
			<Box
				component='div'
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(3, 1fr)',
					},
					gap: '24px',
				}}
			>
				{cardsMostRecent.map(card => (
					<CardMostRecent key={card.id} card={card} />
				))}
			</Box>
		</Box>
	)
}

export default MostRecent