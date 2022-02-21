import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { FC, useContext } from 'react';
import AppBarContext from '../../context/AppBarContext';
import './index.scss';

const NavBar: FC = () => {
	const { drawer, toggleDrawer } = useContext(AppBarContext);
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
				<div className='drawer' onClick={() => toggleDrawer(false)}>
					<div className='drawer__title'>menu</div>
					<div className='drawer__links'></div>
				</div>
			)}
		</>
	);
};

export default NavBar;
