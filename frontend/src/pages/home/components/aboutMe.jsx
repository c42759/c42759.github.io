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

			<p className={'mb-10'}>
				Hello, My name is Carlos Santos, I’m {age} years old Software Engineer from the cozy streets of Aveiro. I being workin as a Software Developer
				since earlier 2012 and gaining experience in various positions.
			</p>

			<p className={'mb-5'}>
				<strong>Birthday:</strong> October 28, 1991
			</p>
			<p className={'mb-20'}>
				<strong>Location:</strong> Aveiro, portugal
			</p>

			<hr />
		</div>
	);
}

export default AboutMe;
