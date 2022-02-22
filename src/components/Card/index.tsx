import BadgeIcon from '@mui/icons-material/Badge';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Button } from '@mui/material';
import LoginContext from 'context/LoginContext';
import bnb from 'images/bnb-icon.svg';
import shrimp from 'images/shrimp.png';
import zc from 'images/zatcoin-icon.svg';
import { FC, useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { stylesButton, stylesError, stylesS } from 'styles/styles';
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

export const LoggedCard: FC<LoggedCardProps> = ({ user = 'Shrimp', value, icon }) => {
	const { logout } = useContext(LoginContext);
	const handleLoggout = () => {
		logout();
	};
	return (
		<div className='loggedCard'>
			<div className='loggedCard__icon'>
				<div className='loggedCard__icon-inner'>
					<img alt='userLogo' src={shrimp} />
				</div>
			</div>
			<div className='loggedCard__right'>
				<div className='loggedCard__right-title'>You are a {user} investor</div>
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
