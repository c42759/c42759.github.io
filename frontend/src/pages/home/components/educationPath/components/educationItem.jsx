import { React } from 'react'

function EducationItem({ institution, course, duration, description }) {
	return (
		<div className={'mb-10'}>
			<h5 className={'uppercase font-semibold mb-2'}>{institution}</h5>
			<h6 className={'uppercase mb-4'}>
				{course} | {duration.start_at} - {duration.end_at}
			</h6>

			<p className={'mb-6'}>{description}</p>
		</div>
	)
}

export default EducationItem
