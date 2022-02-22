import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Button } from '@mui/material';
import FormContext from 'context/FormContext';
import zatcoin from 'images/zatcoin.png';
import { FC, useContext, useState } from 'react';
import './index.scss';

export const stylesButton = {
	color: 'white !important',
	width: '164px',
	height: '44px',
	fontWeight: '700',
	fontSize: '16px',
	margin: '0 13px',
	textTransform: 'capitalize',
} as const;

export const stylesM = {};

export const stylesS = {
	width: '106px',
};

export const stylesDef = {
	background: '#053D57',
	'&:hover': {
		background: '#005278',
	},
} as const;

export const stylesSuccess = {
	background: '#16A34A',
	'&:hover': {
		background: '#22C55E',
	},
} as const;

export const stylesError = {
	background: '#BE123C',
	'&:hover': {
		background: '#E11D48',
	},
} as const;

const Profile: FC = () => {
	const [step, setStep] = useState(0);

	const { username, email, walletAddress, changeUser, changeEmail, changeWalletAddress } = useContext(FormContext);

	const stepsForm = [
		{
			field: 'Username',
			value: username,
			setter: changeUser,
			placeholder: 'Enter your user name',
			req: true,
		},
		{
			field: 'E-mail Address',
			value: email,
			setter: changeEmail,
			placeholder: 'Enter your E-mail',
			req: true,
		},
		{
			field: ' Wallet Address',
			value: walletAddress,
			setter: changeWalletAddress,
			placeholder: '0x26D...26A5',
			req: true,
		},
	];
	return (
		<div className='profile'>
			<div className='profile__content'>
				{step !== 2 && (
					<div className='profile__content-header'>
						<AccountBalanceWalletIcon style={{ marginRight: 15 }} />
						{step === 0 ? 'Wallet profile' : 'Zatcoin'}
					</div>
				)}
				{step === 2 ? (
					<div className='profile__card profile__card-2'>
						<div className='form'>
							<div className='form__logo'>
								<img src={zatcoin} alt='zatcoinLogo' />
							</div>
							<div className='form__right'>
								<div className='form__title'>
									<h1>Register</h1>
									<p>Create your account at Zatcoin.</p>
								</div>
								<div className='form__inputs'>
									{stepsForm.map((val, i) => {
										const { field, value, req, placeholder, setter } = val;
										return (
											<>
												<p>
													{field}
													{req ? '*' : ''}
												</p>
												<input placeholder={placeholder} value={value} onChange={(e) => setter(e.target.value)} />
											</>
										);
									})}
									<div className='form__buttons'>
										<Button sx={{ ...stylesButton, ...stylesS, ...stylesDef }} onClick={() => setStep(2)}>
											Register
										</Button>
										<Button sx={{ ...stylesButton, ...stylesS, ...stylesError }} onClick={() => setStep(0)}>
											Cancel
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className='profile__card profile__card-1'>
						{step === 0 && (
							<>
								<h5
									style={{
										marginBottom: '3rem',
									}}>
									Connect Your wallet to get wallet profile
								</h5>
								<Button sx={{ ...stylesButton, ...stylesDef }} onClick={() => setStep(1)}>
									Connect Now
								</Button>
							</>
						)}
						{step === 1 && (
							<>
								<p style={{ marginBottom: 26 }}>This wallet is not registered in Zatcoin yet.</p>
								<p style={{ marginBottom: 42 }}>
									You have to register and accept the
									<b> term & conditions </b>
									of Zatcoin.
								</p>
								<div className='profile__card__buttons'>
									<Button sx={{ ...stylesButton, ...stylesDef }} onClick={() => setStep(2)}>
										Register Now
									</Button>
									<Button sx={{ ...stylesButton, ...stylesError }} onClick={() => setStep(0)}>
										Disconnect
									</Button>
								</div>
							</>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
