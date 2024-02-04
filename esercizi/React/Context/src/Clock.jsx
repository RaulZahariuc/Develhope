
import React, { useContext, useState, useEffect } from 'react';
import LanguageContext from './LanguageContext';

const Clock = () => {
  const language = useContext(LanguageContext);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getCurrentTimeMessage = () => {
    switch (language) {
      case 'es':
        return 'La hora actual es:';
      case 'it':
        return 'L' + "'" + 'orario attuale è:';
      default:
        return 'Current time is:';
    }
  };

  return (
    <div>
      <h2>{getCurrentTimeMessage()}</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
