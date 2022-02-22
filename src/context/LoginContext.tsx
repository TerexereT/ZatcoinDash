import { createContext, ReactChild, ReactChildren, useState } from 'react';

interface Props {
	children: ReactChild | ReactChildren;
}

interface LoginInt {
	logged: boolean;
	username: string;
	password: string;
	walletAddress: string;
	login(): void;
	logout(): void;
}

const LoginContext = createContext<LoginInt>({
	logged: false,
	username: '',
	password: '',
	walletAddress: '',
	login: () => {},
	logout: () => {},
});

export const LoginProvider = ({ children }: Props) => {
	const [logged, setLogged] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [walletAddress, setWalletAddress] = useState('');

	const login = () => {
		setLogged(true);
	};

	const logout = () => {
		setLogged(false);
	};

	return (
		<LoginContext.Provider
			value={{
				logged,
				username,
				password,
				walletAddress,
				login,
				logout,
			}}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContext;
