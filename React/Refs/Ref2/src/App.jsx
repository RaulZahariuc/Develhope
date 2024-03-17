import React, { useEffect, useRef } from 'react';

function MountMessage() {
  const isMountedRef = useRef(false);

  useEffect(() => {
  
    if (!isMountedRef.current) {
      console.log('Component mounted for the first time.');
      isMountedRef.current = true;
    }

   
    return () => {
      console.log('Component unmounted.');
    };
  }, []);

  return <div>Mount Message Component</div>;
}

function App() {
  return (
    <React.StrictMode>
      <MountMessage />
    </React.StrictMode>
  );
}

export default App;
