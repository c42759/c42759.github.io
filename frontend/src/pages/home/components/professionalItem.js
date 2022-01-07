import { React } from 'react';
import TechBadge from './techBadge';

function ProfessionalItem({ company, position, description, duration, technologies }) {
	return (
		<div className='mb-10'>
			<h5 className='uppercase font-semibold mb-2'>{company}</h5>
			<h6 className='uppercase mb-4'>
				{position} | {duration.start_at} - {duration.end_at}
			</h6>

			<p className='mb-6'>{description}</p>

			<h6 className='mb-2'>
				<i>Used technologies:</i>
			</h6>

			<ul className='flex flex-wrap'>
				{technologies.map((tech, key) => {
					return <TechBadge key={key} name={tech} />;
				})}
			</ul>
		</div>
	);
}

export default ProfessionalItem;
