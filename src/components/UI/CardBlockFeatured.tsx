import { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Avatar, Box, CardActionArea } from '@mui/material'
import { ICard } from 'interface/types'

interface ICardBlock {
	card: ICard
}

const CardBlockFeatured: FC<ICardBlock> = ({ card }) => {
	return (
		<Card
			sx={{
				position: 'relative',
				width: { xs: '100%', md: '460px' },
				height: { xs: '280px', sm: '100%', md: '280px' },
			}}
		>
			<CardActionArea>
				<CardMedia
					component='img'
					image={card.image}
					alt={card.title}
					sx={{
						position: 'absolute',
						top: '0',
						left: '0',
						zIndex: 1,
						width: { xs: 'auto', sm: '100%' },
					}}
				/>
				<CardContent
					sx={{
						position: 'relative',
						zIndex: 2,
						height: '280px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						p: '20px',
					}}
				>
					<Box component='div'>
						<Box
							component='span'
							sx={{
								px: '9px',
								py: '6px',
								textTransform: 'uppercase',
								fontSize: '12px',
								lineHeight: '13px',
								borderRadius: '2px',
								color: 'white',
								bgcolor: '#DD783F',
							}}
						>
							{card.category}
						</Box>
					</Box>
					<Box component='div'>
						<Box component='div' sx={{ mb: '12px' }}>
							<Typography
								gutterBottom
								variant='h4'
								color='white'
								sx={{ mb: '6px' }}
							>
								{card.title}
							</Typography>
							<Typography
								variant='body1'
								color='rgba(250,250,250,0.7)'
								sx={{ fontSize: '14px', lineHeight: '25px' }}
							>
								{card.description}
							</Typography>
						</Box>
						<Box
							component='div'
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: '10px',
								justifyContent: 'space-between',
							}}
						>
							<Box
								component='div'
								sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
							>
								<Avatar
									src={card.avatar}
									alt={card.author}
									sx={{ width: '26px', height: '26px' }}
								/>
								<Typography
									variant='caption'
									color='rgba(250,250,250,0.7)'
									sx={{ fontSize: '12px', lineHeight: '35px' }}
								>
									{card.author}
								</Typography>
							</Box>
							<Typography
								variant='caption'
								color='rgba(250,250,250,0.7)'
								sx={{ fontSize: '12px', lineHeight: '35px' }}
							>
								{card.datePublic}
							</Typography>
						</Box>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default CardBlockFeatured
