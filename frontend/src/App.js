import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Weather from './pages/weather';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/weather/' component={Weather} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
