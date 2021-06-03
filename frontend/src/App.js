import Sidebar from './components/sidebar';
import Main from './components/main';

function App() {
	return (
		<section className='App bg-gray-200  dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-sans text-md'>
			<div className='max-w-screen-2xl max-w-3/4 object-center mx-auto grid grid-cols-3'>
				<Sidebar />
				<Main />
			</div>
		</section>
	);
}

export default App;
