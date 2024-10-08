import { React } from 'react'
import ProfessionalItem from './components/professionalItem'

function ProfessionalPath() {
	let payload = [
		{
			company: 'ETAS (T&S and Lisbon Nearshore Consultant)',
			position: 'DevOps Software Engineer',
			duration: {
				start_at: 'March 2024',
				end_at: 'Present',
			},
			description:
				'As a DevOps Software Engineer working with Jenkins, I focused on automating and streamlining the software development lifecycle, particularly around CI/CD. I used Jenkins to automate tasks such as building, testing, and deploying code, configuring pipelines to ensure efficient workflows. I integrated Jenkins with version control systems like Git, managed and customized plugins to extend Jenkins\' functionality, and ensured the system remained scalable, secure, and reliable.',
			technologies: ['Groovy', 'CI/CD'],
		},
		{
			company: 'ETAS (T&S and Lisbon Nearshore Consultant)',
			position: 'Software Engineer',
			duration: {
				start_at: 'March 2023',
				end_at: 'March 2024',
			},
			description:
				'Debugging C Embeeded Sofware destinated to Automotive Integrated Hardware, along the refactoring and fixing of already developed battery of tests. Also, Supporting a team with Software Development of a platform for internal use for tests integration, focused on the automation of configuration processes between several teams.',
			technologies: ['C', 'Python', 'ReactJS', 'NodeJs', 'SQL', 'Shell Scripting', 'Docker', 'CI/CD', 'Linux'],
		},
		{
			company: 'Broadvoice',
			position: 'Arch and DevOps Software Engineer',
			duration: {
				start_at: 'March 2022',
				end_at: 'April 2023',
			},
			description:
				'Design Architecture and DevOps for CCaaS platform, focused on stability and scalability using virtualization technology. Implementing a CI/CD workflow in the project and structuring work methods and software development to increase productivity at the team level.',
			technologies: ['Docker', 'Python', 'NodeJs', 'SQL', 'Shell Scripting', 'CI/CD', 'Github', 'Linux'],
		},
		{
			company: 'Bosch (Alten Consultant)',
			position: 'Fullstack Software Engineer',
			duration: {
				start_at: 'January 2021',
				end_at: 'February 2022',
			},
			description:
				'Software Projection and Development of a platform for internal use for tests integration, focused on the automation of configuration processes between several teams. Structuring and implementation of development and deployment solutions for projects. Structuring work methods and software development to increase productivity at the team level.',
			technologies: ['React', 'Redux', 'Python', 'Django', 'SQL', 'Docker', 'Shell Scripting', 'Linux'],
		},
		{
			company: 'Primetag SA',
			position: 'Backend Software Engineer',
			duration: {
				start_at: 'September 2019',
				end_at: 'January 2021',
			},
			description:
				"Software Projection and Development for the company's analysis platform between Brands and Content Creators, focusing on the use of real metrics/data for presenting statistics for the customers' campaigns. Part of the task is as Product Owner, thus allowing greater responsibility when it comes to the delivery of a certain deliverable, as well as Software Engineer assigned to other projects of other Product Owners.",
			technologies: ['Python', 'Django', 'Flask', 'FastAPI', 'SQL', 'Docker', 'Shell Scripting', 'Linux'],
		},
		{
			company: 'Evoke Lda',
			position: 'Project Manager & Fullstack Software Engineer',
			duration: {
				start_at: 'May 2017',
				end_at: 'September 2019',
			},
			description:
				"During the indicated period, my main role was Project Manager, also adding the tasks of Software Developer, Eelectrotechnician, and R&D. In this opportunity, I had the opportunity to learn more about areas where I wasn't comfortable with (without doubt, the IoT area, was one of them). I improved my knowledge in programming languages like Javascript with support for technologies like jQuery and NodeJS and also Bash Scripting.",
			technologies: ['PHP', 'SQL', 'C', 'Processing', 'BO3', 'LAMP Stack', 'NodeJs', 'jQuery', 'Shell Scripting', 'Linux', 'Windows', 'Mac OS'],
		},
		{
			company: 'Critec Lda',
			position: 'Project Manager & Fullstack Software Engineer',
			duration: {
				start_at: 'January 2015',
				end_at: 'May 2017',
			},
			description:
				'During 18 months, my tasks were the development of websites and web apps aimed at the corporate world and in the online and offline environment. After that time, my main job was updated to Project Manager, where I start to handle the entire production team (16 members), including the design and programming team.',
			technologies: ['PHP', 'SQL', 'BO3', 'LAMP Stack', 'jQuery', 'ShellScripting', 'Linux'],
		},
		{
			company: 'Incograf Lda',
			position: 'Fullstack Software Engineer',
			duration: {
				start_at: 'January 2012',
				end_at: 'January 2015',
			},
			description:
				'Production of more than a hundred websites, most of which are destined to the corporate environment and services presentation, also going through the development/configuration of online stores for the most diverse areas. I have deepened knowledge previously obtained concerning CMS (Joomla, WordPress, Drupal, Prestashop, and OpenCart) and in programming languages such as PHP, SQL, Javascript, and Bash Scripting. Part of the job was client and team management, software projection, and development.',
			technologies: ['PHP', 'SQL', 'LAMP Stack', 'jQuery', 'Linux', 'Windows', 'Mac OS'],
		},
	]

	return (
		<div className={'mb-20'}>
			<h3 className={'uppercase text-pink-500 font-semibold mb-10'}>Professional Path</h3>

			{payload.map((instance, key) => {
				return <ProfessionalItem key={key} {...instance} />;
			})}

			<hr className={'mt-20'} />
		</div>
	);
}

export default ProfessionalPath
