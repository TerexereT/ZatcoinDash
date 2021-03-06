import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Button } from '@mui/material';
import { LoggedCard, ValuesLoggedCard } from 'components/Card';
import RegisterForm from 'components/RegisterForm';
import LoginContext from 'context/LoginContext';
import { FC, useContext, useState } from 'react';
import { stylesButton, stylesDef, stylesError } from 'styles/styles';
import './index.scss';

const Profile: FC = () => {
	const [step, setStep] = useState(0);
	const { logged } = useContext(LoginContext);

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
					<RegisterForm setStep={setStep} />
				) : (
					<>
						{logged ? (
							<>
								<div className='profile__card profile__card-1' style={{ alignItems: 'flex-start' }}>
									<LoggedCard />
								</div>
								<div className='profile__content-header'>
									<AccountBalanceWalletIcon style={{ marginRight: 15 }} />
									Zatcoin
								</div>
								<div className='' style={{ width: '100%' }}>
									<ValuesLoggedCard />
								</div>
							</>
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
										<h5 style={{ marginBottom: 26 }}>This wallet is not registered in Zatcoin yet.</h5>
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
					</>
				)}
			</div>
		</div>
	);
};

export default Profile;
