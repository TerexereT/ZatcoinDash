import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import classnames from 'classnames';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBarContext from '../../context/AppBarContext';
import { baseUrl, profile } from '../../router/url';
import './index.scss';

interface LinksInt {
	name: string;
	icon: any;
	url: string;
}

const NavBar: FC = () => {
	const { drawer, toggleDrawer } = useContext(AppBarContext);
	const links: LinksInt[] = [
		{
			name: 'Home',
			icon: <HomeIcon />,
			url: baseUrl,
		},
		{
			name: 'Profile',
			icon: <PersonIcon />,
			url: profile,
		},
	];

	return (
		<>
			<AppBar
				position='fixed'
				sx={{
					height: '60px',
					background: 'linear-gradient(90.18deg, rgba(30, 41, 59, 0.6) 2.9%, rgba(35, 71, 97, 0.3) 100.54%)',
					boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.2)',
					backdropFilter: 'blur(40px)',
				}}>
				<Toolbar>
					<IconButton
						size='medium'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2, zIndex: 2 }}
						onClick={() => {
							toggleDrawer(true);
						}}>
						<FormatAlignLeftIcon sx={{ fill: '#5fbeff' }} />
					</IconButton>
					<div className='appbar__title'>Zatcoin</div>
				</Toolbar>
			</AppBar>
			{drawer && (
				<Drawer
					anchor='left'
					open={drawer}
					onClose={() => toggleDrawer(false)}
					PaperProps={{
						sx: {
							backgroundColor: 'unset',
							top: '60px',
						},
					}}>
					<div className='drawer' onClick={() => toggleDrawer(false)}>
						<div className='drawer__title'>menu</div>
						<div className='drawer__links'>
							{links.map((value, i) => {
								const { name, icon, url } = value;
								const urlUser = window.location.pathname === url;
								return (
									<Link to={url}>
										<div
											className={classnames('drawer__links-link', {
												'drawer__links-linkSelected': urlUser,
											})}
											key={i}>
											{icon}
											{name}
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</Drawer>
			)}
		</>
	);
};

export default NavBar;
