import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// COMPONENTS
import Loading from './components/loading/Loading';
import Navigation from './components/nav/Navigation';
import Footer from './components/footer/Footer';
// LAZY-IMPORT PAGES
const Home = lazy(() => import('./components/pages/home/Home'));
const Services = lazy(() => import('./components/pages/services/Services'));
const Portfolio = lazy(() => import('./components/pages/portfolio/Portfolio'));
const Contact = lazy(() => import('./components/pages/contact/Contact'));

function App(){
	return (
		<BrowserRouter>
			<Navigation />
			<main className='q-main'>
				<Switch>
					<Suspense fallback={<Loading />}>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/services'>
							<Services />
						</Route>
						<Route exact path='/portfolio'>
							<Portfolio />
						</Route>
						<Route exact path='/contact'>
							<Contact />
						</Route>
					</Suspense>
				</Switch>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;