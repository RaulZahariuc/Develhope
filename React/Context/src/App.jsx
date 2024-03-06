import React, { useState } from 'react';
import LanguageContext from './LanguageContext';
import Clock from './Clock';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); 

  return (
    <div>
      <h1>Select Language:</h1>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="it">Italian</option>
      </select>

     
      <LanguageContext.Provider value={selectedLanguage}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;