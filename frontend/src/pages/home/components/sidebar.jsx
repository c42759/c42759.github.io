import React from 'react'
import SocialList from './socialList'


function Sidebar() {
	const htmlClasses = document.querySelector('html').classList;

	// htmlClasses.add('dark')
	localStorage.theme = 'dark'

	function changeColorSchema() {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			htmlClasses.remove('dark')
			localStorage.removeItem('theme')
		} else {
			htmlClasses.add('dark')
			localStorage.theme = 'dark'
		}
	}

	return (
		<div className={'self-auto pt-20 pb-20 border-gray-300 dark:border-gray-600 border-l border-r'}>
			{/* Avatar */}
			<img
				className={'filter grayscale max-w-3/4 rounded-full object-center mb-10 mx-auto'}
				src={`${process.env.PUBLIC_URL}/avatar.jpg`}
				alt='Carlos Santos Avatar'
			/>

			{/* Identification */}
			<h1 className={'uppercase text-center mb-1'}>Carlos Santos</h1>
			<h3 className={'uppercase text-center  mb-10'}>Software Engineer</h3>

			{/* Social List Link */}
			<SocialList />

			{/* Languages */}
			<p className={'text-center mb-20'}>
				Both used every day,
				<br />
				Portuguese
				<br />
				English
			</p>

			<p className={'text-center mb-10'}>
				Too dark for you?
				<br />
				run{' '}
				<strong className={'cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out'} onClick={changeColorSchema}>
					changeColorSchema
				</strong>{' '}
				function
				<br />
				in the console.
			</p>

			<p className={'text-center'}>
				Get in touch
				<br />
				<a href='mailto:c42759@gmail.com' className={'text-pink-500'}>c42759@gmail.com</a>
			</p>
		</div>
	);
}

export default Sidebar
