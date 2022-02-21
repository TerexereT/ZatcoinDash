import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Router from './router';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Router />
			<Footer />
		</div>
	);
}

export default App;
