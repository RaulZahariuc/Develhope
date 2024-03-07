import React from 'react';
import Hello from './Hello';
 /* 
What happens when we use the Hello component multiple times: for each instance of the Hello component will be rendered in different instances.
*/

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;

