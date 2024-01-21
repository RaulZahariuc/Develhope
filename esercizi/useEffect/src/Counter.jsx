import React, { useState, useEffect } from 'react';

function Counter({ initialCounter, incrementAmount }) {
 
  const [counter, setCounter] = useState(initialCounter);


  useEffect(() => {
    console.log(`Current Counter Value: ${counter}`);
  }, [counter]); 


  const handleIncrement = () => {

    setCounter((prevCounter) => prevCounter + incrementAmount);
  };

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;

