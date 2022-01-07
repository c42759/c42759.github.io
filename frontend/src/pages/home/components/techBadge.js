import { React } from 'react';

function TechBadge({ name }) {
	return (
		<li key={name} className='inline-block bg-pink-100 dark:bg-gray-500 text-pink-700 dark:text-gray-200 text-xs px-4 py-2 rounded-lg mr-1 mb-1'>
			{name}
		</li>
	);
}

export default TechBadge;
