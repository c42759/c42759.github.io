import { React } from 'react';
import TechBadge from './techBadge';

function ProfessionalItem({ instance }) {
	return (
		<div className='mb-10'>
			<h5 className='uppercase font-semibold mb-2'>{instance.company}</h5>
			<h6 className='uppercase mb-4'>
				{instance.position} | {instance.duration.start_at} - {instance.duration.end_at}
			</h6>

			<p className='mb-6'>{instance.description}</p>

			<h6 className='mb-2'>
				<i>Used technologies:</i>
			</h6>

			<ul className='flex flex-wrap'>
				{instance.technologies.map((tech) => {
					let randomKey = Math.random().toString(36).substring(7) + Date.now();

					return <TechBadge key={randomKey} name={tech} />;
				})}
			</ul>
		</div>
	);
}

export default ProfessionalItem;
