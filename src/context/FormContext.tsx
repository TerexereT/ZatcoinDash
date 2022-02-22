/* eslint-disable no-unused-vars */
import { createContext, ReactChild, ReactChildren, useState } from 'react';

interface Props {
	children: ReactChild | ReactChildren;
}

interface FormInt {
	username: string;
	email: string;
	walletAddress: string;
	changeUser(value: string): void;
	changeEmail(value: string): void;
	changeWalletAddress(value: string): void;
}

const FormContext = createContext<FormInt>({
	username: '',
	email: '',
	walletAddress: '',
	changeUser: () => {},
	changeEmail: () => {},
	changeWalletAddress: () => {},
});

export const FormProvider = ({ children }: Props) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [walletAddress, setWalletAddress] = useState('');

	const changeUser = (value: string) => {
		setUsername(value);
	};
	const changeEmail = (value: string) => {
		setEmail(value);
	};
	const changeWalletAddress = (value: string) => {
		setWalletAddress(value);
	};

	return (
		<FormContext.Provider
			value={{
				username,
				email,
				walletAddress,
				changeUser,
				changeEmail,
				changeWalletAddress,
			}}>
			{children}
		</FormContext.Provider>
	);
};

export default FormContext;
