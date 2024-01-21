import React from 'react';
import AlertClock from './AlertClock';

function App() {
  // Event handler to show an alert with the current time
  const handleButtonClick = (currentTime) => {
    alert(`Current Time: ${currentTime}`);
  };

  return (
    <div>
      {/* Render AlertClock component and pass the event handler */}
      <AlertClock onButtonClick={handleButtonClick} />

      {/* Additional content or components can be added here as needed */}
    </div>
  );
}

export default App;



