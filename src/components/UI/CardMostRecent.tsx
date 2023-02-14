import { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Avatar, Box, CardActionArea } from '@mui/material'
import { ICard } from 'interface/types'

interface ICardMostRecent {
	card: ICard
}

const CardMostRecent: FC<ICardMostRecent> = ({ card }) => {
	return (
		<Card sx={{ maxHeight: '302px', position: 'relative' }}>
			<Box
				component='span'
				sx={{
					position: 'absolute',
					top: '10px',
					left: '10px',
					zIndex: 2,
					display: 'inline-block',
					bgcolor: 'rgba(221, 120, 63, .7)',
					borderRadius: '2px',
					border: '1px solid transparent',
					color: 'white',
					textAlign: 'center',
					py: '3px',
					px: '6px',
					fontSize: '10px',
					lineHeight: '10px',
					textTransform: 'uppercase',
					letterSpacing: '1px',
				}}
			>
				{card.category}
			</Box>
			<CardActionArea>
				<CardMedia
					component='img'
					height='150'
					image={card.image}
					alt={card.title}
				/>
				<CardContent
					sx={{
						p: 0,
						height: '152px',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<Box
						component='div'
						sx={{
							pt: '14px',
							px: '13px',
							pb: '12px',
							width: '100%',
						}}
					>
						<Typography
							gutterBottom
							variant='h4'
							component='div'
							sx={{
								fontSize: '16px',
								lineHeight: '21px',
								color: '#101315',
								mb: '6px',
							}}
						>
							{card.title}
						</Typography>
						<Typography variant='body1' color='#7A7A7A'>
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
							bgcolor: '#FCFCFC',
							borderTop: '1px solid #EFEFEF',
							pt: '12px',
							px: '13px',
							pb: '10px',
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
								color='#999'
								sx={{ fontSize: '12px', lineHeight: '35px' }}
							>
								{card.author}
							</Typography>
						</Box>
						<Typography
							variant='caption'
							color='#999'
							sx={{ fontSize: '12px', lineHeight: '35px' }}
						>
							{card.datePublic}
						</Typography>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default CardMostRecent
