/* eslint-disable no-unused-vars */
import { createContext, ReactChild, ReactChildren, useState } from 'react';

interface Props {
	children: ReactChild | ReactChildren;
}

interface AppBarInt {
	drawer: boolean;
	toggleDrawer(value: boolean): void;
}

const AppBarContext = createContext<AppBarInt>({
	drawer: false,
	toggleDrawer: () => {},
});

export const AppBarProvider = ({ children }: Props) => {
	const [drawer, setDrawer] = useState(false);

	const toggleDrawer = (value: boolean) => {
		setDrawer(value);
	};

	return (
		<AppBarContext.Provider
			value={{
				drawer,
				toggleDrawer,
			}}>
			{children}
		</AppBarContext.Provider>
	);
};

export default AppBarContext;
