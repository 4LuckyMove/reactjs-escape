import { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

interface UserMenuProps {
	settings: string[]
}

const UserMenu: FC<UserMenuProps> = ({ settings }) => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}
	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{settings.map(setting => (
					<MenuItem key={setting} onClick={handleCloseUserMenu}>
						<Typography textAlign='center'>{setting}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	)
}

export default UserMenu
