import Profile from 'pages/Profile';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { baseUrl, profile } from './url';

const Router: FC = () => {
	return (
		<>
			<Routes>
				<Route path={profile} element={<Profile />} />
				<Route path={baseUrl} element={<Home />} />
			</Routes>
		</>
	);
};

export default Router;
