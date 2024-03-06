const apiKey = import.meta.env.VITE_APP_API_KEY;

export async function getWeatherData(lat = 18.6161, long = 73.7286) {
	try {
		const response = await fetch(
			`https:/api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2447de0670090697970ff43ca40faf98`,
		);
		const data = await response.json();
		if (response.ok) {
			console.log(data);
		} else throw new Error('An error occurred while fetching weather data');
	} catch (err) {
		console.error(err.message);
	}
}
