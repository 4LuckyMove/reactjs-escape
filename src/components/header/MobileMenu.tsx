import { FC, useState } from 'react'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

interface MobileMenuProps {
	pages: string[]
}

const MobileMenu: FC<MobileMenuProps> = ({ pages }) => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<>
			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					onClick={handleOpenNavMenu}
					color='inherit'
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id='menu-appbar'
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
					}}
				>
					{pages.map(page => (
						<MenuItem key={page} onClick={handleCloseNavMenu}>
							<Typography
								textAlign='center'
								variant='button'
								sx={{ letterSpacing: '0.6px' }}
							>
								{page}
							</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<Typography
				variant='h4'
				noWrap
				component='a'
				href=''
				sx={{
					mr: 2,
					display: { xs: 'flex', md: 'none' },
					flexGrow: 1,
					color: 'inherit',
				}}
			>
				Escape.
			</Typography>
		</>
	)
}

export default MobileMenu