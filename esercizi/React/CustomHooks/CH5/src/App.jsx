// Example usage in a component
import React from 'react';
import useCurrentLocation from './useCurrentLocation';

const LocationComponent = () => {
  const { currentLocation, getCurrentLocation, error, loading } = useCurrentLocation();

  return (
    <div>
      <h1>Current Location</h1>

      {loading && <div>Loading...</div>}

      {error && <div>Error: {error}</div>}

      {currentLocation && (
        <div>
          <p>Latitude: {currentLocation.latitude}</p>
          <p>Longitude: {currentLocation.longitude}</p>
        </div>
      )}

      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
};

export default LocationComponent;


