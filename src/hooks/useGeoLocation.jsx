import { useState } from 'react';

export default function useGeoLocation() {
	const [position, setPosition] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	function getPosition() {
		if (!navigator.geolocation)
			return setError('Your browser does not support geolocation');

		setIsLoading(true);
		navigator.geolocation.getCurrentPosition(
			pos => {
				setPosition({
					lat: pos.coords.latitude,
					long: pos.coords.longitude,
				});
				setIsLoading(false);
			},
			err => {
				setError(err.message);
				setIsLoading(false);
			},
		);
	}

	return { getPosition, isLoading, error, position };
}
