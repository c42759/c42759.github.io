import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { GoLocation } from 'react-icons/go';
import { WiRaindrop, WiStrongWind, WiBarometer } from 'react-icons/wi';

function Weather() {
	const api_key = '__API_KEY_HERE__';
	const cityName = 'Aveiro';
	const stateCode = 'AV';
	const countryCode = 'PT';

	const [payload, setPayload] = useState();
	const [icon, setIcon] = useState('01d');
	const [temperature, setTemperature] = useState(0);
	const [humidity, setHumidity] = useState(0);
	const [wind, setWind] = useState(0);
	const [pressure, setPressure] = useState(0);

	var params = {
		units: 'metric',
		q: `${cityName},${stateCode},${countryCode}`,
		APPID: api_key,
	};

	useEffect(() => {

		if (localStorage.getItem('openweathermap') === null) {
			console.log('From API...');
			const r = axios.get(`https://api.openweathermap.org/data/2.5/weather`, { params });

			localStorage.setItem('openweathermap', JSON.stringify(r.data));

			setPayload(r.data);
		}
		setPayload(JSON.parse(localStorage.getItem('openweathermap')));

		console.log(payload)

		setIcon(payload.weather['0'].icon);

		setTemperature(payload.main.temp);

		setHumidity(payload.main.humidity);
		setPressure(payload.main.pressure);
		setWind(parseInt(payload.wind.speed));
	}, [params]);

	return (
		<section className='App w-full h-screen bg-gray-700 flex items-center'>
			<div
				className='mx-auto bg-cover text-white bg-gradient-to-b from-green-400 via-blue-500 to-indigo-500'
				style={{
					width: '360px',
					height: '640px',
				}}
			>
				<h1 className='text-center mt-20'>
					<GoLocation className='inline-block' /> {cityName}
				</h1>
				<div className='text-center font-black' style={{ fontSize: '5rem' }}>
					{parseInt(temperature)}ºC
				</div>

				<img className='mx-auto mb-10 filter filter-grayscale' src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt='open api weather icon' />

				<div className='max-w-3/4 mx-auto grid grid-cols-3'>
					<div>
						<WiBarometer className='inline-block' size='20' /> {pressure}
					</div>
					<div>
						<WiRaindrop className='inline-block' size='20' /> {humidity}%
					</div>
					<div>
						<WiStrongWind className='inline-block' size='20' /> {wind} m/s
					</div>
				</div>
			</div>
		</section>
	);
}

export default Weather;
