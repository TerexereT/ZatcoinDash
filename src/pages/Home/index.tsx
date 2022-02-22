import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import PieChartIcon from '@mui/icons-material/PieChart';
import SavingsIcon from '@mui/icons-material/Savings';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Card from 'components/Card';
import zatcoin from 'images/zatcoin.png';
import { FC } from 'react';
import './index.scss';

const Home: FC = () => {
	const items = [
		{
			title: 'Zatcoin Price',
			value: '0.00000262',
			icon: <ShowChartIcon />,
		},
		{
			title: 'Circulating Supply',
			value: '946,955,330.13',
			icon: <PieChartIcon />,
		},
		{
			title: 'MarketCap',
			value: '458,069.7548',
			icon: <AttachMoneyIcon />,
		},
		{
			title: 'Total Supply',
			value: '2,000,000,000.00',
			icon: <SavingsIcon />,
		},
		{
			title: 'Holders',
			value: '+ 2,000',
			icon: <PeopleIcon />,
		},
		{
			title: 'Total Burned Tokens',
			value: '1,053,044,669.86 Zatcoin',
			icon: <WhatshotIcon />,
		},
	];

	return (
		<div className='home'>
			<div className='home__banner'>
				<img src={zatcoin} alt='zatcoinLogo' />
			</div>
			<div className='home__content'>
				<div className='home__content-header'>
					<InfoIcon style={{ marginRight: 15 }} />
					token info.
				</div>
				<div className='home__grid'>
					{items.map(({ title, value, icon }, i) => (
						<Card key={i} title={title} value={value} icon={icon} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
