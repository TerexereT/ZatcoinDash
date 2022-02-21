import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { AppBarProvider } from './context/AppBarContext';
import Router from './router';

function App() {
	return (
		<div className='App'>
			<AppBarProvider>
				<>
					<NavBar />
					<div className='App__content'>
						<Router />
					</div>
					<Footer />
				</>
			</AppBarProvider>
		</div>
	);
}

export default App;
