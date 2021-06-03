import { React } from 'react';
import AboutMe from './aboutMe';
import EducationPath from './educationPath';
import ProfessionalPath from './professionalPath';
import Skills from './skills';

function Main() {
	return (
		<div className='bg-white dark:bg-transparent col-span-2 p-20'>
			<AboutMe />
			<Skills />
			<ProfessionalPath />
			<EducationPath />
		</div>
	);
}

export default Main;
