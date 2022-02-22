import { FormProvider } from 'context/FormContext';
import { LoginProvider } from 'context/LoginContext';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { AppBarProvider } from './context/AppBarContext';
import Router from './router';

function App() {
	return (
		<div className='App'>
			<LoginProvider>
				<AppBarProvider>
					<FormProvider>
						<BrowserRouter>
							<NavBar />
							<div className='App__content'>
								<Router />
							</div>
							<Footer />
						</BrowserRouter>
					</FormProvider>
				</AppBarProvider>
			</LoginProvider>
		</div>
	);
}

export default App;
