import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { FC } from 'react';
import './index.scss';
interface socialsInt {
	name: string;
	icon: any;
}

const Footer: FC = () => {
	const socials: socialsInt[] = [
		{
			name: 'Website',
			icon: <LanguageIcon />,
		},
		{
			name: 'Telegram',
			icon: <TelegramIcon />,
		},
		{
			name: 'Twitter',
			icon: <TwitterIcon />,
		},
	];
	return (
		<div className='footer'>
			<div className='footer__left'>
				Copyright © <b>Zatcoin</b> - All rights reserved
			</div>
			<div className='footer__right'>
				{socials.map((value, i) => {
					const { name, icon } = value;
					return (
						<div key={i} className='footer__social'>
							<div className='footer__social-icon'>{icon}</div>
							{name}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Footer;
