import { React } from 'react'
import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from 'react-icons/ai'

function SocialList() {
	return (
		<div id='social' className={'grid grid-cols-3 mb-20 lg:max-w-1/2 object-center mx-auto'}>
			{/* Github */}
			<div className={'justify-self-center'}>
				<a title='Github' alt='Gitbub Profile' href='https://github.com/c42759' target='_blank' rel='noreferrer'>
					<AiFillGithub size='1.5em' />
				</a>
			</div>

			{/* Gitlab */}
			<div className={'justify-self-center'}>
				<a title='Gitlab' alt='Gitlab Profile' href='https://gitlab.com/c42759' target='_blank' rel='noreferrer'>
					<AiFillGitlab size='1.5em' />
				</a>
			</div>

			{/* Linkedin */}
			<div className={'justify-self-center'}>
				<a title='Linkedin' alt='Lenkedin Profile' href='https://www.linkedin.com/in/carlos-santos-4abab492/' target='_blank' rel='noreferrer'>
					<AiFillLinkedin size='1.5em' />
				</a>
			</div>
		</div>
	);
}

export default SocialList;
