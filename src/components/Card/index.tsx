import { FC } from 'react';
import './index.scss';

interface CardProps {
	title: string;
	value: string;
	icon: any;
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

export default Card;
