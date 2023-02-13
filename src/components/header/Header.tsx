import { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import MobileMenu from './MobileMenu'
import Logotype from './Logotype'
import DesktopMenu from './DesktopMenu'
import UserMenu from './UserMenu'

const pages = ['Categories', 'About', 'Contact']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Header: FC = () => {
	return (
		<AppBar position='absolute' color='transparent'>
			<Container maxWidth='md' sx={{ px: { md: 0 } }}>
				<Toolbar disableGutters>
					<Logotype label='Escape.' />
					<MobileMenu pages={pages} />
					<DesktopMenu pages={pages} />
					<UserMenu settings={settings} />
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header
