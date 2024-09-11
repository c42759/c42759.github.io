import { React, useState, useEffect } from 'react'

function AboutMe() {
	let [age, setAge] = useState(0)

	useEffect(() => {
		let d = new Date()
		let myAge = d.getFullYear() - 1991

		if (d.getMonth() < 10 || (d.getMonth() === 10 && d.getDate() <= 28)) {
			myAge -= 1
		}

		setAge(myAge)
	}, []);

	return (
		<div className={'mb-20'}>
			<h3 className={'uppercase text-pink-500 font-semibold mb-10'}>About Me</h3>

			<p className={'mb-2'}>
				Hello, my name is Carlos Santos, and I’m a {age} years old Software Engineer from the picturesque city of Aveiro. Since 2012, I’ve built a diverse career, gaining hands-on experience in various roles, from Full stack and backend development to project management and DevOps. My journey has taken me through multiple industries, including automotive, telecommunications, and analytics, where I’ve consistently delivered solutions that enhance productivity and drive technological advancements.
			</p>

			<p className={'mb-10'}>
				In my most recent roles, I’ve focused on designing and implementing complex software architectures, automating workflows, and leading teams to success. Whether it’s developing scalable platforms, optimizing CI/CD pipelines, or enhancing user experience with robust front-end solutions, I bring a strong commitment to excellence and innovation in every project I undertake.
			</p>

			<p className={'mb-20'}>
				<strong>Location:</strong> Aveiro, portugal
			</p>

			<hr />
		</div>
	);
}

export default AboutMe;
