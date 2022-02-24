/* eslint-disable @typescript-eslint/no-unused-vars */
import ModalUnstyled from '@mui/base/ModalUnstyled';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from '@mui/material';
import { Box, styled } from '@mui/system';
import FormContext from 'context/FormContext';
import LoginContext from 'context/LoginContext';
import zatcoin from 'images/Logo-zatcoin.svg';
import React, { FC, Fragment, useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { stylesButton, stylesDef, stylesError, stylesS, stylesSuccess } from 'styles/styles';
import './index.scss';

interface RegisterFormInt {
	setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const StyledModal = styled(ModalUnstyled)`
	position: fixed;
	z-index: 1300;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Backdrop = styled('div')`
	z-index: -1;
	position: fixed;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	-webkit-tap-highlight-color: transparent;
`;

const style = {
	width: '429px',
	p: '54px 0',
	bgcolor: '#111827',
	color: 'white',
	borderRadius: '16px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
};

const RegisterForm: FC<RegisterFormInt> = ({ setStep }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { username, email, walletAddress, changeUser, changeEmail, changeWalletAddress } = useContext(FormContext);
	const { login } = useContext(LoginContext);

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

	const handleFinish = () => {
		login();
		setStep(0);
	};
	return (
		<>
			<div className='profile__card'>
				<div className='form'>
					<div className='form__logo'>
						<ReactSVG src={zatcoin} />
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
									<Fragment key={i}>
										<p key={i + i + i + i}>
											{field}
											{req ? '*' : ''}
										</p>
										<input
											key={field}
											placeholder={placeholder}
											value={value}
											onChange={(e) => setter(e.target.value)}
										/>
									</Fragment>
								);
							})}
						</div>
						<div className='form__buttons'>
							<Button
								sx={{ ...stylesButton, ...stylesS, ...stylesDef }}
								onClick={() => {
									setStep(2);
									handleOpen();
									console.log('form values', {
										username,
										email,
										walletAddress,
									});
								}}>
								Register
							</Button>
							<Button sx={{ ...stylesButton, ...stylesS, ...stylesError }} onClick={() => setStep(1)}>
								Cancel
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<StyledModal
					aria-labelledby='unstyled-modal-title'
					aria-describedby='unstyled-modal-description'
					open={open}
					BackdropComponent={Backdrop}>
					<Box sx={style} className='modal'>
						<CheckCircleOutlineIcon />
						<div className='modal__title'>SUCCESS</div>
						<div className='modal__subtitle'>Congratulations, your account has been successfully created</div>
						<Button sx={{ ...stylesButton, ...stylesS, ...stylesSuccess }} onClick={handleFinish}>
							Continue
						</Button>
					</Box>
				</StyledModal>
			</div>
		</>
	);
};

export default RegisterForm;
