import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      {/* Render Counter component and pass initial values */}
      <Counter initialCounter={0} incrementAmount={1} />

      {/* Additional content or components can be added here as needed */}
    </div>
  );
}

export default App;




