import React from 'react';

function AlertClock({ onButtonClick }) {
  const handleClick = () => {
    // Get the current time
    const currentTime = new Date().toLocaleTimeString();

    // Call the event handler with the current time
    onButtonClick(currentTime);
  };

  return (
    <button onClick={handleClick}>
      Show Current Time
    </button>
  );
}

export default AlertClock;
