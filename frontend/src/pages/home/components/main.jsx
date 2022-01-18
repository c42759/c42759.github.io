import { React } from 'react'

import AboutMe from './aboutMe'
import EducationPath from './educationPath'
import ProfessionalPath from './professionalPath'
import Skills from './skills'
import MySetup from './mySetup'

function Main() {
	return (
		<div className={'bg-white dark:bg-transparent md:col-span-2 p-10 md:p-20'}>
			<AboutMe />
			<Skills />
			<ProfessionalPath />
			<EducationPath />
			<MySetup />
		</div>
	);
}

export default Main
