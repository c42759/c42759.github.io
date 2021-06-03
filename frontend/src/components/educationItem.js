import { React } from 'react';

function EducationItem({ instance }) {
	let randomKey = Math.random().toString(36).substring(7) + Date.now();

	return (
		<div key={randomKey} className='mb-10'>
			<h5 className='uppercase font-semibold mb-2'>{instance.institution}</h5>
			<h6 className='uppercase mb-4'>
				{instance.course} | {instance.duration.start_at} - {instance.duration.end_at}
			</h6>

			<p className='mb-6'>{instance.description}</p>
		</div>
	);
}

export default EducationItem;
