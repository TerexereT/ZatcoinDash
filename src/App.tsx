import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { AppBarProvider } from './context/AppBarContext';
import Router from './router';

function App() {
	return (
		<div className='App'>
			<AppBarProvider>
				<BrowserRouter>
					<NavBar />
					<div className='App__content'>
						<Router />
					</div>
					<Footer />
				</BrowserRouter>
			</AppBarProvider>
		</div>
	);
}

export default App;
