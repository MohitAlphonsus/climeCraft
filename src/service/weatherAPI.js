const apiKey = import.meta.env.VITE_APP_API_KEY;

export async function getWeatherData(lat, long) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`,
	);
	const data = await response.json();
	console.log(data);
}
