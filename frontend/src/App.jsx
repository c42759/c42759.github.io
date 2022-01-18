import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/home'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomePage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App
