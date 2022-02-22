import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { baseUrl } from './url';

const Router: FC = () => {
	return (
		<>
			<Routes>
				<Route path={baseUrl} element={<Home />} />
			</Routes>
		</>
	);
};

export default Router;
