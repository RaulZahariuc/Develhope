import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      (err) => {
        setError(err.message);
      },
      { enableHighAccuracy: true }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []); 

  return {
    currentLocation,
    getCurrentLocation,
    error,
    loading,
  };
};

export default useCurrentLocation;

