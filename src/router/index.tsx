import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { baseUrl } from './url';

const Router: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={baseUrl} element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
