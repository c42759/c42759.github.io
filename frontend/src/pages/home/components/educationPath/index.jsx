import { React } from 'react'
import EducationItem from './components/educationItem'

function EducationPath() {
	let payload = [
		{
			institution: 'EasyTalk',
			course: 'English Course',
			duration: {
				start_at: 'October 2023',
				end_at: 'February 2024',
			},
			description:
				'I completed a 40-hour English course to strengthen and certify my language skills, as well as to refine my understanding of advanced grammar and communication techniques.',
		},
		{
			institution: 'Galileu',
			course: 'PHP Course',
			duration: {
				start_at: 'September 2012',
				end_at: 'October 2012',
			},
			description:
				'For 40 hours I attended the PHP course to consolidate and certify my knowledge in this technology, as well as to finish my learning concerning the use of OOP.',
		},
		{
			institution: 'Aveiro University',
			course: 'Computer Engineering',
			duration: {
				start_at: 'September 2010',
				end_at: 'January 2012',
			},
			description:
				'I attended the course on Technologies and Information Systems (now called Computer Engineering) during the period indicated, having the opportunity to absorb knowledge in the area of Management, Digital Systems, Operating Systems, and Programming (Java), among other subjects.',
		},
		{
			institution: 'IPSB',
			course: 'Computer Technology',
			duration: {
				start_at: 'September 2007',
				end_at: 'September 2010',
			},
			description:
				'Student of the Computer Technological course dedicated to the Hardware, Management and Maintenance of Computer Networks during the period indicated, having the opportunity to absorb knowledge in a few programming languages such as Pascal, Visual Basic, C ++ and PHP, as well in development and implementation of computer networks.',
		},
	]

	return (
		<div>
			<h3 className={'uppercase text-pink-500 font-semibold mb-10'}>Education Path</h3>

			{payload.map((instance, key) => {
				return <EducationItem key={key} {...instance} />
			})}
		</div>
	)
}

export default EducationPath
