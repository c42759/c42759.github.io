import { React } from 'react';
import { AiFillGithub, AiFillGitlab, AiOutlineTwitter, AiFillSkype, AiFillLinkedin } from 'react-icons/ai';

function SocialList() {
	return (
		<div id='social' className='grid grid-cols-5 mb-20 lg:max-w-1/2 object-center mx-auto'>
			{/* Github */}
			<div className='justify-self-center'>
				<a title='Github' alt='Gitbub Profile' href='https://github.com/c42759' target='_blank' rel='noreferrer'>
					<AiFillGithub size='1.5em' />
				</a>
			</div>

			{/* Gitlab */}
			<div className='justify-self-center'>
				<a title='Gitlab' alt='Gitlab Profile' href='https://gitlab.com/c42759' target='_blank' rel='noreferrer'>
					<AiFillGitlab size='1.5em' />
				</a>
			</div>

			{/* Linkedin */}
			<div className='justify-self-center'>
				<a title='Linkedin' alt='Lenkedin Profile' href='https://www.linkedin.com/in/carlos-santos-4abab492/' target='_blank' rel='noreferrer'>
					<AiFillLinkedin size='1.5em' />
				</a>
			</div>

			{/* Twitter */}
			<div className='justify-self-center'>
				<a title='Twitter' alt='Twitter Profile' href='https://twitter.com/@c42759' target='_blank' rel='noreferrer'>
					<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<AiOutlineTwitter size='1.5em' />
					</svg>
				</a>
			</div>

			{/* Skype */}
			<div className='justify-self-center'>
				<a title='Skype' alt='Skype Call' href='skype:c42759' rel='noreferrer'>
					<AiFillSkype size='1.5em' />
				</a>
			</div>
		</div>
	);
}

export default SocialList;
