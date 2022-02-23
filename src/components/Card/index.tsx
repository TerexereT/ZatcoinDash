import BadgeIcon from '@mui/icons-material/Badge';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Box, Button, IconButton } from '@mui/material';
import { Backdrop, StyledModal } from 'components/RegisterForm';
import LoginContext from 'context/LoginContext';
import crab from 'images/50-gray-crab.svg';
import dolphin from 'images/50-gray-dolphin.svg';
import fish from 'images/50-gray-fish.svg';
import humpback from 'images/50-gray-humpback.svg';
import octopus from 'images/50-gray-octopus.svg';
import shark from 'images/50-gray-shark.svg';
import shrimp2 from 'images/50-gray-shrimp.svg';
import whale from 'images/50-gray-whale.svg';
import bnb from 'images/bnb-icon.svg';
import shrimp from 'images/shrimp.png';
import zc from 'images/zatcoin-icon.svg';
import { FC, useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { smallButton, stylesButton, stylesError, stylesS } from 'styles/styles';
import './index.scss';

interface CardProps {
	title: string;
	value: string;
	icon: any;
}
interface LoggedCardProps {
	user?: string;
	value?: string;
	icon?: any;
}

const Card: FC<CardProps> = ({ title, value, icon }) => {
	return (
		<div className='card'>
			<div className='card__title'>{title}</div>
			<div className='card__value'>{value}</div>
			<div className='card__icon'>{icon}</div>
		</div>
	);
};

const style = {
	p: '2rem 5rem',
	bgcolor: '#111827',
	color: 'white',
	borderRadius: '16px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
};

const closeButton = {
	position: 'absolute',
	right: '32px',
	top: '1rem',
} as const;

export const LoggedCard: FC<LoggedCardProps> = ({ user = 'Shrimp', value, icon }) => {
	const userTypes = [
		{
			name: 'Humpback Investor',
			desc: 'Humpback investor are users who hold more than 10 Mill Zatcoin',
			icon: humpback,
		},
		{
			name: 'Whale Investor',
			desc: 'Whale investor are users who hold between 5 Mill and 10 Mill Zatcoin',
			icon: whale,
		},
		{
			name: 'Shark Investor',
			desc: 'Shark investor are users who hold between 1 Mill and 5 Mill Zatcoin',
			icon: shark,
		},
		{
			name: 'Dolphin Investor',
			desc: 'Dolphin investor are users who hold between 500K and 1 Mill Zatcoin',
			icon: dolphin,
		},
		{
			name: 'Fish Investor',
			desc: 'Fish investor are users who hold between 100K and 500K Zatcoin',
			icon: fish,
		},
		{
			name: 'Fish Investor',
			desc: 'Fish investor are users who hold between 100K and 500K Zatcoin',
			icon: fish,
		},
		{
			name: 'Octopus Investor',
			desc: 'Octopus investor are users who hold between 10K and 100K Zatcoin',
			icon: octopus,
		},
		{
			name: 'Crab Investor',
			desc: 'Crab investor are users who hold between 1K and 10K Zatcoin',
			icon: crab,
		},
		{
			name: 'Shrimp Investor',
			desc: 'Shrimp investor are users who hold less than 1,000 Zatcoin',
			icon: shrimp2,
		},
	];

	const [modalOpen, setModalOpen] = useState(false);
	const { logout } = useContext(LoginContext);
	const handleLoggout = () => {
		logout();
	};

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);
	return (
		<>
			<div className='loggedCard'>
				<div className='loggedCard__icon'>
					<div className='loggedCard__icon-inner'>
						<img alt='userLogo' src={shrimp} />
					</div>
				</div>
				<div className='loggedCard__right'>
					<div className='loggedCard__right-title'>
						You are a {user} investor
						<IconButton
							size='small'
							edge='end'
							color='info'
							aria-label='menu'
							sx={smallButton}
							onClick={openModal}>
							<InfoOutlinedIcon sx={{ fill: '#fff' }} />
						</IconButton>
					</div>
					<div className='loggedCard__right-subtitle' style={{ textAlign: 'start' }}>
						Description:
					</div>
					<div className='loggedCard__right-subtitle'>Shrimp investor are users who hold less 1,000 Zatcoin </div>
					<div className='loggedCard__right-buttons'>
						<Button sx={{ ...stylesButton, ...stylesS, ...stylesError }} onClick={handleLoggout}>
							Disconnect
						</Button>
					</div>
				</div>
			</div>
			<StyledModal open={modalOpen} onClose={closeModal} BackdropComponent={Backdrop}>
				<Box sx={style}>
					<IconButton
						size='small'
						edge='end'
						aria-label='close'
						sx={{ ...smallButton, ...closeButton }}
						onClick={closeModal}>
						<CancelOutlinedIcon sx={{ fill: '#fff' }} />
					</IconButton>
					{userTypes.map((val, i) => {
						const { name, desc, icon } = val;
						return (
							<div className='modalInfo' key={i}>
								<div className='modalInfo__icon'>
									<ReactSVG src={icon} />
								</div>
								<div className='modalInfo__right'>
									<div className='modalInfo__title'>{name}</div>
									<div className='modalInfo__subtitle'>{desc}</div>
								</div>
							</div>
						);
					})}
				</Box>
			</StyledModal>
		</>
	);
};

export const ValuesLoggedCard: FC = () => {
	const values = [
		{
			name: 'Wallet Address',
			icon: <QrCode2Icon />,
			value: '0x26D...26A5',
		},
		{
			name: 'BNB Balance',
			icon: <ReactSVG src={bnb} />,
			value: '0.125 BNB',
		},
		{
			name: 'Zatcoin Balance',
			icon: <ReactSVG src={zc} />,
			value: '562 ZATCOIN',
		},
		{
			name: 'Zatcoin Status',
			icon: <BadgeIcon />,
			value: 'Registered Account',
		},
	];

	return (
		<div className='valuesCard'>
			{values.map((val, i) => {
				const { name, icon, value } = val;

				return (
					<div className='valuesCard__card' key={i}>
						<div className='valuesCard__card-row'>
							<div className='valuesCard__card-icon svgIcon'>{icon}</div>
							{name}
						</div>
						<div className='valuesCard__card-row valuesCard__card-value'>{value}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
