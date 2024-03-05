import useGeoLocation from './hooks/useGeoLocation';
import { getWeatherData } from './service/weatherAPI';

function App() {
	const { getPosition, isLoading, error, position } = useGeoLocation();

	return <>App</>;
}

export default App;
