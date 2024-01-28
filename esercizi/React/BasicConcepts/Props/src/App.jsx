import React from 'react';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      {/* Render Welcome component with name and age props */}
      <Welcome name="John" age={25} />

      {/* 
        What happens if no name and age props are passed:
        The Welcome component will use the default values ('Guest' for name and null for age).
      */}
      
      {/* Render Welcome component without name and age props */}
      <Welcome />

      {/* Additional content or components can be added here as needed */}
    </div>
  );
}

export default App;



